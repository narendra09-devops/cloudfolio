import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { createPageMetadata } from "@/config/site";
import { ArchitectureDiscovery } from "@/components/discovery/architecture-discovery";
import { architectureTopics } from "@/content/architecture";

export const metadata: Metadata = createPageMetadata({
  title: "Architecture Gallery",
  description:
    "CloudFolio architecture gallery covering AWS security, SAP cost optimization, VM audit automation, SSL lifecycle, dashboards, and cloud migration.",
  path: "/architecture",
});

export default function ArchitecturePage() {
  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-accent)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-primary)/0.10),transparent_42%)]">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Architecture
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Architecture gallery and design patterns.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              A visual index of cloud architecture patterns, operational designs, and engineering
              decisions that shape reliable systems.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Suspense
        fallback={
          <Section>
            <Container>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-6 text-sm text-muted">
                Loading architecture discovery tools...
              </div>
            </Container>
          </Section>
        }
      >
        <ArchitectureDiscovery topics={architectureTopics} />
      </Suspense>
    </>
  );
}
