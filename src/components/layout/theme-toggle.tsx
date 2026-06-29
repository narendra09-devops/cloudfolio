"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <IconButton aria-label="Toggle theme" title="Toggle theme">
        <Sun className="size-4" />
      </IconButton>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      aria-label={`Switch theme to ${isDark ? "light" : "dark"}`}
      title={`Switch theme to ${isDark ? "light" : "dark"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}

      <span className="sr-only">Switch theme to {isDark ? "light" : "dark"}</span>
    </IconButton>
  );
}
