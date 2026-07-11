import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import type { Project } from "@/content/projects";

type CaseStudyHeroProps = {
  project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const isPersonalOpenSourceProject = project.projectType === "Personal Open-Source Project";

  return (
    <section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-primary)/0.12),transparent_24rem),radial-gradient(circle_at_84%_14%,rgb(var(--color-secondary)/0.10),transparent_20rem),linear-gradient(135deg,rgb(var(--color-primary)/0.04),transparent_42%)] py-10 sm:py-12 lg:py-16">
      <Container>
        <Link
          className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-background/60 px-3 py-2 text-sm font-medium text-muted backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href="/projects"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Projects
        </Link>
        <div className="mt-8 max-w-4xl">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {isPersonalOpenSourceProject ? "Open Source Project" : "Case Study"}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.summary}</p>
        </div>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <TechnologyBadges technologies={project.technologies} />
          {project.repositoryUrl ? (
            <ButtonLink
              aria-label={`View the GitHub repository for ${project.title} (opens in a new tab)`}
              href={project.repositoryUrl}
              rel="noopener noreferrer"
              target="_blank"
              variant="outline"
            >
              GitHub Repository
            </ButtonLink>
          ) : isPersonalOpenSourceProject ? (
            <ButtonLink href="/architecture" variant="outline">
              View Architecture
            </ButtonLink>
          ) : (
            <ButtonLink href="/contact" variant="outline">
              Discuss similar work
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
