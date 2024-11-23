"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
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
import {
  age_enum,
  gender_enum,
  race_enum,
  weight_enum,
} from "~/server/db/schema";
import { Button } from "~/components/ui/button";
import { FacetedFilter } from "~/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
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
  TableHeadRow,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { PageWithHeader } from "~/components/page-with-header";

export function DataTable<TData extends { synthetic: boolean }, TValue>({
  columns,
  data,
}: {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      ID: false,
    });
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 50,
  });

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      sorting,
      columnFilters,
      globalFilter,
      pagination,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <PageWithHeader
      headerChildren={
        <>
          <h1 className="text-2xl font-semibold text-accent-11">EOS Explore</h1>

          <div className="relative hidden md:block">
            <Funnel className="absolute left-2.5 top-2.5 size-5" />

            <Input
              placeholder="Filter..."
              className={cn("pl-9", globalFilter.length > 0 && "bg-primary-3")}
              value={globalFilter}
              onChange={(event) => table.setGlobalFilter(event.target.value)}
            />
          </div>
        </>
      }
    >
      <main className="flex size-full flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <FacetedFilter
              column={table.getColumn("Race")}
              options={race_enum.enumValues.map((e) => ({
                value: e,
                label: e,
              }))}
            />
            <FacetedFilter
              column={table.getColumn("Gender")}
              options={gender_enum.enumValues.map((e) => ({
                value: e,
                label: e,
              }))}
            />
            <FacetedFilter
              column={table.getColumn("Age")}
              options={age_enum.enumValues.map((e) => ({
                value: e,
                label: e,
              }))}
            />
            <FacetedFilter
              column={table.getColumn("Weight")}
              options={weight_enum.enumValues.map((e) => ({
                value: e,
                label: e,
              }))}
            />
            <FacetedFilter column={table.getColumn("Admission Type")} />
            <FacetedFilter column={table.getColumn("Discharge Disposition")} />
            <FacetedFilter column={table.getColumn("Admission Source")} />

            {(globalFilter.length > 0 || columnFilters.length > 0) && (
              <Button
                variant="soft"
                tone="destructive"
                size="sm"
                onClick={() => {
                  table.resetColumnFilters();
                  table.setGlobalFilter("");
                }}
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
                      checked={column.getIsVisible()}
                      onCheckedChange={column.toggleVisibility}
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ScrollArea
          type="auto"
          className="flex-1 border-2 bg-muted-1 shadow-lg"
          verticalScrollbarClassName="mt-12"
        >
          <Table
            className={cn(table.getRowModel().rows?.length === 0 && "h-full")}
          >
            <TableHeader className="sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHeadRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableHeadRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows?.length > 0 ? (
                <>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
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

        <div className="grid items-center justify-items-center gap-4 md:grid-cols-3">
          <div className="text-sm text-muted-11 md:justify-self-start">
            <span>Rows </span>
            <span className="text-muted-12">
              {pagination.pageIndex * pagination.pageSize + 1}
            </span>
            <span> - </span>
            <span className="text-muted-12">
              {pagination.pageIndex * pagination.pageSize +
                table.getRowModel().rows.length}
            </span>
            <span> of </span>
            <span className="text-muted-12">
              {data.filter((r) => !r.synthetic).length}
            </span>
            <span className="text-accent-11"> + </span>
            <span className="text-accent-11">
              {data.filter((r) => r.synthetic).length}
            </span>
            <span> (page </span>
            <span className="text-muted-12">{pagination.pageIndex + 1}</span>
            <span> of </span>
            <span className="text-muted-12">
              {Math.max(1, table.getPageCount())}
            </span>
            <span>)</span>
          </div>

          <div className="flex gap-2 md:justify-self-center">
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

          <div className="flex items-center gap-2 md:justify-self-end">
            <Label htmlFor="pageSize" className="text-nowrap">
              Rows per page
            </Label>

            <Select
              value={`${pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger id="pageSize">
                <SelectValue placeholder={pagination.pageSize} />
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
      </main>
    </PageWithHeader>
  );
}
