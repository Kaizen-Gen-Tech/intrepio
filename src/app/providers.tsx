"use client";

import { ThemeProvider } from "next-themes";

import { SidebarProvider } from "~/components/ui/sidebar";
import { Toaster } from "~/components/ui/sonner";
import { TooltipProvider } from "~/components/ui/tooltip";

export function Providers({
  sidebarOpen,
  children,
}: {
  sidebarOpen: boolean;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      <SidebarProvider defaultOpen={sidebarOpen}>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
}
