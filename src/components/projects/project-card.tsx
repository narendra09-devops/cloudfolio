import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryMetric = project.metrics[0];

  return (
    <Link
      aria-label={`View complete project: ${project.title}`}
      className="group block h-full cursor-pointer rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={`/projects/${project.slug}`}
    >
      <Card className="relative flex h-full flex-col overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/15">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-lg transition-colors group-hover:text-primary">
              {project.title}
            </CardTitle>
            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/15">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </div>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-5">
          <TechnologyBadges limit={4} technologies={project.technologies} />
          <div className="mt-auto rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 p-4">
            <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
              {primaryMetric.value}
            </p>
            <p className="mt-1 text-sm text-muted">
              {primaryMetric.label} {primaryMetric.context}
            </p>
          </div>
          <span className="inline-flex min-h-10 items-center justify-center rounded-md border border-primary/25 bg-background/70 px-4 text-sm font-semibold text-foreground transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
            View Complete Project
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
