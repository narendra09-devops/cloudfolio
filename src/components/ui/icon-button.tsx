import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type IconButtonVariant = "outline" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

const variants: Record<IconButtonVariant, string> = {
  outline:
    "border-border bg-transparent text-muted hover:border-muted hover:bg-surface hover:text-foreground",
  ghost: "border-transparent bg-transparent text-muted hover:bg-surface hover:text-foreground",
};

const sizes: Record<IconButtonSize, string> = {
  sm: "size-9",
  md: "size-10",
  lg: "size-11",
};

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
}

export function IconButton({
  className,
  variant = "ghost",
  size = "md",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md border transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
