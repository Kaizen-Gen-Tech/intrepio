"use client";

import { type ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { filesize } from "filesize";
import { toast } from "sonner";
import { Trash } from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";
import { Header, Cell } from "~/components/ui/data-table";
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
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => <Cell>{row.original.name}</Cell>,
    enableHiding: false,
  },
  {
    id: "Type",
    accessorKey: "metadata.mimetype",
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => <Cell>{row.original.metadata.mimetype}</Cell>,
  },
  {
    id: "Size",
    accessorKey: "metadata.size",
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => (
      <Cell>{filesize(row.original.metadata.size as number, { base: 2 })}</Cell>
    ),
  },
  {
    id: "Upscaled",
    accessorKey: "user_metadata.upscale",
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => <Cell>{row.original.upscale ? "Yes" : "No"}</Cell>,
  },
  {
    id: "Normalized",
    accessorKey: "user_metadata.normalize",
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => <Cell>{row.original.normalize}</Cell>,
  },
  {
    id: "Status",
    accessorKey: "user_metadata.status",
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => <Cell>{row.original.status}</Cell>,
  },
  {
    id: "Uploaded",
    accessorKey: "updated_at",
    header: ({ column }) => <Header column={column} />,
    cell: ({ row }) => {
      const inst = moment(row.original.updated_at);

      return (
        <Tooltip>
          <TooltipTrigger>
            <Cell className="cursor-help underline decoration-dotted underline-offset-4">
              {inst.fromNow()}
            </Cell>
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
          toast.promise(deleteFile(row.original.id, row.original.name), {
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
