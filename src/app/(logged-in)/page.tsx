import {
  ChartBarHorizontal,
  ChartPieSlice,
  ChartLine,
  Users,
} from "@phosphor-icons/react/dist/ssr";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import { PageWithHeader } from "~/components/page-with-header";
import Image from "next/image";

export const metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <PageWithHeader
      headerChildren={
        <h1 className="text-2xl font-semibold text-primary-11">
          METIS Dashboard
        </h1>
      }
    >
      <ScrollArea type="auto">
        <main className="flex flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between py-2">
                <CardTitle className="text-base font-medium">
                  PMPM (current month)
                </CardTitle>
                <ChartBarHorizontal className="size-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$342.67</div>
                <p className="text-xs text-muted-11">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between py-2">
                <CardTitle className="text-base font-medium">
                  Medical Loss Ratio
                </CardTitle>
                <Users className="size-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">84.3%</div>
                <p className="text-xs text-muted-11">+.01% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between py-2">
                <CardTitle className="text-base font-medium">
                  New Claims (current month)
                </CardTitle>
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
                  High Cost Claims
                </CardTitle>
                <ChartLine className="size-6" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+49</div>
                <p className="text-xs text-muted-11">
                  Driven by : Specialty Drugs, Premature Birth and 4 more
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Model Snapshot</CardTitle>
              </CardHeader>
              <CardContent className="relative m-4 flex-1 bg-muted-7">
                <Image src="/sample.png" alt="" fill />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8">
                  {[...Array<number>(5)].map((_, i) => (
                    <div key={i} className="flex w-full items-center gap-4">
                      <Avatar>
                        <AvatarFallback>C{i + 1}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col gap-1 text-sm">
                        <p className="font-medium leading-none">
                          Claim {i + 1}
                        </p>
                        <p className="text-muted-11">
                          hospitalclaims{i + 1}@example.com
                        </p>
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
                <CardTitle>Top Dx Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8">
                  {[...Array<number>(5)].map((_, i) => (
                    <div key={i} className="flex w-full items-center gap-4">
                      <Avatar>
                        <AvatarFallback>Dx{i + 1}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col gap-1 text-sm">
                        <p className="font-medium leading-none">
                          Condition {i + 1}
                        </p>
                        <p className="text-muted-11">
                          Category {String.fromCharCode(65 + i)}
                        </p>
                      </div>

                      <div className="flex flex-1 justify-end gap-2.5 font-mono font-medium">
                        <p suppressHydrationWarning>
                          {Math.floor(Math.random() * 1000)}
                        </p>
                        <p>claims</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Outliers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8">
                  {[...Array<number>(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>O{i + 1}</AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col gap-1 text-sm">
                        <p className="font-medium leading-none">
                          Claim {i + 1}
                        </p>
                        <p className="text-muted-11" suppressHydrationWarning>
                          {Math.floor(Math.random() * 60)} days ago
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
    </PageWithHeader>
  );
}
