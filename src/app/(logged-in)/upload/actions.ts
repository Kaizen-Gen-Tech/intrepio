"use server";

import { revalidatePath } from "next/cache";
import { supa } from "~/server/db";

export async function getFiles() {
  const { data } = await supa.storage.from("upload").list();
  return data ?? [];
}

export async function deleteFile(name: string) {
  await supa.storage.from("upload").remove([name]);
  revalidatePath("/upload");
}

export async function refreshFiles() {
  revalidatePath("/upload");
}
