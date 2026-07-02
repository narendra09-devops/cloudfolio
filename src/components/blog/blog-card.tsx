"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReadingTime } from "@/components/blog/reading-time";
import type { BlogPost } from "@/content/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/15">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent" />
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {post.category}
            </p>
            <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
          </div>
          <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-secondary/20 bg-gradient-to-br from-secondary/15 via-primary/10 to-accent/15 text-secondary transition-all group-hover:border-secondary/40 group-hover:shadow-lg group-hover:shadow-secondary/15">
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </div>
        <CardDescription>{post.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <time className="text-sm text-muted" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <ReadingTime minutes={post.readTimeMinutes} />
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-secondary/25 bg-background/70 px-4 text-sm font-semibold text-foreground transition-all hover:border-secondary/50 hover:bg-secondary/10 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={`/blog/${post.slug}`}
        >
          Read article
        </Link>
      </CardContent>
    </Card>
  );
}
