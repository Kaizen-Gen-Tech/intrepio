"use client";

import * as React from "react";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="soft" tone="accent" icon>
          <Sun
            size="100%"
            weight="fill"
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size="100%"
            weight="fill"
            className="absolute size-[inherit] rotate-90 scale-0 p-[inherit] transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={4}>
        <DropdownMenuRadioGroup
          className="space-y-1"
          value={theme}
          onValueChange={setTheme}
        >
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
