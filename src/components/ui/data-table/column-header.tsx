import {
  CaretDown,
  CaretUp,
  CaretUpDown,
  NumberSquareEight,
  NumberSquareFive,
  NumberSquareFour,
  NumberSquareNine,
  NumberSquareOne,
  NumberSquareSeven,
  NumberSquareSix,
  NumberSquareThree,
  NumberSquareTwo,
} from "@phosphor-icons/react/dist/ssr";
import { type Column } from "@tanstack/react-table";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: ColumnHeaderProps<TData, TValue>) {
  const canSort = column.getCanSort();
  const isSorted = column.getIsSorted();
  const sortIndex = column.getSortIndex();

  if (!canSort) {
    return <div className={cn("p-2", className)}>{title}</div>;
  }

  return (
    <Button
      variant={isSorted ? "soft" : "ghost"}
      size="sm"
      className="w-full justify-between gap-2 px-2"
      onClick={column.getToggleSortingHandler()}
      border={false}
    >
      {title}

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

        {isSorted === "desc" ? (
          <CaretDown weight="fill" className="size-4" />
        ) : isSorted === "asc" ? (
          <CaretUp weight="fill" className="size-4" />
        ) : (
          <CaretUpDown weight="fill" className="size-5" />
        )}
      </div>
    </Button>
  );
}
