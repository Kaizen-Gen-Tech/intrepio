"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "@phosphor-icons/react";

import { cn } from "~/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "disabled:disabled focus-visible:focused peer relative size-5 shrink-0 border-2 bg-muted-1 data-[state=checked]:bg-primary-9 data-[state=indeterminate]:bg-muted-5 data-[state=checked]:text-black data-[state=indeterminate]:text-muted-12",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="group">
      <Check
        weight="bold"
        size="100%"
        className="invisible absolute inset-0 group-data-[state=checked]:visible"
      />
      <Minus
        weight="bold"
        size="100%"
        className="invisible absolute inset-0 group-data-[state=indeterminate]:visible"
      />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
