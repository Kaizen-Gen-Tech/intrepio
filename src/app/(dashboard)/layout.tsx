import * as React from "react";

import { MobileSidebar, Sidebar } from "./sidebar";
import { Notifications } from "./notifications";
import { AccountSwitcher } from "./account-switcher";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-dvw">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="h-dvh max-w-full flex-1">
        <header className="flex h-20 shrink-0 items-center justify-between gap-4 border-b-2 bg-muted-1 p-4">
          <div className="flex items-center gap-4 lg:hidden">
            <MobileSidebar />
          </div>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Notifications />
            <AccountSwitcher />
          </div>
        </header>

        <div className="-mt-20 size-full pt-20">{children}</div>
      </div>
    </div>
  );
}
