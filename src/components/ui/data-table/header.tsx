"use client";

import { type Column } from "@tanstack/react-table";
import {
  CaretUp,
  CaretDown,
  CaretUpDown,
  NumberSquareOne,
  NumberSquareTwo,
  NumberSquareThree,
  NumberSquareFour,
  NumberSquareFive,
  NumberSquareSix,
  NumberSquareSeven,
  NumberSquareEight,
  NumberSquareNine,
} from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

export function Header<TData, TValue>({
  column,
  tone,
  className,
}: React.HTMLAttributes<HTMLDivElement> & {
  column: Column<TData, TValue>;
  tone?: Parameters<typeof Button>[0]["tone"];
}) {
  const canSort = column.getCanSort();
  const isSorted = column.getIsSorted();
  const sortIndex = column.getSortIndex();

  return (
    <div className="px-1 py-2">
      {canSort ? (
        <Button
          variant={isSorted ? "soft" : "ghost"}
          tone={tone}
          size="sm"
          className="w-full justify-between gap-2 px-2"
          onClick={column.getToggleSortingHandler()}
          border={false}
        >
          {column.id}

          <div className="flex items-center gap-1">
            {sortIndex === 0 ? (
              <NumberSquareOne weight="fill" className="size-5" />
            ) : sortIndex === 1 ? (
              <NumberSquareTwo weight="fill" className="size-5" />
            ) : sortIndex === 2 ? (
              <NumberSquareThree weight="fill" className="size-5" />
            ) : sortIndex === 3 ? (
              <NumberSquareFour weight="fill" className="size-5" />
            ) : sortIndex === 4 ? (
              <NumberSquareFive weight="fill" className="size-5" />
            ) : sortIndex === 5 ? (
              <NumberSquareSix weight="fill" className="size-5" />
            ) : sortIndex === 6 ? (
              <NumberSquareSeven weight="fill" className="size-5" />
            ) : sortIndex === 7 ? (
              <NumberSquareEight weight="fill" className="size-5" />
            ) : sortIndex === 8 ? (
              <NumberSquareNine weight="fill" className="size-5" />
            ) : null}

            {isSorted === "asc" ? (
              <CaretUp weight="fill" className="size-4" />
            ) : isSorted === "desc" ? (
              <CaretDown weight="fill" className="size-4" />
            ) : (
              <CaretUpDown weight="fill" className="size-5" />
            )}
          </div>
        </Button>
      ) : (
        <div
          className={cn(
            "inline-flex h-8 w-full items-center justify-between gap-2 whitespace-nowrap border-2 border-transparent px-2 py-1 text-sm font-medium",
            className,
          )}
        >
          {column.id}
        </div>
      )}
    </div>
  );
}
