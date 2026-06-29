import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ReadingTime } from "@/components/blog/reading-time";

type ArticleHeroProps = {
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  backHref: string;
  backLabel: string;
};

export function ArticleHero({
  title,
  summary,
  category,
  publishedAt,
  readTimeMinutes,
  tags,
  backHref,
  backLabel,
}: ArticleHeroProps) {
  return (
    <section className="border-b border-border bg-surface/30 py-16 sm:py-20 lg:py-24">
      <Container>
        <Link
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={backHref}
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          {backLabel}
        </Link>
        <div className="mt-8 max-w-4xl space-y-5">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
            {category}
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted">{summary}</p>
        </div>
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <time className="text-sm text-muted" dateTime={publishedAt}>
              {new Date(publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <ReadingTime minutes={readTimeMinutes} />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
