"use client";

import { ArrowRight, Mail, Network, Server } from "lucide-react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/projects/GlassCard";
import { ButtonLink } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";

export function RecruiterCTA() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <GlassCard className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--color-primary)/0.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgb(var(--color-accent)/0.16),transparent_32%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Recruiter CTA
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Interested in how I design and automate large-scale infrastructure platforms?
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-surface shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                  href="/resume"
                  tracking={{
                    eventName: analyticsEvents.resumeViewed,
                    pageSection: "Recruiter CTA",
                    ctaType: "view-resume",
                  }}
                >
                  View Resume
                  <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
                  href="/contact"
                  tracking={{
                    eventName: analyticsEvents.contactEmailClicked,
                    pageSection: "Recruiter CTA",
                    ctaType: "contact-page",
                  }}
                >
                  <Mail className="size-4" />
                  Contact Me
                </ButtonLink>
                <ButtonLink
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
                  href="/projects"
                  tracking={{
                    eventName: analyticsEvents.projectCtaClicked,
                    pageSection: "Recruiter CTA",
                    ctaType: "projects",
                  }}
                >
                  Explore More Projects
                </ButtonLink>
              </div>
            </div>

            <motion.div
              className="relative min-h-64"
              initial={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <div className="absolute left-8 top-6 rounded-2xl border border-border bg-surface/80 p-4 shadow-xl backdrop-blur-xl dark:bg-card/80">
                <Server className="size-7 text-primary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Infrastructure Estate</p>
              </div>
              <div className="absolute right-8 top-24 rounded-2xl border border-border bg-surface/80 p-4 shadow-xl backdrop-blur-xl dark:bg-card/80">
                <Network className="size-7 text-secondary" />
                <p className="mt-3 text-sm font-semibold text-foreground">Audit Platform</p>
              </div>
              <svg className="absolute inset-0 h-full w-full text-primary/60" viewBox="0 0 420 260">
                <motion.path
                  d="M120 86 C190 94 218 124 292 142"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                  strokeWidth="2"
                  animate={{ opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
