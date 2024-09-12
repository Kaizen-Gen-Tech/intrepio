"use client";

import { addDays, addHours, format, nextSaturday } from "date-fns";
import {
  Archive,
  ReceiptX,
  Clock,
  ArrowBendUpRight,
  DotsThreeVertical,
  ArrowBendUpLeft,
  ArrowBendDoubleUpLeft,
  Trash,
} from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import { type Mail } from "./data";

export function MailDisplay({ mail }: { mail?: Mail }) {
  return (
    <div className="flex h-full flex-col">
      <MailMenu disabled={!mail} />

      <Separator />

      {mail ? (
        <div className="flex flex-1 flex-col" key={mail.id}>
          <div className="flex shrink-0 flex-col bg-muted-1">
            <div className="flex justify-between p-4">
              <div className="flex gap-4 text-sm">
                <Avatar>
                  <AvatarImage alt={mail.name} />
                  <AvatarFallback>
                    {mail.name
                      .split(" ")
                      .map((chunk) => chunk[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="grid">
                  <div className="text-base font-semibold">{mail.name}</div>
                  <div className="line-clamp-1 text-xs">{mail.email}</div>
                </div>
              </div>

              {mail.date && (
                <div className="text-xs text-muted-10">
                  {format(new Date(mail.date), "PPp")}
                </div>
              )}
            </div>

            <div className="line-clamp-1 px-4 pb-2 text-sm">{mail.subject}</div>
          </div>

          <Separator />

          <div className="h-0 grow overflow-hidden">
            <ScrollArea type="auto">
              <div className="whitespace-pre-wrap p-4 text-sm">{mail.text}</div>
            </ScrollArea>
          </div>

          <Separator />

          <form className="shrink-0 bg-muted-1 p-4">
            <div className="grid gap-4">
              <Textarea
                className="p-4"
                placeholder={`Reply to ${mail.name}...`}
              />

              <div className="flex items-center justify-between">
                <Label htmlFor="mute" className="flex items-center gap-2">
                  <Switch id="mute" aria-label="Mute thread" /> Mute this thread
                </Label>

                <Button onClick={(e) => e.preventDefault()}>Send</Button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-10">No message selected</div>
      )}
    </div>
  );
}

export function MailDisplayMobile({ mail }: { mail: Mail }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col" key={mail.id}>
        <div className="flex shrink-0 flex-col bg-muted-1">
          <div className="flex justify-between p-4">
            <div className="flex gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="grid">
                <div className="text-sm font-medium">{mail.name}</div>
                <div className="line-clamp-1 text-xs">{mail.email}</div>
              </div>
            </div>

            <div className="self-end text-xs text-muted-10">
              {format(new Date(mail.date), "PPp")}
            </div>
          </div>

          <div className="line-clamp-1 px-4 pb-2 text-sm font-semibold">
            {mail.subject}
          </div>
        </div>

        <Separator />

        <div className="h-0 grow overflow-hidden">
          <ScrollArea type="auto">
            <div className="whitespace-pre-wrap p-4 text-sm">{mail.text}</div>
          </ScrollArea>
        </div>

        <Separator />

        <MailMenu />

        <Separator />

        <form className="shrink-0 bg-muted-1 p-4">
          <div className="grid gap-4">
            <Textarea
              className="p-4"
              placeholder={`Reply to ${mail.name}...`}
            />

            <div className="flex items-center justify-between">
              <Label htmlFor="mute" className="flex items-center gap-2">
                <Switch id="mute" aria-label="Mute thread" /> Mute this thread
              </Label>

              <Button onClick={(e) => e.preventDefault()}>Send</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function MailMenu({ disabled }: { disabled?: boolean }) {
  const today = new Date();

  return (
    <div className="flex items-center justify-between bg-muted-1 p-2">
      <div className="flex items-center gap-2">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <Archive className="size-5" />
              <span className="sr-only">Archive</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Archive</TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <ReceiptX className="size-5" />
              <span className="sr-only">Move to junk</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to junk</TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <Trash className="size-5" />
              <span className="sr-only">Move to trash</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Move to trash</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="h-8" />

        <Tooltip delayDuration={0}>
          <Popover>
            <PopoverTrigger asChild>
              <TooltipTrigger asChild>
                <Button variant="ghost" icon border={false} disabled={disabled}>
                  <Clock className="size-5" />
                  <span className="sr-only">Snooze</span>
                </Button>
              </TooltipTrigger>
            </PopoverTrigger>
            <PopoverContent className="flex p-0">
              <div className="flex flex-col gap-2 border-r-2 p-4">
                <div className="ml-4 text-sm font-medium">Snooze until</div>

                <Button
                  variant="ghost"
                  border={false}
                  className="gap-4 font-normal"
                >
                  Later today{" "}
                  <span className="ml-auto text-muted-11">
                    {format(addHours(today, 4), "E, h:mm b")}
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  border={false}
                  className="gap-4 font-normal"
                >
                  Tomorrow
                  <span className="ml-auto text-muted-11">
                    {format(addDays(today, 1), "E, h:mm b")}
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  border={false}
                  className="gap-4 font-normal"
                >
                  This weekend
                  <span className="ml-auto text-muted-11">
                    {format(nextSaturday(today), "E, h:mm b")}
                  </span>
                </Button>
                <Button
                  variant="ghost"
                  border={false}
                  className="gap-4 font-normal"
                >
                  Next week
                  <span className="ml-auto text-muted-11">
                    {format(addDays(today, 7), "E, h:mm b")}
                  </span>
                </Button>
              </div>
              <div className="p-2">
                <Calendar />
              </div>
            </PopoverContent>
          </Popover>
          <TooltipContent>Snooze</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <ArrowBendUpLeft className="size-5" />
              <span className="sr-only">Reply</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Reply</TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <ArrowBendDoubleUpLeft className="size-5" />
              <span className="sr-only">Reply all</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Reply all</TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <ArrowBendUpRight className="size-5" />
              <span className="sr-only">Forward</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Forward</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="h-8" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" icon border={false} disabled={disabled}>
              <DotsThreeVertical className="size-5" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
