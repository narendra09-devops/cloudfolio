"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, FileDown, Mail } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, H2, H3, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";
const contactPath = "/contact";
const projectsPath = "/projects";

const snapshotDetails = [
  {
    label: "Target Roles",
    value: "Senior Cloud Infrastructure Engineer, SRE, Platform Engineer, AWS Cloud Engineer",
  },
  {
    label: "Experience",
    value: "14+ years IT, 5+ years AWS/SRE",
  },
  {
    label: "Current Location",
    value: "India",
  },
  {
    label: "Open to",
    value: "Germany, Netherlands, Sweden, Ireland, UAE, Singapore, Remote from India",
  },
  {
    label: "Visa",
    value: "Requires employer sponsorship / relocation support",
  },
  {
    label: "Availability",
    value: "Notice period: To be discussed",
  },
] as const;

const technicalStrengths = [
  "AWS Cloud Infrastructure",
  "Site Reliability Engineering",
  "Terraform / IaC",
  "Linux Operations",
  "Kubernetes",
  "Observability",
  "Automation",
  "Cloud Cost Optimization",
  "Security & Compliance",
] as const;

const certifications = [
  "AWS Certified Developer Associate",
  "AWS Certified Solutions Architect Associate",
] as const;

const featuredProof = [
  {
    title: "VM Audit & Automation Platform",
    href: "/projects/vm-audit-automation-platform",
    description:
      "Infrastructure audit, reconciliation, reporting, backup validation, and controlled lifecycle automation across privacy-safe enterprise environments.",
  },
  {
    title: "AWS Security Hub Remediation Program",
    href: "/projects/aws-security-hub-remediation-program",
    description:
      "AWS security finding triage, remediation workflows, ownership tracking, and reusable evidence patterns for cloud risk reduction.",
  },
  {
    title: "SAP Development Environment Cost Optimization",
    href: "/projects/sap-development-environment-cost-optimization",
    description:
      "Cloud cost optimization for non-production SAP environments using scheduling, utilization review, rightsizing, and cost guardrails.",
  },
  {
    title: "Cloud Architecture Design Framework",
    href: "/projects/cloud-architecture-design-framework",
    description:
      "Reusable architecture review framework covering reliability, security, cost, operational readiness, and platform decision records.",
  },
] as const;

const relocationReadiness = [
  "Open to Europe relocation",
  "Open to remote-first roles",
  "Prepared for sponsorship process",
  "Learning German A1",
] as const;

