"use client";

import { cn } from "~/lib/utils";

export function Cell({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-nowrap px-4 py-2", className)} {...props} />;
}
