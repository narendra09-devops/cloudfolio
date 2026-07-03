"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArchitectureGrid } from "@/components/architecture/architecture-grid";
import { DiscoveryEmptyState } from "@/components/discovery/discovery-empty-state";
import {
  DiscoveryToolbar,
  type DiscoveryFilterGroup,
} from "@/components/discovery/discovery-toolbar";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import type { ArchitectureTopic } from "@/content/architecture";
import { matchesSearch } from "@/lib/discovery";

type ArchitectureDiscoveryProps = {
  topics: ArchitectureTopic[];
};

const focusOptions = [
  "AWS",
  "Security",
  "Cost Optimization",
  "Observability",
  "Automation",
  "Reliability",
  "Networking",
  "Governance",
].map((value, index) => ({
  value,
  label: value,
  tone: ["primary", "secondary", "success", "warning", "accent"][index % 5] as
    "primary" | "secondary" | "success" | "warning" | "accent",
}));

function getParams(searchParams: URLSearchParams) {
  return {
    q: searchParams.get("q") ?? "",
    focus: searchParams.getAll("focus"),
  };
}

export function ArchitectureDiscovery({ topics }: ArchitectureDiscoveryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => getParams(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const searchable = [
        topic.title,
        topic.summary,
        topic.category,
        topic.technologies.join(" "),
        topic.diagramNodes.join(" "),
        topic.takeaways.join(" "),
        topic.focusAreas?.join(" ") ?? "",
        topic.searchableText ?? "",
      ].join(" ");

      const matchesFocus =
        params.focus.length === 0 ||
        params.focus.every((selected) =>
          [
            topic.category,
            topic.technologies.join(" "),
            topic.focusAreas?.join(" ") ?? "",
            searchable,
          ]
            .join(" ")
            .toLowerCase()
            .includes(selected.toLowerCase()),
        );

      return matchesSearch(searchable, params.q) && matchesFocus;
    });
  }, [params.focus, params.q, topics]);

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
      label: "Focus Filters",
      options: focusOptions,
      selectedValues: params.focus,
      onToggle: (value) => toggleParam("focus", value),
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-8 max-w-3xl">
          <H2>Reference diagrams.</H2>
          <Paragraph className="mt-4">
            Search by title, summary, category, technologies, diagram nodes, or takeaways. Filter by
            the architecture focus that matters to the review.
          </Paragraph>
        </div>

        <DiscoveryToolbar
          clearLabel="Clear filters"
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
          resultsCount={filteredTopics.length}
          searchLabel="Search architecture topics"
          searchPlaceholder="Search architecture, technologies, nodes, or takeaways"
          searchValue={params.q}
          totalCount={topics.length}
        />

        <div className="mt-8">
          {filteredTopics.length > 0 ? (
            <ArchitectureGrid topics={filteredTopics} />
          ) : (
            <DiscoveryEmptyState
              ctaHref="/architecture"
              ctaLabel="View all diagrams"
              description="No architecture topics match your search. Clear filters to return to the full gallery."
              title="No matching diagrams"
            />
          )}
        </div>
      </Container>
    </Section>
  );
}
