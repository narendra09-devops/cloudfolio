import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/config/site";
import { ProjectsDiscovery } from "@/components/discovery/projects-discovery";
import { projects } from "@/content/projects";

export const metadata: Metadata = createPageMetadata({
  title: "Projects and Case Studies",
  description:
    "CloudFolio project case studies covering AWS security, SAP cost optimization, cloud architecture, VM audits, SSL automation, infrastructure visibility, operations, and SRE automation.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-primary)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.10),transparent_42%)]">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Projects
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Cloud, platform, and reliability case studies.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              A curated project system for recruiters and technical hiring teams to evaluate problem
              framing, engineering execution, measurable outcomes, and business impact.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Suspense
        fallback={
          <Section>
            <Container>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-6 text-sm text-muted">
                Loading project discovery tools...
              </div>
            </Container>
          </Section>
        }
      >
        <ProjectsDiscovery projects={projects} />
      </Suspense>
    </>
  );
}
