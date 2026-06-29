import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { projects } from "@/content/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects and Case Studies",
  description:
    "CloudFolio project case studies covering AWS security, SAP cost optimization, cloud architecture, VM audits, SSL automation, infrastructure visibility, operations, and SRE automation.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Projects and Case Studies | CloudFolio",
    description:
      "Professional case studies for cloud infrastructure, DevOps, platform engineering, and SRE automation work.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface/30">
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

      <Section>
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <H2>Selected project portfolio.</H2>
              <Paragraph className="mt-4">
                Each case study highlights the problem, solution, measurable results, technology
                choices, business impact, and lessons learned.
              </Paragraph>
            </div>
            <p className="font-mono text-sm text-muted">{projects.length} case studies</p>
          </div>
          <ProjectsGrid projects={projects} />
        </Container>
      </Section>
    </>
  );
}
