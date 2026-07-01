import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

export function VmAuditCTA() {
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <VmAuditGlassCard className="p-6 sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--color-primary)/0.18),transparent_28%),radial-gradient(circle_at_82%_30%,rgb(var(--color-accent)/0.16),transparent_32%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Recruiter CTA
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Need infrastructure automation that reads like product strategy?
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                href="/resume"
              >
                View Resume
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
                href="/contact"
              >
                <Mail className="size-4" />
                Contact Me
              </Link>
            </div>
          </div>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}
