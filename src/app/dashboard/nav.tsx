"use client";

import { type Icon } from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: Icon;
    active?: boolean;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div data-collapsed={isCollapsed} className="group py-4">
      <nav className="grid gap-2 px-4 group-[[data-collapsed=true]]:justify-center">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  variant={link.active ? "solid" : "ghost"}
                  outline={!link.active}
                  icon
                >
                  <link.icon className="size-5" />
                  <span className="sr-only">{link.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && <span className="ml-auto">{link.label}</span>}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              key={index}
              variant={link.active ? "solid" : "ghost"}
              outline={false}
              className="justify-start gap-1"
            >
              <link.icon className="mr-2 size-5" />
              {link.title}
              {link.label && <span className="ml-auto">{link.label}</span>}
            </Button>
          ),
        )}
      </nav>
    </div>
  );
}
