"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { DiscoveryEmptyState } from "@/components/discovery/discovery-empty-state";
import {
  DiscoveryToolbar,
  type DiscoveryFilterGroup,
  type DiscoveryFilterOption,
} from "@/components/discovery/discovery-toolbar";
import type { Project } from "@/content/projects";
import { matchesSearch, uniqueSorted } from "@/lib/discovery";

type ProjectsDiscoveryProps = {
  projects: Project[];
};

const technologyOptions: DiscoveryFilterOption[] = [
  "AWS",
  "SRE",
  "Platform Engineering",
  "Security",
  "Automation",
  "Cost Optimization",
  "Observability",
  "Terraform",
  "Kubernetes",
  "Architecture",
  "Compliance",
].map((value, index) => ({
  value,
  label: value,
  tone: ["primary", "secondary", "success", "warning", "accent"][index % 5] as
    "primary" | "secondary" | "success" | "warning" | "accent",
}));

const outcomeOptions: DiscoveryFilterOption[] = [
  { value: "risk", label: "Risk Reduction", tone: "secondary" },
  { value: "cost", label: "Cost Optimization", tone: "warning" },
  { value: "automation", label: "Automation", tone: "primary" },
  { value: "coverage", label: "Coverage", tone: "success" },
  { value: "visibility", label: "Visibility", tone: "accent" },
];

function getParams(searchParams: URLSearchParams) {
  return {
    q: searchParams.get("q") ?? "",
    tech: searchParams.getAll("tech"),
    category: searchParams.getAll("category"),
    outcome: searchParams.getAll("outcome"),
    type: searchParams.getAll("type"),
  };
}

function projectMatchesOutcome(project: Project, selected: string[]) {
  if (!selected.length) {
    return true;
  }

  const haystack =
    `${project.outcomes?.join(" ")} ${project.businessImpact.join(" ")} ${project.metrics
      .map((metric) => `${metric.label} ${metric.context}`)
      .join(" ")}`.toLowerCase();

  const outcomeMap: Record<string, string[]> = {
    risk: ["risk", "security", "findings", "expiry", "incident", "compliance"],
    cost: ["cost", "spend", "savings", "optimization"],
    automation: ["automation", "automate", "reusable", "workflow"],
    coverage: ["coverage", "scope", "account coverage", "visibility"],
    visibility: ["visibility", "dashboard", "report", "audit", "traceability"],
  };

  return selected.some((value) =>
    (outcomeMap[value] ?? [value]).some((token) => haystack.includes(token)),
  );
}

export function ProjectsDiscovery({ projects }: ProjectsDiscoveryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => getParams(new URLSearchParams(searchParams.toString())),
    [searchParams],
  );

  const availableCategories = useMemo(
    () => uniqueSorted(projects.map((project) => project.category)),
    [projects],
  );
  const availableTypes = useMemo(
    () => uniqueSorted(projects.map((project) => project.projectType ?? project.category)),
    [projects],
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchable = [
        project.title,
        project.summary,
        project.category,
        project.projectType ?? "",
        project.role ?? "",
        project.searchableText ?? "",
        project.technologies.join(" "),
        project.focusAreas?.join(" ") ?? "",
        project.outcomes?.join(" ") ?? "",
        project.seniorityKeywords?.join(" ") ?? "",
      ].join(" ");

      const matchesTech =
        params.tech.length === 0 ||
        params.tech.every((selected) =>
          [
            project.technologies,
            project.focusAreas ?? [],
            project.seniorityKeywords ?? [],
            [project.category, project.projectType ?? ""],
          ]
            .flat()
            .some((value) => value.toLowerCase().includes(selected.toLowerCase())),
        );
      const matchesCategory =
        params.category.length === 0 ||
        params.category.includes(project.category) ||
        params.category.includes(project.projectType ?? "");
      const matchesType =
        params.type.length === 0 || params.type.includes(project.projectType ?? project.category);

      return (
        matchesSearch(searchable, params.q) &&
        matchesTech &&
        matchesCategory &&
        matchesType &&
        projectMatchesOutcome(project, params.outcome)
      );
    });
  }, [params.category, params.outcome, params.q, params.tech, params.type, projects]);

  const updateParams = (nextParams: Record<string, string[] | string>) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(nextParams).forEach(([key, value]) => {
      current.delete(key);
      if (Array.isArray(value)) {
        value.forEach((item) => current.append(key, item));
      } else if (value) {
        current.set(key, value);
      }
    });

    router.replace(`${pathname}${current.toString() ? `?${current.toString()}` : ""}`, {
      scroll: false,
    });
  };

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
      label: "Technology Filters",
      options: technologyOptions,
      selectedValues: params.tech,
      onToggle: (value) => toggleParam("tech", value),
    },
    {
      label: "Category Filters",
      options: availableCategories.map((value, index) => ({
        value,
        label: value,
        tone: ["primary", "secondary", "success", "warning", "accent"][index % 5] as
          "primary" | "secondary" | "success" | "warning" | "accent",
      })),
      selectedValues: params.category,
      onToggle: (value) => toggleParam("category", value),
    },
    {
      label: "Outcome Filters",
      options: outcomeOptions,
      selectedValues: params.outcome,
      onToggle: (value) => toggleParam("outcome", value),
    },
    {
      label: "Project Type Filters",
      options: availableTypes.map((value, index) => ({
        value,
        label: value,
        tone: ["primary", "secondary", "success", "warning", "accent"][index % 5] as
          "primary" | "secondary" | "success" | "warning" | "accent",
      })),
      selectedValues: params.type,
      onToggle: (value) => toggleParam("type", value),
    },
  ];

  return (
    <>
      <Section>
        <Container>
          <div className="mb-8 max-w-3xl">
            <H2>Selected project portfolio.</H2>
            <Paragraph className="mt-4">
              Search by title, summary, technologies, category, outcomes, or role. Filter by the
              engineering focus recruiters usually screen for first.
            </Paragraph>
          </div>

          <DiscoveryToolbar
            clearLabel="Clear filters"
            filterGroups={filterGroups}
            onClear={clearAll}
            onSearchChange={(value) => updateParams({ q: value })}
            resultsCount={filteredProjects.length}
            searchLabel="Search projects"
            searchPlaceholder="Search projects, technologies, roles, and outcomes"
            searchValue={params.q}
            totalCount={projects.length}
          />

          <div className="mt-8">
            {filteredProjects.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <DiscoveryEmptyState
                ctaHref="/projects"
                ctaLabel="View all projects"
                description="No projects match the current search and filter combination. Clear filters to return to the full portfolio."
                title="No matching projects"
              />
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
