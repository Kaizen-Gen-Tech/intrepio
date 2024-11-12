"use client";

import * as React from "react";
import { createClient } from "@supabase/supabase-js";
import Dropzone from "react-dropzone";
import { toast } from "sonner";
import { CloudArrowUp } from "@phosphor-icons/react/dist/ssr";

import { env } from "~/env";
import { cn } from "~/lib/utils";
import { normalizeOptions } from "~/lib/enums";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";

import { refreshFiles } from "./actions";

export function Config() {
  const [disabled, setDisabled] = React.useState(false);
  const [filesToUpload, setFilesToUpload] = React.useState<File[]>([]);
  const [upscale, setUpscale] = React.useState(false);
  const [normalize, setNormalize] = React.useState(normalizeOptions[0]!.value);

  async function upload() {
    setDisabled(true);

    const db = createClient(
      env.NEXT_PUBLIC_SUPABASE_URL,
      env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    let anyError = false;
    let toastId = undefined;
    for (const file of filesToUpload) {
      toastId = toast.loading(`Uploading ${file.name}...`, {
        id: toastId,
      });

      const { error } = await db.storage
        .from("upload")
        .upload(file.name, file, {
          cacheControl: "0",
          metadata: {
            upscale,
            normalize,
          },
        });

      if (error) {
        anyError = true;
        toast.error(error.message, {
          id: toastId,
        });
      } else {
        void refreshFiles();
      }
    }

    if (!anyError) {
      toast.dismiss(toastId);
    }

    setFilesToUpload([]);
    setDisabled(false);
  }

  return (
    <form className="flex size-full flex-col gap-4">
      <Upload />

      <Card className="@container/config">
        <CardHeader className="py-2">
          <CardTitle className="text-base font-medium">
            <legend>Configuration</legend>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 @md/config:flex-row">
          <div className="flex flex-1 flex-col-reverse gap-2">
            <Switch
              id="upscale"
              aria-label="Upscale data"
              checked={upscale}
              onCheckedChange={(value) => setUpscale(value)}
              disabled={disabled}
              className="my-auto"
            />

            <Label htmlFor="upscale">Upscale data</Label>
          </div>

          <div className="flex flex-1 flex-col-reverse gap-2">
            <Select
              value={normalize}
              onValueChange={(value) => setNormalize(value)}
              disabled={disabled}
            >
              <SelectTrigger id="normalize">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {normalizeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Label htmlFor="normalize">Normalize data</Label>
          </div>
        </CardContent>
      </Card>

      <Button
        className="self-end"
        disabled={disabled || filesToUpload.length === 0}
        onClick={upload}
      >
        Upload
      </Button>
    </form>
  );

  function Upload() {
    const [isDraggingOver, setDraggingOver] = React.useState(false);

    return (
      <Dropzone
        accept={{
          "text/csv": [],
        }}
        disabled={disabled}
        onDragEnter={() => setDraggingOver(true)}
        onDragLeave={() => setDraggingOver(false)}
        onDrop={async (acceptedFiles, rejectedFiles) => {
          setDraggingOver(false);

          if (rejectedFiles.length > 0) {
            toast.warning("Invalid file type", {
              description: "Please upload only .csv files",
            });
            return;
          }

          setFilesToUpload(acceptedFiles);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: cn(
                "group flex h-64 w-full cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed bg-muted-1 p-6 shadow-lg transition-colors",
                disabled
                  ? "cursor-not-allowed opacity-50"
                  : isDraggingOver
                    ? "border-muted-12 bg-muted-3"
                    : "hover:border-muted-12 hover:bg-muted-3",
              ),
            })}
          >
            <Input {...getInputProps()} />

            <CloudArrowUp
              weight="duotone"
              className={cn(
                "size-16 text-primary-11 first:*:text-primary-3 first:*:opacity-100 first:*:transition-colors",
                disabled
                  ? ""
                  : isDraggingOver
                    ? "first:*:text-primary-5"
                    : "group-hover:first:*:text-primary-5",
              )}
            />

            <span className="text-center font-medium outline-none xl:text-lg">
              Drag and drop files or click here to select
            </span>

            <div className="text-xs text-muted-10 xl:text-sm">
              .csv files only
            </div>

            <div
              className={cn(
                "text-xs xl:text-sm",
                filesToUpload.length === 0 && "invisible",
              )}
            >
              Files selected: {filesToUpload.length}
            </div>
          </div>
        )}
      </Dropzone>
    );
  }
}
