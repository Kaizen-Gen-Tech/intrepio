import * as React from "react";
import { formatDistanceToNow } from "date-fns";

import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

import { type Mail } from "./data";

export function MailList({
  items,
  selectedMail,
  setSelectedMail,
}: {
  items: Mail[];
  selectedMail: string | undefined;
  setSelectedMail: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {items.map((item) => (
        <Button
          key={item.id}
          variant="soft"
          tone={selectedMail === item.id ? "primary" : "muted"}
          className={cn(
            "size-[unset] flex-col items-start gap-2 text-wrap text-left",
          )}
          onClick={() => setSelectedMail(item.id)}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{item.name}</div>
                {!item.read && (
                  <span className="flex size-2 rounded-full bg-accent-9" />
                )}
              </div>

              <div className="text-sm" suppressHydrationWarning>
                {formatDistanceToNow(new Date(item.date), {
                  addSuffix: true,
                })}
              </div>
            </div>

            <div className="text-sm font-medium">{item.subject}</div>
          </div>

          <div className="line-clamp-1 text-xs text-muted-12">{item.text}</div>

          {item.labels.length ? (
            <div className="flex items-center gap-2">
              {item.labels.map((label) => (
                <Badge
                  key={label}
                  variant={getBadgeVariantFromLabel(label)}
                  outline
                >
                  {label}
                </Badge>
              ))}
            </div>
          ) : null}
        </Button>
      ))}
    </div>
  );
}

function getBadgeVariantFromLabel(
  label: string,
): React.ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "primary";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "accent";
  }

  if (["important"].includes(label.toLowerCase())) {
    return "destructive";
  }

  return "secondary";
}
