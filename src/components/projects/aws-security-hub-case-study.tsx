import {
  AlertTriangle,
  ArrowRight,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Eye,
  FileCheck2,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  Radar,
  SearchCheck,
  ServerCog,
  ShieldAlert,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { TechnologyBadges } from "@/components/projects/technology-badges";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";
import { analyticsEvents } from "@/lib/analytics";

type AwsSecurityHubCaseStudyProps = {
  project: Project;
};

const metrics = [
  {
    label: "Reduction in critical findings",
    value: "65%",
    detail: "Critical risks closed through prioritized remediation and ownership routing.",
    icon: ShieldCheck,
    accent: "blue" as const,
  },
  {
    label: "Faster incident triage",
    value: "40%",
    detail: "Reusable evidence packs and severity rules reduced manual review time.",
    icon: Zap,
    accent: "cyan" as const,
  },
  {
    label: "Target account coverage",
    value: "100%",
    detail: "Security Hub coverage standardized across the target AWS account scope.",
    icon: Layers3,
    accent: "emerald" as const,
  },
  {
    label: "Compliance visibility",
    value: "90%+",
    detail: "FSBP-aligned controls made leadership risk tracking easier to sustain.",
    icon: Eye,
    accent: "purple" as const,
  },
] as const;

const environmentScale = [
  "Multi-account AWS environment managed under AWS Organizations.",
  "Production workloads supporting business-critical applications.",
  "Security findings across multiple AWS services and accounts.",
  "Remediation ownership across infrastructure, platform, and application teams.",
  "Compliance monitoring aligned with AWS Foundational Security Best Practices.",
] as const;

const technicalChallenges = [
  "Large volume of findings with inconsistent ownership.",
  "Duplicate findings across multiple AWS security services.",
  "Lack of standardized remediation procedures.",
  "Limited visibility into remediation progress.",
  "Manual evidence collection for audits.",
  "Difficulty prioritizing high-risk findings.",
] as const;

const architectureSources = [
  { label: "GuardDuty", description: "Threat detection", icon: Radar },
  { label: "Inspector", description: "Vulnerability findings", icon: SearchCheck },
  { label: "AWS Config", description: "Compliance checks", icon: ClipboardCheck },
  { label: "IAM Access Analyzer", description: "Access risk detection", icon: KeyRound },
  { label: "CloudTrail", description: "Audit visibility", icon: FileCheck2 },
] as const;

const architectureFlow = [
  { label: "AWS Security Hub", description: "Central finding aggregation", icon: ShieldAlert },
  { label: "EventBridge", description: "Severity and compliance routing", icon: GitBranch },
  { label: "Lambda", description: "Alerting and remediation logic", icon: Zap },
  { label: "CloudWatch", description: "Logs and monitoring", icon: Eye },
  { label: "SNS", description: "Email notifications", icon: Bell },
  { label: "Evidence Store", description: "Audit-ready records", icon: Database },
  { label: "Security Dashboard", description: "Risk and progress visibility", icon: Network },
  { label: "Remediation Review", description: "Validate and close findings", icon: CheckCircle2 },
] as const;

const architecturePrinciples = [
  { label: "Event-driven", icon: GitBranch },
  { label: "Serverless-first", icon: Zap },
  { label: "Least privilege access", icon: LockKeyhole },
  { label: "Automated remediation where safe", icon: ServerCog },
  { label: "Centralized visibility", icon: Eye },
  { label: "Auditability and traceability", icon: FileCheck2 },
  { label: "Reusable remediation workflows", icon: Workflow },
] as const;

const responsibilities = [
  "Implemented AWS Security Hub across production AWS environments.",
  "Enabled AWS Foundational Security Best Practices controls.",
  "Integrated Security Hub with GuardDuty, Inspector, AWS Config, CloudTrail, EventBridge, Lambda, CloudWatch, and SNS.",
  "Designed remediation workflow for critical and high-severity findings.",
  "Implemented IAM least-privilege improvements and MFA controls.",
  "Reviewed IAM policies, roles, access keys, and privileged access.",
  "Configured monitoring, logging, and email alerting.",
  "Conducted security assessments and remediation activities.",
  "Partnered with security and operations teams.",
] as const;

const securityControls = [
  "Root MFA not enabled",
  "Overly permissive IAM policies",
  "Unused access keys",
  "Public S3 bucket exposure",
  "Missing encryption",
  "Missing CloudTrail logging",
  "Missing VPC Flow Logs",
  "Vulnerable EC2 instances",
  "Non-compliant Config rules",
  "Open security groups",
] as const;

const outcomes = [
  "Reduced MTTR for critical findings.",
  "Standardized remediation workflows.",
  "Reduced manual operational effort.",
  "Improved compliance visibility.",
  "Increased repeatability of remediation processes.",
] as const;

const businessImpact = [
  "Improved cloud security posture.",
  "Reduced manual triage effort.",
  "Improved visibility into high-risk findings.",
  "Strengthened IAM governance.",
  "Improved audit readiness.",
  "Created operational accountability.",
  "Enabled leadership risk tracking.",
] as const;

const lessonsLearned = [
  "Security automation requires ownership metadata.",
  "Event-driven workflows improve response time.",
  "Small reusable runbooks are more effective.",
  "Accountability improves remediation effectiveness.",
  "Continuous compliance monitoring is essential.",
] as const;

const discussionTopics = [
  "Security remediation workflows",
  "EventBridge automation",
  "AWS Security Hub design",
  "Cloud governance",
  "Cloud architecture review",
  "Multi-account security",
  "Compliance monitoring",
  "Incident response",
] as const;

const remediationWorkflow = [
  "Finding generated by AWS security service.",
  "Finding normalized in AWS Security Hub.",
  "EventBridge routes critical, high severity, and compliance events.",
  "Lambda runs alerting, evidence collection, and safe remediation logic.",
  "SNS notifies the accountable team.",
  "CloudWatch captures automation logs.",
  "Evidence is attached to the review process.",
  "Finding is validated and closed.",
] as const;

function SectionShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`px-4 py-8 sm:px-6 md:py-10 lg:px-8 xl:py-12 ${className}`}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}

