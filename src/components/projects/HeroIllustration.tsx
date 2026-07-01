"use client";

import { Cloud, Database, FileText, Server, ShieldCheck, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/projects/GlassCard";

type HeroNode = {
  label: string;
  x: number;
  y: number;
  icon: LucideIcon;
};

const nodes: HeroNode[] = [
  { label: "Environment A", x: 12, y: 18, icon: Server },
  { label: "Environment B", x: 12, y: 62, icon: Server },
  { label: "Billing Platform", x: 38, y: 78, icon: Database },
  { label: "Audit Platform", x: 44, y: 38, icon: Workflow },
  { label: "Object Storage", x: 70, y: 18, icon: Cloud },
  { label: "Reports", x: 76, y: 54, icon: FileText },
  { label: "Lifecycle Controls", x: 61, y: 78, icon: ShieldCheck },
];

const paths = [
  "M74 96 C152 110 188 148 246 178",
  "M74 288 C146 274 188 226 246 178",
  "M198 360 C236 330 252 274 246 178",
  "M306 178 C376 134 420 104 484 96",
  "M306 178 C390 194 438 232 520 258",
  "M438 360 C486 336 512 306 520 258",
  "M520 258 C488 304 452 336 438 360",
];

export function HeroIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[28rem] lg:min-h-[34rem]">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 blur-3xl" />
      <GlassCard className="relative h-full overflow-hidden p-4 sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--color-secondary)/0.18),transparent_28%),radial-gradient(circle_at_82%_20%,rgb(var(--color-accent)/0.18),transparent_30%)]" />
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-primary/50 dark:text-secondary/60"
          viewBox="0 0 620 440"
        >
          <defs>
            <filter id="heroGlow">
              <feGaussianBlur result="coloredBlur" stdDeviation="4" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {paths.map((path, index) => (
            <motion.path
              d={path}
              fill="none"
              filter="url(#heroGlow)"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
              key={path}
              stroke="currentColor"
              strokeDasharray="8 10"
              strokeLinecap="round"
              strokeWidth="2"
              animate={reduceMotion ? undefined : { pathLength: 1, opacity: [0.35, 0.85, 0.45] }}
              transition={{
                duration: 2.8,
                delay: index * 0.12,
                repeat: reduceMotion ? 0 : Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </svg>

        <div className="relative h-[27rem] sm:h-[31rem]">
          {nodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                className="absolute w-36 rounded-2xl border border-border/70 bg-surface/80 p-3 shadow-xl shadow-primary/10 backdrop-blur-xl dark:bg-card/75"
                key={node.label}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={reduceMotion ? undefined : { scale: 1.04, y: -4 }}
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-foreground">
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {Array.from({ length: 16 }).map((_, index) => (
            <motion.span
              aria-hidden="true"
              className="absolute size-1 rounded-full bg-secondary/70"
              key={index}
              style={{
                left: `${8 + ((index * 19) % 84)}%`,
                top: `${10 + ((index * 31) % 78)}%`,
              }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.15, 0.9, 0.15],
                      y: [0, -12, 0],
                    }
              }
              transition={{
                duration: 3 + (index % 4),
                repeat: reduceMotion ? 0 : Infinity,
                delay: index * 0.15,
              }}
            />
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
