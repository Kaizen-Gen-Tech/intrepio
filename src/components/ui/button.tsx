import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "disabled:disabled focus-visible:focused inline-flex items-center justify-center border-2 font-medium transition",
  {
    variants: {
      tone: {
        primary: "fill-primary-11 text-primary-11",
        secondary: "fill-secondary-11 text-secondary-11",
        accent: "fill-accent-11 text-accent-11",
        muted: "fill-muted-11 text-muted-11",
        destructive: "fill-destructive-11 text-destructive-11",
      },
      variant: {
        solid:
          "active:brightness-90 active:saturate-110 dark:active:brightness-110 dark:active:saturate-100",
        soft: "",
        ghost: "",
      },
      border: {
        true: "",
        false: "border-transparent",
      },
      icon: {
        true: "aspect-square",
        false: "",
      },
      flex: {
        true: "",
        false: "whitespace-nowrap",
      },
      size: {
        sm: "text-sm hover:shadow-sm",
        md: "text-base hover:shadow-md",
        lg: "text-lg hover:shadow-lg",
      },
    },
    compoundVariants: [
      {
        tone: "primary",
        variant: "solid",
        className:
          "bg-primary-9 fill-black text-black shadow-primary-11 hover:bg-primary-10 dark:shadow-primary-12",
      },
      {
        tone: "primary",
        variant: "soft",
        className: "bg-primary-3 hover:bg-primary-4 active:bg-primary-5",
      },
      {
        tone: "primary",
        variant: "ghost",
        className: "hover:bg-primary-3 active:bg-primary-4",
      },
      {
        tone: "secondary",
        variant: "solid",
        className:
          "bg-secondary-9 fill-black text-black shadow-secondary-11 hover:bg-secondary-10 dark:shadow-secondary-12",
      },
      {
        tone: "secondary",
        variant: "soft",
        className: "bg-secondary-3 hover:bg-secondary-4 active:bg-secondary-5",
      },
      {
        tone: "secondary",
        variant: "ghost",
        className: "hover:bg-secondary-3 active:bg-secondary-4",
      },
      {
        tone: "accent",
        variant: "solid",
        className:
          "bg-accent-9 fill-white text-white shadow-accent-11 hover:bg-accent-10 dark:shadow-accent-12",
      },
      {
        tone: "accent",
        variant: "soft",
        className: "bg-accent-3 hover:bg-accent-4 active:bg-accent-5",
      },
      {
        tone: "accent",
        variant: "ghost",
        className: "hover:bg-accent-3 active:bg-accent-4",
      },
      {
        tone: "muted",
        variant: "solid",
        className:
          "bg-muted-9 fill-white text-white shadow-muted-11 hover:bg-muted-10 dark:shadow-muted-12",
      },
      {
        tone: "muted",
        variant: "soft",
        className: "bg-muted-3 hover:bg-muted-4 active:bg-muted-5",
      },
      {
        tone: "muted",
        variant: "ghost",
        className: "hover:bg-muted-3 active:bg-muted-4",
      },
      {
        tone: "destructive",
        variant: "solid",
        className:
          "bg-destructive-9 fill-white text-white shadow-destructive-11 hover:bg-destructive-10 dark:shadow-destructive-12",
      },
      {
        tone: "destructive",
        variant: "soft",
        className:
          "bg-destructive-3 hover:bg-destructive-4 active:bg-destructive-5",
      },
      {
        tone: "destructive",
        variant: "ghost",
        className: "hover:bg-destructive-3 active:bg-destructive-4",
      },

      {
        border: true,
        tone: "primary",
        className: "border-primary-7 hover:border-primary-8",
      },
      {
        border: true,
        tone: "secondary",
        className: "border-secondary-7 hover:border-secondary-8",
      },
      {
        border: true,
        tone: "accent",
        className: "border-accent-7 hover:border-accent-8",
      },
      {
        border: true,
        tone: "muted",
        className: "border-muted-7 hover:border-muted-8",
      },
      {
        border: true,
        tone: "destructive",
        className: "border-destructive-7 hover:border-destructive-8",
      },

      {
        icon: true,
        size: "sm",
        className: "p-1",
      },
      {
        icon: true,
        size: "md",
        className: "p-1.5",
      },
      {
        icon: true,
        size: "lg",
        className: "p-2",
      },

      {
        flex: false,
        size: "sm",
        className: "h-8",
      },
      {
        flex: false,
        size: "md",
        className: "h-10",
      },
      {
        flex: false,
        size: "lg",
        className: "h-12",
      },

      {
        icon: false,
        flex: false,
        size: "sm",
        className: "px-3 py-1",
      },
      {
        icon: false,
        flex: false,
        size: "md",
        className: "px-4 py-1.5",
      },
      {
        icon: false,
        flex: false,
        size: "lg",
        className: "px-6 py-2",
      },
    ],
    defaultVariants: {
      tone: "primary",
      variant: "solid",
      border: true,
      icon: false,
      flex: false,
      size: "md",
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
      tone,
      variant,
      border,
      icon,
      flex,
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            tone,
            variant,
            border,
            icon,
            flex,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
