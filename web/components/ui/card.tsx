import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/8 bg-panel p-8",
        className
      )}
      {...props}
    />
  );
}

export { Card };
