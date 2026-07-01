import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function GlassCard({ className, interactive = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card/75 shadow-xl shadow-primary/5 backdrop-blur-xl",
        "dark:border-border/80 dark:bg-card/55 dark:shadow-primary/10",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/15",
        className,
      )}
      {...props}
    />
  );
}
