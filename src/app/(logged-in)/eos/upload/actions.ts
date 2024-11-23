"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

import { db, supa } from "~/server/db";
import { files, type Normalize, type UploadStatus } from "~/server/db/schema";

export async function getFiles() {
  const uploads = await db.select().from(files);
  const { data, error } = await supa.storage.from("upload").list();

  if (error) {
    return [];
  }

  return uploads.reduce(
    (acc, file) => {
      const blob = data?.find((blob) => blob.id === file.id);
      if (!blob) return acc;

      return [...acc, { ...file, ...blob }];
    },
    [] as ((typeof uploads)[number] & (typeof data)[number])[],
  );
}

export async function createFile(
  id: string,
  upscale: boolean,
  normalize: Normalize,
) {
  await db
    .insert(files)
    .values({ id, upscale, normalize, status: "Processing" });
  revalidatePath("/upload");
}

export async function updateStatus(id: string, status: UploadStatus) {
  await db.update(files).set({ status }).where(eq(files.id, id));
  revalidatePath("/upload");
}

export async function deleteFile(id: string, name: string) {
  await db.delete(files).where(eq(files.id, id));
  await supa.storage.from("upload").remove([name]);
  revalidatePath("/upload");
}
