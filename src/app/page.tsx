import Link from "next/link";

import { ThemeToggle } from "~/components/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function HomePage() {
  return (
    <main className="to-secondary-2 flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white dark:from-black">
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-primary-9">T3</span> App
        </h1>

        <ThemeToggle />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
            className="focusable"
          >
            <Card className="hover:bg-accent-3 max-w-xs transition">
              <CardHeader>
                <CardTitle className="font-bold">First Steps →</CardTitle>
              </CardHeader>

              <CardContent className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </CardContent>
            </Card>
          </Link>

          <Link
            href="https://create.t3.gg/en/introduction"
            target="_blank"
            className="focusable"
          >
            <Card className="hover:bg-accent-3 max-w-xs transition">
              <CardHeader>
                <CardTitle className="font-bold">Documentation →</CardTitle>
              </CardHeader>

              <CardContent className="text-lg">
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
