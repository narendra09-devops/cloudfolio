"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { ArchitectureTopic } from "@/content/architecture";

type ArchitectureCardProps = {
  topic: ArchitectureTopic;
};

export function ArchitectureCard({ topic }: ArchitectureCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/15">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary" />
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {topic.category}
            </p>
            <CardTitle className="text-lg leading-snug">{topic.title}</CardTitle>
          </div>
          <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/15 via-primary/10 to-secondary/15 text-accent transition-all group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/15">
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </div>
        <CardDescription>{topic.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {topic.technologies.slice(0, 4).map((technology) => (
            <Badge key={technology} variant="outline">
              {technology}
            </Badge>
          ))}
        </div>
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-4">
          <p className="text-sm font-medium text-foreground">Architecture nodes</p>
          <p className="mt-2 text-sm leading-6 text-muted">{topic.diagramNodes.join(" • ")}</p>
        </div>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-accent/25 bg-background/70 px-4 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={`/architecture/${topic.slug}`}
        >
          Open diagram
        </Link>
      </CardContent>
    </Card>
  );
}
