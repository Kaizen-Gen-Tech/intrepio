"use client";

import { AccountSwitcher } from "./account-switcher";
import { Notifications } from "./notifications";
import { MobileSidebar } from "./sidebar";

export function PageWithHeader({
  headerChildren,
  children,
}: {
  headerChildren: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="flex h-20 shrink-0 items-center justify-between gap-4 border-b-2 bg-muted-1 p-4">
        <div className="flex items-center gap-4 lg:hidden">
          <MobileSidebar />
        </div>

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
