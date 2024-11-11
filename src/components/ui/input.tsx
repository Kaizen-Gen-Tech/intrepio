import * as React from "react";

import { cn } from "~/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "focus-visible:focused disabled:disabled peer flex h-10 w-full border-2 bg-muted-1 px-3 py-2 text-sm shadow-md file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-10",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
