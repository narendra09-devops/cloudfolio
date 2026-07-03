import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { AnalyticsCard } from "@/components/github/analytics-card";
import { ContributionGraph } from "@/components/github/contribution-graph";
import { GithubProfileCard } from "@/components/github/github-profile-card";
import { MetricsDashboard } from "@/components/github/metrics-dashboard";
import { RepositoryGrid } from "@/components/github/repository-grid";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { getGithubDashboardData } from "@/lib/github";

export const revalidate = 1800;

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Dashboard",
  description:
    "Live CloudFolio engineering dashboard with GitHub profile data, repositories, language statistics, project highlights, and analytics readiness.",
  path: "/dashboard",
});

export default async function DashboardPage() {
  const github = await getGithubDashboardData();
  const latestBlogs = blogPosts.slice(0, 3);
  const latestProjects = projects.slice(0, 3);

  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-primary)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.10),transparent_42%)]">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Dashboard
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Living engineering dashboard.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              GitHub profile data, repository health, language usage, content updates, and
              analytics-ready cards in one responsive view.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          {github.error ? (
            <div className="rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm text-muted">
              <div className="flex gap-3">
                <AlertTriangle aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                <p>
                  Using fallback data for {github.username}. {github.error}. GitHub API data will
                  retry on the next 30-minute revalidation window.
                </p>
              </div>
            </div>
          ) : null}

          <div className="sr-only">
            <H2>GitHub profile and engineering metrics.</H2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GithubProfileCard profile={github.profile} />
            <MetricsDashboard languages={github.languages} repositories={github.repositories} />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContributionGraph />
            <AnalyticsCard fetchedAt={github.fetchedAt} />
          </div>

          <Card className="overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-success via-secondary to-primary" />
            <CardHeader>
              <CardTitle>Recent public GitHub activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {github.activities.length > 0 ? (
                github.activities.slice(0, 5).map((activity) => (
                  <Link
                    className="block rounded-md border border-border bg-background/50 p-4 transition-all hover:-translate-y-0.5 hover:border-success/40 hover:bg-surface/80 hover:shadow-lg hover:shadow-success/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={activity.url}
                    key={activity.id}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Badge variant="success">{activity.type.replace(/Event$/, "")}</Badge>
                    <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-foreground">
                      {activity.repoName}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Updated{" "}
                      {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
                        new Date(activity.createdAt),
                      )}
                    </p>
                  </Link>
                ))
              ) : (
                <p className="rounded-md border border-border bg-background/50 p-4 text-sm leading-6 text-muted">
                  {github.usingFallback
                    ? "Using fallback data. Public GitHub events will appear when the API is available."
                    : "No recent public GitHub events were returned for this account."}
                </p>
              )}
            </CardContent>
          </Card>

          <div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <H2>Latest repositories.</H2>
                <Paragraph className="mt-3">
                  Repository cards are sorted by recent push activity from the GitHub API and
                  revalidated every 30 minutes.
                </Paragraph>
              </div>
              <Link
                className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href="/activity"
              >
                View activity
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <RepositoryGrid repositories={github.repositories.slice(0, 6)} />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-secondary via-primary to-accent" />
              <CardHeader>
                <CardTitle>Recent blog posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestBlogs.map((post) => (
                  <Link
                    className="block rounded-md border border-border bg-background/50 p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-surface/80 hover:shadow-lg hover:shadow-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                  >
                    <Badge variant="outline">{post.category}</Badge>
                    <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{post.summary}</p>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-success" />
              <CardHeader>
                <CardTitle>Recent projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestProjects.map((project) => (
                  <Link
                    className="block rounded-md border border-border bg-background/50 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface/80 hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={`/projects/${project.slug}`}
                    key={project.slug}
                  >
                    <Badge variant="outline">{project.technologies[0]}</Badge>
                    <h3 className="mt-3 font-heading text-lg font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                      {project.summary}
                    </p>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
