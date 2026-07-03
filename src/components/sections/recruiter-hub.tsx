"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarClock,
  CircleDollarSign,
  Cloud,
  Cpu,
  Download,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Plane,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { analyticsEvents } from "@/lib/analytics";

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";
const atsResumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";
const linkedinHref = "https://www.linkedin.com/in/narendra09-devops";
const githubHref = "https://github.com/narendra09-devops";
const emailHref = "mailto:napr.singh09@gmail.com?subject=CloudFolio%20Opportunity%20Discussion";
const contactPath = "/contact";

const heroBadges = [
  "Open to Remote",
  "Open to Relocation",
  "Visa Sponsorship Friendly",
  "Available from India",
] as const;

const heroStats = [
  { label: "Experience", value: "14+ Years" },
  { label: "AWS/SRE Focus", value: "5+ Years" },
  { label: "Certifications", value: "2" },
  { label: "Updated", value: "Jul 2, 2026" },
] as const;

const summaryCards = [
  {
    icon: TrendingUp,
    title: "14+ Years Experience",
    description:
      "IT and telecom depth with production ownership across infrastructure and operations.",
    accent: "from-primary/20 via-secondary/10 to-accent/15",
  },
  {
    icon: Cloud,
    title: "5+ Years AWS & SRE",
    description:
      "Focused cloud, reliability, observability, and automation work in AWS environments.",
    accent: "from-secondary/20 via-cyan-500/10 to-primary/10",
  },
  {
    icon: Workflow,
    title: "900+ VM Audit Project",
    description:
      "Audit automation and reconciliation work across large virtual infrastructure estates.",
    accent: "from-accent/20 via-purple-500/10 to-primary/10",
  },
  {
    icon: BadgeCheck,
    title: "AWS Certified",
    description: "Solutions Architect Associate and Developer Associate certifications.",
    accent: "from-success/20 via-emerald-500/10 to-primary/10",
  },
  {
    icon: Plane,
    title: "Germany / Netherlands / UAE",
    description: "Open to relocation conversations and remote-first roles from India.",
    accent: "from-amber-400/20 via-orange-500/10 to-primary/10",
  },
] as const;

const careerTimeline = [
  {
    icon: Layers3,
    title: "Telecom",
    range: "2011 - 2015",
    description:
      "Operations, support, and service reliability in high-availability telecom environments.",
  },
  {
    icon: Cpu,
    title: "Infrastructure",
    range: "2015 - 2019",
    description:
      "Linux, virtualization, tooling, and infrastructure operations with production ownership.",
  },
  {
    icon: Cloud,
    title: "Cloud",
    range: "2019 - 2022",
    description: "AWS adoption, Terraform automation, and cloud platform scaling patterns.",
  },
  {
    icon: ShieldCheck,
    title: "SRE",
    range: "2022 - 2024",
    description:
      "Observability, incident response, reliability improvement, and operational consistency.",
  },
  {
    icon: Workflow,
    title: "Platform Engineering",
    range: "2024 - Present",
    description:
      "Reusable infrastructure foundations, delivery workflows, and platform enablement.",
  },
] as const;

const skillHeatmap = [
  { name: "AWS", level: 10, category: "Cloud" },
  { name: "Terraform", level: 9, category: "IaC" },
  { name: "Linux", level: 10, category: "Operations" },
  { name: "Kubernetes", level: 8, category: "Containers" },
  { name: "Observability", level: 8, category: "Reliability" },
  { name: "Automation", level: 10, category: "Delivery" },
  { name: "SRE", level: 7, category: "Reliability" },
] as const;

const whyHireMe = [
  {
    icon: Cloud,
    title: "Infrastructure Scale",
    description:
      "Comfortable operating large environments and cleaning up complexity without drama.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability Engineering",
    description:
      "Practical systems thinking with focus on uptime, observability, and incident learning.",
  },
  {
    icon: CircleDollarSign,
    title: "Cost Optimization",
    description: "Sees waste in cloud spend, idle systems, and over-provisioning early.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Reduces toil through scripts, IaC, repeatable workflows, and sensible guardrails.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description: "Leads by clarity, calm execution, and practical decision-making.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Writes enough context for teams to operate without guesswork.",
  },
] as const;

