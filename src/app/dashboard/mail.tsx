"use client";

import * as React from "react";
import {
  WarningCircle,
  Archive,
  ReceiptX,
  File,
  Tray,
  Chats,
  MagnifyingGlass,
  PaperPlaneTilt,
  ShoppingCart,
  Trash,
  Users,
} from "@phosphor-icons/react/dist/ssr";

import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ThemeToggle } from "~/components/theme-toggle";
import { AccountSwitcher } from "./account-switcher";
import { MailDisplay } from "./mail-display";
import { MailList } from "./mail-list";
import { Nav } from "./nav";
import { type Mail } from "./data";

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [selectedMail, setSelectedMail] = React.useState<Mail["id"]>();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
          sizes,
        )}`;
      }}
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={0}
        collapsible={true}
        minSize={15}
        maxSize={20}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true,
          )}`;
        }}
        onResize={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false,
          )}`;
        }}
        className={cn(
          "flex flex-col",
          isCollapsed &&
            "min-w-[4.5rem] transition-all duration-300 ease-in-out",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center p-4",
            isCollapsed && "my-0.5",
          )}
        >
          <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
        </div>

        <Separator />

        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Inbox",
              label: "128",
              icon: Tray,
              active: true,
            },
            {
              title: "Drafts",
              label: "9",
              icon: File,
            },
            {
              title: "Sent",
              label: "",
              icon: PaperPlaneTilt,
            },
            {
              title: "Junk",
              label: "23",
              icon: ReceiptX,
            },
            {
              title: "Trash",
              label: "",
              icon: Trash,
            },
            {
              title: "Archive",
              label: "",
              icon: Archive,
            },
          ]}
        />

        <Separator />

        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Social",
              label: "972",
              icon: Users,
            },
            {
              title: "Updates",
              label: "342",
              icon: WarningCircle,
            },
            {
              title: "Forums",
              label: "128",
              icon: Chats,
            },
            {
              title: "Shopping",
              label: "8",
              icon: ShoppingCart,
            },
            {
              title: "Promotions",
              label: "21",
              icon: Archive,
            },
          ]}
        />

        <Separator />

        <div
          className={cn(
            "flex grow items-end px-4 py-2",
            isCollapsed && "justify-center",
          )}
        >
          <ThemeToggle />
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Tabs defaultValue="all" className="flex h-full flex-col">
          <div className="sticky inset-0 z-20 w-full bg-muted-1">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-2xl font-semibold">Inbox</h1>

              <TabsList>
                <TabsTrigger value="all">All mail</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </div>

            <Separator />

            <form className="relative p-4">
              <MagnifyingGlass className="absolute mx-2 my-2.5 size-5 text-muted-12" />
              <Input type="search" placeholder="Search" className="pl-8" />
            </form>
          </div>

          <div className="sticky inset-0 flex h-full flex-col gap-4 p-4 pt-[146px]">
            <ScrollArea>
              <div className="flex pr-7">
                <TabsContent value="all" className="m-0">
                  <MailList
                    items={mails}
                    selectedMail={selectedMail}
                    setSelectedMail={setSelectedMail}
                  />
                </TabsContent>

                <TabsContent value="unread" className="m-0">
                  <MailList
                    items={mails.filter((item) => !item.read)}
                    selectedMail={selectedMail}
                    setSelectedMail={setSelectedMail}
                  />
                </TabsContent>
              </div>
            </ScrollArea>
          </div>
        </Tabs>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
        <MailDisplay mail={mails.find((item) => item.id === selectedMail)} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
