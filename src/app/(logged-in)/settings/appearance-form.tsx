"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CaretDown } from "@phosphor-icons/react";

import { toast } from "~/hooks/use-toast";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const appearanceFormSchema = z.object({
  font: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AppearanceFormValues> = {
  theme: "light",
};

export function AppearanceForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="bg-muted-3 p-4">
          <code className="text-muted-12">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <Select {...field} onValueChange={field.onChange}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="manrope">Manrope</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <CaretDown className="absolute right-3 top-2.5 size-5" />
              </div>
              <FormDescription>
                Set the font you want to use in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-sm grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary-10">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>

                    <div className="cursor-pointer items-center border-2 p-1 hover:border-primary-9 hover:bg-primary-3">
                      <div className="space-y-2 bg-[#E2F0BD] p-2">
                        <div className="space-y-2 border-2 border-[#82827C] bg-[#FDFDFC] p-2 shadow-md shadow-[#21201C]">
                          <div className="h-2 w-[80px] bg-[#21201C]" />
                          <div className="h-2 w-[100px] bg-[#63635E]" />
                        </div>
                        <div className="flex items-center space-x-2 border-2 border-[#82827C] bg-[#FDFDFC] p-2 shadow-md shadow-[#21201C]">
                          <div className="size-4 bg-[#FFC53D]" />
                          <div className="h-2 w-[100px] bg-[#21201C]" />
                        </div>
                        <div className="flex items-center space-x-2 border-2 border-[#82827C] bg-[#FDFDFC] p-2 shadow-md shadow-[#21201C]">
                          <div className="size-4 bg-[#FFC53D]" />
                          <div className="h-2 w-[100px] bg-[#21201C]" />
                        </div>
                      </div>
                    </div>

                    <span className="block w-full p-2 text-center font-normal">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>

                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary-10">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>

                    <div className="cursor-pointer items-center border-2 p-1 hover:border-primary-9 hover:bg-primary-3">
                      <div className="space-y-2 bg-[#29371D] p-2">
                        <div className="space-y-2 border-2 border-[#7C7B74] bg-[#111110] p-2 shadow-md shadow-[#EEEEEC]">
                          <div className="h-2 w-[80px] bg-[#EEEEEC]" />
                          <div className="h-2 w-[100px] bg-[#B5B3AD]" />
                        </div>
                        <div className="flex items-center space-x-2 border-2 border-[#7C7B74] bg-[#111110] p-2 shadow-md shadow-[#EEEEEC]">
                          <div className="size-4 bg-[#FFC53D]" />
                          <div className="h-2 w-[100px] bg-[#EEEEEC]" />
                        </div>
                        <div className="flex items-center space-x-2 border-2 border-[#7C7B74] bg-[#111110] p-2 shadow-md shadow-[#EEEEEC]">
                          <div className="size-4 bg-[#FFC53D]" />
                          <div className="h-2 w-[100px] bg-[#EEEEEC]" />
                        </div>
                      </div>
                    </div>

                    <span className="block w-full p-2 text-center font-normal">
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button type="submit">Update preferences</Button>
      </form>
    </Form>
  );
}
