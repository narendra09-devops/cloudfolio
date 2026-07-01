"use client";

import { Activity, Database, Gauge, Server, ShieldAlert } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/projects/GlassCard";
import type { ProjectMetric } from "@/content/projects";

type MetricDashboardProps = {
  metrics: ProjectMetric[];
};

const icons: LucideIcon[] = [Database, Server, Server, ShieldAlert, Gauge];
const series = [
  [18, 42, 36, 58, 72, 84],
  [22, 36, 44, 61, 55, 78],
  [16, 28, 52, 46, 66, 74],
  [58, 52, 64, 48, 72, 86],
  [84, 72, 58, 44, 36, 24],
];

function parseValue(value: string) {
  const number = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  return {
    number: Number.isNaN(number) ? 0 : number,
    suffix: value.match(/[^\d]+$/)?.[0] ?? "",
  };
}

function Counter({ value }: { value: string }) {
  const { number, suffix } = useMemo(() => parseValue(value), [value]);
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setCount(number);
      return;
    }

    let frame = 0;
    let animationFrame = 0;
    const frames = 36;

    const tick = () => {
      frame += 1;
      const progress = Math.min(frame / frames, 1);
      setCount(Math.round(number * (1 - (1 - progress) ** 3)));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [number, reduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Sparkline({ values }: { values: number[] }) {
  const points = values.map((value, index) => `${index * 20},${100 - value}`).join(" ");

  return (
    <svg className="h-14 w-full text-secondary" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline
        fill="none"
        points={points}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <polyline
        fill="rgb(var(--color-secondary) / 0.12)"
        points={`0,100 ${points} 100,100`}
        stroke="none"
      />
    </svg>
  );
}

export function MetricDashboard({ metrics }: MetricDashboardProps) {
  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 18 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Metrics Dashboard
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              KPIs that changed the operating model.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
            <Activity className="size-4 text-success" />
            Reconciled estate view
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric, index) => {
            const Icon = icons[index] ?? Activity;

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassCard className="group relative h-full overflow-hidden p-5" interactive>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-border bg-surface/60 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                      KPI
                    </span>
                  </div>
                  <p className="mt-5 font-heading text-4xl font-semibold tracking-tight text-foreground">
                    <Counter value={metric.value} />
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{metric.label}</p>
                  <p className="mt-2 min-h-10 text-xs leading-5 text-muted-foreground">
                    {metric.context}
                  </p>
                  <div className="mt-4 rounded-xl border border-border/70 bg-background/50 p-2">
                    <Sparkline values={series[index] ?? series[0]} />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
