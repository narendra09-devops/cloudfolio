import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { notes } from "@/content/notes";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "CloudFolio operational notes and engineering reference cards for review checklists, incident follow-up, and automation decisions.",
  alternates: {
    canonical: `${siteConfig.url}/notes`,
  },
};

export default function NotesPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface/30">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Notes
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Operational notes and engineering reference cards.
            </h1>
            <Paragraph className="mt-6 max-w-3xl">
              Short-form references for repeatable operations work, incident learning, and design
              decisions.
            </Paragraph>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 max-w-3xl">
            <H2>Latest notes.</H2>
            <Paragraph className="mt-4">
              These notes are intentionally concise so they can be reused during planning, review,
              and operational follow-up.
            </Paragraph>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {notes.map((note) => (
              <Card key={note.slug}>
                <CardContent className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="primary">{note.category}</Badge>
                    <time className="text-xs text-muted">{note.updatedAt}</time>
                  </div>
                  <div>
                    <p className="font-heading text-xl font-semibold tracking-tight text-foreground">
                      {note.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">{note.summary}</p>
                  </div>
                  <ul className="space-y-3">
                    {note.bullets.map((bullet) => (
                      <li className="flex gap-3 text-sm leading-6 text-muted" key={bullet}>
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
