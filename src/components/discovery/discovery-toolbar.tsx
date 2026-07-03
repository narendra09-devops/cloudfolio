"use client";

import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export type DiscoveryFilterOption = {
  value: string;
  label: string;
  tone?: "primary" | "secondary" | "success" | "warning" | "accent";
};

export type DiscoveryFilterGroup = {
  label: string;
  options: DiscoveryFilterOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
};

const toneClasses: Record<NonNullable<DiscoveryFilterOption["tone"]>, string> = {
  primary:
    "border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 focus-visible:ring-primary/40",
  secondary:
    "border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/15 focus-visible:ring-secondary/40",
  success:
    "border-success/30 bg-success/10 text-success hover:bg-success/15 focus-visible:ring-success/40",
  warning:
    "border-amber-400/30 bg-amber-500/10 text-amber-500 hover:bg-amber-500/15 focus-visible:ring-amber-400/40",
  accent:
    "border-accent/30 bg-accent/10 text-accent hover:bg-accent/15 focus-visible:ring-accent/40",
};

type DiscoveryToolbarProps = {
  searchLabel: string;
  searchPlaceholder: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterGroups: DiscoveryFilterGroup[];
  resultsCount: number;
  totalCount: number;
  onClear: () => void;
  clearLabel?: string;
};

export function DiscoveryToolbar({
  searchLabel,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  filterGroups,
  resultsCount,
  totalCount,
  onClear,
  clearLabel = "Clear filters",
}: DiscoveryToolbarProps) {
  const hasFilters =
    Boolean(searchValue) || filterGroups.some((group) => group.selectedValues.length);

  return (
    <div className="rounded-2xl border border-border/70 bg-background/70 p-4 shadow-lg shadow-primary/5 backdrop-blur-xl sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <label className="block w-full max-w-2xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {searchLabel}
          </span>
          <span className="relative block">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
            />
            <input
              className="h-12 w-full rounded-xl border border-border bg-background/90 pl-10 pr-10 text-sm text-foreground outline-none transition-all placeholder:text-muted focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={searchPlaceholder}
              value={searchValue}
            />
            {searchValue ? (
              <button
                aria-label="Clear search"
                className="absolute right-1 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                onClick={() => onSearchChange("")}
                type="button"
              >
                <X aria-hidden="true" className="size-4" />
              </button>
            ) : null}
          </span>
        </label>

        <div className="flex items-center gap-3">
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">{resultsCount}</span> of {totalCount}
          </p>
          {hasFilters ? (
            <Button onClick={onClear} size="sm" variant="outline">
              {clearLabel}
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {filterGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => {
                const selected = group.selectedValues.includes(option.value);
                const tone = option.tone ?? "primary";

                return (
                  <button
                    aria-pressed={selected}
                    className={cn(
                      "inline-flex min-h-10 items-center rounded-full border px-3.5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      toneClasses[tone],
                      selected && "shadow-sm ring-1 ring-inset ring-current",
                    )}
                    key={option.value}
                    onClick={() => group.onToggle(option.value)}
                    type="button"
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
