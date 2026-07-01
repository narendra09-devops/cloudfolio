"use client";

import { Check, Copy, Workflow } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/projects/GlassCard";

type TerminalCardProps = {
  scripts: string[];
  capabilities: string[];
};

function toCommandLabel(workflow: string) {
  return workflow
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function TerminalCard({ scripts, capabilities }: TerminalCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyWorkflow(script: string) {
    await navigator.clipboard.writeText(toCommandLabel(script));
    setCopied(script);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Implementation
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Automation capabilities shipped as practical operator tooling.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Workflow className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Automation capabilities
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Inventory, backup, restore, and lifecycle operations.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {capabilities.map((capability) => (
                <div
                  className="rounded-xl border border-border bg-background/60 p-4 text-sm leading-6 text-muted-foreground"
                  key={capability}
                >
                  {capability}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="overflow-hidden">
            <div className="border-b border-border bg-card/70 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-success" />
                <span className="size-3 rounded-full bg-secondary" />
                <span className="size-3 rounded-full bg-accent" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  infrastructure-audit-platform
                </span>
              </div>
            </div>
            <div className="space-y-3 p-5">
              {scripts.map((script) => (
                <div
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background/80 p-4"
                  key={script}
                >
                  <code className="min-w-0 truncate font-mono text-sm text-foreground">
                    {toCommandLabel(script)}
                  </code>
                  <button
                    aria-label={`Copy ${script}`}
                    className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    onClick={() => void copyWorkflow(script)}
                    type="button"
                  >
                    {copied === script ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
