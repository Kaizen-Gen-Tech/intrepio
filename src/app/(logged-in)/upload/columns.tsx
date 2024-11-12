"use client";

import { type ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { filesize } from "filesize";
import { toast } from "sonner";
import { Trash } from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";
import { ColumnHeader } from "~/components/ui/data-table/column-header";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "~/components/ui/tooltip";

import { deleteFile, type getFiles } from "./actions";

export const columns: ColumnDef<
  Awaited<ReturnType<typeof getFiles>>[number]
>[] = [
  {
    id: "ID",
    accessorKey: "id",
    enableHiding: false,
  },
  {
    id: "Name",
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ getValue }) => (
      <span className="text-nowrap p-2">{getValue() as string}</span>
    ),
    enableHiding: false,
  },
  {
    id: "Type",
    accessorKey: "metadata.mimetype",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ getValue }) => (
      <span className="text-nowrap p-2">{getValue() as string}</span>
    ),
  },
  {
    id: "Size",
    accessorKey: "metadata.size",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ getValue }) => (
      <span className="text-nowrap p-2">
        {filesize(getValue() as number, { base: 2 })}
      </span>
    ),
  },
  {
    id: "Uploaded",
    accessorKey: "updated_at",
    header: ({ column }) => <ColumnHeader column={column} />,
    cell: ({ getValue }) => {
      const inst = moment(getValue() as string);
      return (
        <Tooltip>
          <TooltipTrigger className="cursor-help text-nowrap p-2 underline decoration-dotted underline-offset-4">
            {inst.fromNow()}
          </TooltipTrigger>
          <TooltipContent>{inst.format("LLL")}</TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => (
      <Button
        variant="ghost"
        tone="destructive"
        size="sm"
        icon
        onClick={() => {
          toast.promise(deleteFile(row.original.name), {
            loading: `Deleting ${row.original.name}...`,
          });
        }}
      >
        <Trash className="size-5" />
        <span className="sr-only">Delete</span>
      </Button>
    ),
  },
];
