import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/config/site";
import { BlogDiscovery } from "@/components/discovery/blog-discovery";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "CloudFolio blog posts about AWS security, SAP cost optimization, operations, observability, SSL automation, and infrastructure scale.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-secondary)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-primary)/0.10),transparent_42%)]">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Writing
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Technical writing for cloud operators.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              Practical articles on cloud infrastructure, security operations, platform reliability,
              and the decisions behind measurable engineering work.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Suspense
        fallback={
          <Section>
            <Container>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-6 text-sm text-muted">
                Loading blog discovery tools...
              </div>
            </Container>
          </Section>
        }
      >
        <BlogDiscovery posts={blogPosts} />
      </Suspense>
    </>
  );
}
