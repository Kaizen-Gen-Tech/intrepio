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

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Config } from "./config";
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

              <ScrollArea className="border-t-2" type="auto">
                <div className="p-4">
                  <Config />
                </div>
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        </div>
      }
    >
      <main className="flex size-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="hidden md:block md:w-1/2 lg:w-1/3">
          <Config />
        </div>

        <div className="w-full md:w-1/2 lg:w-2/3">
          <DataTable columns={columns} data={files} />
        </div>
      </main>
    </PageWithHeader>
  );
}