function IconList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-muted" key={item}>
          <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ConfidentialityNotice() {
  return (
    <SectionShell className="pt-4">
      <VmAuditGlassCard accent="blue" className="p-5">
        <div className="flex gap-3">
          <LockKeyhole aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted">
            Customer names, account identifiers, ARNs, internal screenshots, IP addresses, domains,
            and internal tooling details are intentionally excluded. Customer is represented as{" "}
            <span className="font-semibold text-foreground">Confidential Enterprise Customer</span>{" "}
            in the <span className="font-semibold text-foreground">Global Hosting Provider</span>{" "}
            industry.
          </p>
        </div>
      </VmAuditGlassCard>
    </SectionShell>
  );
}

function HeroSection({ project }: { project: Project }) {
  return (
    <section className="px-4 pb-8 pt-10 sm:px-6 md:pb-12 md:pt-14 lg:px-8 xl:pb-16 xl:pt-20">
      <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">AWS Security</Badge>
            <Badge variant="secondary">SRE Automation</Badge>
            <Badge variant="success">Compliance</Badge>
          </div>
          <h1 className="mt-5 max-w-5xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AWS Security Hub Remediation Program
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            Centralized cloud security remediation and compliance automation for enterprise-scale
            AWS environments.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            A structured remediation program for AWS Security Hub findings across accounts, teams,
            and operational ownership boundaries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href="/contact"
              size="lg"
              tracking={{
                eventName: analyticsEvents.projectCtaClicked,
                pageSection: "AWS Security Hub Hero",
                ctaType: "contact",
              }}
            >
              Discuss Similar Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href="/projects" size="lg" variant="outline">
              View All Case Studies
            </ButtonLink>
          </div>
        </div>

        <VmAuditGlassCard accent="purple" className="p-5 sm:p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Case Study Snapshot
          </p>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Customer", "Confidential Enterprise Customer"],
              ["Industry", "Global Hosting Provider"],
              ["Duration", "Jan 2023 - Jun 2023"],
              ["Environment", "Production AWS Enterprise Environment"],
              ["Scale", "Multi-account AWS Organization"],
              ["Primary Outcome", "65% reduction in critical findings"],
            ].map(([label, value]) => (
              <div className="rounded-xl border border-border/70 bg-background/55 p-4" key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 rounded-xl border border-primary/20 bg-primary/10 p-4">
            <p className="text-sm font-semibold text-foreground">Role</p>
            <p className="mt-2 text-sm leading-6 text-muted">{project.role}</p>
          </div>
        </VmAuditGlassCard>
      </div>
    </section>
  );
}

function MetricsDashboard() {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Metrics Dashboard"
        title="Measurable improvements in security operations."
        description="The program was evaluated through operational outcomes: critical risk reduction, triage speed, account coverage, and compliance visibility."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <VmAuditGlassCard
              accent={metric.accent}
              className="p-5 transition-all duration-300 hover:-translate-y-1"
              key={metric.label}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-heading text-4xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{metric.label}</p>
                </div>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{metric.detail}</p>
            </VmAuditGlassCard>
          );
        })}
      </div>
    </SectionShell>
  );
}

