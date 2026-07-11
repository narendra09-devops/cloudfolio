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
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { getProjectBySlug, getRelatedProjects, projects, type Project } from "@/content/projects";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/config/site";
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

function ProjectStructuredData({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
  const projectUrl = absoluteUrl(`/projects/${project.slug}`);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: project.title,
      description: project.summary,
      url: projectUrl,
      author: {
        "@type": "Person",
        name: siteConfig.owner,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      about: project.technologies,
      keywords: [
        project.projectType,
        project.role,
        ...project.technologies,
        "Cloud Infrastructure",
        "Site Reliability Engineering",
      ]
        .filter(Boolean)
        .join(", "),
      mainEntityOfPage: projectUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: projectUrl,
      creator: {
        "@type": "Person",
        name: siteConfig.owner,
      },
      genre: project.projectType ?? "Cloud infrastructure case study",
      result: project.primaryOutcome ?? project.metrics[0]?.context,
      teaches: project.lessonsLearned,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: absoluteUrl("/projects"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: projectUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What type of engineering work does this case study demonstrate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${project.title} demonstrates ${project.projectType ?? "cloud infrastructure engineering"} with a focus on ${project.technologies.slice(0, 4).join(", ")}.`,
          },
        },
        {
          "@type": "Question",
          name: "What related engineering work is available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: relatedProjects.map((relatedProject) => relatedProject.title).join(", "),
          },
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

function ProjectContextPanel({ project }: { project: Project }) {
  const details = [
    ["Project Type", project.projectType ?? "Cloud Infrastructure Project"],
    ["Environment & Scale", project.environmentScale?.[0] ?? "Production engineering environment"],
    ["Team Size", project.teamSize ?? "Cross-functional infrastructure stakeholders"],
    ["Duration", project.duration ?? "Project-based engagement"],
    ["Role", project.role ?? "Cloud Infrastructure Engineer"],
    [
      "Primary Outcome",
      project.primaryOutcome ?? project.metrics[0]?.context ?? project.metrics[0]?.value,
    ],
  ];

  return (
    <aside className="rounded-lg border border-border bg-surface p-6 shadow-lg shadow-primary/5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="primary">{project.projectType ?? "Cloud Infrastructure Project"}</Badge>
        <Badge variant="outline">Case Study</Badge>
      </div>
      <h2 className="mt-5 font-heading text-xl font-semibold tracking-tight text-foreground">
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
        {details.map(([label, value]) => (
          <div key={label}>
            <dt className="text-sm font-medium text-muted">{label}</dt>
            <dd className="mt-1 text-sm leading-6 text-foreground">{value}</dd>
          </div>
        ))}
        <div>
          <dt className="text-sm font-medium text-muted">Technologies</dt>
          <dd className="mt-2">
            <TechnologyBadges technologies={project.technologies.slice(0, 6)} />
          </dd>
        </div>
      </dl>
    </aside>
  );
}

function ArchitecturePreview({ project }: { project: Project }) {
  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Architecture Preview
          </p>
          <H2 className="mt-3">How the workflow fits together.</H2>
          <Paragraph className="mt-4">
            A recruiter-readable preview of the technical flow before the detailed architecture
            section.
          </Paragraph>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {project.architecture.map((step, index) => (
            <div
              className="group rounded-lg border border-border bg-background/75 p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10"
              key={step}
            >
              <span className="font-mono text-xs font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-semibold leading-6 text-foreground">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DiscussSimilarWorkCta({ project }: { project: Project }) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="rounded-xl border border-primary/25 bg-[radial-gradient(circle_at_15%_20%,rgb(var(--color-primary)/0.16),transparent_18rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.14),rgb(var(--color-accent)/0.08))] p-6 shadow-xl shadow-primary/10 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Discuss Similar Work
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                Need help with {project.projectType?.toLowerCase() ?? "cloud infrastructure work"}?
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
                I can discuss architecture tradeoffs, operational constraints, automation approach,
                and delivery patterns for similar infrastructure programs.
              </p>
            </div>
            <ButtonLink href="/contact" size="lg">
              Contact Narendra
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
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
  const roleResponsibilities =
    project.implementation?.flatMap((section) => section.items).slice(0, 6) ?? [];

  if (project.slug === "vm-audit-automation-platform") {
    return (
      <>
        <ProjectStructuredData project={project} relatedProjects={relatedProjects} />
        <PageViewTracker
          eventName={analyticsEvents.vmAuditCaseStudyViewed}
          pageSection="VM Audit Case Study"
        />
        <VmAuditFlagshipCaseStudy project={project} relatedProjects={relatedProjects} />
      </>
    );
  }

  if (project.slug === "aws-security-hub-remediation-program") {
    return (
      <>
        <ProjectStructuredData project={project} relatedProjects={relatedProjects} />
        <AwsSecurityHubCaseStudy project={project} />
      </>
    );
  }

  return (
    <>
      <ProjectStructuredData project={project} relatedProjects={relatedProjects} />
      <CaseStudyHero project={project} />

      <Section className="bg-surface/30">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Metrics Dashboard
            </p>
            <H2 className="mt-3">Project outcomes and indicators.</H2>
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
                  Project overview and engineering context.
                </H2>
                <Paragraph className="mt-4">{project.summary}</Paragraph>
              </section>

              <section aria-labelledby="problem-heading">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Project Challenge
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

            <ProjectContextPanel project={project} />
          </div>
        </Container>
      </Section>

      <ArchitecturePreview project={project} />

      {project.role ? (
        <Section className="bg-surface/30">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  My Role
                </p>
                <H2 className="mt-3">Engineering role and implementation focus.</H2>
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
                  {roleResponsibilities.length > 0 ? (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {roleResponsibilities.map((responsibility) => (
                        <li
                          className="flex gap-3 text-sm leading-6 text-muted"
                          key={responsibility}
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
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
              <H2 className="mt-3">Environment, inputs, and technical challenges.</H2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {project.environmentScale ? (
                <DetailList
                  eyebrow="Environment"
                  icon={<Server aria-hidden="true" className="size-5" />}
                  items={project.environmentScale}
                  title="Environment scope"
                />
              ) : null}
              {project.dataCollected ? (
                <DetailList
                  eyebrow="Project Inputs"
                  icon={<Database aria-hidden="true" className="size-5" />}
                  items={project.dataCollected}
                  title="Technical inputs"
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
                <H2 className="mt-3">What the project delivered.</H2>
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
              <H2 className="mt-3">How the solution was implemented.</H2>
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
                Core technologies used to design, implement, and demonstrate the project.
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
                  Project Impact
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
            <H2 className="mt-3">Related engineering case studies.</H2>
            <Paragraph className="mt-4">
              Related work with overlapping cloud, platform, SRE, security, or automation themes.
            </Paragraph>
          </div>
          <ProjectsGrid projects={relatedProjects} />
        </Container>
      </Section>

      <DiscussSimilarWorkCta project={project} />
    </>
  );
}
