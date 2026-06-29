import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/blog/article-hero";
import { BlogGrid } from "@/components/blog/blog-grid";
import { TableOfContentsPlaceholder } from "@/components/blog/table-of-contents-placeholder";
import { RelatedContent } from "@/components/content/related-content";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import {
  blogPosts,
  getBlogPostBySlug,
  getNextBlogPost,
  getPreviousBlogPost,
  getRelatedBlogPosts,
} from "@/content/blog";
import { siteConfig } from "@/config/site";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | CloudFolio`,
      description: post.summary,
      url,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post);
  const previousPost = getPreviousBlogPost(slug);
  const nextPost = getNextBlogPost(slug);

  return (
    <>
      <ArticleHero
        backHref="/blog"
        backLabel="Blog"
        category={post.category}
        publishedAt={post.publishedAt}
        readTimeMinutes={post.readTimeMinutes}
        summary={post.summary}
        tags={post.tags}
        title={post.title}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="space-y-10">
              {post.sections.map((section) => (
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
                    Key Takeaways
                  </p>
                  <H2 className="mt-3 text-3xl">What to carry forward.</H2>
                  <ul className="mt-6 space-y-4">
                    {post.takeaways.map((takeaway) => (
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
              <TableOfContentsPlaceholder items={post.sections.map((section) => section.heading)} />
              <Card>
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-medium text-foreground">Article metadata</p>
                  <p className="text-sm leading-6 text-muted">
                    The article body is structured for future anchor links, richer prose blocks, and
                    expanded supporting evidence.
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
            description="A few adjacent articles with similar operational themes and technical patterns."
            title="Related articles"
          >
            <BlogGrid posts={relatedPosts} />
          </RelatedContent>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-muted">Previous</p>
              {previousPost ? (
                <ButtonLink className="mt-2" href={`/blog/${previousPost.slug}`} variant="outline">
                  {previousPost.title}
                </ButtonLink>
              ) : (
                <span className="mt-2 block text-sm text-muted">No previous article</span>
              )}
            </div>
            <div className="sm:text-right">
              <p className="text-sm font-medium text-muted">Next</p>
              {nextPost ? (
                <ButtonLink className="mt-2" href={`/blog/${nextPost.slug}`} variant="outline">
                  {nextPost.title}
                </ButtonLink>
              ) : (
                <span className="mt-2 block text-sm text-muted">No next article</span>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
