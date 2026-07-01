"use client";

import {
  ArchiveRestore,
  CheckCircle2,
  Database,
  FileSearch,
  LineChart,
  Network,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

type Milestone = {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";
  status: string;
};

const milestones: Milestone[] = [
  {
    date: "Nov 2025",
    title: "Discovery",
    description: "Mapped fragmented state across environment, billing, and stakeholder inputs.",
    icon: FileSearch,
    accent: "blue",
    status: "complete",
  },
  {
    date: "Dec 2025",
    title: "Data Collection",
    description: "Collected normalized asset, ownership, status, and capacity evidence.",
    icon: Database,
    accent: "cyan",
    status: "complete",
  },
  {
    date: "Jan 2026",
    title: "Reconciliation Engine",
    description: "Matched infrastructure state with commercial records and lifecycle signals.",
    icon: Network,
    accent: "purple",
    status: "complete",
  },
  {
    date: "Feb 2026",
    title: "Reporting",
    description: "Produced audit reports for discrepancy review and stakeholder approval.",
    icon: LineChart,
    accent: "orange",
    status: "complete",
  },
  {
    date: "Mar 2026",
    title: "Backup Validation",
    description: "Validated recovery evidence before any lifecycle action was queued.",
    icon: ArchiveRestore,
    accent: "green",
    status: "complete",
  },
  {
    date: "Apr 2026",
    title: "Controlled Lifecycle & Optimization",
    description:
      "Executed approved lifecycle controls and converted findings into operating leverage.",
    icon: ShieldCheck,
    accent: "emerald",
    status: "complete",
  },
];

const toneClass = {
  blue: "text-blue-400 bg-blue-500/12 border-blue-400/25",
  purple: "text-purple-400 bg-purple-500/12 border-purple-400/25",
  green: "text-green-400 bg-green-500/12 border-green-400/25",
  orange: "text-orange-400 bg-orange-500/12 border-orange-400/25",
  cyan: "text-cyan-400 bg-cyan-500/12 border-cyan-400/25",
  emerald: "text-emerald-400 bg-emerald-500/12 border-emerald-400/25",
};

export function VmAuditTimeline() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Timeline
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Six months from discovery to controlled lifecycle optimization.
          </h2>
        </div>
        <VmAuditGlassCard accent="purple" className="p-4 sm:p-5">
          <div className="relative grid gap-3 lg:grid-cols-6">
            <div className="absolute left-8 right-8 top-5 hidden h-px bg-gradient-to-r from-blue-500 via-orange-500 via-purple-500 to-emerald-500 lg:block" />
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  className="relative flex gap-3 rounded-xl border border-border bg-background/55 p-3 shadow-sm shadow-primary/5 lg:block"
                  initial={{ opacity: 0.72, y: 12 }}
                  key={milestone.date}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <span
                    className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border shadow-lg ${toneClass[milestone.accent]}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="lg:mt-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-primary">
                        {milestone.date}
                      </p>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${toneClass[milestone.accent]}`}
                      >
                        <CheckCircle2 className="size-3" />
                        {milestone.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-5 text-foreground">
                      {milestone.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}
