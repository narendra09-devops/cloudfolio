import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { ActivityFeed } from "@/components/github/activity-feed";
import { RepositoryGrid } from "@/components/github/repository-grid";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/config/site";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { getGithubDashboardData } from "@/lib/github";

export const revalidate = 1800;

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Activity",
  description:
    "Recent CloudFolio engineering activity across GitHub repositories, technical writing, and project case studies.",
  path: "/activity",
});

export default async function ActivityPage() {
  const github = await getGithubDashboardData();

  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-success)/0.14),transparent_24rem),linear-gradient(135deg,rgb(var(--color-primary)/0.10),transparent_42%)]">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Activity
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Recent engineering activity.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              A consolidated feed of repository updates, technical writing, and case study work for
              a quick read on engineering momentum.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
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

          <ActivityFeed
            blogs={blogPosts}
            githubActivities={github.activities}
            projects={projects}
            repositories={github.repositories}
            usingFallback={github.usingFallback}
          />

          <div>
            <div className="mb-6">
              <H2>Repository activity.</H2>
              <Paragraph className="mt-3">
                Latest repositories from GitHub, cached server-side for a stable portfolio
                experience.
              </Paragraph>
            </div>
            <RepositoryGrid repositories={github.repositories} />
          </div>
        </Container>
      </Section>
    </>
  );
}