function ExecutiveSummary() {
  return (
    <SectionShell>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Executive Summary"
          title="Security Hub became the operating layer for cloud remediation."
        />
        <VmAuditGlassCard accent="cyan" className="p-6">
          <p className="text-base leading-8 text-muted">
            Implemented a centralized cloud security remediation framework using AWS Security Hub as
            the security control plane for production AWS environments.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            Integrated Security Hub with GuardDuty, Inspector, AWS Config, EventBridge, Lambda,
            CloudWatch, and SNS to enable continuous compliance monitoring, automated alerting, and
            faster remediation.
          </p>
        </VmAuditGlassCard>
      </div>
    </SectionShell>
  );
}

function EnvironmentAndProblems() {
  return (
    <SectionShell>
      <div className="grid gap-5 lg:grid-cols-3">
        <VmAuditGlassCard accent="blue" className="p-6 lg:col-span-1">
          <SectionHeader eyebrow="Environment & Scale" title="Production AWS enterprise scope." />
          <div className="mt-6">
            <IconList items={environmentScale} />
          </div>
        </VmAuditGlassCard>
        <VmAuditGlassCard accent="orange" className="p-6 lg:col-span-2">
          <SectionHeader
            eyebrow="Business Problem"
            title="Findings existed, but remediation accountability was fragmented."
            description="Critical risks remained open longer than expected because triage, evidence collection, ownership, and repeatable runbooks were split across environments and teams."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {technicalChallenges.map((challenge) => (
              <div
                className="rounded-xl border border-amber-400/20 bg-amber-500/10 p-4 text-sm leading-6 text-muted"
                key={challenge}
              >
                <AlertTriangle aria-hidden="true" className="mb-3 size-4 text-amber-400" />
                {challenge}
              </div>
            ))}
          </div>
        </VmAuditGlassCard>
      </div>
    </SectionShell>
  );
}

