"use client";

import { BarChart3, Gauge, Network, ShieldCheck, Zap } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { GlassCard } from "@/components/projects/GlassCard";

const impactCards = [
  {
    title: "Infrastructure Cost Reduction",
    description:
      "Reduced unnecessary infrastructure costs by identifying powered-on workloads without corresponding active billing signals.",
    icon: BarChart3,
    data: [68, 58, 49, 42, 35, 28],
  },
  {
    title: "Operational Efficiency",
    description:
      "Reduced operational overhead by replacing spreadsheet-heavy reviews with repeatable automation.",
    icon: Zap,
    data: [28, 36, 48, 59, 66, 72],
  },
  {
    title: "Infrastructure Visibility",
    description: "Improved visibility and governance across the virtual infrastructure estate.",
    icon: Network,
    data: [20, 32, 45, 64, 78, 88],
  },
  {
    title: "Governance Improvement",
    description:
      "Established a controlled, auditable process for customer-impacting workload lifecycle changes.",
    icon: ShieldCheck,
    data: [34, 41, 52, 60, 74, 84],
  },
  {
    title: "Decommission Confidence",
    description:
      "Increased stakeholder confidence by tying lifecycle actions to reconciled evidence.",
    icon: Gauge,
    data: [24, 30, 44, 57, 73, 86],
  },
];

export function BusinessImpactCharts() {
  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Business Impact Dashboard
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Impact translated into measurable operating leverage.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {impactCards.map((card) => {
            const Icon = card.icon;
            const chartData = card.data.map((value, index) => ({ index, value }));

            return (
              <GlassCard className="p-5" interactive key={card.title}>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {card.data.at(-1)}%
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 min-h-24 text-sm leading-6 text-muted-foreground">
                  {card.description}
                </p>
                <div className="mt-4 h-24">
                  <ResponsiveContainer height="100%" width="100%">
                    <AreaChart data={chartData} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
                      <Area
                        dataKey="value"
                        fill="rgb(var(--color-secondary) / 0.18)"
                        stroke="rgb(var(--color-secondary))"
                        strokeWidth={2}
                        type="monotone"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
