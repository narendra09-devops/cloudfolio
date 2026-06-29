import { BookOpen, FolderKanban, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPost } from "@/content/blog";
import type { Project } from "@/content/projects";
import type { GithubRepository } from "@/lib/github";

type ActivityFeedProps = {
  blogs: BlogPost[];
  projects: Project[];
  repositories: GithubRepository[];
};

type ActivityItem = {
  date: string;
  description: string;
  href: string;
  label: string;
  source: "Blog" | "GitHub" | "Project";
  title: string;
};

const sourceIcons = {
  Blog: BookOpen,
  GitHub: Github,
  Project: FolderKanban,
};

export function ActivityFeed({ blogs, projects, repositories }: ActivityFeedProps) {
  const items: ActivityItem[] = [
    ...repositories.slice(0, 8).map((repository) => ({
      date: repository.pushedAt,
      description: repository.description ?? "Repository activity updated on GitHub.",
      href: repository.htmlUrl,
      label: "Repository updated",
      source: "GitHub" as const,
      title: repository.name,
    })),
    ...blogs.slice(0, 4).map((post) => ({
      date: post.publishedAt,
      description: post.summary,
      href: `/blog/${post.slug}`,
      label: post.category,
      source: "Blog" as const,
      title: post.title,
    })),
    ...projects.slice(0, 4).map((project) => ({
      date: "2026-01-01",
      description: project.summary,
      href: `/projects/${project.slug}`,
      label: "Case study",
      source: "Project" as const,
      title: project.title,
    })),
  ].sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime());

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity feed</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {items.map((item) => {
            const Icon = sourceIcons[item.source];
            const external = item.href.startsWith("https://");
            const content = (
              <article className="rounded-md border border-border bg-background/50 p-4 transition-colors hover:border-primary/40 hover:bg-surface/80">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Icon aria-hidden="true" className="size-4 text-primary" />
                      <Badge variant={item.source === "GitHub" ? "primary" : "outline"}>
                        {item.source}
                      </Badge>
                      <span className="text-xs text-muted">{item.label}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                  <time className="shrink-0 font-mono text-xs text-muted" dateTime={item.date}>
                    {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
                      new Date(item.date),
                    )}
                  </time>
                </div>
              </article>
            );

            return (
              <li key={`${item.source}-${item.href}`}>
                {external ? (
                  <a href={item.href} rel="noreferrer" target="_blank">
                    {content}
                  </a>
                ) : (
                  <Link href={item.href}>{content}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}
