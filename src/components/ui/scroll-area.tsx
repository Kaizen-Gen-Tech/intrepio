"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "~/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    verticalScrollbarClassName?: string;
    horizontalScrollbarClassName?: string;
  }
>(
  (
    {
      className,
      verticalScrollbarClassName,
      horizontalScrollbarClassName,
      children,
      ...props
    },
    ref,
  ) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("group size-full overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="size-full group-has-[[data-scrollbar][data-orientation=horizontal]]:pb-4 group-has-[[data-scrollbar][data-orientation=vertical]]:pr-4">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <Scrollbar
        orientation="vertical"
        className={cn("w-3.5", verticalScrollbarClassName)}
      />

      <Scrollbar
        orientation="horizontal"
        className={cn("h-3.5 flex-col", horizontalScrollbarClassName)}
      />

      <ScrollAreaPrimitive.Corner className="z-10 bg-muted-10 outline outline-2 outline-muted-10" />
    </ScrollAreaPrimitive.Root>
  ),
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

function Scrollbar({
  className,
  children: _children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-scrollbar
      className={cn(
        "flex touch-none select-none bg-muted-5 outline outline-2 outline-muted-10",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-primary-9 outline outline-2 outline-muted-10" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea };
