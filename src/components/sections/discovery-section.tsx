import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const focusCards = [
  {
    title: "Cloud Security",
    description: "Security remediation, compliance, and ownership routing.",
    href: "/projects?category=Security",
    accent: "from-primary/15 via-secondary/10 to-surface",
  },
  {
    title: "Site Reliability",
    description: "Incident response, lifecycle automation, and resilience.",
    href: "/projects?tech=SRE",
    accent: "from-secondary/15 via-success/10 to-surface",
  },
  {
    title: "Platform Engineering",
    description: "Reusable foundations, review systems, and delivery flow.",
    href: "/projects?category=Architecture",
    accent: "from-accent/15 via-primary/10 to-surface",
  },
  {
    title: "Cost Optimization",
    description: "Spend reduction, scheduling, and rightsizing patterns.",
    href: "/projects?category=Cost%20Optimization",
    accent: "from-amber-500/15 via-primary/10 to-surface",
  },
  {
    title: "Infrastructure Automation",
    description: "Automation frameworks for audit, operations, and scale.",
    href: "/projects?tech=Automation",
    accent: "from-success/15 via-secondary/10 to-surface",
  },
  {
    title: "Architecture Design",
    description: "Reference diagrams, governance, and decision patterns.",
    href: "/architecture?focus=AWS",
    accent: "from-secondary/15 via-accent/10 to-surface",
  },
] as const;

export function DiscoverySection() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Explore by focus area
          </p>
          <H2 className="mt-3">Jump to the work that matches the search brief.</H2>
          <Paragraph className="mt-4">
            Quick paths to CloudFolio&apos;s strongest cloud, platform, reliability, and
            architecture material.
          </Paragraph>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {focusCards.map((card) => (
            <Link
              className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href={card.href}
              key={card.title}
            >
              <Card
                className={`h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10 ${card.accent}`}
              >
                <CardContent className="flex h-full items-start justify-between gap-4 p-6">
                  <div className="max-w-[calc(100%-3rem)]">
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                    <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-background/70 text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-primary/40">
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
