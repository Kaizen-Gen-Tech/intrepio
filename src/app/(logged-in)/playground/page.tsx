import {
  Gear,
  PaperPlaneTilt,
  Microphone,
  Paperclip,
} from "@phosphor-icons/react/dist/ssr";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Label } from "~/components/ui/label";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { PageWithHeader } from "~/components/page-with-header";
import { Settings } from "./settings";

export default async function Page() {
  return (
    <PageWithHeader
      headerChildren={
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-semibold">Playground</h1>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" icon className="md:hidden">
                <Gear size="100%" />
                <span className="sr-only">Settings</span>
              </Button>
            </DrawerTrigger>

            <DrawerContent className="h-[80dvh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the model and messages.
                </DrawerDescription>
              </DrawerHeader>

              <ScrollArea verticalScrollClassName="border-t-2" type="auto">
                <div className="p-4 pt-0">
                  <Settings />
                </div>
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        </div>
      }
    >
      <div className="flex size-full flex-col">
        <div className="w-full flex-1">
          <main className="grid size-full gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="hidden md:block">
              <Settings />
            </div>

            <div className="flex h-full flex-col justify-between border-2 bg-muted-3 p-4 shadow-lg lg:col-span-2">
              <div className="flex justify-end">
                <Badge border>Output</Badge>
              </div>

              <form className="focus-within:focused flex w-full flex-col gap-3 border-2 bg-muted-1 p-4 shadow-md">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>

                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="h-16 resize-none border-0 p-0 shadow-none focus-visible:ring-0"
                />

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" icon>
                          <Paperclip size="100%" />
                          <span className="sr-only">Attach file</span>
                        </Button>
                      </TooltipTrigger>

                      <TooltipContent side="top">Attach File</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" icon>
                          <Microphone size="100%" />
                          <span className="sr-only">Use Microphone</span>
                        </Button>
                      </TooltipTrigger>

                      <TooltipContent side="top">Use Microphone</TooltipContent>
                    </Tooltip>
                  </div>

                  <Button type="submit" className="gap-2 p-2">
                    Send Message
                    <PaperPlaneTilt className="size-5" />
                  </Button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </PageWithHeader>
  );
}
