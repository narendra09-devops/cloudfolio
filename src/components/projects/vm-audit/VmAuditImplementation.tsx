"use client";

import {
  ArchiveRestore,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  GitCompareArrows,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/content/projects";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

type WorkflowTab = {
  title: string;
  description: string;
  icon: LucideIcon;
  steps: string[];
};

const workflows: WorkflowTab[] = [
  {
    title: "Discovery",
    description: "Established the minimum reliable evidence set for every infrastructure asset.",
    icon: FileSearch,
    steps: ["Asset discovery", "Ownership mapping", "State normalization", "Evidence baseline"],
  },
  {
    title: "Reconciliation",
    description: "Compared infrastructure state against billing records and operational status.",
    icon: GitCompareArrows,
    steps: ["Billing match", "Status comparison", "Mismatch classification", "Review queue"],
  },
  {
    title: "Validation",
    description: "Confirmed recovery readiness before lifecycle actions were considered.",
    icon: ArchiveRestore,
    steps: ["Backup evidence", "Restore sampling", "Exception review", "Recovery sign-off"],
  },
  {
    title: "Lifecycle Controls",
    description:
      "Bound customer-impacting actions to approved asset identifiers and explicit gates.",
    icon: ClipboardCheck,
    steps: ["Approval gate", "Controlled action", "Outcome logging", "Optimization report"],
  },
];

export function VmAuditImplementation({ project }: { project: Project }) {
  const capabilities =
    project.implementation?.flatMap((section) => section.items).slice(0, 6) ?? [];
  const [activeTab, setActiveTab] = useState(workflows[0]);
  const ActiveIcon = activeTab.icon;

  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Implementation
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Operator tooling without exposing proprietary internals.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <VmAuditGlassCard className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  className="rounded-xl border border-border bg-background/55 p-4"
                  key={capability}
                >
                  <CheckCircle2 className="size-5 text-success" />
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability}</p>
                </div>
              ))}
            </div>
          </VmAuditGlassCard>
          <VmAuditGlassCard className="p-4">
            <div className="grid gap-2 sm:grid-cols-4">
              {workflows.map((workflow) => {
                const Icon = workflow.icon;
                const selected = activeTab.title === workflow.title;
                return (
                  <button
                    className={`flex min-h-16 items-center gap-2 rounded-xl border px-3 text-left text-xs font-semibold transition-colors ${
                      selected
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-background/55 text-muted-foreground hover:text-foreground"
                    }`}
                    key={workflow.title}
                    onClick={() => setActiveTab(workflow)}
                    type="button"
                  >
                    <Icon className="size-4 shrink-0" />
                    <span>{workflow.title}</span>
                  </button>
                );
              })}
            </div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-2xl border border-border bg-background/55 p-5"
              initial={{ opacity: 0.72, y: 8 }}
              key={activeTab.title}
            >
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ActiveIcon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{activeTab.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {activeTab.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {activeTab.steps.map((step, index) => (
                  <motion.div
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3"
                    initial={{ opacity: 0.72, x: -8 }}
                    key={step}
                    transition={{ delay: index * 0.04 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </VmAuditGlassCard>
        </div>
      </div>
    </section>
  );
}
