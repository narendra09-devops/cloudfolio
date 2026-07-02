import type { Metadata } from "next";
import { ArchitectureGrid } from "@/components/architecture/architecture-grid";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { architectureTopics } from "@/content/architecture";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Architecture Gallery",
  description:
    "CloudFolio architecture gallery covering AWS security, SAP cost optimization, VM audit automation, SSL lifecycle, dashboards, and cloud migration.",
  alternates: {
    canonical: `${siteConfig.url}/architecture`,
  },
  openGraph: {
    title: "Architecture Gallery | CloudFolio",
    description:
      "A gallery of cloud architecture patterns and operational diagrams for recruiters and engineering teams.",
    url: `${siteConfig.url}/architecture`,
    siteName: siteConfig.name,
    type: "website",
  },
};

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

      <Section>
        <Container>
          <div className="mb-8 max-w-3xl">
            <H2>Reference diagrams.</H2>
            <Paragraph className="mt-4">
              Each architecture topic explains the system flow, the technical choices, and the
              operational constraints behind the design.
            </Paragraph>
          </div>
          <ArchitectureGrid topics={architectureTopics} />
        </Container>
      </Section>
    </>
  );
}
