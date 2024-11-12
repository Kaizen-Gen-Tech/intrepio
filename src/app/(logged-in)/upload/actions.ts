"use server";

import { revalidatePath } from "next/cache";

import type { normalizeOptions } from "~/lib/enums";
import { supa } from "~/server/db";

export async function getFiles() {
  //const { data } = await supa.storage.from("upload").list();

  const { data } = await supa
    .schema("storage")
    .from("objects")
    .select()
    .eq("bucket_id", "upload");

  return (data ?? []) as {
    id: string;
    name: string;
    updated_at: string;
    metadata: {
      size: number;
      mimetype: string;
    };
    user_metadata: {
      upscale: boolean;
      normalize: (typeof normalizeOptions)[number]["value"];
    };
  }[];
}

export async function deleteFile(name: string) {
  await supa.storage.from("upload").remove([name]);
  revalidatePath("/upload");
}

export async function refreshFiles() {
  revalidatePath("/upload");
}
