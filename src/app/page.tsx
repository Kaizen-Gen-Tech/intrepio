import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ThemeToggle } from "~/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-secondary-1 to-secondary-4">
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-primary-9">T3</span> App
        </h1>

        <ThemeToggle />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link href="/dashboard" className="focusable">
            <Card className="max-w-xs transition hover:bg-accent-3">
              <CardHeader>
                <CardTitle>First Steps →</CardTitle>
              </CardHeader>

              <CardContent>
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard" className="focusable">
            <Card className="max-w-xs transition hover:bg-accent-3">
              <CardHeader>
                <CardTitle>Documentation →</CardTitle>
              </CardHeader>

              <CardContent>
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
