"use client";

import { Cloud, Database, FileText, Server, ShieldCheck, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/projects/GlassCard";
import type { ProjectMermaidDiagram } from "@/content/projects";

type ArchitectureDiagramProps = {
  mermaid?: ProjectMermaidDiagram;
};

type Node = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
  icon: LucideIcon;
};

const nodes: Node[] = [
  { id: "env-a", label: "Environment A", detail: "asset pool", x: 92, y: 90, icon: Server },
  { id: "env-b", label: "Environment B", detail: "asset pool", x: 92, y: 280, icon: Server },
  { id: "engine", label: "Audit Platform", detail: "reconcile", x: 360, y: 185, icon: Workflow },
  { id: "billing", label: "Billing Platform", detail: "billing", x: 360, y: 350, icon: Database },
  { id: "db", label: "Asset Inventory", detail: "normalized", x: 620, y: 185, icon: Database },
  { id: "reports", label: "Reports", detail: "evidence", x: 815, y: 185, icon: FileText },
  { id: "storage", label: "Object Storage", detail: "backups", x: 815, y: 350, icon: Cloud },
  {
    id: "decom",
    label: "Lifecycle Controls",
    detail: "approved",
    x: 1040,
    y: 268,
    icon: ShieldCheck,
  },
];

const links = [
  "M180 116 C246 122 292 156 306 182",
  "M180 306 C246 296 292 228 306 196",
  "M418 218 C434 258 422 310 386 328",
  "M426 185 C496 185 540 185 574 185",
  "M666 185 C720 185 760 185 774 185",
  "M815 228 C815 268 815 306 815 318",
  "M862 350 C924 338 970 306 1000 282",
  "M862 185 C924 198 970 230 1000 258",
];

export function ArchitectureDiagram({ mermaid }: ArchitectureDiagramProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]" id="architecture">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mx-auto mb-8 max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Solution Architecture
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A reconciliation system with approval, recovery, and lifecycle controls.
          </h2>
        </motion.div>

        <GlassCard className="overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="relative overflow-x-auto">
            <div className="min-w-[1120px]">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-[450px] w-full text-primary/60 dark:text-secondary/60"
                viewBox="0 0 1120 450"
              >
                <defs>
                  <filter id="architectureGlow">
                    <feGaussianBlur result="blur" stdDeviation="4" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {links.map((link, index) => (
                  <motion.path
                    d={link}
                    fill="none"
                    filter="url(#architectureGlow)"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
                    key={link}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    animate={
                      reduceMotion ? undefined : { pathLength: 1, opacity: [0.35, 0.95, 0.45] }
                    }
                    transition={{
                      duration: 2.4,
                      delay: index * 0.1,
                      repeat: reduceMotion ? 0 : Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </svg>

              <div className="relative h-[450px]">
                {nodes.map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <motion.div
                      className="absolute w-36 rounded-2xl border border-border bg-surface/90 p-3 shadow-xl shadow-primary/10 backdrop-blur-xl dark:bg-card/85"
                      key={node.id}
                      style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                      animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: index * 0.06 }}
                      whileHover={reduceMotion ? undefined : { scale: 1.05, y: -4 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
                          <Icon className="size-4" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold text-foreground">
                            {node.label}
                          </span>
                          <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                            {node.detail}
                          </span>
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {mermaid ? (
            <details className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/55">
              <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-foreground">
                Mermaid source
              </summary>
              <pre className="overflow-x-auto border-t border-border p-5 text-xs leading-6 text-muted-foreground">
                <code className="language-mermaid">{mermaid.code}</code>
              </pre>
            </details>
          ) : null}
        </GlassCard>
      </div>
    </section>
  );
}
