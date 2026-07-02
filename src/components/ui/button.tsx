"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { safeTrackEvent, type AnalyticsEventName } from "@/lib/analytics";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseButtonClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 focus-visible:ring-primary/40",
  secondary:
    "border-transparent bg-gradient-to-r from-secondary to-primary text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40 focus-visible:ring-secondary/40",
  outline:
    "border-primary/25 bg-background/70 text-foreground hover:border-primary/45 hover:bg-primary/10 hover:shadow-primary/15 dark:bg-card/50 focus-visible:ring-primary/30",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-surface hover:text-foreground hover:shadow-primary/10 focus-visible:ring-primary/30",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  tracking?: {
    eventName: AnalyticsEventName;
    pageSection: string;
    ctaType: string;
  };
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseButtonClasses, variants[variant], sizes[size], className)}
      type={type}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  href,
  variant = "primary",
  size = "md",
  tracking,
  onClick,
  ...props
}: ButtonLinkProps) {
  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    onClick?.(event);

    if (!event.defaultPrevented && tracking) {
      safeTrackEvent(tracking.eventName, {
        pageSection: tracking.pageSection,
        ctaType: tracking.ctaType,
      });
    }
  };

  return (
    <Link
      className={cn(baseButtonClasses, variants[variant], sizes[size], className)}
      href={href}
      onClick={handleClick}
      {...props}
    />
  );
}
