import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-[0.95rem] transition-all duration-200 ease-out active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient text-white hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-glow",
        outline:
          "bg-transparent border border-white/10 text-foreground hover:border-accent-1/50 hover:bg-white/[0.04] hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-[18px] py-[9px] text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
