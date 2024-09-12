import { type Metadata } from "next";
import { VercelToolbar } from "@vercel/toolbar/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { env } from "~/env";
import { cn } from "~/lib/utils";

import { Providers } from "./providers";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "INT.REP.IO",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = env.VERCEL_ENV === "development";

  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body className="selection:bg-accent-5 selection:text-accent-12">
        <Providers>
          {children}
          {shouldInjectToolbar && <VercelToolbar />}
        </Providers>
      </body>
    </html>
  );
}
