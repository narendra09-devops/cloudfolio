"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Cloud,
  Database,
  Eye,
  FileDown,
  GitBranch,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { BusinessImpactCharts } from "@/components/projects/BusinessImpactCharts";
import { GalleryMockups } from "@/components/projects/GalleryMockups";
import { GlassCard } from "@/components/projects/GlassCard";
import { HeroIllustration } from "@/components/projects/HeroIllustration";
import { MetricDashboard } from "@/components/projects/MetricDashboard";
import { ProblemInfographic } from "@/components/projects/ProblemInfographic";
import { RecruiterCTA } from "@/components/projects/RecruiterCTA";
import { TerminalCard } from "@/components/projects/TerminalCard";
import { TimelineFlow } from "@/components/projects/TimelineFlow";
import { ButtonLink } from "@/components/ui/button";
import { analyticsEvents } from "@/lib/analytics";
import type { Project } from "@/content/projects";

type VmAuditFlagshipCaseStudyProps = {
  project: Project;
  relatedProjects: Project[];
};

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-xl">
      {label}
    </span>
  );
}

function HeroMeta({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <GlassCard className="p-4">
      <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold leading-5 text-foreground">{value}</p>
    </GlassCard>
  );
}

function LessonsLearned({ lessons }: { lessons: string[] }) {
  const icons = [GitBranch, Eye, Zap, Cloud, BadgeCheck];

  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Lessons Learned
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Operating principles that scale beyond one audit.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {lessons.map((lesson, index) => {
            const Icon = icons[index] ?? BookOpen;

            return (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                key={lesson}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassCard className="h-full p-5" interactive>
                  <Icon className="size-6 text-primary" />
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{lesson}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedWork({ projects }: { projects: Project[] }) {
  const icons = [ShieldCheck, Cloud, Database];

  return (
    <section className="px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Related Work
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Adjacent case studies across platform, cost, and reliability.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = icons[index % icons.length];

            return (
              <GlassCard className="group overflow-hidden" interactive key={project.slug}>
                <div className="border-b border-border bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 p-5">
                  <div className="flex h-28 items-end justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-card/75 text-primary backdrop-blur-xl">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {project.metrics[0].value}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((technology) => (
                      <TechBadge key={technology} label={technology} />
                    ))}
                  </div>
                  <Link
                    className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    href={`/projects/${project.slug}`}
                  >
                    Read case study
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConfidentialityDisclaimer() {
  return (
    <section className="px-4 pb-[60px] sm:px-6 md:pb-20 lg:px-8 xl:pb-[120px]">
      <div className="mx-auto max-w-[1400px]">
        <GlassCard className="p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Certain names, metrics, and implementation details have been generalized or anonymized
            to protect client confidentiality while preserving the technical approach and business
            outcomes.
          </p>
        </GlassCard>
      </div>
    </section>
  );
}

export function VmAuditFlagshipCaseStudy({
  project,
  relatedProjects,
}: VmAuditFlagshipCaseStudyProps) {
  const scriptItems =
    project.implementation?.find((section) => section.title.toLowerCase().includes("scripts"))
      ?.items ?? [];
  const capabilityItems =
    project.implementation
      ?.filter((section) => !section.title.toLowerCase().includes("scripts"))
      .flatMap((section) => section.items) ?? [];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-cyan-50 to-background text-foreground dark:from-background dark:via-card dark:to-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-secondary)/0.18),transparent_30%),radial-gradient(circle_at_86%_8%,rgb(var(--color-accent)/0.18),transparent_34%)]" />
      <section className="relative flex min-h-screen items-center px-4 py-[60px] sm:px-6 md:py-20 lg:px-8 xl:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              href="/projects"
            >
              <ArrowRight className="size-4 rotate-180" />
              Projects
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/75 px-4 py-2 text-sm font-semibold text-primary shadow-xl shadow-primary/10 backdrop-blur-xl">
              <BadgeCheck className="size-4" />
              Flagship Project
            </div>
            <h1 className="mt-6 max-w-5xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechBadge key={technology} label={technology} />
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-surface shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                href="/resume"
                tracking={{
                  eventName: analyticsEvents.resumeViewed,
                  pageSection: "VM Audit Hero",
                  ctaType: "view-resume",
                }}
              >
                View Resume
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/75 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
                href="#project-gallery"
                tracking={{
                  eventName: analyticsEvents.projectCtaClicked,
                  pageSection: "VM Audit Hero",
                  ctaType: "download-case-study",
                }}
              >
                <FileDown className="size-4" />
                Download Case Study
              </ButtonLink>
              <ButtonLink
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/75 px-5 text-sm font-semibold text-foreground backdrop-blur-xl transition-colors hover:border-primary/40"
                href="#architecture"
                tracking={{
                  eventName: analyticsEvents.projectCtaClicked,
                  pageSection: "VM Audit Hero",
                  ctaType: "view-architecture",
                }}
              >
                View Architecture
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <HeroMeta label="Employer" value={project.employer} />
              <HeroMeta label="Client" value={project.client} />
              <HeroMeta label="Role" value={project.role} />
              <HeroMeta label="Duration" value={project.duration} />
            </div>
          </motion.div>

          <HeroIllustration />
        </div>
      </section>

      <MetricDashboard metrics={project.metrics} />
      <ProblemInfographic problem={project.problem} />
      <ArchitectureDiagram mermaid={project.mermaidDiagrams?.[0]} />
      <TimelineFlow />
      <TerminalCard capabilities={capabilityItems} scripts={scriptItems} />
      <BusinessImpactCharts />
      <GalleryMockups />
      <LessonsLearned lessons={project.lessonsLearned} />
      <RecruiterCTA />
      <ConfidentialityDisclaimer />
      <RelatedWork projects={relatedProjects} />
    </main>
  );
}
