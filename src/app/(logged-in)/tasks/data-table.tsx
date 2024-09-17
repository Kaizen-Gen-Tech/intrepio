"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Funnel,
  X,
  EyeSlash,
  CaretLeft,
  CaretRight,
  CaretDoubleLeft,
  CaretDoubleRight,
} from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { FacetedFilter } from "~/components/ui/data-table/faceted-filter";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
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
import { PageWithHeader } from "~/components/page-with-header";

import { priorities, statuses } from "~/server/db/tasks";

export function DataTable<TData, TValue>({
  columns,
  data,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <PageWithHeader
      headerChildren={
        <>
          <h1 className="text-2xl font-semibold">Tasks</h1>

          <div className="relative hidden md:block">
            <Funnel className="absolute left-2.5 top-2.5 size-5" />

            <Input
              placeholder="Filter..."
              className={cn(
                "pl-9",
                ((table.getColumn("title")?.getFilterValue() as string) ?? "")
                  .length > 0 && "bg-primary-3",
              )}
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
            />
          </div>
        </>
      }
    >
      <div className="flex size-full flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            {table.getColumn("status") && (
              <FacetedFilter
                column={table.getColumn("status")}
                title="Status"
                options={statuses}
              />
            )}

            {table.getColumn("priority") && (
              <FacetedFilter
                column={table.getColumn("priority")}
                title="Priority"
                options={priorities}
              />
            )}

            {table.getState().columnFilters.length > 0 && (
              <Button
                variant="soft"
                tone="destructive"
                size="sm"
                onClick={() => table.resetColumnFilters()}
                className="gap-1.5 pl-2 pr-1"
              >
                Clear filters
                <X size="100%" />
              </Button>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 bg-muted-1 data-[state=open]:bg-primary-5"
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
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide(),
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-full flex-1 overflow-hidden border-2 shadow-lg">
          <ScrollArea
            className="bg-muted-1"
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

              {table.getRowModel().rows?.length > 0 ? (
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
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
                </TableBody>
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
            </Table>
          </ScrollArea>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
          <div className="shrink-0 text-sm text-muted-11">
            <span className="text-muted-12">
              {table.getFilteredSelectedRowModel().rows.length}
            </span>
            <span> of </span>
            <span className="text-muted-12">
              {table.getFilteredRowModel().rows.length}
            </span>
            <span> row(s) selected</span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
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

            <span className="text-sm text-muted-11">
              <span>Page </span>
              <span className="text-muted-12">
                {table.getState().pagination.pageIndex + 1}
              </span>
              <span> of </span>
              <span className="text-muted-12">{table.getPageCount()}</span>
            </span>
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="text-nowrap text-sm text-muted-11">
              Rows per page
            </div>

            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>

              <SelectContent side="top" align="end">
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
    </PageWithHeader>
  );
}
