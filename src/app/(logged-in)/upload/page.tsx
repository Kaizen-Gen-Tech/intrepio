import { Gear } from "@phosphor-icons/react/dist/ssr";

import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { ScrollArea } from "~/components/ui/scroll-area";
import { PageWithHeader } from "~/components/page-with-header";

import { Config } from "./config";
import { File } from "./file";
import { getFiles } from "./actions";

export const metadata = {
  title: "Upload",
};

export default async function Page() {
  const files = await getFiles();

  return (
    <PageWithHeader
      headerChildren={
        <div className="flex items-center gap-1">
          <h1 className="text-2xl font-semibold">Upload Data</h1>

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
                  Configure the settings for your data ingestion.
                </DrawerDescription>
              </DrawerHeader>

              <ScrollArea
                className="border-t-2"
                verticalScrollClassName="border-t-0"
                type="auto"
              >
                <div className="p-4">
                  <Config />
                </div>
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        </div>
      }
    >
      <main className="flex size-full flex-col">
        <div className="w-full flex-1">
          <div className="grid size-full gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="hidden md:block">
              <Config />
            </div>

            <div className="flex h-full flex-col border-2 bg-muted-3 p-4 shadow-lg lg:col-span-2">
              {files.map((file) => (
                <div key={file.id}>
                  <File file={file} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageWithHeader>
  );
}
