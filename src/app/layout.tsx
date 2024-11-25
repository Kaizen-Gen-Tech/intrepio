import { VercelToolbar } from "@vercel/toolbar/next";
import { cookies } from "next/headers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { env } from "~/env";
import { cn } from "~/lib/utils";
import { Providers } from "./providers";

import "~/styles/globals.css";

export const metadata = {
  title: {
    default: "Intrepio",
    template: "%s | Intrepio",
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const sidebarOpen = cookieStore.get("sidebar:state")?.value === "true";

  const shouldInjectToolbar = env.VERCEL_ENV === "development";

  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body className="selection:bg-accent-5 selection:text-accent-12">
        <Providers sidebarOpen={sidebarOpen}>
          {children}
          {shouldInjectToolbar && <VercelToolbar />}
        </Providers>
      </body>
    </html>
  );
}
