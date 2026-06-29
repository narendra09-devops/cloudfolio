import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePlaceholder } from "@/components/projects/architecture-placeholder";
import { CaseStudyHero } from "@/components/projects/case-study-hero";
import { MetricsCards } from "@/components/projects/metrics-cards";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { getProjectBySlug, getRelatedProjects, projects } from "@/content/projects";
import { siteConfig } from "@/config/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

  const url = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | CloudFolio Case Study`,
      description: project.summary,
      url,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  return (
    <>
      <CaseStudyHero project={project} />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-10">
              <section aria-labelledby="problem-heading">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Problem
                </p>
                <H2 className="mt-3" id="problem-heading">
                  The operational challenge.
                </H2>
                <Paragraph className="mt-4">{project.problem}</Paragraph>
              </section>

              <section aria-labelledby="solution-heading">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Solution
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

      <Section className="bg-surface/30">
        <Container>
          <div className="mb-8 max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Metrics
            </p>
            <H2 className="mt-3">Measured outcomes.</H2>
          </div>
          <MetricsCards metrics={project.metrics} />
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
          <ArchitecturePlaceholder steps={project.architecture} />
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
