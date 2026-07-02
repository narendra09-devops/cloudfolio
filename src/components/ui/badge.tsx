import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "primary" | "secondary" | "success" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "border-border/60 bg-background/70 text-muted",
  primary: "border-primary/35 bg-primary/10 text-primary shadow-sm shadow-primary/10",
  secondary: "border-secondary/35 bg-secondary/10 text-secondary shadow-sm shadow-secondary/10",
  success: "border-success/35 bg-success/10 text-success shadow-sm shadow-success/10",
  outline: "border-border/60 bg-background/70 text-foreground",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border px-3 py-1 text-xs font-semibold leading-5 tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
