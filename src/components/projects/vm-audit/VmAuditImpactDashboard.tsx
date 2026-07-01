"use client";

import { BarChart3, Eye, Gauge, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

type ImpactCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";
  values: number[];
};

const impact: ImpactCard[] = [
  {
    title: "Cost Optimization",
    description: "Powered-on inactive workloads became visible for review.",
    icon: BarChart3,
    accent: "orange",
    values: [72, 64, 55, 44, 36],
  },
  {
    title: "Manual Effort Reduction",
    description: "Reusable workflows replaced repetitive evidence gathering.",
    icon: Zap,
    accent: "cyan",
    values: [28, 42, 54, 63, 70],
  },
  {
    title: "Infrastructure Visibility",
    description: "A normalized inventory gave teams one operating picture.",
    icon: Eye,
    accent: "blue",
    values: [30, 45, 58, 74, 88],
  },
  {
    title: "Governance Improvement",
    description: "Approval gates made lifecycle actions auditable.",
    icon: ShieldCheck,
    accent: "emerald",
    values: [34, 48, 62, 78, 92],
  },
  {
    title: "Decommission Confidence",
    description: "Backup validation reduced execution risk.",
    icon: Gauge,
    accent: "green",
    values: [26, 38, 55, 72, 86],
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

export function VmAuditImpactDashboard() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Business Impact
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Compact operating leverage dashboard.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {impact.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                initial={{ opacity: 0.72, y: 14 }}
                key={card.title}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <VmAuditGlassCard accent={card.accent} className="h-full p-3.5" interactive>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex size-9 items-center justify-center rounded-xl border ${toneClass[card.accent]}`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="rounded-full border border-border bg-background/55 px-2.5 py-1 font-mono text-xs font-semibold text-foreground">
                      {card.values.at(-1)}%
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="mt-3 h-1.5 rounded-full bg-background">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ width: "18%" }}
                      viewport={{ once: true }}
                      whileInView={{ width: `${card.values.at(-1)}%` }}
                    />
                  </div>
                  <div className="mt-3 flex h-7 items-end gap-1">
                    {card.values.map((value, barIndex) => (
                      <motion.span
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/35 via-secondary/70 to-accent"
                        initial={{ height: "18%" }}
                        key={`${card.title}-${value}`}
                        viewport={{ once: true }}
                        whileInView={{ height: `${value}%` }}
                        transition={{ delay: barIndex * 0.04 }}
                      />
                    ))}
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