export function RecruiterHub() {
  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-primary)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.10),transparent_42%)]">
        <Container>
          <motion.div
            animate="visible"
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div className="max-w-4xl" variants={fadeUp}>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Recruiter Hub
              </p>
              <H1 className="mt-4">Narendra Pratap Singh</H1>
              <Paragraph className="mt-5 max-w-3xl text-lg leading-8 sm:text-xl">
                Senior cloud infrastructure, SRE, platform engineering, and AWS cloud candidate for
                Germany, Europe, UAE, Singapore, and remote-first teams.
              </Paragraph>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="primary">14+ years IT</Badge>
                <Badge variant="secondary">5+ years AWS/SRE</Badge>
                <Badge variant="outline">Based in India</Badge>
                <Badge variant="success">Open to relocation</Badge>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink className="w-full sm:w-auto" href={resumePdfPath} size="lg" download>
                  <FileDown className="size-4" />
                  Download Resume
                </ButtonLink>
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={contactPath}
                  size="lg"
                  variant="outline"
                >
                  <Mail className="size-4" />
                  Contact Me
                </ButtonLink>
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={projectsPath}
                  size="lg"
                  variant="ghost"
                >
                  View Projects
                </ButtonLink>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="overflow-hidden border-primary/20 shadow-xl shadow-primary/10">
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <CardHeader>
                  <CardTitle>Recruiter Snapshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="grid gap-4">
                    {snapshotDetails.map((detail) => (
                      <div
                        className="grid gap-1 border-b border-border pb-4 last:border-0 last:pb-0"
                        key={detail.label}
                      >
                        <dt className="text-sm font-medium text-foreground">{detail.label}</dt>
                        <dd className="text-sm leading-6 text-muted">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container>
          <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
            <motion.div className="max-w-3xl" variants={fadeUp}>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Technical Strengths
              </p>
              <H2 className="mt-3">Skills aligned with cloud, SRE, and platform roles.</H2>
              <Paragraph className="mt-4">
                Practical infrastructure capabilities for teams that need reliability, automation,
                observability, security posture improvement, and cost-aware cloud operations.
              </Paragraph>
            </motion.div>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
            >
              {technicalStrengths.map((strength) => (
                <motion.div key={strength} variants={fadeUp}>
                  <div className="flex min-h-14 items-center gap-3 rounded-lg border border-primary/15 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/10">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{strength}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Certifications
              </p>
              <H2 className="mt-3">AWS certifications for cloud delivery roles.</H2>
              <Paragraph className="mt-4">
                Credentials that support hands-on AWS infrastructure, delivery, and architecture
                experience.
              </Paragraph>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((certification) => (
                <Card
                  className="h-full overflow-hidden border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                  key={certification}
                >
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                  <CardHeader>
                    <CardTitle className="text-lg">{certification}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="primary">AWS Certified</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Featured Proof
            </p>
            <H2 className="mt-3">Project examples for technical screening.</H2>
            <Paragraph className="mt-4">
              Privacy-safe case studies showing infrastructure automation, AWS remediation, cost
              optimization, and architecture governance.
            </Paragraph>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featuredProof.map((proof) => (
              <Card
                className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface/90 hover:shadow-xl hover:shadow-primary/15"
                key={proof.title}
              >
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg">{proof.title}</CardTitle>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-5">
                  <p className="text-sm leading-6 text-muted">{proof.description}</p>
                  <Link
                    className="mt-auto inline-flex min-h-10 items-center justify-center rounded-md border border-primary/25 bg-background/70 px-4 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={proof.href}
                  >
                    View proof
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Relocation Readiness
              </p>
              <H2 className="mt-3">Prepared for international hiring conversations.</H2>
              <Paragraph className="mt-4">
                Open to relocation and remote-first opportunities where cloud infrastructure,
                reliability, and platform ownership are the core hiring needs.
              </Paragraph>
            </div>
            <Card className="border-success/20 bg-gradient-to-br from-success/10 via-primary/5 to-secondary/10">
              <CardContent className="p-6">
                <ul className="grid gap-3 sm:grid-cols-2" aria-label="Relocation readiness">
                  {relocationReadiness.map((item) => (
                    <li
                      className="flex items-start gap-3 text-sm leading-6 text-foreground"
                      key={item}
                    >
                      <CheckCircle2
                        className="mt-1 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-lg border border-primary/20 bg-[linear-gradient(135deg,rgb(var(--color-primary)/0.10),rgb(var(--color-secondary)/0.08)_45%,rgb(var(--color-accent)/0.10))] p-6 shadow-xl shadow-primary/10 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Recruiter CTA
                </p>
                <H3 className="mt-3">Ready for a cloud infrastructure screening conversation.</H3>
                <Paragraph className="mt-4 max-w-3xl">
                  Use the resume for a quick profile review, contact me for role fit, or review the
                  project portfolio for practical AWS, SRE, automation, and platform evidence.
                </Paragraph>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink className="w-full sm:w-auto" href={resumePdfPath} download>
                  <FileDown className="size-4" />
                  Download Resume
                </ButtonLink>
                <ButtonLink className="w-full sm:w-auto" href={contactPath} variant="outline">
                  <Mail className="size-4" />
                  Contact Me
                </ButtonLink>
                <ButtonLink className="w-full sm:w-auto" href={projectsPath} variant="ghost">
                  View Projects
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
