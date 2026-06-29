import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/blog/article-hero";
import { ArchitectureGrid } from "@/components/architecture/architecture-grid";
import { DiagramPlaceholder } from "@/components/architecture/diagram-placeholder";
import { RelatedContent } from "@/components/content/related-content";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import {
  architectureTopics,
  getArchitectureTopicBySlug,
  getRelatedArchitectureTopics,
} from "@/content/architecture";
import { siteConfig } from "@/config/site";

type ArchitecturePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return architectureTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: ArchitecturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getArchitectureTopicBySlug(slug);

  if (!topic) {
    return {
      title: "Architecture Not Found",
    };
  }

  const url = `${siteConfig.url}/architecture/${topic.slug}`;

  return {
    title: topic.title,
    description: topic.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${topic.title} | CloudFolio`,
      description: topic.summary,
      url,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function ArchitectureTopicPage({ params }: ArchitecturePageProps) {
  const { slug } = await params;
  const topic = getArchitectureTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const relatedTopics = getRelatedArchitectureTopics(topic);
  const topicIndex = architectureTopics.findIndex((item) => item.slug === slug);
  const previousTopic = topicIndex > 0 ? architectureTopics[topicIndex - 1] : null;
  const nextTopic =
    topicIndex >= 0 && topicIndex < architectureTopics.length - 1
      ? architectureTopics[topicIndex + 1]
      : null;

  return (
    <>
      <ArticleHero
        backHref="/architecture"
        backLabel="Architecture"
        category={topic.category}
        publishedAt={topic.publishedAt}
        readTimeMinutes={5}
        summary={topic.summary}
        tags={topic.technologies}
        title={topic.title}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-10">
              {topic.sections.map((section) => (
                <section key={section.heading}>
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                    {section.heading}
                  </p>
                  <Paragraph className="mt-4">{section.paragraphs[0]}</Paragraph>
                  {section.paragraphs.slice(1).map((paragraph) => (
                    <Paragraph className="mt-4" key={paragraph}>
                      {paragraph}
                    </Paragraph>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li className="flex gap-3 text-sm leading-6 text-muted" key={bullet}>
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-success" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <Card>
                <CardContent className="p-6">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                    Design Notes
                  </p>
                  <H2 className="mt-3 text-3xl">What the diagram should communicate.</H2>
                  <ul className="mt-6 space-y-4">
                    {topic.takeaways.map((takeaway) => (
                      <li className="flex gap-3 text-sm leading-6 text-muted" key={takeaway}>
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <DiagramPlaceholder nodes={topic.diagramNodes} />
              <Card>
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-medium text-foreground">Architecture metadata</p>
                  <p className="text-sm leading-6 text-muted">
                    This placeholder will later be replaced with a rendered diagram, exported image,
                    or code-derived visual asset.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <RelatedContent
            description="Additional architecture pages that show similar system patterns and operational constraints."
            title="Related architecture"
          >
            <ArchitectureGrid topics={relatedTopics} />
          </RelatedContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted">Previous</p>
              {previousTopic ? (
                <ButtonLink
                  className="mt-2"
                  href={`/architecture/${previousTopic.slug}`}
                  variant="outline"
                >
                  {previousTopic.title}
                </ButtonLink>
              ) : (
                <span className="mt-2 block text-sm text-muted">No previous architecture</span>
              )}
            </div>
            <div className="sm:text-right">
              <p className="text-sm font-medium text-muted">Next</p>
              {nextTopic ? (
                <ButtonLink
                  className="mt-2"
                  href={`/architecture/${nextTopic.slug}`}
                  variant="outline"
                >
                  {nextTopic.title}
                </ButtonLink>
              ) : (
                <span className="mt-2 block text-sm text-muted">No next architecture</span>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
