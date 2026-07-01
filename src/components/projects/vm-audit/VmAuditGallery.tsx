"use client";

import { BarChart3, CheckCircle2, Cloud, FileText, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

const mockups = [
  {
    title: "Inventory Dashboard",
    icon: BarChart3,
    stat: "900+",
    accent: "blue",
    badge: "synced",
    rows: [
      ["Environment A", "synced", "94%"],
      ["Environment B", "synced", "91%"],
      ["Asset Coverage", "audited", "98%"],
    ],
    legend: ["Synced", "Pending", "Review"],
    donut: 82,
    line: "M4 42 C28 28 42 34 62 22 S98 26 116 10",
  },
  {
    title: "Reconciliation Dashboard",
    icon: FileText,
    stat: "300+",
    accent: "purple",
    badge: "review",
    rows: [
      ["Billing Platform", "matched", "87%"],
      ["Inactive Workloads", "review", "32%"],
      ["Approval Queue", "ready", "100%"],
    ],
    legend: ["Matched", "Mismatch", "Review"],
    donut: 68,
    line: "M4 18 C26 26 44 18 62 30 S98 38 116 24",
  },
  {
    title: "Backup Dashboard",
    icon: Cloud,
    stat: "100%",
    accent: "green",
    badge: "validated",
    rows: [
      ["Object Storage", "synced", "96%"],
      ["Restore Sample", "verified", "92%"],
      ["Evidence Pack", "complete", "100%"],
    ],
    legend: ["Verified", "Sampled", "Queued"],
    donut: 91,
    line: "M4 40 C24 36 38 20 58 26 S92 18 116 8",
  },
  {
    title: "Lifecycle Dashboard",
    icon: Terminal,
    stat: "70%",
    accent: "emerald",
    badge: "controlled",
    rows: [
      ["Discovery", "done", "100%"],
      ["Approval Gate", "required", "100%"],
      ["Controlled Action", "queued", "76%"],
    ],
    legend: ["Approved", "Queued", "Logged"],
    donut: 76,
    line: "M4 44 C24 30 42 34 60 20 S94 14 116 12",
  },
];

const toneClass = {
  blue: "text-blue-400 bg-blue-500/12 border-blue-400/25",
  purple: "text-purple-400 bg-purple-500/12 border-purple-400/25",
  green: "text-green-400 bg-green-500/12 border-green-400/25",
  emerald: "text-emerald-400 bg-emerald-500/12 border-emerald-400/25",
};

export function VmAuditGallery() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10" id="project-gallery">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Mock Dashboard Gallery
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Generated product-style views, no internal screenshots.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {mockups.map((mockup, index) => {
            const Icon = mockup.icon;

            return (
              <motion.div
                initial={{ opacity: 0.72, y: 14 }}
                key={mockup.title}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <VmAuditGlassCard
                  accent={mockup.accent as keyof typeof toneClass}
                  className="h-full"
                >
                  <div className="border-b border-border bg-gradient-to-r from-background/70 via-card/80 to-background/45 p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className={`flex size-9 shrink-0 items-center justify-center rounded-xl border ${toneClass[mockup.accent as keyof typeof toneClass]}`}
                        >
                          <Icon className="size-4" />
                        </span>
                        <h3 className="truncate text-sm font-semibold text-foreground">
                          {mockup.title}
                        </h3>
                      </div>
                      <span className="rounded-full border border-success/30 bg-success/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-success">
                        {mockup.badge}
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-3 p-3.5">
                    <div className="grid grid-cols-[0.72fr_1.28fr] gap-3">
                      <div className="rounded-xl border border-border bg-background/55 p-3">
                        <p className="font-heading text-2xl font-semibold text-foreground">
                          {mockup.stat}
                        </p>
                        <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          dashboard signal
                        </p>
                        <div className="mt-3 grid grid-cols-4 gap-1">
                          {[42, 72, 54, 88].map((height) => (
                            <span
                              className="rounded-t bg-gradient-to-t from-primary/35 to-secondary"
                              key={`${mockup.title}-${height}`}
                              style={{ height: `${height / 8}px` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl border border-border bg-background/55 p-3">
                        <svg className="h-14 w-full text-secondary" viewBox="0 0 120 52">
                          <path
                            d={`${mockup.line} L116 52 L4 52 Z`}
                            fill="rgb(var(--color-secondary) / 0.14)"
                            stroke="none"
                          />
                          <path
                            d={mockup.line}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-[4.5rem_1fr] gap-3 rounded-xl border border-border bg-background/55 p-3">
                      <svg className="size-[4.25rem] -rotate-90" viewBox="0 0 44 44">
                        <circle
                          className="stroke-border"
                          cx="22"
                          cy="22"
                          fill="none"
                          r="16"
                          strokeWidth="6"
                        />
                        <circle
                          className="stroke-secondary"
                          cx="22"
                          cy="22"
                          fill="none"
                          r="16"
                          strokeDasharray={`${mockup.donut} ${100 - mockup.donut}`}
                          strokeLinecap="round"
                          strokeWidth="6"
                        />
                        <text
                          className="rotate-90 fill-foreground font-mono text-[8px] font-bold"
                          dominantBaseline="middle"
                          textAnchor="middle"
                          x="22"
                          y="-22"
                        >
                          {mockup.donut}%
                        </text>
                      </svg>
                      <div className="grid content-center gap-1.5">
                        {mockup.legend.map((item, legendIndex) => (
                          <div className="flex items-center justify-between gap-2" key={item}>
                            <span className="flex items-center gap-2 text-[0.68rem] font-medium text-muted-foreground">
                              <span
                                className={`size-2 rounded-full ${legendIndex === 0 ? "bg-secondary" : legendIndex === 1 ? "bg-accent" : "bg-success"}`}
                              />
                              {item}
                            </span>
                            <span className="font-mono text-[0.65rem] text-muted-foreground">
                              {legendIndex === 0
                                ? mockup.donut
                                : legendIndex === 1
                                  ? 100 - mockup.donut
                                  : 12}
                              %
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {mockup.rows.map(([label, status, percent]) => (
                        <div
                          className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 rounded-lg border border-border bg-background/55 px-3 py-2 shadow-sm shadow-primary/5"
                          key={label}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="truncate text-xs font-medium text-foreground">
                                {label}
                              </span>
                              <span
                                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ${toneClass[mockup.accent as keyof typeof toneClass]}`}
                              >
                                <CheckCircle2 className="size-3" />
                                {status}
                              </span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-card">
                              <span
                                className="block h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                                style={{ width: percent }}
                              />
                            </div>
                          </div>
                          <span className="self-center font-mono text-[0.68rem] text-muted-foreground">
                            {percent}
                          </span>
                        </div>
                      ))}
                    </div>
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