function ArchitectureDiagram() {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Solution Architecture"
        title="AWS-native security services routed into a remediation workflow."
        description="Security Hub centralized findings from detection and compliance services. EventBridge, Lambda, CloudWatch, and SNS created the operational loop for triage, alerting, evidence collection, and closure."
      />

      <VmAuditGlassCard accent="purple" className="mt-8 p-5 sm:p-6">
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              Finding Sources
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {architectureSources.map((source) => {
                const Icon = source.icon;
                return (
                  <div
                    className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/55 p-4"
                    key={source.label}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{source.label}</p>
                      <p className="text-xs leading-5 text-muted">{source.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              Remediation Flow
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {architectureFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    className="relative rounded-xl border border-border/70 bg-gradient-to-br from-background/75 via-card/55 to-primary/10 p-4"
                    key={step.label}
                  >
                    <span className="font-mono text-xs font-semibold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-secondary/25 bg-secondary/10 text-secondary">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.label}</p>
                        <p className="text-xs leading-5 text-muted">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <details className="mt-6 rounded-xl border border-border/70 bg-background/55">
          <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-foreground">
            Mermaid source
          </summary>
          <pre className="overflow-x-auto border-t border-border/70 p-4 text-xs leading-6 text-muted">
            <code>{`flowchart LR
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
    DB --> RM[Remediation Review]`}</code>
          </pre>
        </details>
      </VmAuditGlassCard>
    </SectionShell>
  );
}

function SnapshotAndTechnologies({ project }: { project: Project }) {
  return (
    <SectionShell>
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <VmAuditGlassCard accent="emerald" className="p-6">
          <SectionHeader
            eyebrow="Case Study Snapshot"
            title="Signals for senior engineering review."
          />
          <dl className="mt-6 grid gap-4">
            {[
              ["Industry", "Global Hosting Provider"],
              ["Environment", "Production AWS Enterprise Environment"],
              ["Scale", "Multi-account AWS Organization"],
              ["Role", "Senior Cloud Infrastructure Engineer / SRE"],
              ["Primary Outcome", "65% reduction in critical findings"],
              ["Focus Areas", "Cloud Security, Automation, Compliance, Operational Excellence"],
            ].map(([label, value]) => (
              <div className="rounded-xl border border-border/70 bg-background/55 p-4" key={label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </VmAuditGlassCard>
        <VmAuditGlassCard accent="cyan" className="p-6">
          <SectionHeader
            eyebrow="Technologies Used"
            title="AWS-native security, compliance, and automation stack."
          />
          <div className="mt-6">
            <TechnologyBadges technologies={project.technologies} />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {architecturePrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/55 p-4"
                  key={principle.label}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <p className="text-sm font-semibold text-foreground">{principle.label}</p>
                </div>
              );
            })}
          </div>
        </VmAuditGlassCard>
      </div>
    </SectionShell>
  );
}

function ResponsibilitiesAndControls() {
  return (
    <SectionShell>
      <div className="grid gap-5 lg:grid-cols-2">
        <VmAuditGlassCard accent="blue" className="p-6">
          <SectionHeader eyebrow="My Responsibilities" title="Hands-on cloud security ownership." />
          <div className="mt-6">
            <IconList items={responsibilities} />
          </div>
        </VmAuditGlassCard>
        <VmAuditGlassCard accent="orange" className="p-6">
          <SectionHeader
            eyebrow="Security Controls Implemented"
            title="Controls translated into actionable remediation."
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {securityControls.map((control) => (
              <div
                className="rounded-xl border border-rose-400/20 bg-rose-500/10 p-4 text-sm font-medium leading-6 text-foreground"
                key={control}
              >
                <ShieldAlert aria-hidden="true" className="mb-3 size-4 text-rose-400" />
                {control}
              </div>
            ))}
          </div>
        </VmAuditGlassCard>
      </div>
    </SectionShell>
  );
}

function AutomatedWorkflow() {
  return (
    <SectionShell>
      <SectionHeader
        eyebrow="Automated Remediation Workflow"
        title="A repeatable path from finding to validated closure."
        description="The program separated high-signal routing from remediation execution so teams could act faster without losing traceability."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {remediationWorkflow.map((step, index) => (
          <VmAuditGlassCard
            accent={index % 2 === 0 ? "cyan" : "purple"}
            className="p-5"
            interactive
            key={step}
          >
            <span className="font-mono text-xs font-semibold text-primary">
              STEP {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 text-sm font-semibold leading-6 text-foreground">{step}</p>
          </VmAuditGlassCard>
        ))}
      </div>
    </SectionShell>
  );
}

function OutcomesImpactAndLessons() {
  return (
    <SectionShell>
      <div className="grid gap-5 xl:grid-cols-3">
        <VmAuditGlassCard accent="emerald" className="p-6">
          <SectionHeader eyebrow="Engineering Outcomes" title="Operational behavior changed." />
          <div className="mt-6">
            <IconList items={outcomes} />
          </div>
        </VmAuditGlassCard>
        <VmAuditGlassCard accent="blue" className="p-6">
          <SectionHeader eyebrow="Business Impact" title="Risk became easier to manage." />
          <div className="mt-6">
            <IconList items={businessImpact} />
          </div>
        </VmAuditGlassCard>
        <VmAuditGlassCard accent="purple" className="p-6">
          <SectionHeader
            eyebrow="Lessons Learned"
            title="Security automation needs operating context."
          />
          <div className="mt-6">
            <IconList items={lessonsLearned} />
          </div>
        </VmAuditGlassCard>
      </div>
    </SectionShell>
  );
}

function WhyItMattersAndDiscussion() {
  return (
    <SectionShell>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <VmAuditGlassCard accent="cyan" className="p-6">
          <SectionHeader
            eyebrow="Why This Project Matters"
            title="A practical bridge between cloud security, SRE, and governance."
            description="This project demonstrates production experience with cloud security engineering, AWS security operations, event-driven architecture, automation engineering, compliance governance, and cross-team operational leadership."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Cloud Security Engineering",
              "Site Reliability Engineering",
              "AWS Security Operations",
              "Event-Driven Architecture",
              "Cloud Architecture",
              "Automation Engineering",
              "Compliance and Governance",
              "Cross-Team Leadership",
            ].map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </VmAuditGlassCard>
        <VmAuditGlassCard accent="orange" className="p-6">
          <SectionHeader eyebrow="Key Discussion Topics" title="Interview-ready technical depth." />
          <div className="mt-6 grid gap-3">
            {discussionTopics.map((topic) => (
              <div
                className="rounded-xl border border-border/70 bg-background/55 px-4 py-3 text-sm font-semibold text-foreground"
                key={topic}
              >
                {topic}
              </div>
            ))}
          </div>
        </VmAuditGlassCard>
      </div>
    </SectionShell>
  );
}

function DiscussSimilarWorkCta() {
  return (
    <SectionShell>
      <VmAuditGlassCard
        accent="purple"
        className="bg-[radial-gradient(circle_at_18%_12%,rgb(var(--color-primary)/0.24),transparent_22rem),radial-gradient(circle_at_85%_18%,rgb(var(--color-secondary)/0.18),transparent_20rem)] p-6 sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Discuss Similar Work
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Interested in cloud security automation, AWS governance, or large-scale remediation
              programs?
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">Let&apos;s connect.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink
              href="/contact"
              size="lg"
              tracking={{
                eventName: analyticsEvents.projectCtaClicked,
                pageSection: "AWS Security Hub CTA",
                ctaType: "contact",
              }}
            >
              <Mail aria-hidden="true" className="size-4" />
              Contact Narendra
            </ButtonLink>
            <ButtonLink href="/recruiter" size="lg" variant="outline">
              Recruiter Hub
            </ButtonLink>
          </div>
        </div>
      </VmAuditGlassCard>
    </SectionShell>
  );
}

export function AwsSecurityHubCaseStudy({ project }: AwsSecurityHubCaseStudyProps) {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--color-card)/0.92),rgb(var(--color-background))_34rem),radial-gradient(circle_at_18%_4%,rgb(var(--color-primary)/0.20),transparent_24rem),radial-gradient(circle_at_82%_2%,rgb(var(--color-accent)/0.16),transparent_26rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--color-border)/0.18)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--color-border)/0.14)_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="relative">
        <HeroSection project={project} />
        <MetricsDashboard />
        <ExecutiveSummary />
        <EnvironmentAndProblems />
        <ArchitectureDiagram />
        <SnapshotAndTechnologies project={project} />
        <ResponsibilitiesAndControls />
        <AutomatedWorkflow />
        <OutcomesImpactAndLessons />
        <WhyItMattersAndDiscussion />
        <DiscussSimilarWorkCta />
        <ConfidentialityNotice />
      </div>
    </main>
  );
}
