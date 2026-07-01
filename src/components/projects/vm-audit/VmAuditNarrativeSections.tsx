"use client";

import {
  ArchiveRestore,
  CheckCircle2,
  ClipboardCheck,
  DatabaseZap,
  FileSearch,
  Handshake,
  Layers3,
  LineChart,
  ShieldCheck,
  UserRoundCog,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/content/projects";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

const roleItems: Array<{ title: string; description: string; icon: LucideIcon; accent: Accent }> = [
  {
    title: "Audit Workflow Design",
    description: "Designed the audit and reconciliation workflow.",
    icon: Layers3,
    accent: "blue",
  },
  {
    title: "Evidence Automation",
    description: "Built automation for inventory collection and evidence generation.",
    icon: FileSearch,
    accent: "cyan",
  },
  {
    title: "Lifecycle Controls",
    description: "Created lifecycle control processes.",
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    title: "Backup Validation",
    description: "Implemented backup validation.",
    icon: ArchiveRestore,
    accent: "green",
  },
  {
    title: "Stakeholder Alignment",
    description: "Coordinated with stakeholders.",
    icon: Handshake,
    accent: "purple",
  },
  {
    title: "Controlled Execution",
    description: "Executed controlled decommissioning.",
    icon: ClipboardCheck,
    accent: "orange",
  },
];

type Accent = "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";

const toneClass: Record<Accent, string> = {
  blue: "text-blue-400 bg-blue-500/12 border-blue-400/25",
  purple: "text-purple-400 bg-purple-500/12 border-purple-400/25",
  green: "text-green-400 bg-green-500/12 border-green-400/25",
  orange: "text-orange-400 bg-orange-500/12 border-orange-400/25",
  cyan: "text-cyan-400 bg-cyan-500/12 border-cyan-400/25",
  emerald: "text-emerald-400 bg-emerald-500/12 border-emerald-400/25",
};

const businessImpactCards: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
}> = [
  {
    title: "Cost Discipline",
    description:
      "Reduced waste by surfacing powered-on workloads without matching active commercial signals.",
    icon: DatabaseZap,
    accent: "orange",
  },
  {
    title: "Governance",
    description:
      "Made customer-impacting changes dependent on reconciled evidence and explicit approval.",
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    title: "Leadership Signal",
    description:
      "Presented the work as a repeatable operating model for interviews and portfolio review.",
    icon: UserRoundCog,
    accent: "purple",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5 max-w-3xl break-inside-avoid">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function VmAuditExecutiveSummary({ project }: { project: Project }) {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            description={project.summary}
            eyebrow="Executive Summary"
            title="A public-safe operating story for infrastructure governance at scale."
          />
          <VmAuditGlassCard accent="blue" className="p-5">
            <p className="text-sm leading-7 text-muted-foreground">
              The work converted fragmented environment state into a normalized, evidence-backed
              audit path. It gave engineering, operations, finance, and business stakeholders a
              shared view of workload status before any lifecycle action was considered.
            </p>
          </VmAuditGlassCard>
        </div>
        <VmAuditGlassCard accent="cyan" className="p-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Evidence Model
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(project.dataCollected ?? []).map((item, index) => (
              <motion.div
                className="rounded-xl border border-border bg-background/55 p-4"
                initial={{ opacity: 0.82, y: 10 }}
                key={item}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="bg-cyan-500/12 flex size-8 items-center justify-center rounded-xl border border-cyan-400/25 text-cyan-400">
                  <CheckCircle2 className="size-4" />
                </span>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}

export function VmAuditRoleSection() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeader
          description="Lead Digital Platform Engineer / Cloud Site Reliability Engineer"
          eyebrow="My Role"
          title="Owned the technical path from evidence design to controlled execution."
        />
        <div className="relative grid gap-3 lg:grid-cols-6">
          <div className="absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-primary via-secondary to-accent lg:block" />
          {roleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                className="relative"
                initial={{ opacity: 0.72, y: 14 }}
                key={item.title}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <VmAuditGlassCard accent={item.accent} className="h-full p-4" interactive>
                  <span
                    className={`flex size-11 items-center justify-center rounded-full border ${toneClass[item.accent]}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold leading-5 text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </VmAuditGlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function VmAuditEnvironmentScale({ project }: { project: Project }) {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Environment & Scale"
          title="Built for two enterprise environments with fragmented operational signals."
        />
        <VmAuditGlassCard accent="green" className="p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {project.environmentScale?.map((item) => (
              <div className="rounded-xl border border-border bg-background/55 p-4" key={item}>
                <span className="bg-green-500/12 flex size-8 items-center justify-center rounded-xl border border-green-400/25 text-green-400">
                  <CheckCircle2 className="size-4" />
                </span>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}

export function VmAuditResultsAndLessons({ project }: { project: Project }) {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeader
            description="The outcome was a reusable governance pattern, not a one-time cleanup."
            eyebrow="Results & Metrics"
            title="Operational signals became measurable, reviewable, and actionable."
          />
          <VmAuditGlassCard accent="blue" className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.businessImpact.map((item) => (
                <div className="rounded-xl border border-border bg-background/55 p-4" key={item}>
                  <span className="bg-blue-500/12 flex size-8 items-center justify-center rounded-xl border border-blue-400/25 text-blue-400">
                    <LineChart className="size-4" />
                  </span>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </VmAuditGlassCard>
        </div>
        <div>
          <SectionHeader eyebrow="Lessons Learned" title="What carried forward." />
          <VmAuditGlassCard accent="emerald" className="p-5">
            <div className="space-y-3">
              {project.lessonsLearned.map((lesson) => (
                <div
                  className="flex gap-3 rounded-xl border border-border bg-background/55 p-4"
                  key={lesson}
                >
                  <span className="bg-emerald-500/12 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-emerald-400/25 text-emerald-400">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">{lesson}</p>
                </div>
              ))}
            </div>
          </VmAuditGlassCard>
        </div>
      </div>
    </section>
  );
}

export function VmAuditBusinessImpactSummary() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-5 lg:grid-cols-3">
        {businessImpactCards.map(({ title, description, icon: Icon, accent }) => (
          <VmAuditGlassCard accent={accent} className="p-5" interactive key={title}>
            <span
              className={`flex size-11 items-center justify-center rounded-xl border ${toneClass[accent]}`}
            >
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
          </VmAuditGlassCard>
        ))}
      </div>
    </section>
  );
}
