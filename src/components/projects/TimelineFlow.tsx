"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/projects/GlassCard";

const milestones = [
  ["Nov 2025", "Discovery"],
  ["Dec 2025", "Data Collection"],
  ["Jan 2026", "Reconciliation Engine"],
  ["Feb 2026", "Reporting"],
  ["Mar 2026", "Backup Automation"],
  ["Apr 2026", "Controlled Actions"],
];

export function TimelineFlow() {
  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Project Timeline
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Seven-month path from discovery to controlled optimization.
          </h2>
        </div>

        <GlassCard className="overflow-hidden p-5">
          <div className="relative grid gap-4 md:grid-cols-7">
            <div className="absolute left-8 top-9 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-primary via-secondary to-accent md:block" />
            {milestones.map(([date, title], index) => (
              <motion.div
                className="relative rounded-2xl border border-border bg-surface/70 p-4 dark:bg-card/65"
                initial={{ opacity: 0, y: 18 }}
                key={date}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="relative z-10 flex size-9 items-center justify-center rounded-full bg-primary text-[0.7rem] font-semibold">
                  <CheckCircle2 className="size-4 text-surface" />
                </span>
                <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {date}
                </p>
                <p className="mt-2 text-sm font-semibold leading-5 text-foreground">{title}</p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
