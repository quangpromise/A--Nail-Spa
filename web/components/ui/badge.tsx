import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[0.8rem] text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
