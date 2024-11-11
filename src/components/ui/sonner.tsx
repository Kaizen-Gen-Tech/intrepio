"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="top-center"
      cn={cn}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "border-2 shadow-lg p-4 w-[var(--width)] flex shadow-muted-12 border-current items-center gap-1.5 text-sm",
          description: "text-muted-10",
          loading: "bg-muted-1 text-muted-12",
          error: "bg-destructive-3 text-destructive-11",
          warning: "bg-primary-3 text-primary-11",
          info: "bg-accent-3 text-accent-11",
          success: "bg-secondary-3 text-secondary-11",
          actionButton: buttonVariants({
            size: "xs",
            className:
              "ml-[var(--toast-button-margin-start)] mr-[var(--toast-button-margin-end)]",
          }),
          cancelButton: buttonVariants({
            size: "xs",
            tone: "destructive",
            variant: "ghost",
            className:
              "ml-[var(--toast-button-margin-start)] mr-[var(--toast-button-margin-end)]",
          }),
          closeButton: buttonVariants({
            size: "xs",
            icon: true,
            border: false,
            tone: "muted",
            variant: "ghost",
            className:
              "!shadow-none hover:text-muted-12 w-6 top-3 left-[initial] -right-1 !bg-transparent !border-none rounded-none *:size-5",
          }),
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
