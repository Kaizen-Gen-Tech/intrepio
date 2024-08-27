"use client";

import { ThemeProvider } from "next-themes";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
