"use client";

import { useTheme } from "next-themes";
import { Desktop, Moon, Question, Sun } from "@phosphor-icons/react";

import { useIsMounted } from "~/hooks/use-is-mounted";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { isMounted } = useIsMounted();

  const { setTheme, theme, resolvedTheme, themes } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" icon>
          {isMounted && <ThemeIcon theme={resolvedTheme} />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((t) => (
            <DropdownMenuRadioItem
              key={t}
              value={t}
              className="flex items-center justify-between gap-4"
            >
              <span>{t.replace(/\b\w/g, (l) => l.toUpperCase())}</span>
              <ThemeIcon theme={t} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ThemeIcon({ theme }: { theme?: string }) {
  switch (theme) {
    case "light":
      return <Sun weight="fill" className="size-5" />;
    case "dark":
      return <Moon weight="fill" className="size-5" />;
    case "system":
      return <Desktop weight="fill" className="size-5" />;
  }

  return <Question weight="fill" className="size-5" />;
}
