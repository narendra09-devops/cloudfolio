import type { Metadata } from "next";
import { CheckCircle2, Database, Server, ShieldCheck, UserRound, Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArchitecturePlaceholder } from "@/components/projects/architecture-placeholder";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { AwsSecurityHubCaseStudy } from "@/components/projects/aws-security-hub-case-study";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { MermaidDiagram } from "@/components/projects/mermaid-diagram";
import { MetricsCards } from "@/components/projects/metrics-cards";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import { VmAuditFlagshipCaseStudy } from "@/components/projects/vm-audit/VmAuditFlagshipCaseStudy";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { getProjectBySlug, getRelatedProjects, projects } from "@/content/projects";
import { createPageMetadata } from "@/config/site";
import { analyticsEvents } from "@/lib/analytics";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type DetailListProps = {
  eyebrow: string;
  title: string;
  items: string[];
  icon: ReactNode;
};

function DetailList({ eyebrow, title, items, icon }: DetailListProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-blue-300">
            {icon}
          </div>
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {eyebrow}
            </p>
            <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-foreground">
              {title}
            </h3>
          </div>
        </div>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
              <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return createPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  if (project.slug === "vm-audit-automation-platform") {
    return (
      <>
        <PageViewTracker
          eventName={analyticsEvents.vmAuditCaseStudyViewed}
          pageSection="VM Audit Case Study"
        />
        <VmAuditFlagshipCaseStudy project={project} relatedProjects={relatedProjects} />
      </>
    );
  }

  if (project.slug === "aws-security-hub-remediation-program") {
    return <AwsSecurityHubCaseStudy project={project} />;
  }

  return (
    <>
      <CaseStudyHero project={project} />

      <Section className="bg-surface/30">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Metrics Dashboard
            </p>
            <H2 className="mt-3">Measured infrastructure outcomes.</H2>
          </div>
          <MetricsCards metrics={project.metrics} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-10">
              <section aria-labelledby="summary-heading">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Executive Summary
                </p>
                <H2 className="mt-3" id="summary-heading">
                  A single source of truth for VPS infrastructure.
                </H2>
                <Paragraph className="mt-4">{project.summary}</Paragraph>
              </section>

              <section aria-labelledby="problem-heading">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Business Problem
                </p>
                <H2 className="mt-3" id="problem-heading">
                  The operational challenge.
                </H2>
                <Paragraph className="mt-4">{project.problem}</Paragraph>
              </section>

              <section aria-labelledby="solution-heading">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Solution Architecture
                </p>
                <H2 className="mt-3" id="solution-heading">
                  The engineering response.
                </H2>
                <Paragraph className="mt-4">{project.solution}</Paragraph>
              </section>
            </div>

            <aside className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Case study snapshot
              </h2>
              <dl className="mt-6 space-y-5">
                {project.client ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Client</dt>
                    <dd className="mt-1 text-sm text-foreground">{project.client}</dd>
                  </div>
                ) : null}
                {project.employer ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Employer</dt>
                    <dd className="mt-1 text-sm text-foreground">{project.employer}</dd>
                  </div>
                ) : null}
                {project.role ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Role</dt>
                    <dd className="mt-1 text-sm text-foreground">{project.role}</dd>
                  </div>
                ) : null}
                {project.duration ? (
                  <div>
                    <dt className="text-sm font-medium text-muted">Duration</dt>
                    <dd className="mt-1 text-sm text-foreground">{project.duration}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-sm font-medium text-muted">Primary outcome</dt>
                  <dd className="mt-1 font-heading text-2xl font-semibold text-foreground">
                    {project.metrics[0].value}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted">Technology count</dt>
                  <dd className="mt-1 text-sm text-foreground">
                    {project.technologies.length} core tools and platforms
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted">Focus area</dt>
                  <dd className="mt-1 text-sm text-foreground">
                    Cloud infrastructure, automation, and operational reliability
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>

      {project.role ? (
        <Section className="bg-surface/30">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  My Role
                </p>
                <H2 className="mt-3">Lead engineer for audit, automation, and safe execution.</H2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10 text-sky-300">
                      <UserRound aria-hidden="true" className="size-5" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                      {project.role}
                    </h3>
                  </div>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Designed the audit and reconciliation approach.",
                      "Developed automation scripts and reporting workflows.",
                      "Collected, validated, and compared VM inventory records.",
                      "Coordinated stakeholder approvals and change requests.",
                      "Automated backup, restore, suspend, and unsuspend processes.",
                      "Executed controlled VM decommissioning with recovery validation.",
                    ].map((responsibility) => (
                      <li className="flex gap-3 text-sm leading-6 text-muted" key={responsibility}>
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </Section>
      ) : null}

      {project.environmentScale || project.dataCollected || project.technicalChallenges ? (
        <Section>
          <Container>
            <div className="mb-8 max-w-3xl">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Environment & Challenges
              </p>
              <H2 className="mt-3">Scale, evidence, and operational risk.</H2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {project.environmentScale ? (
                <DetailList
                  eyebrow="Environment"
                  icon={<Server aria-hidden="true" className="size-5" />}
                  items={project.environmentScale}
                  title="Infrastructure scale"
                />
              ) : null}
              {project.dataCollected ? (
                <DetailList
                  eyebrow="Data Collected"
                  icon={<Database aria-hidden="true" className="size-5" />}
                  items={project.dataCollected}
                  title="Audit evidence"
                />
              ) : null}
              {project.technicalChallenges ? (
                <DetailList
                  eyebrow="Challenges"
                  icon={<ShieldCheck aria-hidden="true" className="size-5" />}
                  items={project.technicalChallenges}
                  title="Technical constraints"
                />
              ) : null}
            </div>
          </Container>
        </Section>
      ) : null}

      {project.keyAchievements ? (
        <Section className="bg-surface/30">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Key Achievements
                </p>
                <H2 className="mt-3">What changed because of the platform.</H2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.keyAchievements.map((achievement) => (
                  <div
                    className="rounded-md border border-border bg-background/70 p-4 text-sm leading-6 text-muted"
                    key={achievement}
                  >
                    <CheckCircle2 aria-hidden="true" className="mb-3 size-4 text-success" />
                    {achievement}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      {project.implementation ? (
        <Section>
          <Container>
            <div className="mb-8 max-w-3xl">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Implementation
              </p>
              <H2 className="mt-3">Automation delivered as reusable operational tooling.</H2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {project.implementation.map((section) => (
                <Card className="h-full" key={section.title}>
                  <CardContent className="p-6">
                    <div className="flex size-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-blue-300">
                      <Wrench aria-hidden="true" className="size-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground">
                      {section.title}
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {section.items.map((item) => (
                        <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section className="bg-surface/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Technologies Used
              </p>
              <H2 className="mt-3">Tools and platforms.</H2>
              <Paragraph className="mt-4">
                Core technologies used to collect infrastructure evidence, reconcile billing state,
                automate lifecycle operations, and preserve recovery options.
              </Paragraph>
            </div>
            <div className="rounded-lg border border-border bg-background/70 p-6">
              <TechnologyBadges technologies={project.technologies} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Business Impact
                </p>
                <H2 className="mt-3 text-3xl">Why it mattered.</H2>
                <ul className="mt-6 space-y-4">
                  {project.businessImpact.map((impact) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted" key={impact}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Lessons Learned
                </p>
                <H2 className="mt-3 text-3xl">What shaped the next build.</H2>
                <ul className="mt-6 space-y-4">
                  {project.lessonsLearned.map((lesson) => (
                    <li className="flex gap-3 text-sm leading-6 text-muted" key={lesson}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Architecture & Workflow
            </p>
            <H2 className="mt-3">Mermaid-backed operational flow.</H2>
          </div>
          <div className="space-y-5">
            {project.mermaidDiagrams?.map((diagram) => (
              <MermaidDiagram diagram={diagram} key={diagram.title} />
            )) ?? <ArchitecturePlaceholder steps={project.architecture} />}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Related Work
            </p>
            <H2 className="mt-3">Adjacent case studies.</H2>
          </div>
          <ProjectsGrid projects={relatedProjects} />
        </Container>
      </Section>
    </>
  );
}
