import * as React from "react";

import { cn } from "~/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "disabled:disabled focus-visible:focused peer flex w-full border-2 bg-muted-1 px-3 py-2 text-sm shadow-md placeholder:text-muted-10",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
