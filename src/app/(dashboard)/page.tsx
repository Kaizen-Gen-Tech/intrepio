import * as React from "react";
import {
  ChartBarHorizontal,
  ChartPieSlice,
  ChartLine,
  Users,
} from "@phosphor-icons/react/dist/ssr";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";

export default async function Page() {
  return (
    <ScrollArea type="auto">
      <main className="flex flex-col gap-4 p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-base font-medium">
                Total Revenue
              </CardTitle>
              <ChartBarHorizontal className="size-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-11">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-base font-medium">
                Subscriptions
              </CardTitle>
              <Users className="size-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-11">+180.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-base font-medium">Sales</CardTitle>
              <ChartPieSlice className="size-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-11">+19% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-2">
              <CardTitle className="text-base font-medium">
                Active Now
              </CardTitle>
              <ChartLine className="size-6" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-11">+201 since last hour</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="m-4 flex-1 bg-muted-7" />
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                {[...Array<number>(5)].map((_, i) => (
                  <div key={i} className="flex w-full items-center gap-4">
                    <Avatar>
                      <AvatarFallback>U{i + 1}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 text-sm">
                      <p className="font-medium leading-none">User {i + 1}</p>
                      <p className="text-muted-11">user{i + 1}@example.com</p>
                    </div>

                    <div className="flex flex-1 justify-end gap-2.5 font-mono font-medium">
                      <p>$</p>
                      <p suppressHydrationWarning>
                        {(Math.random() * 1000).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                {[...Array<number>(5)].map((_, i) => (
                  <div key={i} className="flex w-full items-center gap-4">
                    <Avatar>
                      <AvatarFallback>P{i + 1}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 text-sm">
                      <p className="font-medium leading-none">
                        Product {i + 1}
                      </p>
                      <p className="text-muted-11">
                        Category {String.fromCharCode(65 + i)}
                      </p>
                    </div>

                    <div className="flex flex-1 justify-end gap-2.5 font-mono font-medium">
                      <p suppressHydrationWarning>
                        {Math.floor(Math.random() * 1000)}
                      </p>
                      <p>sales</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-8">
                {[...Array<number>(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>A{i + 1}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-1 text-sm">
                      <p className="font-medium leading-none">
                        Activity {i + 1}
                      </p>
                      <p className="text-muted-11" suppressHydrationWarning>
                        {Math.floor(Math.random() * 60)} minutes ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </ScrollArea>
  );
}
