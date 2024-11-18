"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  List,
  ArrowLineRight,
  // Envelope,
  // ClipboardText,
  // Gear,
  House,
  CloudArrowUp,
  Table,
} from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

import { ThemeToggle } from "./theme-toggle";

const sidebarItems = [
  { name: "Home", href: "/", icon: House },
  { name: "EOS Upload", href: "/upload", icon: CloudArrowUp },
  { name: "EOS Explore", href: "/data", icon: Table },
  // { name: "Mail", href: "/mail", icon: Envelope },
  // { name: "Tasks", href: "/tasks", icon: ClipboardText },
  // { name: "Settings", href: "/settings", icon: Gear },
];

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r-2 bg-muted-1 transition-[width]",
        isSidebarOpen ? "w-48 duration-0 xl:w-64" : "w-20",
      )}
    >
      <div className="h-20 w-full border-b-2 p-5">
        <Button
          variant="ghost"
          icon
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <ArrowLineRight
            className={cn(
              "size-5 transition duration-200",
              isSidebarOpen && "-scale-x-100",
            )}
          />
        </Button>
      </div>

      <SidebarInternal isSidebarOpen={isSidebarOpen} className="grow p-5" />

      <div className="flex items-center justify-start p-5">
        <ThemeToggle />
      </div>
    </aside>
  );
}

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" icon>
          <List className="size-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <SidebarInternal isSidebarOpen className="pt-8" />
      </SheetContent>
    </Sheet>
  );
}

function SidebarInternal({
  isSidebarOpen,
  className,
}: {
  isSidebarOpen: boolean;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-4", className)}>
      {sidebarItems.map((item) => (
        <Button
          key={item.name}
          asChild
          variant={pathname === item.href ? "solid" : "ghost"}
          icon={!isSidebarOpen}
          className={cn(
            "justify-start text-sm xl:text-base",
            isSidebarOpen && "px-1.5",
          )}
        >
          <Link href={item.href} className="gap-1.5">
            <item.icon className="size-5" />
            <span className={cn(!isSidebarOpen && "hidden")}>{item.name}</span>
          </Link>
        </Button>
      ))}
    </nav>
  );
}
