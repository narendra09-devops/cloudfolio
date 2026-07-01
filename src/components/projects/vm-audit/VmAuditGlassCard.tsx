import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type VmAuditGlassCardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  accent?: "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";
};

export function VmAuditGlassCard({
  accent,
  className,
  interactive = false,
  ...props
}: VmAuditGlassCardProps) {
  const accentClass = {
    blue: "from-blue-500/24 via-sky-500/10 to-transparent before:via-blue-400/70",
    purple: "from-purple-500/24 via-fuchsia-500/10 to-transparent before:via-purple-400/70",
    green: "from-green-500/20 via-lime-500/10 to-transparent before:via-green-400/70",
    orange: "from-orange-500/24 via-amber-500/10 to-transparent before:via-orange-400/70",
    cyan: "from-cyan-500/22 via-sky-400/10 to-transparent before:via-cyan-300/70",
    emerald: "from-emerald-500/22 via-teal-500/10 to-transparent before:via-emerald-300/70",
  }[accent ?? "cyan"];

  return (
    <div
      className={cn(
        "bg-card/78 break-inside-avoid rounded-2xl border border-border/70 shadow-xl shadow-primary/5 backdrop-blur-2xl",
        "bg-gradient-to-br dark:bg-card/50 dark:shadow-secondary/10",
        accentClass,
        "before:pointer-events-none before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-secondary/50 before:to-transparent",
        "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_20%_0%,rgb(var(--color-card)/0.35),transparent_30%)]",
        "relative overflow-hidden",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-2xl hover:shadow-secondary/20",
        className,
      )}
      {...props}
    />
  );
}
