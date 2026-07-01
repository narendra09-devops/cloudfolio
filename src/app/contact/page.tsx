import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Plane,
  Send,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const resumePdfUrl = "/resume/narendra-pratap-singh-resume.pdf";
const emailAddress = "napr.singh09@gmail.com";
const emailHref = `mailto:${emailAddress}?subject=CloudFolio%20Opportunity%20Discussion`;
const githubUrl = "https://github.com/narendra09-devops";
const linkedinUrl = "https://www.linkedin.com/in/narendra09-devops";

export const metadata: Metadata = {
  title: "Contact | CloudFolio",
  description:
    "Contact Narendra Pratap Singh for Senior Cloud Infrastructure Engineer, SRE, Platform Engineer, AWS Cloud Engineer, and Cloud Architect opportunities.",
};

const contactCards = [
  {
    title: "Email",
    value: emailAddress,
    href: emailHref,
    icon: Mail,
    accent:
      "border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-card text-emerald-500 shadow-emerald-500/15 hover:shadow-emerald-500/30",
  },
  {
    title: "LinkedIn",
    value: "Professional profile",
    href: linkedinUrl,
    icon: Linkedin,
    accent:
      "border-blue-400/30 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-card text-blue-500 shadow-cyan-500/15 hover:shadow-cyan-500/30",
  },
  {
    title: "GitHub",
    value: "Engineering work",
    href: githubUrl,
    icon: Github,
    accent:
      "border-purple-400/30 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-card text-purple-500 shadow-pink-500/15 hover:shadow-pink-500/30",
  },
  {
    title: "Resume",
    value: "ATS-optimized PDF",
    href: resumePdfUrl,
    icon: FileText,
    accent:
      "border-orange-400/30 bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-card text-orange-500 shadow-orange-500/15 hover:shadow-orange-500/30",
    download: true,
  },
  {
    title: "Portfolio",
    value: "CloudFolio projects",
    href: "/projects",
    icon: Globe2,
    accent:
      "border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-card text-cyan-500 shadow-cyan-500/15 hover:shadow-cyan-500/30",
  },
];

const statusPills = ["Remote", "Germany", "Europe", "UAE", "Visa Sponsorship"] as const;

const availabilityPills = [
  "Remote",
  "Germany",
  "Europe",
  "UAE",
  "Visa Sponsorship",
  "Full-time",
  "Contract",
  "Consulting",
] as const;

const recruiterBadges = [
  "14+ Years Experience",
  "AWS Certified",
  "SRE",
  "Platform Engineering",
] as const;

const availability = [
  { label: "Location", value: "Greater Noida, Uttar Pradesh, India", icon: MapPin },
  { label: "Timezone", value: "IST / UTC+5:30", icon: Clock3 },
  {
    label: "Open to",
    value: "Remote, Germany, Europe, UAE opportunities",
    icon: Plane,
  },
  { label: "Work type", value: "Full-time, contract, consulting", icon: BriefcaseBusiness },
  { label: "Visa", value: "Open to visa sponsorship opportunities", icon: Sparkles },
];

