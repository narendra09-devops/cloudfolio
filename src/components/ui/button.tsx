import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const baseButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-primary text-white shadow-sm hover:bg-primary/90 focus-visible:ring-primary/40",
  secondary:
    "border-transparent bg-secondary text-white shadow-sm hover:bg-secondary/90 focus-visible:ring-secondary/40",
  outline:
    "border-border bg-transparent text-foreground hover:border-muted hover:bg-surface focus-visible:ring-primary/30",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-surface hover:text-foreground focus-visible:ring-primary/30",
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
