import {
  Bird,
  PersonSimpleBike,
  PersonSimpleHike,
} from "@phosphor-icons/react/dist/ssr";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

export async function Settings() {
  return (
    <form className="flex size-full flex-col gap-6">
      <Card>
        <fieldset>
          <CardHeader className="py-2">
            <CardTitle className="text-base font-medium">
              <legend>Settings</legend>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="model">Model</Label>

              <Select>
                <SelectTrigger
                  id="model"
                  className="[&_[data-description]]:hidden"
                >
                  <SelectValue placeholder="Select a model..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="genesis">
                    <div className="flex items-center gap-3 text-muted-11">
                      <PersonSimpleBike className="size-5" />

                      <div className="grid gap-0.5">
                        <p>
                          Neural&nbsp;
                          <span className="font-medium text-muted-12">
                            Genesis
                          </span>
                        </p>

                        <p className="text-xs" data-description>
                          Our fastest model for general use cases.
                        </p>
                      </div>
                    </div>
                  </SelectItem>

                  <SelectItem value="explorer">
                    <div className="flex items-center gap-3 text-muted-11">
                      <Bird className="size-5" />

                      <div className="grid gap-0.5">
                        <p>
                          Neural&nbsp;
                          <span className="font-medium text-muted-12">
                            Explorer
                          </span>
                        </p>

                        <p className="text-xs" data-description>
                          Performance and speed for efficiency.
                        </p>
                      </div>
                    </div>
                  </SelectItem>

                  <SelectItem value="quantum">
                    <div className="flex items-center gap-3 text-muted-11">
                      <PersonSimpleHike className="size-5" />

                      <div className="grid gap-0.5">
                        <p>
                          Neural&nbsp;
                          <span className="font-medium text-muted-12">
                            Quantum
                          </span>
                        </p>

                        <p className="text-xs" data-description>
                          The most powerful model for complex computations.
                        </p>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="temperature">Temperature</Label>
              <Input id="temperature" type="number" placeholder="0.4" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="top-p">Top P</Label>
                <Input id="top-p" type="number" placeholder="0.7" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="top-k">Top K</Label>
                <Input id="top-k" type="number" placeholder="0.0" />
              </div>
            </div>
          </CardContent>
        </fieldset>
      </Card>

      <Card>
        <fieldset>
          <CardHeader className="py-2">
            <CardTitle className="text-base font-medium">
              <legend>Messages</legend>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="role">Role</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role..." />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="assistant">Assistant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Content</Label>

              <Textarea
                id="content"
                placeholder="You are a..."
                className="min-h-40"
              />
            </div>
          </CardContent>
        </fieldset>
      </Card>
    </form>
  );
}
