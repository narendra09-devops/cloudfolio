import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg shadow-primary/20 hover:shadow-primary/35 focus-visible:ring-primary/40",
  secondary:
    "border-transparent bg-gradient-to-r from-secondary to-primary text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/35 focus-visible:ring-secondary/40",
  outline:
    "border-primary/25 bg-surface/80 text-foreground hover:border-primary/50 hover:bg-primary/10 hover:shadow-primary/15 focus-visible:ring-primary/30",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-surface hover:text-foreground hover:shadow-primary/10 focus-visible:ring-primary/30",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(baseButtonClasses, variants[variant], sizes[size], className)}
      href={href}
      {...props}
    />
  );
}
