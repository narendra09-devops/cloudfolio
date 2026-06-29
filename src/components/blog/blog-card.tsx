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
    <Card className="group h-full transition-colors hover:border-primary/40 hover:bg-surface/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {post.category}
            </p>
            <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
          />
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
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          href={`/blog/${post.slug}`}
        >
          Read article
        </Link>
      </CardContent>
    </Card>
  );
}
