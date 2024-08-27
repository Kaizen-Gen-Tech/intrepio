import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "~/styles/globals.css";
import { cn } from "~/lib/utils";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "INT.REP.IO",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "selection:bg-primary-5 selection:text-primary-12",
      )}
      suppressHydrationWarning
    >
      <body className="h-dvh w-dvw">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
