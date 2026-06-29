import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "primary" | "secondary" | "success" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "border-border bg-surface text-muted",
  primary: "border-primary/30 bg-primary/10 text-blue-300",
  secondary: "border-secondary/30 bg-secondary/10 text-sky-300",
  success: "border-success/30 bg-success/10 text-green-300",
  outline: "border-border bg-transparent text-foreground",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
