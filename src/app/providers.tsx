"use client";

import { ThemeProvider } from "next-themes";

import { TooltipProvider } from "~/components/ui/tooltip";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
