"use client";

import {
  ArrowRight,
  BadgeCheck,
  Contact,
  DatabaseZap,
  Gauge,
  Layers3,
  Network,
  ReceiptText,
  Server,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/content/projects";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

type VmAuditHeroProps = {
  project: Project;
};

type Accent = "blue" | "purple" | "green" | "orange" | "cyan" | "emerald";

const kpis: Array<{
  value: string;
  label: string;
  accent: Accent;
  icon: typeof Gauge;
  spark: string;
}> = [
  {
    value: "900+",
    label: "Infrastructure Assets Audited",
    accent: "blue",
    icon: DatabaseZap,
    spark: "M2 28 C16 18 22 22 34 14 S58 18 70 8",
  },
  {
    value: "300+",
    label: "Inactive Workloads Identified",
    accent: "orange",
    icon: Gauge,
    spark: "M2 10 C18 18 20 28 36 22 S56 12 70 18",
  },
  {
    value: "70%",
    label: "Manual Effort Reduction",
    accent: "cyan",
    icon: Network,
    spark: "M2 30 C18 30 22 18 36 18 S54 10 70 8",
  },
  {
    value: "100%",
    label: "Approval Gates",
    accent: "emerald",
    icon: ShieldCheck,
    spark: "M2 26 C18 20 24 24 36 14 S58 12 70 6",
  },
  {
    value: "2",
    label: "Enterprise Environments",
    accent: "purple",
    icon: Server,
    spark: "M2 18 C16 8 24 28 36 18 S56 8 70 18",
  },
];

const miniNodes = [
  {
    label: "Environment A",
    x: 16,
    y: 26,
    icon: Server,
    tone: "text-blue-400 bg-blue-500/12 border-blue-400/25",
  },
  {
    label: "Environment B",
    x: 16,
    y: 68,
    icon: Server,
    tone: "text-purple-400 bg-purple-500/12 border-purple-400/25",
  },
  {
    label: "Billing Platform",
    x: 44,
    y: 22,
    icon: ReceiptText,
    tone: "text-orange-400 bg-orange-500/12 border-orange-400/25",
  },
  {
    label: "Audit Platform",
    x: 50,
    y: 54,
    icon: Network,
    tone: "text-cyan-400 bg-cyan-500/12 border-cyan-400/25",
  },
  {
    label: "Lifecycle Controls",
    x: 74,
    y: 46,
    icon: ShieldCheck,
    tone: "text-emerald-400 bg-emerald-500/12 border-emerald-400/25",
  },
];

function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const paths = [
    "M110 112 C186 112 232 156 300 194",
    "M110 292 C186 286 232 226 300 194",
    "M304 92 C324 124 332 150 330 172",
    "M374 194 C426 194 448 186 486 184",
  ];

  return (
    <VmAuditGlassCard accent="purple" className="min-h-[22rem] p-4 sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgb(var(--color-secondary)/0.30),transparent_28%),radial-gradient(circle_at_76%_30%,rgb(var(--color-accent)/0.24),transparent_32%),linear-gradient(135deg,rgba(59,130,246,0.12),rgba(168,85,247,0.10),rgba(16,185,129,0.10))]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgb(var(--color-foreground)/0.28)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Architecture Preview
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Generic operating flow</p>
        </div>
        <span className="rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
          anonymized
        </span>
      </div>
      <div className="relative h-[15.5rem] sm:h-[17rem]">
        <svg className="absolute inset-0 h-full w-full text-secondary/70" viewBox="0 0 620 360">
          {paths.map((path, index) => (
            <motion.path
              animate={reduceMotion ? undefined : { pathLength: 1, opacity: [0.35, 0.95, 0.45] }}
              d={path}
              fill="none"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
              key={path}
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
              transition={{
                delay: index * 0.14,
                duration: 2.5,
                repeat: reduceMotion ? 0 : Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </svg>
        {miniNodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: [0, -4, 0] }}
              className="absolute w-36 rounded-2xl border border-border/70 bg-surface/80 p-3 shadow-lg backdrop-blur-xl dark:bg-background/65 sm:w-40"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              key={node.label}
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
              transition={{
                delay: index * 0.08,
                duration: 4,
                repeat: reduceMotion ? 0 : Infinity,
                repeatType: "mirror",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-9 items-center justify-center rounded-xl border ${node.tone}`}
                >
                  <Icon className="size-4" />
                </span>
                <span className="text-xs font-semibold leading-4 text-foreground">
                  {node.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </VmAuditGlassCard>
  );
}

function AnimatedMetric({
  accent,
  icon: Icon,
  index,
  label,
  spark,
  value,
}: {
  accent: Accent;
  icon: typeof Gauge;
  index: number;
  label: string;
  spark: string;
  value: string;
}) {
  const reduceMotion = useReducedMotion();
  const numeric = Number.parseInt(value, 10);
  const suffix = value.replace(String(numeric), "");
  const [display, setDisplay] = useState(reduceMotion ? numeric : 0);

  useEffect(() => {
    if (reduceMotion || Number.isNaN(numeric)) {
      setDisplay(numeric);
      return;
    }

    let frame = 0;
    const totalFrames = 36;
    const interval = window.setInterval(() => {
      frame += 1;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(Math.round(numeric * eased));
      if (frame >= totalFrames) {
        window.clearInterval(interval);
      }
    }, 24);

    return () => window.clearInterval(interval);
  }, [numeric, reduceMotion]);

  return (
    <VmAuditGlassCard accent={accent} className="p-3.5" interactive>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            {Number.isNaN(numeric) ? value : `${display}${suffix}`}
          </p>
          <p className="mt-1 text-xs font-medium leading-5 text-muted-foreground">{label}</p>
        </div>
        <span className="border-current/20 flex size-9 shrink-0 items-center justify-center rounded-xl border bg-background/50 text-primary shadow-lg shadow-primary/10">
          <Icon className="size-4" />
        </span>
      </div>
      <div className="mt-3 grid grid-cols-[1fr_4.5rem] items-end gap-3">
        <div className="h-1.5 rounded-full bg-background">
          <motion.span
            className="block h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ width: "20%" }}
            viewport={{ once: true }}
            whileInView={{ width: `${68 + index * 6}%` }}
          />
        </div>
        <svg className="h-8 w-full text-secondary" viewBox="0 0 72 34">
          <path d={`${spark} L70 34 L2 34 Z`} fill="currentColor" opacity="0.16" />
          <path d={spark} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
        </svg>
      </div>
    </VmAuditGlassCard>
  );
}

export function VmAuditHero({ project }: VmAuditHeroProps) {
  return (
    <section className="relative break-inside-avoid overflow-hidden px-4 pb-8 pt-8 sm:px-6 md:pb-10 lg:px-8 xl:pb-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.22),transparent_28rem),radial-gradient(circle_at_70%_8%,rgba(168,85,247,0.20),transparent_28rem),radial-gradient(circle_at_92%_28%,rgba(16,185,129,0.16),transparent_24rem)]" />
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 18 }}>
            <Link
              className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              href="/projects"
            >
              <ArrowRight className="size-4 rotate-180" />
              Projects
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-semibold text-primary shadow-lg shadow-primary/10 backdrop-blur-xl">
              <BadgeCheck className="size-4" />
              SaaS Infrastructure Case Study
            </div>
            <h1 className="mt-5 max-w-5xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Public-safe infrastructure audit platform for a{" "}
              <span className="font-semibold text-foreground">
                Confidential Enterprise Customer
              </span>{" "}
              in the <span className="font-semibold text-foreground">Global Hosting Provider</span>{" "}
              category.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/25"
                href="/resume"
              >
                View Resume
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-500/15"
                href="/contact"
              >
                <Contact className="size-4" />
                Contact Me
              </Link>
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-purple-400/60 hover:bg-purple-500/15"
                href="/projects"
              >
                <Layers3 className="size-4" />
                Explore More Projects
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Customer", "Confidential Enterprise Customer", "blue"],
                ["Category", "Global Hosting Provider", "purple"],
                ["Duration", project.duration ?? "November 2025 - April 2026", "emerald"],
              ].map(([label, value, accent]) => (
                <VmAuditGlassCard
                  accent={accent as "blue" | "purple" | "emerald"}
                  className="p-4"
                  key={label}
                >
                  <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-5 text-foreground">{value}</p>
                </VmAuditGlassCard>
              ))}
            </div>
          </motion.div>
          <HeroVisual />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {kpis.map((kpi, index) => (
            <AnimatedMetric index={index} key={kpi.label} {...kpi} />
          ))}
        </div>
      </div>
    </section>
  );
}
