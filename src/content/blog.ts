export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  focusAreas?: string[];
  technologies?: string[];
  searchableText?: string;
  sections: BlogSection[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Improving AWS Security Hub Score to 100%",
    slug: "improving-aws-security-hub-score-to-100",
    summary:
      "A practical remediation approach for moving Security Hub from noisy findings to measurable control ownership.",
    category: "AWS Security",
    publishedAt: "2026-02-14",
    readTimeMinutes: 7,
    tags: ["AWS", "Security Hub", "Remediation", "Cloud Security"],
    focusAreas: ["Security", "Compliance", "Automation"],
    technologies: ["AWS", "Security Hub", "Lambda"],
    searchableText:
      "improving aws security hub score to 100 practical remediation approach control ownership security hub remediation cloud security aws",
    sections: [
      {
        heading: "Why the score matters",
        paragraphs: [
          "A clean Security Hub score is only useful when it reflects actual control ownership. The value comes from translating findings into repeatable remediation work, not from hiding alerts.",
          "The first step is to separate true risk from backlog noise and then attach each finding to a service owner, priority, and due date.",
        ],
      },
      {
        heading: "How the remediation loop worked",
        paragraphs: [
          "We used aggregation, severity grouping, and runbook automation to collapse repetitive work. That cut the time spent triaging the same issue across accounts and gave the team a reliable weekly cadence.",
        ],
        bullets: [
          "Group findings by service and control family.",
          "Automate evidence capture for repeatable validation.",
          "Track open items in a visible backlog tied to owners.",
        ],
      },
      {
        heading: "What changed operationally",
        paragraphs: [
          "The score became a byproduct of an operating model instead of a vanity metric. That shift made it easier to keep the result durable after the initial push to 100%.",
        ],
      },
    ],
    takeaways: [
      "Ownership metadata is as important as detection quality.",
      "Remediation needs a repeatable queue, not ad hoc heroics.",
      "A score only matters if it changes decisions.",
    ],
  },
  {
    title: "Automating SAP Start/Stop to Reduce Cloud Costs",
    slug: "automating-sap-start-stop-to-reduce-cloud-costs",
    summary:
      "Scheduling and automation patterns for reducing SAP development environment spend without hurting developer access.",
    category: "Cost Optimization",
    publishedAt: "2026-01-28",
    readTimeMinutes: 6,
    tags: ["AWS", "SAP", "Cost Optimization", "Automation"],
    focusAreas: ["Cost Optimization", "Automation", "SAP"],
    technologies: ["AWS", "SAP", "Systems Manager"],
    searchableText:
      "automating sap start stop to reduce cloud costs scheduling automation rightsizing utilization non-production sap aws",
    sections: [
      {
        heading: "The problem with always-on environments",
        paragraphs: [
          "Non-production SAP landscapes often stay up long after the workday ends. That produces predictable waste because utilization is uneven while the infrastructure bill remains constant.",
        ],
      },
      {
        heading: "Start/stop as policy",
        paragraphs: [
          "The useful pattern is not a manual shutdown checklist. It is a policy-driven schedule with clear exceptions, owner approval, and a recovery path for exceptions that need 24x7 availability.",
        ],
      },
      {
        heading: "What reduced cost most",
        paragraphs: [
          "The largest gains came from combining scheduled downtime with rightsizing and utilization review. Each lever helped, but the biggest effect came from treating cost as an operating input, not a monthly report.",
        ],
      },
    ],
    takeaways: [
      "Cost controls work when engineers can predict access windows.",
      "A schedule is only safe when recovery is tested.",
      "Rightsizing and scheduling should be reviewed together.",
    ],
  },
  {
    title: "Reducing Operational Backlog by 72%",
    slug: "reducing-operational-backlog-by-72",
    summary:
      "A backlog reduction pattern for prioritizing toil, automating repeated tasks, and removing hidden queue growth.",
    category: "Operations",
    publishedAt: "2025-12-19",
    readTimeMinutes: 7,
    tags: ["Backlog", "Automation", "Operations", "SRE"],
    focusAreas: ["SRE", "Automation", "Operations"],
    technologies: ["Automation", "SRE", "Operations"],
    searchableText:
      "reducing operational backlog by 72 backlog reduction automation toil service queues operations sre",
    sections: [
      {
        heading: "The hidden cost of operational queues",
        paragraphs: [
          "Backlogs grow quietly when intake, ownership, and resolution paths are unclear. They become a tax on delivery because engineers spend time choosing work instead of finishing it.",
        ],
      },
      {
        heading: "How backlog reduction actually stuck",
        paragraphs: [
          "We segmented work by risk, frequency, and manual touch time. Then we made automation the default for repeated tasks and set a review cadence that kept the queue from filling back up.",
        ],
      },
      {
        heading: "Why the number mattered",
        paragraphs: [
          "The 72% reduction was useful because it freed capacity for reliability work and exposed the items that were genuinely strategic rather than just noisy.",
        ],
      },
    ],
    takeaways: [
      "Backlog reduction needs intake control.",
      "Automate by frequency and handoff cost.",
      "Throughput metrics change the conversation.",
    ],
  },
  {
    title: "Building Infrastructure Visibility Dashboards",
    slug: "building-infrastructure-visibility-dashboards",
    summary:
      "A design pattern for dashboards that combine ownership, health, and operational context into one view.",
    category: "Observability",
    publishedAt: "2025-11-30",
    readTimeMinutes: 6,
    tags: ["Dashboards", "Observability", "Grafana", "Operations"],
    focusAreas: ["Observability", "Platform Engineering"],
    technologies: ["Grafana", "Prometheus", "AWS"],
    searchableText:
      "building infrastructure visibility dashboards ownership health operational context grafana prometheus observability",
    sections: [
      {
        heading: "Dashboards need a decision model",
        paragraphs: [
          "A useful dashboard is not just a collection of charts. It should answer who owns the issue, what changed, and what action should happen next.",
        ],
      },
      {
        heading: "The data model mattered more than the UI",
        paragraphs: [
          "We normalized inventory, service ownership, and health signals first. Once that foundation was stable, the dashboard could present meaningful slices for both leadership and operators.",
        ],
      },
      {
        heading: "What made it useful in practice",
        paragraphs: [
          "The strongest version of the dashboard was the one people could use during a review or incident without asking for extra context in chat.",
        ],
      },
    ],
    takeaways: [
      "Expose signal and action, not just charts.",
      "Normalize ownership before building views.",
      "Daily refreshes are often enough for leadership.",
    ],
  },
  {
    title: "SSL Lifecycle Automation",
    slug: "ssl-lifecycle-automation",
    summary:
      "How to build certificate discovery, renewal tracking, and alerting into an operational SSL lifecycle system.",
    category: "Reliability",
    publishedAt: "2025-10-24",
    readTimeMinutes: 5,
    tags: ["SSL", "Automation", "Reliability", "Incident Prevention"],
    focusAreas: ["Reliability", "Automation", "Networking"],
    technologies: ["SSL/TLS", "DNS", "Prometheus"],
    searchableText:
      "ssl lifecycle automation discovery monitoring alerting renewal coordination certificate expiry reliability",
    sections: [
      {
        heading: "Why certificate expiry keeps slipping through",
        paragraphs: [
          "Certificate management fails when ownership is unclear and discovery is partial. The result is avoidable urgency that shows up only when expiry is close.",
        ],
      },
      {
        heading: "The automation pattern",
        paragraphs: [
          "The fix is a continuous loop: discovery, expiry alerting, owner assignment, and renewal tracking. DNS and endpoint checks should be part of that loop because inventories drift over time.",
        ],
      },
      {
        heading: "The operational payoff",
        paragraphs: [
          "Once the process was automated, expiry stopped being a calendar chase and became a monitored workflow with predictable escalation windows.",
        ],
      },
    ],
    takeaways: [
      "Discovery should include DNS and endpoint checks.",
      "Alerts need enough runway to be actionable.",
      "Ownership must be maintained continuously.",
    ],
  },
  {
    title: "Lessons Learned Managing 1000+ Servers",
    slug: "lessons-learned-managing-1000-plus-servers",
    summary:
      "Operational lessons from managing large server estates across compliance, automation, ownership, and incident response.",
    category: "Platform Operations",
    publishedAt: "2025-09-10",
    readTimeMinutes: 8,
    tags: ["Linux", "Operations", "Automation", "Scale"],
    focusAreas: ["Operations", "Automation", "Scale"],
    technologies: ["Linux", "Automation", "Operations"],
    searchableText:
      "lessons learned managing 1000 plus servers operational lessons automation compliance ownership incident response scale",
    sections: [
      {
        heading: "Scale exposes process debt",
        paragraphs: [
          "At large server counts, inconsistent naming, poor ownership, and manual patching stop being annoyances and become systemic risk.",
        ],
      },
      {
        heading: "Automation has to be boring",
        paragraphs: [
          "The best operational automation is predictable and repeatable. It should reduce variance, not create new edge cases every week.",
        ],
      },
      {
        heading: "What changed the most",
        paragraphs: [
          "The biggest improvement came from standardizing inventory, patching, and reporting. Once those basics were reliable, higher-level work became easier to trust.",
        ],
      },
    ],
    takeaways: [
      "Inventory is the starting point for every improvement.",
      "Standardization matters more as estate size grows.",
      "Operational scale rewards boring consistency.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3) {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score: candidate.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ post: relatedPost }) => relatedPost);
}

export function getPreviousBlogPost(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);

  return index > 0 ? blogPosts[index - 1] : null;
}

export function getNextBlogPost(slug: string) {
  const index = blogPosts.findIndex((post) => post.slug === slug);

  return index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null;
}
