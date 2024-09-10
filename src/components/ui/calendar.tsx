"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "ghost", size: "sm", icon: true }),
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-11 w-10 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "size-10 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-primary-3 [&:has([aria-selected])]:bg-primary-3 focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({
            variant: "ghost",
            size: "sm",
            border: false,
            icon: true,
          }),
          "size-9 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-primary-5 text-primary-11",
        day_today: "bg-accent-3 text-accent-11",
        day_outside:
          "day-outside text-muted-11 opacity-50 aria-selected:bg-primary-5/50 aria-selected:text-muted-11 aria-selected:opacity-30",
        day_disabled: "text-muted-11 opacity-50",
        day_range_middle:
          "aria-selected:bg-primary-3 aria-selected:text-primary-11",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <CaretLeft className="size-5" />,
        IconRight: ({ ..._props }) => <CaretRight className="size-5" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
