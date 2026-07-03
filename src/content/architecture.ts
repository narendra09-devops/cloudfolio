export type DiagramSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArchitectureTopic = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  publishedAt: string;
  technologies: string[];
  focusAreas?: string[];
  searchableText?: string;
  diagramNodes: string[];
  sections: DiagramSection[];
  takeaways: string[];
};

export const architectureTopics: ArchitectureTopic[] = [
  {
    title: "AWS Security Remediation Architecture",
    slug: "aws-security-remediation-architecture",
    summary:
      "A reference architecture for aggregating cloud security findings, routing remediation, and tracking operational ownership.",
    category: "Security Architecture",
    publishedAt: "2026-02-08",
    technologies: ["AWS Security Hub", "AWS Config", "Lambda", "IAM", "SNS"],
    focusAreas: ["AWS", "Security", "Governance", "Automation"],
    searchableText:
      "aws security remediation architecture security hub config lambda iam sns findings intake prioritization owner routing remediation tracking",
    diagramNodes: ["Findings intake", "Prioritization", "Owner routing", "Remediation tracking"],
    sections: [
      {
        heading: "Architecture goal",
        paragraphs: [
          "The architecture should keep the signal high by consolidating findings before they reach teams. That makes it easier to focus on the controls that matter most.",
        ],
      },
      {
        heading: "Core flow",
        paragraphs: [
          "Findings are ingested, normalized, prioritized, and routed to the right owner with enough context to act. Remediation status then feeds back into the tracking layer.",
        ],
      },
    ],
    takeaways: [
      "Ownership must be part of the pipeline.",
      "Remediation works best when findings are normalized.",
      "The architecture should make status visible without manual rollups.",
    ],
  },
  {
    title: "SAP Cost Optimization Architecture",
    slug: "sap-cost-optimization-architecture",
    summary:
      "A scheduling and rightsizing architecture for reducing SAP non-production cloud spend.",
    category: "Cost Architecture",
    publishedAt: "2026-01-20",
    technologies: ["AWS EC2", "Systems Manager", "CloudWatch", "Cost Explorer"],
    focusAreas: ["AWS", "Cost Optimization", "Automation"],
    searchableText:
      "sap cost optimization architecture scheduling rightsizing aws ec2 systems manager cloudwatch cost explorer",
    diagramNodes: ["Utilization data", "Scheduling policy", "Start/stop action", "Cost reporting"],
    sections: [
      {
        heading: "Policy over manual control",
        paragraphs: [
          "The architecture should define access windows and exception handling so the environment can be stopped safely without relying on manual memory.",
        ],
      },
      {
        heading: "Operational guardrails",
        paragraphs: [
          "Utilization review, owner approval, and recovery validation need to sit next to the scheduler so the process remains trustworthy.",
        ],
      },
    ],
    takeaways: [
      "Savings and access must be designed together.",
      "Guardrails matter more than raw automation.",
      "The architecture needs a clean recovery path.",
    ],
  },
  {
    title: "VM Audit Automation Architecture",
    slug: "vm-audit-automation-architecture",
    summary:
      "A data pipeline for inventory collection, normalization, compliance checks, and audit reporting.",
    category: "Automation Architecture",
    publishedAt: "2025-12-18",
    technologies: ["Python", "PostgreSQL", "Linux", "Reporting"],
    focusAreas: ["Automation", "Governance", "Reliability"],
    searchableText:
      "vm audit automation architecture data pipeline inventory collection normalization compliance checks audit reporting",
    diagramNodes: ["Collectors", "Normalization", "Rules engine", "Audit output"],
    sections: [
      {
        heading: "Why the pipeline matters",
        paragraphs: [
          "Audit reporting is only reliable when the data is normalized before it reaches the dashboard or export layer.",
        ],
      },
      {
        heading: "Design principle",
        paragraphs: [
          "The architecture should make source data traceable so auditors can see where each row came from and how it was derived.",
        ],
      },
    ],
    takeaways: [
      "Normalization comes before presentation.",
      "Traceability is part of audit readiness.",
      "Owner metadata improves both compliance and operations.",
    ],
  },
  {
    title: "SSL Automation Architecture",
    slug: "ssl-automation-architecture",
    summary:
      "A certificate lifecycle model for discovery, monitoring, alerting, and renewal coordination.",
    category: "Reliability Architecture",
    publishedAt: "2025-11-08",
    technologies: ["SSL/TLS", "DNS", "Prometheus", "Grafana", "Python"],
    focusAreas: ["Reliability", "Networking", "Automation", "Observability"],
    searchableText:
      "ssl automation architecture certificate lifecycle discovery monitoring alerting renewal coordination dns prometheus grafana",
    diagramNodes: ["Endpoint discovery", "Expiry scanner", "Alerting", "Renewal workflow"],
    sections: [
      {
        heading: "Architecture objective",
        paragraphs: [
          "The system should catch drift before it becomes an outage and should surface the owner and deadline together.",
        ],
      },
      {
        heading: "What to monitor",
        paragraphs: [
          "Discovery needs to include public endpoints, internal services, and DNS records so the inventory stays aligned with reality.",
        ],
      },
    ],
    takeaways: [
      "Discovery needs to be continuous.",
      "Alert timing is part of the design.",
      "Renewal ownership must be explicit.",
    ],
  },
  {
    title: "Infrastructure Dashboard Architecture",
    slug: "infrastructure-dashboard-architecture",
    summary:
      "A dashboard architecture that combines ownership, health, and operational context for fast review cycles.",
    category: "Observability Architecture",
    publishedAt: "2025-10-16",
    technologies: ["Grafana", "Prometheus", "APIs", "AWS", "Linux"],
    focusAreas: ["Observability", "AWS", "Platform Engineering"],
    searchableText:
      "infrastructure dashboard architecture ownership health operational context fast review cycles grafana prometheus aws linux",
    diagramNodes: ["Data sources", "Normalization", "Views", "Review exports"],
    sections: [
      {
        heading: "Decision support",
        paragraphs: [
          "The dashboard should help a viewer decide what to do next, not just show state. That means pairing metrics with ownership and risk context.",
        ],
      },
      {
        heading: "View layers",
        paragraphs: [
          "Different consumers need different depth. Leadership wants summary signals, operators need drill-down paths, and both should come from the same base model.",
        ],
      },
    ],
    takeaways: [
      "Good dashboards are opinionated.",
      "Ownership belongs in the primary view.",
      "Signal hierarchy reduces confusion.",
    ],
  },
  {
    title: "Cloud Migration Architecture",
    slug: "cloud-migration-architecture",
    summary:
      "A repeatable migration framework for discovery, sequencing, cutover, and post-migration stabilization.",
    category: "Migration Architecture",
    publishedAt: "2025-09-22",
    technologies: ["AWS", "Terraform", "Kubernetes", "Networking", "CI/CD"],
    focusAreas: ["AWS", "Networking", "Reliability", "Governance"],
    searchableText:
      "cloud migration architecture discovery sequencing cutover stabilization aws terraform kubernetes networking ci cd",
    diagramNodes: ["Discovery", "Wave planning", "Cutover", "Stabilization"],
    sections: [
      {
        heading: "Migration sequencing",
        paragraphs: [
          "The architecture should make dependency order explicit so teams know what to migrate first and what has to wait.",
        ],
      },
      {
        heading: "Operational handoff",
        paragraphs: [
          "A migration is not finished at cutover. The design needs a stabilization step that hands the workload to steady-state operations cleanly.",
        ],
      },
    ],
    takeaways: [
      "Discovery drives sequencing.",
      "Cutover is only one phase.",
      "Stabilization should be designed up front.",
    ],
  },
];

export function getArchitectureTopicBySlug(slug: string) {
  return architectureTopics.find((topic) => topic.slug === slug);
}

export function getRelatedArchitectureTopics(topic: ArchitectureTopic, limit = 3) {
  return architectureTopics
    .filter((candidate) => candidate.slug !== topic.slug)
    .map((candidate) => ({
      topic: candidate,
      score: candidate.technologies.filter((technology) => topic.technologies.includes(technology))
        .length,
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ topic: relatedTopic }) => relatedTopic);
}
