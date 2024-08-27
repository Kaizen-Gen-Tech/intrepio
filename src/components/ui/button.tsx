import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "focusable inline-flex items-center justify-center whitespace-nowrap font-medium transition disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "dark:active:saturate-1 active:brightness-[0.92] active:saturate-[1.1] dark:active:brightness-[1.08]",
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
      outline: {
        true: "border-2",
        false: "",
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
          "hover:bg-primary-10 bg-primary-9 fill-muted-12 text-muted-12 dark:text-muted-1 dark:fill-muted-1 hover:shadow-primary-11 dark:hover:shadow-primary-12",
      },
      {
        variant: "soft",
        tone: "primary",
        className:
          "hover:bg-primary-4 bg-primary-3 active:bg-primary-5 fill-primary-11 text-primary-11",
      },
      {
        variant: "ghost",
        tone: "primary",
        className:
          "hover:bg-primary-3 active:bg-primary-4 fill-primary-11 text-primary-11",
      },
      {
        variant: "solid",
        tone: "secondary",
        className:
          "hover:bg-secondary-10 bg-secondary-9 fill-muted-12 text-muted-12 dark:text-muted-1 dark:fill-muted-1 hover:shadow-secondary-11 dark:hover:shadow-secondary-12",
      },
      {
        variant: "soft",
        tone: "secondary",
        className:
          "hover:bg-secondary-4 bg-secondary-3 active:bg-secondary-5 fill-secondary-11 text-secondary-11",
      },
      {
        variant: "ghost",
        tone: "secondary",
        className:
          "hover:bg-secondary-3 active:bg-secondary-4 fill-secondary-11 text-secondary-11",
      },
      {
        variant: "solid",
        tone: "accent",
        className:
          "hover:bg-accent-10 bg-accent-9 fill-muted-12 text-muted-12 hover:shadow-accent-11 dark:text-muted-1 dark:fill-muted-1 dark:hover:shadow-accent-12",
      },
      {
        variant: "soft",
        tone: "accent",
        className:
          "hover:bg-accent-4 bg-accent-3 active:bg-accent-5 fill-accent-11 text-accent-11",
      },
      {
        variant: "ghost",
        tone: "accent",
        className:
          "hover:bg-accent-3 active:bg-accent-4 fill-accent-11 text-accent-11",
      },
      {
        variant: "solid",
        tone: "muted",
        className:
          "hover:bg-muted-10 bg-muted-9 hover:shadow-muted-12 fill-white text-white",
      },
      {
        variant: "soft",
        tone: "muted",
        className:
          "hover:bg-muted-4 bg-muted-3 active:bg-muted-5 fill-muted-11 text-muted-11",
      },
      {
        variant: "ghost",
        tone: "muted",
        className:
          "hover:bg-muted-3 active:bg-muted-4 fill-muted-11 text-muted-11",
      },
      {
        variant: "solid",
        tone: "destructive",
        className:
          "hover:bg-destructive-10 bg-destructive-9 hover:shadow-destructive-12 fill-white text-white",
      },
      {
        variant: "soft",
        tone: "destructive",
        className:
          "hover:bg-destructive-4 bg-destructive-3 active:bg-destructive-5 fill-destructive-11 text-destructive-11",
      },
      {
        variant: "ghost",
        tone: "destructive",
        className:
          "hover:bg-destructive-3 active:bg-destructive-4 fill-destructive-11 text-destructive-11",
      },

      {
        tone: "primary",
        outline: true,
        className: "border-primary-7 hover:border-primary-8",
      },
      {
        tone: "secondary",
        outline: true,
        className: "border-secondary-7 hover:border-secondary-8",
      },
      {
        tone: "accent",
        outline: true,
        className: "border-accent-7 hover:border-accent-8",
      },
      {
        tone: "muted",
        outline: true,
        className: "border-muted-7 hover:border-muted-8",
      },
      {
        tone: "destructive",
        outline: true,
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
      outline: true,
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
    {
      className,
      variant,
      tone,
      size,
      outline,
      icon,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, tone, size, outline, icon, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