function ActionLink({
  children,
  href,
  variant = "primary",
  download,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  download?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      className={
        variant === "primary"
          ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-primary via-secondary to-accent px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-primary/25 bg-card/85 px-5 text-sm font-semibold text-foreground shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary/50 hover:bg-surface hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      }
      download={download}
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Section className="relative overflow-hidden border-b border-border bg-[linear-gradient(135deg,rgb(var(--color-primary)/0.12),transparent_32%),radial-gradient(circle_at_16%_10%,rgb(var(--color-secondary)/0.20),transparent_24rem),radial-gradient(circle_at_86%_8%,rgb(var(--color-accent)/0.18),transparent_24rem)] py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--color-border)/0.30)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--color-border)/0.30)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
        <Container>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="max-w-4xl">
              <Badge variant="primary">Recruiter contact</Badge>
              <H1 className="mt-5">Let&apos;s connect</H1>
              <Paragraph className="mt-5 max-w-3xl text-lg leading-8">
                Open to Senior Cloud Infrastructure Engineer, SRE, Platform Engineer, AWS Cloud
                Engineer, and Cloud Architect opportunities.
              </Paragraph>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ActionLink download href={resumePdfUrl}>
                  <Download className="size-4" />
                  Download Resume
                </ActionLink>
                <ActionLink href={emailHref} variant="outline">
                  <Mail className="size-4" />
                  Email Me
                </ActionLink>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {recruiterBadges.map((badge) => (
                  <span
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    key={badge}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {statusPills.map((pill) => (
                  <span
                    className="rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 px-3 py-1 text-xs font-semibold text-foreground shadow-sm shadow-cyan-500/10"
                    key={pill}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <Card className="border-primary/15 bg-card/70 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Fastest ways to reach me</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {contactCards.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      aria-label={`Open ${item.title}`}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-background/60 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-primary/40 hover:bg-surface hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      download={item.download}
                      href={item.href}
                      key={item.title}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border shadow-lg ${item.accent}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-foreground">
                          {item.title}
                        </span>
                        <span className="block truncate text-sm text-muted">{item.value}</span>
                      </span>
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="mb-6 max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Contact Options
            </p>
            <H2 className="mt-3">Choose the channel that fits your workflow.</H2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {contactCards.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  aria-label={`Open ${item.title} contact option`}
                  className={`group block h-full rounded-lg border p-px shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${item.accent}`}
                  download={item.download}
                  href={item.href}
                  key={item.title}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  <Card className="h-full border-0 bg-card/80 backdrop-blur-xl transition-colors group-hover:bg-card/95">
                    <CardContent className="p-5">
                      <span
                        className={`flex size-11 items-center justify-center rounded-lg border shadow-lg ${item.accent}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 min-h-10 text-sm leading-5 text-muted">{item.value}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary/80">
                        Open
                        <ExternalLink className="size-3.5" />
                      </span>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-[linear-gradient(135deg,rgb(var(--color-success)/0.10),transparent_34%),radial-gradient(circle_at_88%_18%,rgb(var(--color-primary)/0.14),transparent_22rem)] py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
                Availability
              </p>
              <H2 className="mt-3">Recruiter-ready details.</H2>
              <Paragraph className="mt-4">
                Practical location, timezone, and work preference details for screening calls and
                hiring conversations.
              </Paragraph>
              <div className="mt-5 flex flex-wrap gap-2">
                {availabilityPills.map((pill) => (
                  <span
                    className="rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 px-3 py-1 text-xs font-semibold text-foreground shadow-sm shadow-emerald-500/10"
                    key={pill}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {availability.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    className="border-emerald-400/20 bg-card/75 shadow-lg shadow-emerald-500/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-blue-500/15"
                    key={item.label}
                  >
                    <CardContent className="flex gap-3 p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-500 shadow-lg shadow-emerald-500/15">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="mt-1 text-sm leading-6 text-muted">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <Card className="overflow-hidden border-primary/20 bg-[linear-gradient(135deg,rgb(var(--color-secondary)/0.16),rgb(var(--color-primary)/0.10)_42%,rgb(var(--color-accent)/0.12))] shadow-2xl shadow-primary/10">
            <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <Badge variant="secondary">Recruiter CTA</Badge>
                <H2 className="mt-4">
                  Hiring for cloud, SRE, platform, AWS, or reliability roles?
                </H2>
                <Paragraph className="mt-4">
                  If you are hiring for cloud infrastructure, SRE, platform engineering, AWS,
                  automation, or reliability roles, I would be happy to connect.
                </Paragraph>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ActionLink download href={resumePdfUrl}>
                    <Download className="size-4" />
                    Download Resume
                  </ActionLink>
                  <ActionLink href={emailHref} variant="outline">
                    <Mail className="size-4" />
                    Email Me
                  </ActionLink>
                  <ActionLink href="/projects" variant="outline">
                    <Globe2 className="size-4" />
                    View Projects
                  </ActionLink>
                  <ActionLink href={linkedinUrl} variant="outline">
                    <Linkedin className="size-4" />
                    LinkedIn
                  </ActionLink>
                  <ActionLink href={githubUrl} variant="outline">
                    <Github className="size-4" />
                    GitHub
                  </ActionLink>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background/70 p-5 shadow-xl shadow-primary/10 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-purple-400/30 bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-500 shadow-lg shadow-purple-500/15">
                    <MessageSquare className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Contact form placeholder
                    </h3>
                    <p className="text-sm text-muted">Frontend-only contact helper.</p>
                  </div>
                </div>
                <p className="mt-4 rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm leading-6 text-muted">
                  This form is a visual contact helper. For now, please use Email Me or LinkedIn to
                  contact me directly.
                </p>
                <form className="mt-5 grid gap-3" aria-label="Contact form placeholder">
                  {["Name", "Email", "Company"].map((label) => (
                    <label className="grid gap-1.5" key={label}>
                      <span className="text-sm font-medium text-foreground">{label}</span>
                      <input
                        className="h-11 rounded-md border border-border bg-card px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                        placeholder={label}
                        type={label === "Email" ? "email" : "text"}
                      />
                    </label>
                  ))}
                  <label className="grid gap-1.5">
                    <span className="text-sm font-medium text-foreground">Message</span>
                    <textarea
                      className="min-h-28 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                      placeholder="Role, timeline, location, and a few details about the opportunity"
                    />
                  </label>
                  <a
                    className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-emerald-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={emailHref}
                  >
                    <Send className="size-4" />
                    Email Narendra
                  </a>
                </form>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
