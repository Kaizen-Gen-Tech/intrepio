"use client";

import * as React from "react";
import {
  type ColumnDef,
  type PaginationState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  EyeSlash,
  CaretLeft,
  CaretRight,
  CaretDoubleLeft,
  CaretDoubleRight,
} from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function DataTable<TData, TValue>({
  columns,
  data,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({ ID: false });
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "Uploaded", desc: true },
  ]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      sorting,
      pagination,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex size-full flex-col gap-4 @container/table">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 self-end bg-muted-1 data-[state=open]:bg-primary-5"
          >
            <EyeSlash size="100%" />
            Show/hide
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide(),
            )
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={column.toggleVisibility}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>

      <ScrollArea
        className="flex-1 border-2 bg-muted-1 shadow-lg"
        type="auto"
        key={JSON.stringify(table.getState())}
      >
        <Table
          className={cn(table.getRowModel().rows?.length === 0 && "h-full")}
        >
          <TableHeader className="sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-1 py-2"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length > 0 ? (
              <>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="px-1 py-2">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center text-lg text-muted-10"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      <div className="grid items-center justify-items-center gap-4 @xl/table:grid-cols-3">
        <div className="text-sm text-muted-11 @xl/table:justify-self-start">
          <span>Page </span>
          <span className="text-muted-12">
            {table.getState().pagination.pageIndex + 1}
          </span>
          <span> of </span>
          <span className="text-muted-12">
            {Math.max(1, table.getPageCount())}
          </span>
        </div>

        <div className="flex gap-2 @xl/table:justify-self-center">
          <Button
            variant="ghost"
            size="sm"
            icon
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="bg-muted-1"
          >
            <CaretDoubleLeft size="100%" />
            <span className="sr-only">Go to first page</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            icon
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="bg-muted-1"
          >
            <CaretLeft size="100%" />
            <span className="sr-only">Go to previous page</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            icon
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="bg-muted-1"
          >
            <CaretRight size="100%" />
            <span className="sr-only">Go to next page</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            icon
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="bg-muted-1"
          >
            <CaretDoubleRight size="100%" />
            <span className="sr-only">Go to last page</span>
          </Button>
        </div>

        <div className="flex items-center gap-2 @xl/table:justify-self-end">
          <Label htmlFor="pageSize" className="text-nowrap">
            Rows per page
          </Label>

          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger id="pageSize">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>

            <SelectContent side="top">
              <SelectGroup>
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
