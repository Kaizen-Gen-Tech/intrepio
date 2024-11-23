"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  // Envelope,
  // Gear,
  ChartPieSlice,
  CloudArrowUp,
  Table,
  Circuitry,
} from "@phosphor-icons/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "~/components/ui/sidebar";

import { ThemeToggle } from "./theme-toggle";

const sidebarItems = [
  {
    title: "METIS",
    children: [{ name: "Dashboard", href: "/", icon: ChartPieSlice }],
  },
  {
    title: "EOS",
    tone: "accent" as const,
    children: [
      { name: "Upload", href: "/eos/upload", icon: CloudArrowUp },
      { name: "Explore", href: "/eos/explore", icon: Table },
    ],
  },
  // {
  //   title: "Test",
  //   tone: "muted" as const,
  //   children: [
  //     { name: "Mail", href: "/mail", icon: Envelope },
  //     { name: "Settings", href: "/settings", icon: Gear },
  //   ],
  // },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex-row items-center">
        <Circuitry weight="duotone" className="size-10 shrink-0 text-muted-9" />
        <span className="truncate text-3xl font-semibold tracking-tight">
          Intrepio
        </span>
      </SidebarHeader>

      <SidebarContent>
        {sidebarItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.children.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      tooltip={item.name}
                      tone={group.tone}
                      isActive={pathname === item.href}
                      asChild
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="block">
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
