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
    <Card className="group h-full transition-colors hover:border-primary/40 hover:bg-surface/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {topic.category}
            </p>
            <CardTitle className="text-lg leading-snug">{topic.title}</CardTitle>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
          />
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
        <div className="rounded-md border border-border bg-background/50 p-4">
          <p className="text-sm font-medium text-foreground">Architecture nodes</p>
          <p className="mt-2 text-sm leading-6 text-muted">{topic.diagramNodes.join(" • ")}</p>
        </div>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={`/architecture/${topic.slug}`}
        >
          Open diagram
        </Link>
      </CardContent>
    </Card>
  );
}
