import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { learningTopics, notes } from "@/content/notes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Learning",
  description:
    "CloudFolio learning page with focused study tracks for AWS security, cost optimization, observability, and automation.",
  alternates: {
    canonical: `${siteConfig.url}/learning`,
  },
};

export default function LearningPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface/30">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Learning
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Practical learning tracks for cloud engineers.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              A focused collection of topics that supports technical growth across AWS, platform
              design, reliability, and operations.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Learning Tracks
                </p>
                <H2 className="mt-3 text-3xl">Topics to study next.</H2>
                <div className="mt-6 space-y-4">
                  {learningTopics.map((topic) => (
                    <div
                      className="rounded-md border border-border bg-background/50 p-4"
                      key={topic.title}
                    >
                      <p className="font-medium text-foreground">{topic.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{topic.summary}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Study Notes
                </p>
                <H2 className="mt-3 text-3xl">Fast reference points.</H2>
                <div className="mt-6 space-y-4">
                  {notes.map((note) => (
                    <div
                      className="rounded-md border border-border bg-background/50 p-4"
                      key={note.slug}
                    >
                      <p className="text-sm font-medium text-foreground">{note.title}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{note.summary}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
