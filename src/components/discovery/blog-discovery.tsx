"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BlogCard } from "@/components/blog/blog-card";
import { DiscoveryEmptyState } from "@/components/discovery/discovery-empty-state";
import {
  DiscoveryToolbar,
  type DiscoveryFilterGroup,
} from "@/components/discovery/discovery-toolbar";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import type { BlogPost } from "@/content/blog";
import { matchesSearch, uniqueSorted } from "@/lib/discovery";

type BlogDiscoveryProps = {
  posts: BlogPost[];
};

const readingOptions = [
  { value: "short", label: "Quick Reads", tone: "success" as const },
  { value: "long", label: "Deep Dives", tone: "accent" as const },
];

function getParams(searchParams: URLSearchParams) {
  return {
    q: searchParams.get("q") ?? "",
    topic: searchParams.getAll("topic"),
    reading: searchParams.getAll("reading"),
  };
}

function matchesReading(post: BlogPost, selected: string[]) {
  if (!selected.length) {
    return true;
  }

  const bucket = post.readTimeMinutes <= 6 ? "short" : "long";
  return selected.includes(bucket);
}

export function BlogDiscovery({ posts }: BlogDiscoveryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => getParams(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  const availableTopics = useMemo(() => uniqueSorted(posts.map((post) => post.category)), [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchable = [
        post.title,
        post.summary,
        post.slug,
        post.category,
        post.tags.join(" "),
        post.technologies?.join(" ") ?? "",
        post.searchableText ?? "",
      ].join(" ");

      return (
        matchesSearch(searchable, params.q) &&
        (params.topic.length === 0 || params.topic.includes(post.category)) &&
        matchesReading(post, params.reading)
      );
    });
  }, [params.q, params.reading, params.topic, posts]);

  const toggleParam = (key: string, value: string) => {
    const current = new URLSearchParams(searchParams.toString());
    const values = current.getAll(key);

    current.delete(key);
    const nextValues = values.includes(value)
      ? values.filter((item) => item !== value)
      : [...values, value];

    nextValues.forEach((item) => current.append(key, item));
    router.replace(`${pathname}${current.toString() ? `?${current.toString()}` : ""}`, {
      scroll: false,
    });
  };

  const clearAll = () => {
    router.replace(pathname, { scroll: false });
  };

  const filterGroups: DiscoveryFilterGroup[] = [
    {
      label: "Topic Filters",
      options: availableTopics.map((value, index) => ({
        value,
        label: value,
        tone: ["primary", "secondary", "success", "warning", "accent"][index % 5] as
          "primary" | "secondary" | "success" | "warning" | "accent",
      })),
      selectedValues: params.topic,
      onToggle: (value) => toggleParam("topic", value),
    },
    {
      label: "Reading Category Filters",
      options: readingOptions,
      selectedValues: params.reading,
      onToggle: (value) => toggleParam("reading", value),
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <H2>Latest articles.</H2>
          <Paragraph className="mt-4">
            Search by title, excerpt, tags, technologies, or slug. Use topic and reading filters to
            narrow the field quickly.
          </Paragraph>
        </div>

        <DiscoveryToolbar
          clearLabel="Clear search"
          filterGroups={filterGroups}
          onClear={clearAll}
          onSearchChange={(value) => {
            const current = new URLSearchParams(searchParams.toString());
            if (value) current.set("q", value);
            else current.delete("q");
            router.replace(`${pathname}${current.toString() ? `?${current.toString()}` : ""}`, {
              scroll: false,
            });
          }}
          resultsCount={filteredPosts.length}
          searchLabel="Search blog posts"
          searchPlaceholder="Search title, excerpt, tags, technologies, or slug"
          searchValue={params.q}
          totalCount={posts.length}
        />

        <div className="mt-8">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <DiscoveryEmptyState
              ctaHref="/blog"
              ctaLabel="View all articles"
              description="No articles match your current search. Clear search or filters to return to the full blog."
              title="No matching articles"
            />
          )}
        </div>
      </Container>
    </Section>
  );
}
