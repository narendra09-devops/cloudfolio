"use client";

import { FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconButton } from "@/components/ui/icon-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background/82 supports-[backdrop-filter]:bg-background/72 sticky top-0 z-50 border-b border-border/70 backdrop-blur-xl">
      <Container>
        <nav aria-label="Primary navigation" className="flex h-16 items-center justify-between">
          <Link
            className="inline-flex items-center gap-2 rounded-md font-heading text-sm font-semibold tracking-tight text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="/"
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-primary shadow-[0_0_24px_rgba(37,99,235,0.75)]"
            />
            {siteConfig.name}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {mainNavigation.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium text-muted transition-all",
                    "hover:-translate-y-0.5 hover:bg-surface/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active &&
                      "bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 text-primary shadow-sm ring-1 ring-primary/25",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <ButtonLink aria-label="View resume" href="/resume" size="sm" variant="primary">
              <FileText aria-hidden="true" className="size-4" />
              Resume
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <IconButton
              aria-controls="mobile-navigation"
              aria-expanded={open}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </IconButton>
          </div>
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-border md:hidden" id="mobile-navigation">
          <Container className="py-3">
            <div className="grid gap-1">
              {mainNavigation.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors",
                      "hover:bg-surface/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      active &&
                        "bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 text-primary shadow-sm ring-1 ring-primary/25",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ButtonLink className="mt-2 w-full" href="/resume" size="sm" variant="primary">
                <FileText aria-hidden="true" className="size-4" />
                Resume
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
