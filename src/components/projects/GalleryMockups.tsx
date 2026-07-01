"use client";

import { BarChart3, Cloud, FileText, GitBranch, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/projects/GlassCard";

const mockups = [
  {
    title: "Inventory Dashboard",
    icon: BarChart3,
    rows: ["Environment A", "Environment B", "Inactive 300+"],
  },
  {
    title: "Architecture Dashboard",
    icon: GitBranch,
    rows: ["Virtualization", "Audit Platform", "Billing", "Object Storage"],
  },
  {
    title: "Audit Reports",
    icon: FileText,
    rows: ["Mismatch Report", "Owner Mapping", "Approval Queue"],
  },
  {
    title: "Backup Validation Dashboard",
    icon: Cloud,
    rows: ["Backup Started", "Storage Synced", "Restore Validated"],
  },
  {
    title: "Automation Framework Dashboard",
    icon: Terminal,
    rows: ["Discovery Workflow", "Lifecycle Workflow", "Recovery Workflow"],
  },
];

export function GalleryMockups() {
  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]" id="project-gallery">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Project Gallery
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Realistic product-style mockups of the operating workflow.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-5">
          {mockups.map((mockup, index) => {
            const Icon = mockup.icon;
            const wide = index < 2;

            return (
              <motion.div
                className={wide ? "xl:col-span-2" : undefined}
                initial={{ opacity: 0, y: 18 }}
                key={mockup.title}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassCard className="h-full overflow-hidden" interactive>
                  <div className="border-b border-border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="size-5 text-primary" />
                        <h3 className="text-sm font-semibold text-foreground">{mockup.title}</h3>
                      </div>
                      <span className="rounded-full border border-border bg-card/70 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                        live view
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="grid grid-cols-3 gap-2">
                      {[66, 84, 52].map((height, barIndex) => (
                        <div
                          className="flex h-24 items-end rounded-xl border border-border bg-background/60 p-2"
                          key={`${height}-${barIndex}`}
                        >
                          <span
                            className="w-full rounded-md bg-gradient-to-t from-primary/40 to-secondary"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    {mockup.rows.map((row, rowIndex) => (
                      <div
                        className="flex items-center justify-between rounded-xl border border-border bg-background/60 px-3 py-2"
                        key={row}
                      >
                        <span className="text-xs font-medium text-foreground">{row}</span>
                        <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
                        <span className="font-mono text-[0.65rem] text-muted-foreground">
                          {rowIndex === 0 ? "ok" : rowIndex === 1 ? "sync" : "done"}
                        </span>
                      </div>
                    ))}
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
