"use client";

import * as React from "react";

import { useBreakpoint } from "~/hooks/use-breakpoint";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { PageWithHeader } from "~/components/page-with-header";
import { MailDisplay, MailDisplayMobile } from "./mail-display";
import { MailList } from "./mail-list";

import { type Mail, mail } from "~/server/db/mail";

export function Mail({
  defaultLayout = [50, 50],
}: {
  defaultLayout?: [number, number];
}) {
  const [panelSize, setPanelSize] = React.useState<number>(defaultLayout[0]);

  const [selectedId, setSelectedId] = React.useState<Mail["id"]>();
  const selectedMail = React.useMemo(() => {
    return mail.find((item) => item.id === selectedId);
  }, [selectedId]);

  return (
    <Tabs defaultValue="all" className="flex h-full flex-col">
      <PageWithHeader
        headerChildren={
          <div
            style={{ "--panel-width": `${panelSize}%` } as React.CSSProperties}
            className="flex w-[--panel-width] items-center justify-between pr-4"
          >
            <h1 className="text-2xl font-semibold">Inbox</h1>

            <MailTabs className="hidden lg:flex" />
          </div>
        }
      >
        <main>
          {useBreakpoint("lg").isAboveLg ? (
            <ResizablePanelGroup
              direction="horizontal"
              onLayout={(sizes: number[]) => {
                if (sizes.length !== 2) return;

                document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
                  sizes,
                )}`;
                setPanelSize(sizes[0]!);
              }}
              className="z-10"
            >
              <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
                <MailContent />
              </ResizablePanel>

              <ResizableHandle withHandle />

              <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
                <MailDisplay mail={selectedMail} />
              </ResizablePanel>
            </ResizablePanelGroup>
          ) : (
            <div className="flex size-full flex-col overflow-hidden">
              <div className="border-b-2 p-4">
                <MailTabs />
              </div>

              <MailContent />

              {selectedMail !== undefined && (
                <Dialog
                  open={selectedId !== undefined}
                  onOpenChange={(open) => !open && setSelectedId(undefined)}
                >
                  <DialogContent className="h-4/5 p-0">
                    <MailDisplayMobile mail={selectedMail} />
                  </DialogContent>
                </Dialog>
              )}
            </div>
          )}
        </main>
      </PageWithHeader>
    </Tabs>
  );

  function MailTabs({ className }: { className?: string }) {
    return (
      <TabsList className={className}>
        <TabsTrigger value="all">All mail</TabsTrigger>
        <TabsTrigger value="unread">Unread</TabsTrigger>
      </TabsList>
    );
  }

  function MailContent() {
    return (
      <>
        <TabsContent
          value="all"
          className="m-0 size-full flex-1 overflow-hidden"
        >
          <ScrollArea type="auto">
            <MailList
              items={mail}
              selectedMail={selectedId}
              setSelectedMail={setSelectedId}
            />
          </ScrollArea>
        </TabsContent>

        <TabsContent
          value="unread"
          className="m-0 size-full flex-1 overflow-hidden"
        >
          <ScrollArea type="auto">
            <MailList
              items={mail.filter((item) => !item.read)}
              selectedMail={selectedId}
              setSelectedMail={setSelectedId}
            />
          </ScrollArea>
        </TabsContent>
      </>
    );
  }
}
