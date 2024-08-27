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
        "selection:bg-primary-11 selection:text-primary-1",
      )}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
