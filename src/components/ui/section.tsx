import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-10 sm:py-12 lg:py-16", className)} {...props} />;
}