const featuredProjects = [
  {
    title: "VM Audit & Automation Platform",
    metric: "900+ assets",
    technologies: ["Automation", "VMware", "Audit", "Backup"],
    href: "/projects/vm-audit-automation-platform",
    description: "Reconciled large-scale virtual assets, ownership, and lifecycle data.",
  },
  {
    title: "Infrastructure Visibility Dashboard",
    metric: "Executive visibility",
    technologies: ["Dashboards", "Metrics", "Ownership", "Health"],
    href: "/projects/infrastructure-visibility-dashboard",
    description: "Centralized health, ownership, and operational context for fast review cycles.",
  },
  {
    title: "SRE Automation Toolkit",
    metric: "Toil reduction",
    technologies: ["SRE", "Scripts", "Runbooks", "Automation"],
    href: "/projects/cloud-architecture-design-framework",
    description: "Operational toolkit focused on repeatable reliability and response workflows.",
  },
] as const;

const relocationCards = [
  {
    flag: "🇩🇪",
    title: "Germany",
    sponsorship: "Employer sponsorship / relocation support required",
    roles: "Senior Cloud Infrastructure, SRE, Platform Engineering",
    compensation: "Open to market-aligned packages",
  },
  {
    flag: "🇳🇱",
    title: "Netherlands",
    sponsorship: "Employer sponsorship / relocation support required",
    roles: "AWS, cloud operations, platform engineering",
    compensation: "Open to discussion",
  },
  {
    flag: "🇦🇪",
    title: "UAE",
    sponsorship: "Relocation support preferred",
    roles: "Cloud infrastructure, SRE, DevOps",
    compensation: "Open to discussion",
  },
  {
    flag: "🌍",
    title: "Remote",
    sponsorship: "Remote from India is preferred",
    roles: "Remote-first senior cloud roles",
    compensation: "Open to remote compensation bands",
  },
] as const;

const downloadCenter = [
  {
    icon: FileText,
    label: "Resume PDF",
    href: resumePdfPath,
    variant: "primary" as const,
    download: true,
  },
  {
    icon: Download,
    label: "ATS Resume",
    href: atsResumePdfPath,
    variant: "outline" as const,
    download: true,
  },
  { icon: Linkedin, label: "LinkedIn", href: linkedinHref, variant: "outline" as const },
  { icon: Github, label: "GitHub", href: githubHref, variant: "outline" as const },
  { icon: Mail, label: "Email", href: emailHref, variant: "ghost" as const },
] as const;

const recruiterFaq = [
  {
    question: "Current notice period",
    answer: "To be discussed. I can align on timeline during the first conversation.",
  },
  {
    question: "Relocation flexibility",
    answer: "Open to Germany, Netherlands, UAE, and remote-first opportunities from India.",
  },
  {
    question: "Visa sponsorship",
    answer: "Yes. Employer sponsorship or relocation support is required for Europe-based roles.",
  },
  {
    question: "Preferred roles",
    answer:
      "Senior Cloud Infrastructure Engineer, Site Reliability Engineer, Platform Engineer, AWS Cloud Engineer.",
  },
  {
    question: "Salary expectations",
    answer: "Open to market-aligned packages based on scope, location, and hybrid/remote policy.",
  },
  {
    question: "Interview availability",
    answer: "Available for recruiter screens and technical interviews during IST business hours.",
  },
] as const;

const lastUpdated = "July 2, 2026";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-sm font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function CardIcon({ icon: Icon, accent }: { icon: typeof Cloud; accent: string }) {
  return (
    <div
      className={`flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${accent} shadow-lg`}
    >
      <Icon aria-hidden="true" className="size-5 text-foreground" />
    </div>
  );
}

