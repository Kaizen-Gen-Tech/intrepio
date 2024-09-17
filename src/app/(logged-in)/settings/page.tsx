"use client";

import * as React from "react";

import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { PageWithHeader } from "~/components/page-with-header";
import { ProfileForm } from "./profile-form";
import { AccountForm } from "./account-form";
import { AppearanceForm } from "./appearance-form";
import { NotificationsForm } from "./notifications-form";
import { DisplayForm } from "./display-form";

const tabs = {
  profile: {
    label: "Profile",
    description: "This is how others will see you on the site.",
    content: <ProfileForm />,
  },
  account: {
    label: "Account",
    description:
      "Update your account settings. Set your preferred language and timezone.",
    content: <AccountForm />,
  },
  appearance: {
    label: "Appearance",
    description:
      "Customize the appearance of the app. Automatically switch between day and night themes.",
    content: <AppearanceForm />,
  },
  notifications: {
    label: "Notifications",
    description: "Configure how you receive notifications.",
    content: <NotificationsForm />,
  },
  display: {
    label: "Display",
    description: "Turn items on or off to control what's displayed in the app.",
    content: <DisplayForm />,
  },
};

export default function Page() {
  const [currentTab, setCurrentTab] =
    React.useState<keyof typeof tabs>("profile");

  return (
    <Tabs
      className="size-full"
      defaultValue="profile"
      value={currentTab}
      onValueChange={(value) => setCurrentTab(value as keyof typeof tabs)}
    >
      <PageWithHeader
        headerChildren={
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Settings</h1>

            <TabsList className="hidden lg:flex">
              {Object.entries(tabs).map(([key, t]) => (
                <TabsTrigger key={key} value={key}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        }
      >
        <div className="flex size-full flex-col lg:flex-row lg:items-start lg:gap-8 lg:pl-4">
          <aside className="flex flex-col gap-4 border-b-2 p-4 lg:w-1/5 lg:pl-0">
            <TabsList className="lg:hidden">
              {Object.entries(tabs).map(([key, t]) => (
                <TabsTrigger key={key} value={key}>
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div>
              <h3 className="text-lg font-medium">{tabs[currentTab].label}</h3>

              <p className="text-sm text-muted-11">
                {tabs[currentTab].description}
              </p>
            </div>
          </aside>

          {Object.entries(tabs).map(([key, t]) => (
            <TabsContent
              key={key + "-content"}
              value={key}
              className="m-0 size-full flex-1 overflow-hidden"
            >
              <ScrollArea type="auto">
                <div className="p-4 lg:max-w-2xl">{t.content}</div>
              </ScrollArea>
            </TabsContent>
          ))}
        </div>
      </PageWithHeader>
    </Tabs>
  );
}
