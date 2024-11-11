"use client";

import { toast } from "sonner";

import { deleteFile, type getFiles } from "./actions";

export function File({
  file,
}: {
  file: Awaited<ReturnType<typeof getFiles>>[number];
}) {
  return (
    <div
      onClick={() => {
        toast.promise(deleteFile(file.name), {
          loading: `Deleting ${file.name}...`,
        });
      }}
    >
      {file.name}: {file.created_at}
    </div>
  );
}
