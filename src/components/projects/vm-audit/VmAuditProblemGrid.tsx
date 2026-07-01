"use client";

import {
  AlertTriangle,
  FileSearch,
  GitFork,
  ReceiptText,
  ShieldAlert,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { Project } from "@/content/projects";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

type ProblemCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";
  severity: "High" | "Medium";
};

const problems: ProblemCard[] = [
  {
    title: "Fragmented State",
    description: "Virtualization, billing, and spreadsheet records drifted independently.",
    icon: GitFork,
    accent: "purple",
    severity: "High",
  },
  {
    title: "Manual Evidence",
    description: "Teams needed repeatable evidence instead of spreadsheet-heavy reviews.",
    icon: FileSearch,
    accent: "blue",
    severity: "Medium",
  },
  {
    title: "Billing Mismatch",
    description: "Inactive billing signals did not always match powered-on workloads.",
    icon: ReceiptText,
    accent: "orange",
    severity: "High",
  },
  {
    title: "Lifecycle Risk",
    description: "Incorrect action could affect active enterprise workloads.",
    icon: AlertTriangle,
    accent: "orange",
    severity: "High",
  },
  {
    title: "Recovery Gaps",
    description: "Backups and restore paths needed validation before lifecycle changes.",
    icon: ShieldAlert,
    accent: "green",
    severity: "High",
  },
  {
    title: "Approval Workflow",
    description: "Stakeholders needed clear gates before customer-impacting actions.",
    icon: Workflow,
    accent: "emerald",
    severity: "Medium",
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

export function VmAuditProblemGrid({ project }: { project: Project }) {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Business Problem
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A high-cost estate with fragmented truth.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Technical Challenges
            </p>
            <span className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground">
              risk register
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problem.icon;

              return (
                <motion.div
                  initial={{ opacity: 0.72, y: 14 }}
                  key={problem.title}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <VmAuditGlassCard accent={problem.accent} className="h-full p-4" interactive>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`flex size-9 items-center justify-center rounded-xl border ${toneClass[problem.accent]}`}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${toneClass[problem.accent]}`}
                      >
                        {problem.severity}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">{problem.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {problem.description}
                    </p>
                  </VmAuditGlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
