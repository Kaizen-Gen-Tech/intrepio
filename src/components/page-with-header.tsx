"use client";

import { SidebarTrigger } from "~/components/ui/sidebar";

import { AccountSwitcher } from "./account-switcher";
import { Notifications } from "./notifications";

export function PageWithHeader({
  headerChildren,
  children,
}: {
  headerChildren: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="flex h-20 items-center gap-4 text-nowrap border-b-2 bg-muted-1 p-4">
        <SidebarTrigger />

        {headerChildren}

        <div className="flex flex-1 items-center justify-end gap-4">
          <Notifications />
          <AccountSwitcher />
        </div>
      </header>

      <div className="-mt-20 size-full pt-20">{children}</div>
    </div>
  );
}
