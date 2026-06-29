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
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { getGithubDashboardData } from "@/lib/github";

export const metadata: Metadata = {
  title: "Engineering Dashboard",
  description:
    "Live CloudFolio engineering dashboard with GitHub profile data, repositories, language statistics, project highlights, and analytics placeholders.",
  alternates: {
    canonical: `${siteConfig.url}/dashboard`,
  },
  openGraph: {
    title: "Engineering Dashboard | CloudFolio",
    description:
      "GitHub-backed portfolio dashboard for repositories, engineering metrics, activity, and content widgets.",
    url: `${siteConfig.url}/dashboard`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default async function DashboardPage() {
  const github = await getGithubDashboardData();
  const latestBlogs = blogPosts.slice(0, 3);
  const latestProjects = projects.slice(0, 3);

  return (
    <>
      <Section className="border-b border-border bg-surface/30">
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
                <p>{github.error}. Static content remains available while GitHub data recovers.</p>
              </div>
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GithubProfileCard profile={github.profile} />
            <MetricsDashboard languages={github.languages} repositories={github.repositories} />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ContributionGraph />
            <AnalyticsCard fetchedAt={github.fetchedAt} />
          </div>

          <div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <H2>Latest repositories.</H2>
                <Paragraph className="mt-3">
                  Repository cards are sorted by recent push activity from the GitHub API.
                </Paragraph>
              </div>
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                href="/activity"
              >
                View activity
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <RepositoryGrid repositories={github.repositories.slice(0, 6)} />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent blog posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestBlogs.map((post) => (
                  <Link
                    className="block rounded-md border border-border bg-background/50 p-4 transition-colors hover:border-primary/40 hover:bg-surface/80"
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

            <Card>
              <CardHeader>
                <CardTitle>Recent projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestProjects.map((project) => (
                  <Link
                    className="block rounded-md border border-border bg-background/50 p-4 transition-colors hover:border-primary/40 hover:bg-surface/80"
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
