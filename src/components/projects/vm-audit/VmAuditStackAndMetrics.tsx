"use client";

import {
  Boxes,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  GitCompareArrows,
  LockKeyhole,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/content/projects";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

type Accent = "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";

const toneClass: Record<Accent, string> = {
  blue: "text-blue-400 bg-blue-500/12 border-blue-400/25",
  purple: "text-purple-400 bg-purple-500/12 border-purple-400/25",
  green: "text-green-400 bg-green-500/12 border-green-400/25",
  orange: "text-orange-400 bg-orange-500/12 border-orange-400/25",
  cyan: "text-cyan-400 bg-cyan-500/12 border-cyan-400/25",
  emerald: "text-emerald-400 bg-emerald-500/12 border-emerald-400/25",
};

const technologyItems: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
}> = [
  {
    title: "Virtualization Platform",
    description: "Infrastructure inventory, workload state, capacity, and placement signals.",
    icon: Server,
    accent: "blue",
  },
  {
    title: "Billing Platform",
    description:
      "Commercial state used to reconcile ownership, status, and active service signals.",
    icon: Database,
    accent: "purple",
  },
  {
    title: "Audit Platform",
    description: "Normalized evidence layer for comparison, reporting, and review workflows.",
    icon: GitCompareArrows,
    accent: "cyan",
  },
  {
    title: "Object Storage",
    description: "Backup evidence and recovery validation artifacts before lifecycle execution.",
    icon: Cloud,
    accent: "green",
  },
  {
    title: "Lifecycle Controls",
    description: "Approval-gated operations bound to verified asset identifiers.",
    icon: Workflow,
    accent: "emerald",
  },
  {
    title: "Governance Layer",
    description: "Stakeholder approvals, audit evidence, and controlled execution records.",
    icon: LockKeyhole,
    accent: "orange",
  },
];

const metricCards: Array<{
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
  trend: string;
  progress: number;
}> = [
  {
    title: "Audit Coverage",
    value: "900+",
    description: "Infrastructure assets reconciled across two environments.",
    icon: Boxes,
    accent: "blue",
    trend: "estate mapped",
    progress: 94,
  },
  {
    title: "Optimization Queue",
    value: "300+",
    description: "Inactive workloads identified for ownership and billing review.",
    icon: Gauge,
    accent: "orange",
    trend: "review ready",
    progress: 76,
  },
  {
    title: "Manual Effort",
    value: "70%",
    description: "Reduction through reusable evidence and reconciliation workflows.",
    icon: Zap,
    accent: "cyan",
    trend: "effort reduced",
    progress: 70,
  },
  {
    title: "Control Gates",
    value: "100%",
    description: "Customer-impacting lifecycle actions required explicit approval.",
    icon: ShieldCheck,
    accent: "emerald",
    trend: "approval enforced",
    progress: 100,
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-5 max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
    </div>
  );
}

export function VmAuditTechnologyStack() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionIntro
          description="The implementation used generalized platform categories and public-safe labels while preserving the actual operating model."
          eyebrow="Technology Stack"
          title="A controlled platform workflow across inventory, reconciliation, recovery, and governance."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {technologyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0.76, y: 12 }}
                key={item.title}
                transition={{ delay: index * 0.035 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <VmAuditGlassCard accent={item.accent} className="h-full p-4" interactive>
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl border ${toneClass[item.accent]}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </VmAuditGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VmAuditBusinessMetrics({ project }: { project: Project }) {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionIntro
          description="Metrics are generalized for confidentiality, but preserve the business outcome pattern: visibility, control, cost optimization, and reduced manual review."
          eyebrow="Business Metrics"
          title="Executive operating signals tied to measurable infrastructure outcomes."
        />
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((metric, index) => {
            const Icon = metric.icon;
            const metricContext = project.metrics[index]?.context ?? metric.description;
            return (
              <motion.div
                initial={{ opacity: 0.76, y: 12 }}
                key={metric.title}
                transition={{ delay: index * 0.045 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <VmAuditGlassCard accent={metric.accent} className="h-full p-4" interactive>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl border ${toneClass[metric.accent]}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-success/25 bg-success/10 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-success">
                      <CheckCircle2 className="size-3" />
                      {metric.trend}
                    </span>
                  </div>
                  <p className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">{metric.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {metricContext}
                  </p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-background">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ width: "18%" }}
                      viewport={{ once: true }}
                      whileInView={{ width: `${metric.progress}%` }}
                    />
                  </div>
                  <div className="mt-3 flex h-8 items-end gap-1">
                    {[42, metric.progress - 24, metric.progress - 12, metric.progress].map(
                      (value, barIndex) => (
                        <span
                          className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-secondary"
                          key={`${metric.title}-${barIndex}`}
                          style={{ height: `${Math.max(24, value)}%` }}
                        />
                      ),
                    )}
                  </div>
                </VmAuditGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
