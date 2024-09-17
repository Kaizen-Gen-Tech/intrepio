"use client";

import * as React from "react";
import { Bell, X } from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

import { notifications } from "~/server/db/notifications";

export function Notifications() {
  const [alerts, setAlerts] = React.useState(notifications);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="soft"
          tone={alerts.length > 0 ? "destructive" : "muted"}
          icon
        >
          {alerts.length > 0 && (
            <Bell className="absolute size-6 animate-ping-slow" />
          )}
          <Bell className="size-6" />
          <span className="sr-only">Notifications</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader className="mb-4">
          <SheetTitle className="flex items-center gap-2">
            <Bell className="size-6" />
            Notifications
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4">
          {alerts.map((alert, i) => (
            <Alert
              key={i}
              variant={alert.destructive ? "destructive" : "default"}
            >
              <Button
                className={cn(
                  "absolute right-0 top-0 !shadow-none",
                  alert.destructive
                    ? "hover:text-destructive-12"
                    : "hover:text-muted-12",
                )}
                variant="ghost"
                tone={alert.destructive ? "destructive" : "muted"}
                size="sm"
                border={false}
                icon
                onClick={() =>
                  setAlerts((alerts) => [
                    ...alerts.slice(0, i),
                    ...alerts.slice(i + 1),
                  ])
                }
              >
                <X className="size-4" />
                <span className="sr-only">Clear</span>
              </Button>

              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          ))}
          {alerts.length === 0 && (
            <div className="py-8 text-center text-sm text-muted-10">
              No notifications
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
