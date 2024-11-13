"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "~/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(
      "group size-full overflow-hidden [&:has([data-orientation=horizontal])]:pb-4 [&:has([data-orientation=vertical])]:pr-4",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>

    <ScrollAreaScrollbar orientation="horizontal" />
    <ScrollAreaScrollbar orientation="vertical" />
    <ScrollAreaPrimitive.Corner className="z-10 bg-muted-1 outline outline-2 outline-muted-10" />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & {
    thumbClassName?: string;
  }
>(
  (
    { orientation = "vertical", thumbClassName, className, children, ...props },
    ref,
  ) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "z-10 flex touch-none select-none bg-muted-5 outline outline-2 outline-muted-10",
        orientation === "horizontal" &&
          "h-4 flex-col group-[&:not(:has([data-orientation=vertical]))]:!right-0",
        orientation === "vertical" &&
          "w-4 flex-row group-[&:not(:has([data-orientation=horizontal]))]:!bottom-0",
        className,
      )}
      {...props}
    >
      {children}
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={cn(
          "relative flex-1 bg-primary-9 outline outline-2 outline-muted-10",
          thumbClassName,
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  ),
);
ScrollAreaScrollbar.displayName =
  ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea };
