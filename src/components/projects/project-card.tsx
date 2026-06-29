import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  const primaryMetric = project.metrics[0];

  return (
    <Card className="group h-full transition-colors hover:border-primary/40 hover:bg-surface/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
          />
        </div>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-5">
        <TechnologyBadges limit={4} technologies={project.technologies} />
        <div className="mt-auto rounded-md border border-border bg-background/50 p-4">
          <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            {primaryMetric.value}
          </p>
          <p className="mt-1 text-sm text-muted">
            {primaryMetric.label} {primaryMetric.context}
          </p>
        </div>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={href}
        >
          Read case study
        </Link>
      </CardContent>
    </Card>
  );
}
