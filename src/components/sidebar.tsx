"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Envelope,
  Gear,
  ChartPieSlice,
  CloudArrowUp,
  Table,
} from "@phosphor-icons/react";

import { ThemeToggle } from "./theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroupAction,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarFooter,
} from "~/components/ui/sidebar";

export function MySidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>METIS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton isActive={pathname === "/"} asChild>
                <Link href="/">
                  <ChartPieSlice className="size-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>EOS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton isActive={pathname === "/upload"} asChild>
                <Link href="/upload">
                  <CloudArrowUp className="size-5" />
                  <span>Upload</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton isActive={pathname === "/data"} asChild>
                <Link href="/data">
                  <Table className="size-5" />
                  <span>Explore</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Test</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton isActive={pathname === "/mail"} asChild>
                <Link href="/mail">
                  <Envelope className="size-5" />
                  <span>Mail</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton isActive={pathname === "/settings"} asChild>
                <Link href="/settings">
                  <Gear className="size-5" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>GroupLabel</SidebarGroupLabel>
          <SidebarGroupAction title="GroupAction">+</SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>MenuItem</SidebarMenuItem>
              <SidebarMenuItem>MenuItem</SidebarMenuItem>
              <SidebarMenuSub>
                <SidebarMenuSubItem>MenuSubItem</SidebarMenuSubItem>
                <SidebarMenuSubItem>MenuSubItem</SidebarMenuSubItem>
                <SidebarMenuSubItem>MenuSubItem</SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <ThemeToggle />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
