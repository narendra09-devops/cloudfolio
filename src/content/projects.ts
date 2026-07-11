export type ProjectMetric = {
  label: string;
  value: string;
  context: string;
};

export type ProjectDetailSection = {
  title: string;
  items: string[];
};

export type ProjectMermaidDiagram = {
  title: string;
  description: string;
  code: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: string;
  projectType?: string;
  focusAreas?: string[];
  outcomes?: string[];
  seniorityKeywords?: string[];
  searchableText?: string;
  repositoryUrl?: string;
  metrics: ProjectMetric[];
  businessImpact: string[];
  lessonsLearned: string[];
  architecture: string[];
  employer?: string;
  client?: string;
  role?: string;
  duration?: string;
  teamSize?: string;
  primaryOutcome?: string;
  environmentScale?: string[];
  dataCollected?: string[];
  technicalChallenges?: string[];
  implementation?: ProjectDetailSection[];
  keyAchievements?: string[];
  mermaidDiagrams?: ProjectMermaidDiagram[];
};

export const projects: Project[] = [
  {
    title: "Open-Source Kubernetes Platform on AWS EKS",
    slug: "open-source-kubernetes-platform-aws-eks",
    category: "Platform Engineering",
    summary:
      "Personal open-source project demonstrating a production-inspired Kubernetes platform on AWS EKS through hands-on implementation of infrastructure, cluster, delivery, and observability patterns.",
    role: "Platform Engineer",
    duration: "Personal open-source project",
    projectType: "Personal Open-Source Project",
    primaryOutcome: "Production-inspired AWS EKS platform engineering demonstration",
    problem:
      "Kubernetes platform engineering requires more than provisioning a cluster. A useful hands-on implementation must connect cloud infrastructure, cluster configuration, workload delivery, observability, and operational practices in a coherent and reproducible design.",
    solution:
      "Built a personal open-source AWS EKS platform as a hands-on implementation of production-inspired platform engineering patterns, organizing infrastructure provisioning, Kubernetes configuration, application delivery, observability, and operational documentation into a reusable project structure.",
    technologies: [
      "AWS",
      "Amazon EKS",
      "Kubernetes",
      "Terraform",
      "Helm",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
    ],
    focusAreas: [
      "Platform Engineering",
      "Kubernetes",
      "AWS",
      "Infrastructure as Code",
      "CI/CD",
      "Observability",
      "Open Source",
    ],
    outcomes: [
      "Hands-on AWS EKS implementation",
      "Production-inspired platform design",
      "Reusable infrastructure and deployment patterns",
      "Documented platform engineering learning",
    ],
    seniorityKeywords: [
      "Platform Engineer",
      "Cloud Infrastructure Engineer",
      "Kubernetes Engineer",
      "DevOps Engineer",
    ],
    searchableText:
      "personal open-source project AWS EKS Kubernetes platform engineering Terraform Helm GitHub Actions CI/CD Prometheus Grafana observability infrastructure as code hands-on implementation production-inspired platform engineering demonstration",
    metrics: [
      {
        label: "Implementation",
        value: "Hands-on",
        context: "AWS EKS platform engineering demonstration",
      },
      {
        label: "Design approach",
        value: "Production-inspired",
        context: "without representing the project as a production platform",
      },
      {
        label: "Project classification",
        value: "Open source",
        context: "personal learning and engineering project",
      },
    ],
    businessImpact: [
      "Demonstrates how cloud infrastructure, Kubernetes, delivery automation, and observability can be organized as one platform engineering workflow.",
      "Provides a reusable learning reference for AWS EKS platform design and implementation.",
      "Shows hands-on implementation skills without presenting the project as employer, customer, or production work.",
    ],
    lessonsLearned: [
      "A Kubernetes platform should be treated as a collection of operational capabilities rather than only a managed cluster.",
      "Infrastructure and cluster configuration are easier to understand and reproduce when expressed through version-controlled automation.",
      "Delivery workflows, observability, and operational documentation should be designed alongside the cluster foundation.",
      "Production-inspired controls can be demonstrated without claiming production usage, business impact, or service-level improvements.",
    ],
    environmentScale: [
      "Personal AWS environment used for hands-on platform engineering implementation.",
      "Amazon EKS cluster organized as a production-inspired learning platform.",
      "Open-source repository structure covering infrastructure, cluster configuration, delivery, and observability.",
    ],
    technicalChallenges: [
      "Connecting AWS infrastructure provisioning with Kubernetes cluster configuration.",
      "Keeping platform configuration reproducible and understandable through infrastructure as code.",
      "Designing delivery and observability workflows as integrated platform capabilities.",
      "Applying production-inspired practices while clearly preserving the project's personal and non-production classification.",
    ],
    implementation: [
      {
        title: "AWS and EKS foundation",
        items: [
          "Organized the cloud infrastructure required for an Amazon EKS-based Kubernetes platform.",
          "Used infrastructure-as-code patterns to make the environment reproducible and reviewable.",
        ],
      },
      {
        title: "Kubernetes platform configuration",
        items: [
          "Structured cluster configuration and workload deployment as version-controlled platform code.",
          "Applied reusable packaging and configuration patterns for Kubernetes resources.",
        ],
      },
      {
        title: "Delivery and observability",
        items: [
          "Connected automated validation and delivery workflows to the platform repository.",
          "Included monitoring and visualization patterns as part of the platform engineering demonstration.",
        ],
      },
    ],
    keyAchievements: [
      "Created a personal open-source AWS EKS platform engineering project.",
      "Implemented a production-inspired Kubernetes architecture through hands-on work.",
      "Organized infrastructure, cluster configuration, delivery, and observability concerns into a coherent project.",
      "Documented learning outcomes and operational design considerations without making production or business-impact claims.",
    ],
    architecture: [
      "AWS network and infrastructure foundation",
      "Amazon EKS control plane and worker capacity",
      "Kubernetes platform configuration",
      "Application packaging and deployment",
      "CI/CD validation and delivery",
      "Metrics collection and visualization",
    ],
  },
  {
    title: "VM Audit & Automation Platform - Infrastructure Optimization",
    slug: "vm-audit-automation-platform",
    category: "SRE Automation",
    summary:
      "Designed and implemented an automation platform to audit, reconcile, and optimize virtual infrastructure across two enterprise environments for a global hosting provider.",
    employer: "Agivant Technologies Pvt. Ltd.",
    client: "Confidential Enterprise Customer",
    role: "Cloud Site Reliability Engineer / Lead Digital Platform Engineer",
    duration: "November 2025 - April 2026",
    projectType: "SRE Automation Project",
    teamSize: "Cross-functional infrastructure, operations, finance, and business stakeholders",
    primaryOutcome: "900+ infrastructure assets reconciled",
    problem:
      "The organization had no centralized dashboard or authoritative inventory for virtual workloads across Environment A and Environment B. Workload state was split across the virtualization platform, billing platform, and operational spreadsheets, leaving inactive and orphaned workloads powered on and consuming compute, storage, backup capacity, licensing, and infrastructure spend.",
    solution:
      "Built a reconciliation workflow that established a single source of truth between virtualization inventory and billing records, generated audit reports, identified infrastructure and billing mismatches, automated backup and restore validation, and enabled controlled lifecycle actions through approved asset identifiers.",
    technologies: [
      "Billing Platform",
      "Virtualization Platform",
      "Object Storage",
      "Automation Framework",
      "Infrastructure Audit Platform",
    ],
    focusAreas: ["SRE", "Automation", "Cost Optimization", "Infrastructure Visibility"],
    outcomes: ["70% reduction in manual audit effort", "900+ assets reconciled"],
    seniorityKeywords: ["Lead Engineer", "Cloud Site Reliability Engineer", "Digital Platform"],
    searchableText:
      "VM audit automation platform infrastructure optimization SRE automation cost optimization reconciliation backup restore lifecycle controls billing platform virtualization platform",
    metrics: [
      {
        label: "Infrastructure assets",
        value: "900+",
        context: "reconciled across Environment A and Environment B",
      },
      {
        label: "Inactive workloads",
        value: "300+",
        context: "identified for review, backup, and controlled lifecycle action",
      },
      {
        label: "Manual audit effort",
        value: "70%",
        context: "reduction through reusable automation workflows and reports",
      },
      {
        label: "Environments",
        value: "2",
        context: "normalized into one infrastructure audit workflow",
      },
      {
        label: "Approval gates",
        value: "100%",
        context: "required before customer-impacting lifecycle actions",
      },
    ],
    environmentScale: [
      "900+ infrastructure assets audited across two enterprise environments.",
      "Environment A and Environment B inventory normalized into one operating view.",
      "300+ inactive and orphaned workloads requiring ownership and billing validation.",
      "Virtualization platform integrated through approved automation interfaces.",
      "Billing platform and object storage used for reconciliation and recovery workflows.",
      "Multiple engineering, operations, finance, and business stakeholders.",
    ],
    dataCollected: [
      "Asset label, asset identifier, ownership group, and placement metadata.",
      "CPU, RAM, storage allocation, operating system, and creation date.",
      "Virtualization status, billing status, operational status, and power state.",
      "Backup status, last activity, ownership, and lifecycle indicators.",
    ],
    technicalChallenges: [
      "No centralized dashboard or trusted source of truth for virtual infrastructure inventory.",
      "Inconsistent workload status between the virtualization platform and billing data.",
      "Manual validation burden across more than 900 infrastructure assets.",
      "Customer outage risk if the wrong workload was paused or decommissioned.",
      "No standardized backup, restore validation, or decommissioning workflow.",
    ],
    implementation: [
      {
        title: "Inventory and reconciliation automation",
        items: [
          "Created automation workflows to list assets, retrieve approved asset identifiers, enrich records with infrastructure details, and compare infrastructure state against billing status.",
          "Generated audit reports that highlighted mismatches, inactive-but-powered-on workloads, orphaned resources, and records requiring stakeholder approval.",
          "Used approved asset identifiers as lifecycle control keys to reduce ambiguity when labels or ownership records were inconsistent.",
        ],
      },
      {
        title: "Backup, validation, and lifecycle controls",
        items: [
          "Automated enterprise backup workflows to object storage before decommissioning candidates were actioned.",
          "Validated restore procedures so recovery paths were confirmed before workload shutdown or removal.",
          "Built controlled suspend, unsuspend, backup, restore, and lifecycle operations around approved asset lists.",
        ],
      },
      {
        title: "Automation capabilities delivered",
        items: [
          "Inventory discovery workflow",
          "Asset identifier lookup workflow",
          "Metadata enrichment workflow",
          "Controlled lifecycle workflow",
          "Backup and recovery validation workflow",
        ],
      },
    ],
    keyAchievements: [
      "Audited and reconciled 900+ infrastructure assets across Environment A and Environment B.",
      "Identified infrastructure and billing discrepancies between the virtualization platform and billing platform.",
      "Discovered 300+ inactive workloads that were still consuming infrastructure resources.",
      "Reduced manual audit effort by approximately 70%.",
      "Improved billing reconciliation and workload ownership visibility.",
      "Created reusable automation frameworks for future infrastructure audits.",
      "Reduced operational risk through backup and restore validation before decommissioning.",
    ],
    businessImpact: [
      "Reduced unnecessary infrastructure costs by identifying powered-on workloads without corresponding active billing signals.",
      "Improved visibility and governance across the virtual infrastructure estate.",
      "Increased stakeholder confidence in decommissioning decisions by tying actions to reconciled evidence.",
      "Reduced operational overhead by replacing spreadsheet-heavy reviews with repeatable automation.",
      "Established a controlled, auditable process for customer-impacting workload lifecycle changes.",
    ],
    lessonsLearned: [
      "Inventory without ownership context is insufficient.",
      "Evidence-based automation builds trust.",
      "Recovery validation must precede decommissioning.",
      "Small automation investments create large operational leverage.",
      "Cross-team collaboration is essential.",
    ],
    architecture: [
      "Discover assets",
      "Collect metadata",
      "Query billing platform",
      "Compare status",
      "Generate reports",
      "Approve changes",
      "Backup to object storage",
      "Validate restore",
      "Decommission safely",
    ],
    mermaidDiagrams: [
      {
        title: "Audit Reconciliation Workflow",
        description:
          "End-to-end control flow from asset discovery through approval, backup, restore validation, and decommissioning.",
        code: `flowchart TD
  A[Discover Assets] --> B[Collect Metadata]
  B --> C[Query Billing Platform]
  C --> D[Compare Status]
  D --> E[Generate Audit Reports]
  E --> F[Identify Mismatches]
  F --> G[Stakeholder Approval]
  G --> H[Backup to Object Storage]
  H --> I[Restore Validation]
  I --> J[Controlled Decommissioning]`,
      },
      {
        title: "Source-of-Truth Reconciliation",
        description:
          "The platform reconciled infrastructure, billing, and operational evidence before lifecycle actions were approved.",
        code: `flowchart LR
  A[Virtualization Platform] --> D[Infrastructure Audit Platform]
  B[Billing Platform] --> D
  C[Operational Spreadsheets] --> D
  D --> E[Normalized Asset Inventory]
  E --> F[Discrepancy Report]
  F --> G[Approval Queue]
  G --> H[Backup and Restore Validation]
  H --> I[Lifecycle Action by Asset ID]`,
      },
    ],
  },
  {
    title: "AWS Security Hub Remediation Program",
    slug: "aws-security-hub-remediation-program",
    category: "Security",
    summary:
      "Centralized cloud security remediation and compliance automation for enterprise-scale AWS environments.",
    employer: "Confidential Enterprise Customer",
    client: "Confidential Enterprise Customer",
    role: "Senior Cloud Infrastructure Engineer / Site Reliability Engineer / Cloud Security Engineer",
    duration: "January 2023 - June 2023",
    projectType: "Cloud Security Automation Project",
    teamSize: "Security, infrastructure, platform, and application operations teams",
    primaryOutcome: "65% reduction in critical findings",
    problem:
      "Security Hub findings were visible, but remediation was inconsistent because ownership, severity handling, evidence collection, and repeatable runbooks were fragmented across environments.",
    solution:
      "Centralized AWS security findings, automated alerting, improved incident triage, and standardized remediation workflows using AWS-native security and automation services.",
    technologies: [
      "AWS Security Hub",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Config",
      "IAM",
      "IAM Access Analyzer",
      "CloudTrail",
      "EventBridge",
      "Lambda",
      "CloudWatch",
      "SNS",
      "Python",
      "KMS",
      "AWS Organizations",
    ],
    focusAreas: ["Security", "Compliance", "Automation", "SRE"],
    outcomes: ["65% reduction in critical findings", "40% faster incident triage"],
    seniorityKeywords: ["Senior Cloud Infrastructure Engineer", "SRE", "Cloud Security Engineer"],
    searchableText:
      "AWS Security Hub remediation program cloud security automation compliance eventbridge lambda sns guardduty inspector config organizations iam access analyzer security operations",
    metrics: [
      {
        label: "Critical findings",
        value: "65%",
        context: "reduction in critical findings",
      },
      { label: "Incident triage", value: "40%", context: "faster incident triage" },
      {
        label: "Account coverage",
        value: "100%",
        context: "target account coverage",
      },
      {
        label: "Compliance visibility",
        value: "90%+",
        context: "visibility across security controls",
      },
    ],
    environmentScale: [
      "Multi-account AWS environment managed under AWS Organizations.",
      "Production workloads supporting business-critical applications.",
      "Security findings across multiple AWS services and accounts.",
      "Remediation ownership across infrastructure, platform, and application teams.",
      "Compliance monitoring aligned with AWS Foundational Security Best Practices.",
    ],
    technicalChallenges: [
      "Large volume of findings with inconsistent ownership.",
      "Duplicate findings across multiple AWS security services.",
      "Lack of standardized remediation procedures.",
      "Limited visibility into remediation progress.",
      "Manual evidence collection for audits.",
      "Difficulty prioritizing high-risk findings.",
    ],
    implementation: [
      {
        title: "Security control plane",
        items: [
          "Implemented AWS Security Hub across production AWS environments.",
          "Enabled AWS Foundational Security Best Practices controls.",
          "Integrated Security Hub with GuardDuty, Inspector, AWS Config, CloudTrail, EventBridge, Lambda, CloudWatch, and SNS.",
        ],
      },
      {
        title: "Remediation workflow",
        items: [
          "Designed remediation workflows for critical and high-severity findings.",
          "Configured monitoring, logging, and email alerting.",
          "Standardized evidence collection and closure validation.",
        ],
      },
      {
        title: "IAM governance",
        items: [
          "Implemented IAM least-privilege improvements and MFA controls.",
          "Reviewed IAM policies, roles, access keys, and privileged access.",
          "Partnered with security and operations teams on remediation activities.",
        ],
      },
    ],
    keyAchievements: [
      "Reduced MTTR for critical findings.",
      "Standardized remediation workflows.",
      "Reduced manual operational effort.",
      "Improved compliance visibility.",
      "Increased repeatability of remediation processes.",
    ],
    businessImpact: [
      "Improved cloud security posture.",
      "Reduced manual triage effort.",
      "Improved visibility into high-risk findings.",
      "Strengthened IAM governance.",
      "Improved audit readiness.",
      "Created operational accountability.",
      "Enabled leadership risk tracking.",
    ],
    lessonsLearned: [
      "Security automation requires ownership metadata.",
      "Event-driven workflows improve response time.",
      "Small reusable runbooks are more effective.",
      "Accountability improves remediation effectiveness.",
      "Continuous compliance monitoring is essential.",
    ],
    architecture: [
      "Security finding generated",
      "Finding aggregated in AWS Security Hub",
      "EventBridge detects severity and compliance events",
      "Lambda executes alerting, evidence collection, and remediation logic",
      "SNS sends notifications",
      "CloudWatch stores logs",
      "Evidence is collected",
      "Findings are validated and closed",
    ],
    mermaidDiagrams: [
      {
        title: "AWS Security Hub Remediation Workflow",
        description:
          "Security findings are normalized in Security Hub, routed through EventBridge, processed by Lambda automation, and validated through evidence and remediation review.",
        code: `flowchart LR
    GD[Amazon GuardDuty] --> SH[AWS Security Hub]
    INS[Amazon Inspector] --> SH
    CFG[AWS Config] --> SH
    IAM[IAM Access Analyzer] --> SH
    CT[CloudTrail] --> SH

    SH --> EB[Amazon EventBridge]
    EB --> L[AWS Lambda]
    L --> CW[CloudWatch Logs]
    L --> SNS[SNS Email Alerts]
    L --> EV[Evidence Store]
    EV --> DB[Security Dashboard]
    DB --> RM[Remediation Review]`,
      },
    ],
  },
  {
    title: "SAP Development Environment Cost Optimization",
    slug: "sap-development-environment-cost-optimization",
    category: "Cost Optimization",
    summary:
      "Cost optimization initiative for SAP development infrastructure using schedules, rightsizing, and utilization review.",
    role: "Cloud Infrastructure Engineer",
    duration: "Project-based optimization initiative",
    projectType: "Cost Optimization Project",
    teamSize: "Infrastructure, SAP application, and finance stakeholders",
    primaryOutcome: "32% reduction in non-production monthly spend",
    problem:
      "SAP development environments were consuming steady-state infrastructure spend even when engineering activity was intermittent.",
    solution:
      "Introduced environment scheduling, utilization analysis, instance rightsizing, and cost guardrails that preserved developer access while lowering idle spend.",
    technologies: ["AWS EC2", "SAP", "CloudWatch", "Cost Explorer", "Systems Manager", "Terraform"],
    focusAreas: ["Cost Optimization", "Automation", "Reliability", "Terraform"],
    outcomes: ["32% reduction in non-production monthly spend", "55% idle runtime removed"],
    seniorityKeywords: ["Cloud Infrastructure Engineer", "Platform Engineer"],
    searchableText:
      "SAP development environment cost optimization AWS EC2 CloudWatch Cost Explorer Systems Manager Terraform scheduling rightsizing utilization cost guardrails",
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
    environmentScale: [
      "SAP development infrastructure with intermittent engineering usage patterns.",
      "Non-production AWS resources reviewed for idle runtime and rightsizing opportunities.",
      "Cost decisions coordinated between engineering owners and finance stakeholders.",
    ],
    technicalChallenges: [
      "Development environments needed predictable access while reducing idle runtime.",
      "Rightsizing required utilization evidence and application owner validation.",
      "Cost guardrails had to avoid disrupting active SAP development work.",
    ],
    implementation: [
      {
        title: "Usage and cost analysis",
        items: [
          "Reviewed CloudWatch and Cost Explorer signals to identify idle runtime and oversized resources.",
          "Mapped optimization candidates to SAP development usage windows and ownership inputs.",
        ],
      },
      {
        title: "Scheduling and rightsizing",
        items: [
          "Introduced scheduled availability patterns for non-production resources.",
          "Recommended rightsizing changes where utilization data supported safe reductions.",
        ],
      },
      {
        title: "Governance loop",
        items: [
          "Established recurring cost review checkpoints.",
          "Created a repeatable model for future non-production optimization reviews.",
        ],
      },
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
    category: "Architecture",
    summary:
      "A reusable cloud architecture framework for standardizing design reviews, operational readiness, and platform decisions.",
    role: "Cloud Architect / Platform Engineer",
    duration: "Framework development initiative",
    projectType: "Platform Engineering Project",
    teamSize: "Platform, application, security, and reliability reviewers",
    primaryOutcome: "90% review consistency across the checkpoint model",
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
    focusAreas: ["Architecture", "Platform Engineering", "Governance", "Reliability"],
    outcomes: ["90% review consistency across the checkpoint model", "30% shorter design cycles"],
    seniorityKeywords: ["Cloud Architect", "Platform Engineer"],
    searchableText:
      "cloud architecture design framework decision records reference patterns AWS Well-Architected governance operational readiness platform decisions",
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
    environmentScale: [
      "Reusable review framework for cloud workload design and operational readiness.",
      "Architecture decisions mapped across reliability, security, cost, and operations criteria.",
      "Reference patterns designed for repeated platform and application team use.",
    ],
    technicalChallenges: [
      "Architecture reviews varied by team and project phase.",
      "Reliability and security tradeoffs were difficult to compare consistently.",
      "Review outputs needed to support delivery work, not just governance documentation.",
    ],
    implementation: [
      {
        title: "Review model",
        items: [
          "Defined decision checkpoints for reliability, security, cost, operations, and delivery readiness.",
          "Mapped review questions to AWS Well-Architected and platform standards.",
        ],
      },
      {
        title: "Reusable patterns",
        items: [
          "Documented repeatable reference patterns for common cloud workload decisions.",
          "Captured architecture rationale using decision records and structured review outputs.",
        ],
      },
      {
        title: "Adoption support",
        items: [
          "Created lightweight templates to reduce review friction.",
          "Focused governance language on acceleration, risk clarity, and implementation reuse.",
        ],
      },
    ],
    architecture: ["Design intake", "Decision records", "Reference patterns", "Readiness review"],
  },
  {
    title: "SSL Lifecycle Automation Platform",
    slug: "ssl-lifecycle-automation-platform",
    category: "Reliability",
    summary:
      "Certificate lifecycle automation for discovery, expiration tracking, renewal coordination, and service reliability.",
    role: "SRE / Infrastructure Automation Engineer",
    duration: "Lifecycle automation initiative",
    projectType: "SRE Automation Project",
    teamSize: "Infrastructure, service owner, DNS, and operations stakeholders",
    primaryOutcome: "0 certificate expiry incidents after proactive tracking",
    problem:
      "Certificate expirations were tracked manually, creating avoidable outage risk and inconsistent renewal ownership.",
    solution:
      "Implemented certificate discovery, expiration monitoring, alerting, ownership mapping, and renewal workflows for critical services.",
    technologies: ["SSL/TLS", "DNS", "Python", "Cron", "Prometheus", "Grafana"],
    focusAreas: ["Reliability", "Automation", "Observability", "Networking"],
    outcomes: ["0 certificate expiry incidents", "85%+ endpoint coverage"],
    seniorityKeywords: ["SRE Automation Engineer", "Infrastructure Engineer"],
    searchableText:
      "SSL lifecycle automation platform discovery expiration tracking alerting ownership renewal coordination DNS endpoints reliability observability",
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
    environmentScale: [
      "Internet-facing and internal service endpoints requiring certificate lifecycle visibility.",
      "DNS and endpoint discovery inputs used to account for inventory drift.",
      "Renewal ownership coordinated across infrastructure and service teams.",
    ],
    technicalChallenges: [
      "Certificate ownership was not continuously maintained across all services.",
      "Manual tracking created avoidable outage risk near expiration windows.",
      "Discovery needed to cover both known inventories and live endpoint behavior.",
    ],
    implementation: [
      {
        title: "Discovery and tracking",
        items: [
          "Built certificate discovery across endpoint and DNS inputs.",
          "Tracked expiration windows and service ownership for monitored endpoints.",
        ],
      },
      {
        title: "Alerting workflow",
        items: [
          "Implemented 30, 15, and 7 day alert checkpoints before certificate expiry.",
          "Routed renewal visibility to accountable service owners.",
        ],
      },
      {
        title: "Reliability controls",
        items: [
          "Reduced expiry risk through proactive review cadence.",
          "Created repeatable renewal coordination workflows for critical services.",
        ],
      },
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
    category: "Observability",
    summary:
      "Operational dashboard for infrastructure status, ownership, health signals, and executive-ready service visibility.",
    role: "Platform Engineer / Observability Engineer",
    duration: "Dashboard delivery initiative",
    projectType: "Platform Engineering Project",
    teamSize: "Infrastructure, operations, leadership, and service owner stakeholders",
    primaryOutcome: "80% faster status lookup during operational reviews",
    problem:
      "Infrastructure health and ownership data lived in separate tools, forcing teams to assemble status manually during reviews and incidents.",
    solution:
      "Created a consolidated dashboard that connected inventory, health indicators, service ownership, and operational risk signals.",
    technologies: ["Grafana", "Prometheus", "AWS", "Linux", "APIs", "Observability"],
    focusAreas: ["Observability", "Dashboarding", "Platform Engineering", "Operations"],
    outcomes: ["80% faster status lookup", "6 data sources integrated"],
    seniorityKeywords: ["Platform Engineer", "Observability Engineer"],
    searchableText:
      "infrastructure visibility dashboard ownership health operational context Grafana Prometheus AWS Linux APIs observability executive visibility",
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
    environmentScale: [
      "Multiple infrastructure health, ownership, and operational risk data sources.",
      "Dashboard views designed for engineering reviews, incidents, and leadership summaries.",
      "Daily refresh cadence optimized for status clarity and review readiness.",
    ],
    technicalChallenges: [
      "Infrastructure health and ownership data lived in separate tools.",
      "Manual status assembly slowed incident and review conversations.",
      "Dashboard signals needed clear action paths rather than raw diagnostic noise.",
    ],
    implementation: [
      {
        title: "Data model",
        items: [
          "Connected inventory, health indicators, ownership metadata, and operational risk signals.",
          "Separated review-ready status from deeper diagnostic detail.",
        ],
      },
      {
        title: "Dashboard experience",
        items: [
          "Created consolidated views for infrastructure status and ownership visibility.",
          "Designed cards and exports for daily leadership summaries.",
        ],
      },
      {
        title: "Operational workflow",
        items: [
          "Made recurring risks visible to improve reliability prioritization.",
          "Reduced dependency on individual engineers for basic infrastructure status lookup.",
        ],
      },
    ],
    architecture: ["Source integrations", "Health model", "Dashboard views", "Review exports"],
  },
  {
    title: "Operational Backlog Reduction Initiative",
    slug: "operational-backlog-reduction-initiative",
    category: "Operations",
    summary:
      "Program to reduce recurring infrastructure operations backlog through prioritization, automation, and clearer service ownership.",
    role: "SRE / Operations Automation Engineer",
    duration: "Operational improvement program",
    projectType: "SRE Automation Project",
    teamSize: "Infrastructure operations, service owners, and delivery stakeholders",
    primaryOutcome: "45% reduction across targeted operational queues",
    problem:
      "A large backlog of recurring operational tasks was slowing delivery and masking higher-risk infrastructure work.",
    solution:
      "Segmented backlog items by risk and toil, automated repeatable tasks, clarified ownership, and introduced throughput reporting.",
    technologies: ["Jira", "Python", "Shell", "Linux", "Automation", "Service Management"],
    focusAreas: ["SRE", "Automation", "Operations", "Workflow"],
    outcomes: ["45% reduction across targeted operational queues", "25 hours saved per month"],
    seniorityKeywords: ["SRE", "Operations Engineer"],
    searchableText:
      "operational backlog reduction initiative toil automation ownership routing throughput reporting service management SRE",
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
    environmentScale: [
      "Recurring infrastructure operations backlog across targeted service queues.",
      "Tasks categorized by risk, toil, owner, and automation potential.",
      "Throughput reporting used to improve stakeholder visibility.",
    ],
    technicalChallenges: [
      "Recurring work masked higher-risk infrastructure priorities.",
      "Backlog intake needed control so the queue did not refill after cleanup.",
      "Automation candidates required selection by frequency, risk, and handoff cost.",
    ],
    implementation: [
      {
        title: "Backlog taxonomy",
        items: [
          "Segmented operational tasks by risk, toil, frequency, and service ownership.",
          "Separated urgent work from low-value queue noise.",
        ],
      },
      {
        title: "Automation delivery",
        items: [
          "Automated repeatable tasks where the risk and handoff cost justified investment.",
          "Standardized recurring operational workflows for infrastructure teams.",
        ],
      },
      {
        title: "Throughput visibility",
        items: [
          "Introduced reporting that made progress and constraints visible.",
          "Improved prioritization conversations with factual queue data.",
        ],
      },
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
    category: "Automation",
    summary:
      "Reusable SRE automation toolkit for operational checks, incident support, reporting, and infrastructure maintenance workflows.",
    role: "SRE Automation Engineer",
    duration: "Reusable tooling initiative",
    projectType: "SRE Automation Project",
    teamSize: "SRE, infrastructure, and incident response stakeholders",
    primaryOutcome: "20+ reusable commands for common operational workflows",
    problem:
      "SRE tasks were solved repeatedly with one-off scripts, which created inconsistent behavior and duplicated maintenance effort.",
    solution:
      "Packaged common operational automation into reusable commands, documented workflows, and standardized checks for infrastructure teams.",
    technologies: ["Python", "Bash", "AWS CLI", "Linux", "GitHub Actions", "Runbooks"],
    focusAreas: ["SRE", "Automation", "Reliability", "Platform Engineering"],
    outcomes: ["20+ reusable commands", "35% script duplication reduced"],
    seniorityKeywords: ["SRE Automation Engineer", "Platform Engineer"],
    searchableText:
      "SRE automation toolkit operational checks incident support reporting infrastructure maintenance runbooks github actions linux python bash",
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
    environmentScale: [
      "Reusable operational commands for infrastructure checks, maintenance, and incident support.",
      "Toolkit workflows designed for versioned review and team extension.",
      "Runbook-aligned automation used to reduce repeated one-off scripting.",
    ],
    technicalChallenges: [
      "Repeated one-off scripts created inconsistent operational behavior.",
      "Incident checks needed predictable interfaces and actionable output.",
      "Shared tooling required documentation and validation to avoid drift.",
    ],
    implementation: [
      {
        title: "Command design",
        items: [
          "Packaged repeated operational checks into reusable commands.",
          "Kept command interfaces predictable so incident usage stayed simple.",
        ],
      },
      {
        title: "Runbook alignment",
        items: [
          "Mapped toolkit workflows to documented incident and maintenance procedures.",
          "Returned actionable output instead of raw diagnostic noise.",
        ],
      },
      {
        title: "Versioned maintenance",
        items: [
          "Organized automation for review, reuse, and extension across teams.",
          "Reduced duplicated scripts through shared libraries and CI validation.",
        ],
      },
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