export function RecruiterHub() {
  return (
    <main className="bg-background text-foreground">
      <Section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_15%_15%,rgb(var(--color-primary)/0.18),transparent_22rem),radial-gradient(circle_at_85%_10%,rgb(var(--color-secondary)/0.16),transparent_18rem),linear-gradient(135deg,rgb(var(--color-primary)/0.06),rgb(var(--color-secondary)/0.04)_45%,rgb(var(--color-accent)/0.05))]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
            <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
              <motion.div className="space-y-4" variants={fadeUp}>
                <SectionLabel>Recruiter Hub</SectionLabel>
                <H1 className="max-w-4xl">Narendra Pratap Singh</H1>
                <Paragraph className="max-w-3xl text-lg leading-8 sm:text-xl">
                  Senior Cloud Infrastructure Engineer | Site Reliability Engineer | Platform
                  Engineer | AWS Cloud Engineer
                </Paragraph>
              </motion.div>

              <motion.div className="mt-6 flex flex-wrap gap-2" variants={fadeUp}>
                {heroBadges.map((badge) => (
                  <Badge
                    className="border-primary/20 bg-background/70 px-3 py-1.5 text-sm text-foreground shadow-sm backdrop-blur"
                    key={badge}
                    variant="outline"
                  >
                    {badge}
                  </Badge>
                ))}
              </motion.div>

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                variants={fadeUp}
              >
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={resumePdfPath}
                  size="lg"
                  download
                  tracking={{
                    eventName: analyticsEvents.resumeDownloaded,
                    pageSection: "Recruiter Hub Hero",
                    ctaType: "resume-download",
                  }}
                >
                  <Download className="size-4" />
                  Download Resume
                </ButtonLink>
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={linkedinHref}
                  size="lg"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  tracking={{
                    eventName: analyticsEvents.linkedinClicked,
                    pageSection: "Recruiter Hub Hero",
                    ctaType: "linkedin",
                  }}
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </ButtonLink>
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={githubHref}
                  size="lg"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  tracking={{
                    eventName: analyticsEvents.githubClicked,
                    pageSection: "Recruiter Hub Hero",
                    ctaType: "github",
                  }}
                >
                  <Github className="size-4" />
                  GitHub
                </ButtonLink>
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={contactPath}
                  size="lg"
                  variant="ghost"
                  tracking={{
                    eventName: analyticsEvents.projectCtaClicked,
                    pageSection: "Recruiter Hub Hero",
                    ctaType: "schedule-discussion",
                  }}
                >
                  <CalendarClock className="size-4" />
                  Schedule a Discussion
                </ButtonLink>
              </motion.div>

              <motion.div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-2xl" variants={fadeUp}>
                {heroStats.map((stat) => (
                  <div
                    className="rounded-xl border border-border/70 bg-card/70 p-4 shadow-sm backdrop-blur-sm"
                    key={stat.label}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
              <motion.div variants={fadeUp}>
                <Card className="overflow-hidden border-primary/20 bg-[linear-gradient(135deg,rgb(var(--color-primary)/0.14),rgb(var(--color-secondary)/0.10)_48%,rgb(var(--color-accent)/0.12))] shadow-2xl shadow-primary/10 backdrop-blur-xl">
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                  <CardContent className="p-6 sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-muted">Last Updated</p>
                        <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                          {lastUpdated}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted">Experience</p>
                        <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                          14+ Years
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted">Certifications</p>
                        <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                          2 AWS
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted">Location</p>
                        <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
                          India
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 rounded-xl border border-border/70 bg-background/70 p-4">
                      <p className="text-sm leading-6 text-muted">
                        Recruiter-ready profile for cloud infrastructure, SRE, and platform roles.
                        Built to help hiring teams decide quickly and move to interview faster.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Executive Summary</SectionLabel>
              <H2 className="mt-3">Quick evaluation signals for recruiters and hiring managers.</H2>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5"
              variants={staggerContainer}
            >
              {summaryCards.map((card) => (
                <motion.div key={card.title} variants={fadeUp}>
                  <Card className="group h-full overflow-hidden border-border/70 bg-card/70 shadow-lg shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15">
                    <div className={`h-1 bg-gradient-to-r ${card.accent}`} />
                    <CardContent className="space-y-4 p-5 sm:p-6">
                      <CardIcon accent={card.accent} icon={card.icon} />
                      <div>
                        <CardTitle className="text-lg">{card.title}</CardTitle>
                        <p className="mt-2 text-sm leading-6 text-muted">{card.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Career Snapshot</SectionLabel>
              <H2 className="mt-3">Telecom to Platform Engineering.</H2>
            </motion.div>

            <motion.div className="mt-8 overflow-x-auto pb-2" variants={fadeUp}>
              <div className="grid min-w-[960px] grid-cols-5 gap-4">
                {careerTimeline.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div className="relative" key={step.title}>
                      <div className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-lg shadow-primary/5 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 text-primary">
                            <Icon aria-hidden="true" className="size-5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                              {step.range}
                            </p>
                            <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
                      </div>
                      {index < careerTimeline.length - 1 ? (
                        <div className="absolute right-[-1.25rem] top-1/2 hidden h-0.5 w-8 bg-gradient-to-r from-primary via-secondary to-accent xl:block" />
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Skills Heatmap</SectionLabel>
              <H2 className="mt-3">Proficiency by the tools recruiters screen for first.</H2>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <Card className="overflow-hidden border-border/70 bg-card/70 shadow-xl shadow-primary/10 backdrop-blur-xl">
                  <CardContent className="space-y-5 p-6">
                    {skillHeatmap.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="font-medium text-foreground">{skill.name}</p>
                            <p className="text-xs uppercase tracking-[0.16em] text-muted">
                              {skill.category}
                            </p>
                          </div>
                          <p className="font-mono text-sm font-semibold text-muted">
                            {skill.level}/10
                          </p>
                        </div>
                        <div className="mt-3 h-3 overflow-hidden rounded-full bg-background/80">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            style={{ width: `${skill.level * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      label: "AWS",
                      value: "Cloud architecture, operations, and delivery",
                      icon: Cloud,
                    },
                    {
                      label: "Terraform",
                      value: "IaC, reusable environments, governance",
                      icon: Workflow,
                    },
                    { label: "Linux", value: "Servers, networking, troubleshooting", icon: Cpu },
                    {
                      label: "SRE",
                      value: "Observability, reliability, incidents",
                      icon: ShieldCheck,
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Card
                        className="overflow-hidden border-border/70 bg-card/70 shadow-lg shadow-primary/5 backdrop-blur-xl"
                        key={item.label}
                      >
                        <div
                          className={`h-1 bg-gradient-to-r ${idx % 2 === 0 ? "from-primary via-secondary to-accent" : "from-success via-primary to-secondary"}`}
                        />
                        <CardContent className="space-y-3 p-5">
                          <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Icon aria-hidden="true" className="size-5" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{item.label}</p>
                              <p className="text-sm text-muted">{item.value}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Why Hire Me</SectionLabel>
              <H2 className="mt-3">What recruiting teams get from the first conversation.</H2>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              variants={staggerContainer}
            >
              {whyHireMe.map((item) => {
                const Icon = item.icon;
                const accent = [
                  "from-primary/20 via-secondary/10 to-accent/10",
                  "from-secondary/20 via-cyan-500/10 to-primary/10",
                  "from-accent/20 via-purple-500/10 to-success/10",
                  "from-success/20 via-emerald-500/10 to-primary/10",
                  "from-amber-400/20 via-orange-500/10 to-primary/10",
                  "from-blue-400/20 via-sky-500/10 to-secondary/10",
                ][whyHireMe.indexOf(item)];
                return (
                  <motion.div key={item.title} variants={fadeUp}>
                    <Card className="h-full overflow-hidden border-border/70 bg-card/70 shadow-xl shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15">
                      <div className={`h-1 bg-gradient-to-r ${accent}`} />
                      <CardContent className="space-y-4 p-5 sm:p-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-foreground`}
                          >
                            <Icon aria-hidden="true" className="size-5" />
                          </div>
                          <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-sm leading-6 text-muted">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Featured Projects</SectionLabel>
              <H2 className="mt-3">Proof that the work is already done.</H2>
            </motion.div>

            <motion.div className="mt-8 grid gap-4 lg:grid-cols-3" variants={staggerContainer}>
              {featuredProjects.map((project, index) => (
                <motion.div key={project.title} variants={fadeUp}>
                  <Card className="group h-full overflow-hidden border-border/70 bg-card/70 shadow-xl shadow-primary/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15">
                    <div
                      className={`h-1 bg-gradient-to-r ${index === 0 ? "from-primary via-secondary to-accent" : index === 1 ? "from-secondary via-primary to-success" : "from-accent via-primary to-secondary"}`}
                    />
                    <CardContent className="space-y-5 p-5 sm:p-6">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {project.metric}
                        </p>
                        <h3 className="font-heading text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-6 text-muted">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ButtonLink className="w-full" href={project.href} variant="outline">
                        View Project
                        <ArrowRight className="size-4" />
                      </ButtonLink>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Relocation Information</SectionLabel>
              <H2 className="mt-3">Region fit and sponsorship expectations at a glance.</H2>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
              variants={staggerContainer}
            >
              {relocationCards.map((card, index) => (
                <motion.div key={card.title} variants={fadeUp}>
                  <Card className="h-full overflow-hidden border-border/70 bg-card/70 shadow-xl shadow-primary/5 backdrop-blur-xl">
                    <div
                      className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? "from-primary via-secondary to-accent" : "from-success via-primary to-amber-400"}`}
                    />
                    <CardContent className="space-y-4 p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{card.flag}</span>
                        <h3 className="font-heading text-lg font-semibold">{card.title}</h3>
                      </div>
                      <div className="space-y-3 text-sm leading-6 text-muted">
                        <p>
                          <span className="font-semibold text-foreground">Sponsorship:</span>{" "}
                          {card.sponsorship}
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">Preferred roles:</span>{" "}
                          {card.roles}
                        </p>
                        <p>
                          <span className="font-semibold text-foreground">Compensation:</span>{" "}
                          {card.compensation}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Download Center</SectionLabel>
              <H2 className="mt-3">Everything a recruiter needs to shortlist quickly.</H2>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
              variants={staggerContainer}
            >
              {downloadCenter.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} variants={fadeUp}>
                    <ButtonLink
                      className="h-full w-full justify-between px-4 py-5 text-left"
                      href={item.href}
                      size="lg"
                      variant={item.variant}
                      {...(item.href.startsWith("http")
                        ? { rel: "noopener noreferrer", target: "_blank" }
                        : {})}
                      {...("download" in item && item.download ? { download: true } : {})}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex size-10 items-center justify-center rounded-xl bg-background/40 text-current">
                          <Icon className="size-5" />
                        </span>
                        <span className="text-sm font-semibold leading-5">{item.label}</span>
                      </span>
                    </ButtonLink>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-surface/30">
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <SectionLabel>Recruiter FAQ</SectionLabel>
              <H2 className="mt-3">Short answers for screening calls.</H2>
            </motion.div>

            <motion.div className="mt-8 grid gap-4 lg:grid-cols-2" variants={staggerContainer}>
              {recruiterFaq.map((item) => (
                <motion.div key={item.question} variants={fadeUp}>
                  <details className="group rounded-2xl border border-border/70 bg-card/70 p-5 shadow-lg shadow-primary/5 backdrop-blur-xl">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-semibold text-foreground outline-none">
                      <span>{item.question}</span>
                      <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                        <PlusMark />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-6 text-muted">{item.answer}</p>
                  </details>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="overflow-hidden border-primary/20 bg-[radial-gradient(circle_at_15%_15%,rgb(var(--color-primary)/0.16),transparent_20rem),radial-gradient(circle_at_85%_15%,rgb(var(--color-secondary)/0.14),transparent_18rem),linear-gradient(135deg,rgb(var(--color-primary)/0.10),rgb(var(--color-secondary)/0.08)_45%,rgb(var(--color-accent)/0.10))] shadow-2xl shadow-primary/10">
            <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <SectionLabel>Contact CTA</SectionLabel>
                <H2 className="mt-3">Let&apos;s build reliable cloud platforms together.</H2>
                <Paragraph className="mt-4 max-w-3xl">
                  If you are hiring for cloud infrastructure, SRE, or platform engineering, this
                  profile is built for a fast first decision.
                </Paragraph>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink
                  href={emailHref}
                  size="lg"
                  tracking={{
                    eventName: analyticsEvents.contactEmailClicked,
                    pageSection: "Recruiter Hub Contact CTA",
                    ctaType: "email",
                  }}
                >
                  <Mail className="size-4" />
                  Email
                </ButtonLink>
                <ButtonLink
                  href={linkedinHref}
                  size="lg"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  tracking={{
                    eventName: analyticsEvents.linkedinClicked,
                    pageSection: "Recruiter Hub Contact CTA",
                    ctaType: "linkedin",
                  }}
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </ButtonLink>
                <ButtonLink
                  href={resumePdfPath}
                  size="lg"
                  variant="ghost"
                  download
                  tracking={{
                    eventName: analyticsEvents.resumeDownloaded,
                    pageSection: "Recruiter Hub Contact CTA",
                    ctaType: "resume-download",
                  }}
                >
                  <Download className="size-4" />
                  Download Resume
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}

function PlusMark() {
  return (
    <span aria-hidden="true" className="text-lg leading-none">
      +
    </span>
  );
}
