import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "focusable inline-flex items-center justify-center whitespace-nowrap border-2 font-medium disabled:pointer-events-none disabled:opacity-50 disabled:saturate-50",
  {
    variants: {
      variant: {
        solid:
          "active:brightness-90 active:saturate-110 dark:active:brightness-110 dark:active:saturate-100",
        soft: "",
        ghost: "",
      },
      tone: {
        primary: "",
        secondary: "",
        accent: "",
        muted: "",
        destructive: "",
      },
      border: {
        true: "",
        false: "border-transparent",
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm hover:shadow-sm",
        md: "h-10 px-4 py-1.5 text-base hover:shadow-md",
        lg: "h-12 px-6 py-2 text-lg hover:shadow-lg",
      },
      icon: {
        true: "aspect-square shrink-0",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        tone: "primary",
        className:
          "bg-primary-9 fill-muted-12 text-muted-12 hover:bg-primary-10 hover:shadow-primary-11 dark:fill-muted-1 dark:text-muted-1 dark:hover:shadow-primary-12",
      },
      {
        variant: "soft",
        tone: "primary",
        className:
          "bg-primary-3 fill-primary-11 text-primary-11 hover:bg-primary-4 active:bg-primary-5",
      },
      {
        variant: "ghost",
        tone: "primary",
        className:
          "fill-primary-11 text-primary-11 hover:bg-primary-3 active:bg-primary-4",
      },
      {
        variant: "solid",
        tone: "secondary",
        className:
          "bg-secondary-9 fill-muted-12 text-muted-12 hover:bg-secondary-10 hover:shadow-secondary-11 dark:fill-muted-1 dark:text-muted-1 dark:hover:shadow-secondary-12",
      },
      {
        variant: "soft",
        tone: "secondary",
        className:
          "bg-secondary-3 fill-secondary-11 text-secondary-11 hover:bg-secondary-4 active:bg-secondary-5",
      },
      {
        variant: "ghost",
        tone: "secondary",
        className:
          "fill-secondary-11 text-secondary-11 hover:bg-secondary-3 active:bg-secondary-4",
      },
      {
        variant: "solid",
        tone: "accent",
        className:
          "bg-accent-9 fill-muted-12 text-muted-12 hover:bg-accent-10 hover:shadow-accent-11 dark:fill-muted-1 dark:text-muted-1 dark:hover:shadow-accent-12",
      },
      {
        variant: "soft",
        tone: "accent",
        className:
          "bg-accent-3 fill-accent-11 text-accent-11 hover:bg-accent-4 active:bg-accent-5",
      },
      {
        variant: "ghost",
        tone: "accent",
        className:
          "fill-accent-11 text-accent-11 hover:bg-accent-3 active:bg-accent-4",
      },
      {
        variant: "solid",
        tone: "muted",
        className:
          "bg-muted-9 fill-white text-white hover:bg-muted-10 hover:shadow-muted-12",
      },
      {
        variant: "soft",
        tone: "muted",
        className:
          "bg-muted-3 fill-muted-11 text-muted-11 hover:bg-muted-4 active:bg-muted-5",
      },
      {
        variant: "ghost",
        tone: "muted",
        className:
          "fill-muted-11 text-muted-11 hover:bg-muted-3 active:bg-muted-4",
      },
      {
        variant: "solid",
        tone: "destructive",
        className:
          "bg-destructive-9 fill-white text-white hover:bg-destructive-10 hover:shadow-destructive-12",
      },
      {
        variant: "soft",
        tone: "destructive",
        className:
          "bg-destructive-3 fill-destructive-11 text-destructive-11 hover:bg-destructive-4 active:bg-destructive-5",
      },
      {
        variant: "ghost",
        tone: "destructive",
        className:
          "fill-destructive-11 text-destructive-11 hover:bg-destructive-3 active:bg-destructive-4",
      },

      {
        tone: "primary",
        border: true,
        className: "border-primary-7 hover:border-primary-8",
      },
      {
        tone: "secondary",
        border: true,
        className: "border-secondary-7 hover:border-secondary-8",
      },
      {
        tone: "accent",
        border: true,
        className: "border-accent-7 hover:border-accent-8",
      },
      {
        tone: "muted",
        border: true,
        className: "border-muted-7 hover:border-muted-8",
      },
      {
        tone: "destructive",
        border: true,
        className: "border-destructive-7 hover:border-destructive-8",
      },

      {
        size: "sm",
        icon: true,
        className: "p-1",
      },
      {
        size: "md",
        icon: true,
        className: "p-1.5",
      },
      {
        size: "lg",
        icon: true,
        className: "p-2",
      },
    ],
    defaultVariants: {
      variant: "solid",
      tone: "primary",
      size: "md",
      border: true,
      icon: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, tone, size, border, icon, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, tone, size, border, icon, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
