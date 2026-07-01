"use client";

import type { Project } from "@/content/projects";
import { VmAuditArchitectureDiagram } from "@/components/projects/vm-audit/VmAuditArchitectureDiagram";
import { VmAuditCTA } from "@/components/projects/vm-audit/VmAuditCTA";
import { VmAuditGallery } from "@/components/projects/vm-audit/VmAuditGallery";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";
import { VmAuditHero } from "@/components/projects/vm-audit/VmAuditHero";
import { VmAuditImpactDashboard } from "@/components/projects/vm-audit/VmAuditImpactDashboard";
import { VmAuditImplementation } from "@/components/projects/vm-audit/VmAuditImplementation";
import {
  VmAuditBusinessImpactSummary,
  VmAuditEnvironmentScale,
  VmAuditExecutiveSummary,
  VmAuditResultsAndLessons,
  VmAuditRoleSection,
} from "@/components/projects/vm-audit/VmAuditNarrativeSections";
import { VmAuditProblemGrid } from "@/components/projects/vm-audit/VmAuditProblemGrid";
import { VmAuditRelatedWork } from "@/components/projects/vm-audit/VmAuditRelatedWork";
import {
  VmAuditBusinessMetrics,
  VmAuditTechnologyStack,
} from "@/components/projects/vm-audit/VmAuditStackAndMetrics";
import { VmAuditTimeline } from "@/components/projects/vm-audit/VmAuditTimeline";

type VmAuditFlagshipCaseStudyProps = {
  project: Project;
  relatedProjects: Project[];
};

function ConfidentialityDisclaimer() {
  return (
    <section className="px-4 py-6 sm:px-6 md:py-7 lg:px-8 xl:py-8">
      <div className="mx-auto max-w-[1400px]">
        <VmAuditGlassCard className="p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Certain names, metrics, and implementation details have been generalized or anonymized
            to protect client confidentiality while preserving the technical approach and business
            outcomes.
          </p>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}

export function VmAuditFlagshipCaseStudy({
  project,
  relatedProjects,
}: VmAuditFlagshipCaseStudyProps) {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--color-card)/0.92),rgb(var(--color-background))_34rem),radial-gradient(circle_at_18%_4%,rgb(var(--color-secondary)/0.24),transparent_24rem),radial-gradient(circle_at_82%_2%,rgb(var(--color-accent)/0.18),transparent_26rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--color-border)/0.22)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--color-border)/0.18)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="relative">
        <VmAuditHero project={project} />
        <VmAuditExecutiveSummary project={project} />
        <VmAuditProblemGrid project={project} />
        <VmAuditRoleSection />
        <VmAuditEnvironmentScale project={project} />
        <VmAuditTechnologyStack />
        <VmAuditArchitectureDiagram />
        <VmAuditTimeline />
        <VmAuditImplementation project={project} />
        <VmAuditBusinessMetrics project={project} />
        <VmAuditImpactDashboard />
        <VmAuditBusinessImpactSummary />
        <VmAuditGallery />
        <VmAuditResultsAndLessons project={project} />
        <VmAuditCTA />
        <ConfidentialityDisclaimer />
        <VmAuditRelatedWork projects={relatedProjects} />
      </div>
    </main>
  );
}
