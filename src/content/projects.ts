export type ProjectMetric = {
  label: string;
  value: string;
  context: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics: ProjectMetric[];
  businessImpact: string[];
  lessonsLearned: string[];
  architecture: string[];
};

export const projects: Project[] = [
  {
    title: "AWS Security Hub Remediation Program",
    slug: "aws-security-hub-remediation-program",
    summary:
      "A structured remediation program for AWS Security Hub findings across accounts, teams, and operational ownership boundaries.",
    problem:
      "Security Hub findings were visible, but remediation was inconsistent because ownership, severity handling, and repeatable runbooks were fragmented across environments.",
    solution:
      "Built a prioritized remediation operating model with automated evidence collection, finding triage, reusable runbooks, and backlog tracking for high-risk AWS controls.",
    technologies: ["AWS Security Hub", "AWS Config", "IAM", "Lambda", "CloudWatch", "Python"],
    metrics: [
      {
        label: "Critical findings",
        value: "65%",
        context: "reduced through prioritized remediation",
      },
      { label: "Triage time", value: "40%", context: "faster with reusable evidence packs" },
      {
        label: "Account coverage",
        value: "100%",
        context: "standardized reporting across target accounts",
      },
    ],
    businessImpact: [
      "Improved security posture with clearer accountability for cloud control owners.",
      "Reduced audit preparation effort by centralizing remediation evidence.",
      "Created an operating cadence that helped leadership track risk reduction over time.",
    ],
    lessonsLearned: [
      "Security automation needs ownership metadata as much as technical detection.",
      "A small set of high-quality runbooks improves adoption faster than broad generic guidance.",
      "Risk reporting is more useful when tied to accountable service teams and due dates.",
    ],
    architecture: [
      "Security Hub findings",
      "Aggregation and triage",
      "Runbook automation",
      "Evidence store",
    ],
  },
  {
    title: "SAP Development Environment Cost Optimization",
    slug: "sap-development-environment-cost-optimization",
    summary:
      "Cost optimization initiative for SAP development infrastructure using schedules, rightsizing, and utilization review.",
    problem:
      "SAP development environments were consuming steady-state infrastructure spend even when engineering activity was intermittent.",
    solution:
      "Introduced environment scheduling, utilization analysis, instance rightsizing, and cost guardrails that preserved developer access while lowering idle spend.",
    technologies: ["AWS EC2", "SAP", "CloudWatch", "Cost Explorer", "Systems Manager", "Terraform"],
    metrics: [
      { label: "Monthly spend", value: "32%", context: "reduction in non-production run cost" },
      { label: "Idle runtime", value: "55%", context: "removed through scheduled availability" },
      {
        label: "Review cycle",
        value: "2 weeks",
        context: "for recurring cost and utilization checks",
      },
    ],
    businessImpact: [
      "Lowered cloud operating cost without delaying development workflows.",
      "Gave finance and engineering a shared view of optimization decisions.",
      "Established a repeatable approach for other non-production estate reviews.",
    ],
    lessonsLearned: [
      "Cost controls work best when engineers retain predictable access windows.",
      "Rightsizing decisions need both utilization data and application owner validation.",
      "Savings programs should include a feedback loop so optimizations remain durable.",
    ],
    architecture: [
      "Usage telemetry",
      "Schedule policies",
      "Rightsizing workflow",
      "Cost reporting",
    ],
  },
  {
    title: "Cloud Architecture Design Framework",
    slug: "cloud-architecture-design-framework",
    summary:
      "A reusable cloud architecture framework for standardizing design reviews, operational readiness, and platform decisions.",
    problem:
      "Architecture reviews varied by project, which made reliability, security, cost, and operational readiness difficult to compare consistently.",
    solution:
      "Created a structured framework with decision records, design checkpoints, reusable reference patterns, and review criteria mapped to platform standards.",
    technologies: [
      "AWS Well-Architected",
      "Terraform",
      "Kubernetes",
      "ADR",
      "CI/CD",
      "Observability",
    ],
    metrics: [
      {
        label: "Review consistency",
        value: "90%",
        context: "of designs mapped to the same checkpoint model",
      },
      { label: "Design cycle", value: "30%", context: "shorter for repeat platform patterns" },
      { label: "Reusable patterns", value: "12", context: "documented for common cloud workloads" },
    ],
    businessImpact: [
      "Improved engineering decision quality with a common review language.",
      "Reduced rework by catching reliability and security gaps earlier.",
      "Made architecture rationale easier for stakeholders and future teams to audit.",
    ],
    lessonsLearned: [
      "Architecture governance should accelerate decisions, not create ceremony.",
      "Good templates capture tradeoffs and ownership, not just diagrams.",
      "Framework adoption improves when review outputs are reusable in delivery work.",
    ],
    architecture: ["Design intake", "Decision records", "Reference patterns", "Readiness review"],
  },
  {
    title: "VM Audit Automation Platform",
    slug: "vm-audit-automation-platform",
    summary:
      "Automation platform for VM inventory, compliance checks, owner mapping, and audit-ready infrastructure reporting.",
    problem:
      "Manual VM audits were slow, error-prone, and dependent on scattered infrastructure data from multiple operational systems.",
    solution:
      "Built automated inventory collection, normalization, compliance checks, and reporting workflows that produced consistent audit outputs.",
    technologies: ["Python", "Linux", "VMware", "Shell", "PostgreSQL", "Reporting"],
    metrics: [
      { label: "Audit effort", value: "70%", context: "reduction in manual evidence gathering" },
      {
        label: "Inventory accuracy",
        value: "95%+",
        context: "after normalization and owner mapping",
      },
      { label: "Report cadence", value: "Weekly", context: "automated compliance snapshots" },
    ],
    businessImpact: [
      "Reduced audit delivery risk by removing spreadsheet-driven reconciliation.",
      "Improved infrastructure ownership visibility for operations and compliance teams.",
      "Created a dependable source of truth for recurring VM estate reviews.",
    ],
    lessonsLearned: [
      "Audit platforms need strong data normalization before dashboards become trustworthy.",
      "Owner and lifecycle metadata are as important as technical configuration facts.",
      "Automated evidence should be explainable so auditors can trace source data.",
    ],
    architecture: [
      "Inventory collectors",
      "Normalization layer",
      "Compliance rules",
      "Audit reports",
    ],
  },
  {
    title: "SSL Lifecycle Automation Platform",
    slug: "ssl-lifecycle-automation-platform",
    summary:
      "Certificate lifecycle automation for discovery, expiration tracking, renewal coordination, and service reliability.",
    problem:
      "Certificate expirations were tracked manually, creating avoidable outage risk and inconsistent renewal ownership.",
    solution:
      "Implemented certificate discovery, expiration monitoring, alerting, ownership mapping, and renewal workflows for critical services.",
    technologies: ["SSL/TLS", "DNS", "Python", "Cron", "Prometheus", "Grafana"],
    metrics: [
      { label: "Expiry incidents", value: "0", context: "after proactive lifecycle tracking" },
      { label: "Coverage", value: "85%+", context: "of known critical endpoints monitored" },
      {
        label: "Notice window",
        value: "30/15/7",
        context: "day alerting checkpoints before expiry",
      },
    ],
    businessImpact: [
      "Lowered customer-facing outage risk from unmanaged certificate expiration.",
      "Made renewal ownership visible before urgent escalation windows.",
      "Improved operational confidence for internet-facing and internal services.",
    ],
    lessonsLearned: [
      "Certificate ownership must be maintained continuously, not only during renewals.",
      "Discovery should include DNS and endpoint checks because inventories drift.",
      "Alert timing matters; too early is ignored, too late becomes an incident.",
    ],
    architecture: [
      "Endpoint discovery",
      "Certificate scanner",
      "Alert routing",
      "Renewal workflow",
    ],
  },
  {
    title: "Infrastructure Visibility Dashboard",
    slug: "infrastructure-visibility-dashboard",
    summary:
      "Operational dashboard for infrastructure status, ownership, health signals, and executive-ready service visibility.",
    problem:
      "Infrastructure health and ownership data lived in separate tools, forcing teams to assemble status manually during reviews and incidents.",
    solution:
      "Created a consolidated dashboard that connected inventory, health indicators, service ownership, and operational risk signals.",
    technologies: ["Grafana", "Prometheus", "AWS", "Linux", "APIs", "Observability"],
    metrics: [
      { label: "Status lookup", value: "80%", context: "faster during operational reviews" },
      { label: "Data sources", value: "6", context: "integrated into one infrastructure view" },
      {
        label: "Review readiness",
        value: "Daily",
        context: "refresh cadence for leadership summaries",
      },
    ],
    businessImpact: [
      "Improved incident and review conversations with a shared operational picture.",
      "Reduced dependency on individual engineers for basic infrastructure status.",
      "Helped prioritize reliability work by making recurring risks visible.",
    ],
    lessonsLearned: [
      "Dashboards need clear ownership and action paths, not just more charts.",
      "Operational views should separate signal from diagnostic detail.",
      "A daily refresh cadence is often more valuable than real-time data for leadership review.",
    ],
    architecture: ["Source integrations", "Health model", "Dashboard views", "Review exports"],
  },
  {
    title: "Operational Backlog Reduction Initiative",
    slug: "operational-backlog-reduction-initiative",
    summary:
      "Program to reduce recurring infrastructure operations backlog through prioritization, automation, and clearer service ownership.",
    problem:
      "A large backlog of recurring operational tasks was slowing delivery and masking higher-risk infrastructure work.",
    solution:
      "Segmented backlog items by risk and toil, automated repeatable tasks, clarified ownership, and introduced throughput reporting.",
    technologies: ["Jira", "Python", "Shell", "Linux", "Automation", "Service Management"],
    metrics: [
      { label: "Backlog size", value: "45%", context: "reduction across targeted queues" },
      { label: "Manual toil", value: "25 hrs", context: "saved per month through automation" },
      { label: "SLA adherence", value: "20%", context: "improvement after prioritization changes" },
    ],
    businessImpact: [
      "Freed engineering capacity for higher-value reliability and platform work.",
      "Improved stakeholder trust through clearer prioritization and throughput reporting.",
      "Reduced hidden operational risk by separating urgent work from low-value queue noise.",
    ],
    lessonsLearned: [
      "Backlog reduction needs intake control or the queue refills quickly.",
      "Automation candidates should be selected by frequency, risk, and handoff cost.",
      "Visible throughput metrics change stakeholder conversations from anecdotal to factual.",
    ],
    architecture: [
      "Backlog taxonomy",
      "Automation candidates",
      "Ownership routing",
      "Throughput reports",
    ],
  },
  {
    title: "SRE Automation Toolkit",
    slug: "sre-automation-toolkit",
    summary:
      "Reusable SRE automation toolkit for operational checks, incident support, reporting, and infrastructure maintenance workflows.",
    problem:
      "SRE tasks were solved repeatedly with one-off scripts, which created inconsistent behavior and duplicated maintenance effort.",
    solution:
      "Packaged common operational automation into reusable commands, documented workflows, and standardized checks for infrastructure teams.",
    technologies: ["Python", "Bash", "AWS CLI", "Linux", "GitHub Actions", "Runbooks"],
    metrics: [
      {
        label: "Reusable commands",
        value: "20+",
        context: "packaged for common operational workflows",
      },
      { label: "Incident checks", value: "50%", context: "faster for repeated diagnostic paths" },
      { label: "Script duplication", value: "35%", context: "reduced through shared tooling" },
    ],
    businessImpact: [
      "Improved reliability team speed during incidents and maintenance windows.",
      "Reduced operational variance by standardizing repeated infrastructure checks.",
      "Made automation easier to review, version, and extend across teams.",
    ],
    lessonsLearned: [
      "Toolkits succeed when command interfaces stay predictable and boring.",
      "Documentation should live beside the automation so usage does not drift.",
      "Reusable checks should return actionable output, not raw noise.",
    ],
    architecture: ["CLI commands", "Shared libraries", "Runbook workflows", "CI validation"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) => candidate.slug !== project.slug)
    .map((candidate) => ({
      project: candidate,
      score: candidate.technologies.filter((technology) =>
        project.technologies.includes(technology),
      ).length,
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ project: relatedProject }) => relatedProject);
}
