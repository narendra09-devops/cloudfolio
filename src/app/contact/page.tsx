import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Clock3,
  Download,
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

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";
const emailAddress = "napr.singh09@gmail.com";
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
    href: `mailto:${emailAddress}`,
    icon: Mail,
    accent: "border-emerald-400/25 bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "LinkedIn",
    value: "Professional profile",
    href: linkedinUrl,
    icon: Linkedin,
    accent: "border-blue-400/25 bg-blue-500/10 text-blue-500",
  },
  {
    title: "GitHub",
    value: "Engineering work",
    href: githubUrl,
    icon: Github,
    accent: "border-purple-400/25 bg-purple-500/10 text-purple-500",
  },
  {
    title: "Resume",
    value: "ATS-optimized PDF",
    href: resumePdfPath,
    icon: FileText,
    accent: "border-orange-400/25 bg-orange-500/10 text-orange-500",
    download: true,
  },
  {
    title: "Portfolio",
    value: "CloudFolio projects",
    href: "/projects",
    icon: Globe2,
    accent: "border-cyan-400/25 bg-cyan-500/10 text-cyan-500",
  },
];

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
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      className={
        variant === "primary"
          ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-transparent bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
      <Section className="overflow-hidden border-b border-border bg-[radial-gradient(circle_at_16%_10%,rgb(var(--color-secondary)/0.16),transparent_24rem),radial-gradient(circle_at_86%_8%,rgb(var(--color-accent)/0.14),transparent_24rem)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="max-w-4xl">
              <Badge variant="primary">Recruiter contact</Badge>
              <H1 className="mt-5">Let&apos;s connect</H1>
              <Paragraph className="mt-5 max-w-3xl text-lg leading-8">
                Open to Senior Cloud Infrastructure Engineer, SRE, Platform Engineer, AWS Cloud
                Engineer, and Cloud Architect opportunities.
              </Paragraph>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ActionLink download href={resumePdfPath}>
                  <Download className="size-4" />
                  Download Resume
                </ActionLink>
                <ActionLink href={`mailto:${emailAddress}`} variant="outline">
                  <Mail className="size-4" />
                  Email Me
                </ActionLink>
              </div>
            </div>

            <Card className="bg-card/70 shadow-xl shadow-primary/5 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Fastest ways to reach me</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {contactCards.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      className="group flex items-center gap-3 rounded-lg border border-border bg-background/60 p-3 transition-colors hover:border-primary/40 hover:bg-surface"
                      download={item.download}
                      href={item.href}
                      key={item.title}
                      rel={
                        item.href.startsWith("http") || item.href.startsWith("mailto:")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      target={
                        item.href.startsWith("http") || item.href.startsWith("mailto:")
                          ? "_blank"
                          : undefined
                      }
                    >
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-lg border ${item.accent}`}
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
                <Card
                  className="bg-card/70 transition-colors hover:border-primary/40"
                  key={item.title}
                >
                  <CardContent className="p-5">
                    <span
                      className={`flex size-11 items-center justify-center rounded-lg border ${item.accent}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 min-h-10 text-sm leading-5 text-muted">{item.value}</p>
                    <a
                      className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary/80"
                      download={item.download}
                      href={item.href}
                      rel={
                        item.href.startsWith("http") || item.href.startsWith("mailto:")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      target={
                        item.href.startsWith("http") || item.href.startsWith("mailto:")
                          ? "_blank"
                          : undefined
                      }
                    >
                      Open
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-surface/30 py-12 sm:py-14 lg:py-16">
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
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {availability.map((item) => {
                const Icon = item.icon;
                return (
                  <Card className="bg-card/70" key={item.label}>
                    <CardContent className="flex gap-3 p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-secondary/30 bg-secondary/10 text-secondary">
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
          <Card className="overflow-hidden bg-card/70 shadow-xl shadow-primary/5">
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
                  <ActionLink download href={resumePdfPath}>
                    <Download className="size-4" />
                    Download Resume
                  </ActionLink>
                  <ActionLink href={`mailto:${emailAddress}`} variant="outline">
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
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background/60 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <MessageSquare className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      Contact form placeholder
                    </h3>
                    <p className="text-sm text-muted">Frontend only. No emails are sent yet.</p>
                  </div>
                </div>
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
                  <button
                    className="mt-2 inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-semibold text-muted"
                    disabled
                    type="button"
                  >
                    <Send className="size-4" />
                    Submit unavailable
                  </button>
                </form>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
