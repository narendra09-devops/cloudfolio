export type Note = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  updatedAt: string;
  bullets: string[];
};

export const learningTopics = [
  {
    title: "AWS security fundamentals",
    summary: "Focus on ownership, detection quality, and repeatable remediation.",
  },
  {
    title: "Cost management",
    summary: "Treat cloud cost as an operating signal instead of a monthly surprise.",
  },
  {
    title: "Operational visibility",
    summary: "Build dashboards that support decisions, not just status collection.",
  },
  {
    title: "Automation design",
    summary: "Prefer boring, observable automation with clear rollback paths.",
  },
] as const;

export const notes: Note[] = [
  {
    title: "Architecture review checklist",
    slug: "architecture-review-checklist",
    summary: "A lightweight checklist for design reviews, tradeoff capture, and readiness checks.",
    category: "Design Note",
    updatedAt: "2026-02-01",
    bullets: [
      "Clarify ownership and operational model.",
      "Capture failure modes and recovery steps.",
      "Document tradeoffs and accepted risks.",
    ],
  },
  {
    title: "Incident follow-up template",
    slug: "incident-follow-up-template",
    summary: "A repeatable note structure for learning capture after operational incidents.",
    category: "Operations Note",
    updatedAt: "2026-01-11",
    bullets: [
      "What failed and how it was detected.",
      "What the timeline looked like.",
      "Which fixes are permanent versus temporary.",
    ],
  },
  {
    title: "Automation candidate rubric",
    slug: "automation-candidate-rubric",
    summary: "A simple rubric for selecting work that should be automated first.",
    category: "Engineering Note",
    updatedAt: "2025-12-14",
    bullets: ["High frequency.", "High handoff cost.", "Low variability."],
  },
];
