import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "focus-visible:focused inline-flex items-center border-2 border-current px-2.5 py-0.5 text-xs font-semibold transition hover:shadow-sm",
  {
    variants: {
      variant: {
        primary: "bg-primary-3 text-primary-11 hover:bg-primary-4",
        secondary: "bg-secondary-3 text-secondary-11 hover:bg-secondary-4",
        accent: "bg-accent-3 text-accent-11 hover:bg-accent-4",
        muted: "bg-muted-3 text-muted-11 hover:bg-muted-4",
        destructive:
          "bg-destructive-3 text-destructive-11 hover:bg-destructive-4",
      },
      border: {
        true: "",
        false: "border-transparent",
      },
      interactive: {
        true: "",
        false: "pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      border: true,
      interactive: true,
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  border,
  interactive,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, border, interactive }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
