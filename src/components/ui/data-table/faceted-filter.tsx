"use client";

import * as React from "react";
import { type Column } from "@tanstack/react-table";
import { PlusCircle } from "@phosphor-icons/react";

import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export function FacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={selectedValues?.size > 0 ? "soft" : "ghost"}
          size="sm"
          className={cn(
            "gap-0.5 pl-1 pr-0.5",
            selectedValues?.size === 0 && "bg-muted-1",
          )}
        >
          <PlusCircle className="mr-0.5 size-5" />
          <span className="pr-1.5">{title}</span>

          {selectedValues?.size > 0 && (
            <>
              <Badge variant="muted" className="px-1.5 lg:hidden">
                {selectedValues.size}
              </Badge>

              {selectedValues.size > 2 ? (
                <Badge variant="muted" className="hidden lg:inline-flex">
                  {selectedValues.size} selected
                </Badge>
              ) : (
                options
                  .filter((option) => selectedValues.has(option.value))
                  .map((option) => (
                    <Badge
                      key={option.value}
                      variant="muted"
                      className="hidden lg:inline-flex"
                    >
                      {option.label}
                    </Badge>
                  ))
              )}
            </>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    className="gap-1.5"
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined,
                      );
                    }}
                  >
                    <Checkbox checked={isSelected} />

                    {option.icon && <option.icon className="size-5" />}
                    <span className="flex-1">{option.label}</span>
                    {facets?.get(option.value) && (
                      <span className="pl-4 font-mono text-xs">
                        {facets.get(option.value)}
                      </span>
                    )}
                  </CommandItem>
                );
              })}

              {selectedValues.size > 0 && (
                <>
                  <CommandSeparator />

                  <CommandItem
                    onSelect={() => column?.setFilterValue(undefined)}
                  >
                    <span className="flex-1 text-center">Clear filter</span>
                  </CommandItem>
                </>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
