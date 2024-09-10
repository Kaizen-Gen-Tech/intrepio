"use client";

import * as React from "react";

import { useBreakpoint } from "~/lib/hooks/useBreakpoint";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { MailDisplay, MailDisplayMobile } from "./mail-display";
import { MailList } from "./mail-list";
import { type Mail } from "./data";

interface MailProps {
  mails: Mail[];
  defaultLayout?: number[];
}

export function Mail({ mails, defaultLayout = [50, 50] }: MailProps) {
  const [selectedId, setSelectedId] = React.useState<Mail["id"]>();
  const selectedMail = React.useMemo(() => {
    return mails.find((item) => item.id === selectedId);
  }, [mails, selectedId]);

  return useBreakpoint("lg").isAboveLg ? (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
          sizes,
        )}`;
      }}
      className="z-10"
    >
      <ResizablePanel defaultSize={defaultLayout[0]} minSize={30}>
        <MailTabs
          mails={mails}
          selectedMail={selectedId}
          setSelectedMail={setSelectedId}
        />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <MailDisplay mail={selectedMail} />
      </ResizablePanel>
    </ResizablePanelGroup>
  ) : (
    <>
      <MailTabs
        mails={mails}
        selectedMail={selectedId}
        setSelectedMail={setSelectedId}
      />

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
    </>
  );
}

function MailTabs({
  mails,
  selectedMail,
  setSelectedMail,
}: MailProps & {
  selectedMail?: string;
  setSelectedMail: React.Dispatch<React.SetStateAction<typeof selectedMail>>;
}) {
  return (
    <Tabs defaultValue="all" className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b-2 bg-muted-1 p-2 px-4">
        <h1 className="text-2xl font-semibold">Inbox</h1>

        <TabsList>
          <TabsTrigger value="all">All mail</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="all" className="m-0 flex-1 overflow-hidden">
        <ScrollArea type="auto">
          <MailList
            items={mails}
            selectedMail={selectedMail}
            setSelectedMail={setSelectedMail}
          />
        </ScrollArea>
      </TabsContent>

      <TabsContent value="unread" className="m-0 flex-1 overflow-hidden">
        <ScrollArea type="auto">
          <MailList
            items={mails.filter((item) => !item.read)}
            selectedMail={selectedMail}
            setSelectedMail={setSelectedMail}
          />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
