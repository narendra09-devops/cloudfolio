import type { Metadata } from "next";
import { BadgeCheck, Cloud, Gauge, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, H2, H3, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const resumePath = "/resume/narendra-pratap-singh-resume.pdf";
const contactPath = "/contact";
const projectsPath = "/projects";

const strengths = [
  {
    title: "Cloud Infrastructure",
    description:
      "Designing, operating, and improving AWS environments with a focus on scalability, resilience, and day-to-day maintainability.",
  },
  {
    title: "Site Reliability Engineering",
    description:
      "Improving reliability through observability, incident-aware operations, automation, and practical service ownership.",
  },
  {
    title: "Platform Engineering",
    description:
      "Building reusable infrastructure foundations and delivery workflows that help teams move faster with fewer manual steps.",
  },
  {
    title: "Automation",
    description:
      "Reducing operational toil with scripting, infrastructure as code, repeatable runbooks, and self-service workflows.",
  },
  {
    title: "Cost Optimization",
    description:
      "Reviewing cloud usage patterns, right-sizing resources, and improving spend visibility without compromising reliability.",
  },
  {
    title: "Security Remediation",
    description:
      "Helping teams close infrastructure gaps across access, patching, configuration, compliance, and operational hygiene.",
  },
] as const;

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified Developer – Associate",
] as const;

const availability = [
  "Open to Remote",
  "Open to Germany/Europe relocation",
  "Open to UAE opportunities",
  "Visa sponsorship required for Europe",
] as const;

export const metadata: Metadata = {
  title: "About Narendra Pratap Singh | Cloud Infrastructure, SRE, Platform Engineering",
  description:
    "About Narendra Pratap Singh, a Senior Cloud Infrastructure Engineer, Site Reliability Engineer, and Platform Engineer based in Greater Noida, India.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-primary)/0.16),transparent_24rem),radial-gradient(circle_at_84%_8%,rgb(var(--color-secondary)/0.10),transparent_20rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.10),transparent_42%)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-4xl">
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                About
              </p>
              <H1 className="mt-4">Narendra Pratap Singh</H1>
              <Paragraph className="mt-5 max-w-3xl text-lg leading-8 sm:text-xl">
                Senior Cloud Infrastructure Engineer | Site Reliability Engineer | Platform Engineer
              </Paragraph>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline">Greater Noida, India</Badge>
                <Badge variant="primary">Open to Remote</Badge>
                <Badge variant="secondary">Europe/Germany relocation</Badge>
                <Badge variant="success">UAE opportunities</Badge>
              </div>

              <Paragraph className="mt-6 max-w-3xl">
                I help teams run reliable cloud platforms by combining AWS infrastructure, Linux
                operations, infrastructure as code, Kubernetes, automation, observability, and
                disciplined operational practices.
              </Paragraph>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={resumePath} size="lg" download>
                  Download Resume
                </ButtonLink>
                <ButtonLink href={contactPath} size="lg" variant="outline">
                  Contact Me
                </ButtonLink>
                <ButtonLink href={projectsPath} size="lg" variant="ghost">
                  View Projects
                </ButtonLink>
              </div>
            </div>

            <Card className="h-full overflow-hidden border-primary/20 shadow-xl shadow-primary/10">
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardHeader>
                <CardTitle>Role Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Target roles</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Senior Cloud Infrastructure Engineer, Site Reliability Engineer, Platform
                    Engineer, AWS Cloud Engineer.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Core environments</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    AWS, Linux, Terraform, Kubernetes, automation, observability, and reliability
                    operations.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Availability</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Remote-first roles, Germany/Europe relocation with visa sponsorship, and UAE
                    cloud infrastructure opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Career Story
              </p>
              <H2 className="mt-3">Built on IT operations, strengthened by cloud reliability.</H2>
            </div>
            <div className="space-y-5">
              <Paragraph>
                My career spans 14+ years across IT and telecom environments, where dependable
                operations, clear escalation paths, and production discipline are essential. That
                foundation shaped how I approach infrastructure: services should be measurable,
                repeatable, secure, and supportable under real operational pressure.
              </Paragraph>
              <Paragraph>
                For the last 5+ years, my work has focused on AWS, cloud infrastructure, and SRE
                practices. I have worked across Linux systems, Terraform-based infrastructure,
                Kubernetes platforms, automation workflows, observability, reliability improvement,
                and security remediation.
              </Paragraph>
              <Paragraph>
                I am strongest in roles that need practical ownership: stabilizing cloud platforms,
                reducing toil, improving deployment and operations workflows, and giving engineering
                teams infrastructure they can trust.
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface/30">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Strengths
            </p>
            <H2 className="mt-3">Cloud, reliability, and platform capabilities.</H2>
            <Paragraph className="mt-4">
              Focus areas aligned with senior cloud infrastructure, SRE, and platform engineering
              roles.
            </Paragraph>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {strengths.map((strength, index) => {
              const icons = [Cloud, ShieldCheck, Workflow, Gauge, Sparkles, BadgeCheck] as const;
              const Icon = icons[index];

              return (
                <Card
                  className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10"
                  key={strength.title}
                >
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 text-primary">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <CardTitle>{strength.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted">{strength.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Certifications
              </p>
              <H2 className="mt-3">AWS credentials supporting hands-on cloud delivery.</H2>
              <Paragraph className="mt-4">
                Certifications that reinforce practical architecture, development, and
                infrastructure delivery experience.
              </Paragraph>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((certification) => (
                <Card
                  className="h-full overflow-hidden border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                  key={certification}
                >
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                  <CardHeader>
                    <CardTitle>{certification}</CardTitle>
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

      <Section className="border-y border-border bg-surface/30">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                International Availability
              </p>
              <H2 className="mt-3">Available for remote and international cloud roles.</H2>
              <Paragraph className="mt-4">
                Based in Greater Noida, India, and open to conversations with teams hiring for
                senior cloud infrastructure, SRE, and platform engineering roles.
              </Paragraph>
            </div>

            <Card className="border-success/20 bg-gradient-to-br from-success/10 via-primary/5 to-secondary/10">
              <CardContent className="p-6">
                <ul className="grid gap-3" aria-label="International availability">
                  {availability.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-foreground" key={item}>
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
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
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                  Next Step
                </p>
                <H3 className="mt-3">Review my resume, contact me, or explore project work.</H3>
                <Paragraph className="mt-4 max-w-3xl">
                  I am open to senior cloud infrastructure, SRE, and platform engineering
                  conversations where reliability, automation, and production ownership matter.
                </Paragraph>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href={resumePath} download>
                  Download Resume
                </ButtonLink>
                <ButtonLink href={contactPath} variant="outline">
                  Contact Me
                </ButtonLink>
                <ButtonLink href={projectsPath} variant="ghost">
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
