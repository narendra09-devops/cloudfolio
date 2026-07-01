"use client";

import { AlertTriangle, CloudOff, FileSearch, Gauge, GitFork, ReceiptText } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/projects/GlassCard";

type ProblemInfographicProps = {
  problem: string;
};

type ProblemCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

const cards: ProblemCard[] = [
  {
    title: "No Central Dashboard",
    description: "Workload state had to be assembled from multiple operational systems.",
    icon: Gauge,
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "No Single Source of Truth",
    description: "Infrastructure, billing, and spreadsheet records drifted independently.",
    icon: GitFork,
    accent: "bg-accent/10 text-accent",
  },
  {
    title: "Billing Discrepancies",
    description: "Inactive billing records did not always match powered-on infrastructure.",
    icon: ReceiptText,
    accent: "bg-secondary/10 text-secondary",
  },
  {
    title: "Manual Validation Burden",
    description: "More than 900 assets required careful ownership and status verification.",
    icon: FileSearch,
    accent: "bg-success/10 text-success",
  },
  {
    title: "Customer Outage Risk",
    description: "Incorrect lifecycle action could interrupt active enterprise workloads.",
    icon: AlertTriangle,
    accent: "bg-primary/10 text-primary",
  },
  {
    title: "No Backup Automation",
    description: "Recovery validation needed to happen before decommissioning decisions.",
    icon: CloudOff,
    accent: "bg-accent/10 text-accent",
  },
];

export function ProblemInfographic({ problem }: ProblemInfographicProps) {
  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Business Problem
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The risk was hidden in fragmented state.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{problem}</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const wide = index === 1 || index === 4;

              return (
                <motion.div
                  className={wide ? "sm:col-span-2" : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  key={card.title}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <GlassCard className="group relative h-full overflow-hidden p-5" interactive>
                    <div className="absolute -right-10 -top-10 size-28 rounded-full bg-secondary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div
                      className={`relative flex size-11 items-center justify-center rounded-xl ${card.accent}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {card.description}
                    </p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background">
                      <motion.span
                        className="block h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                        initial={{ width: "20%" }}
                        viewport={{ once: true }}
                        whileInView={{ width: `${58 + index * 6}%` }}
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
