import type { Metadata } from "next";
import { CareerHighlights } from "@/components/sections/career-highlights";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ResumeDownload } from "@/components/sections/resume-download";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { Container } from "@/components/ui/container";
import { H1, H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";

export const metadata: Metadata = {
  title: "Resume | Narendra Pratap Singh",
  description:
    "Resume overview for Narendra Pratap Singh, Senior Cloud Infrastructure Engineer, SRE, Platform Engineer, and AWS Cloud Engineer.",
};

export default function ResumePage() {
  return (
    <>
      <Section className="border-b border-border">
        <Container>
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Resume
            </p>
            <H1 className="mt-3">Narendra Pratap Singh</H1>
            <H2 className="mt-6 text-2xl sm:text-3xl">Professional Summary</H2>
            <Paragraph className="mt-4 text-lg leading-8">
              Senior Cloud Infrastructure Engineer, Cloud Site Reliability Engineer, Cloud Platform
              Engineer, and AWS Cloud Engineer with 14+ years of experience designing, automating,
              and operating scalable cloud infrastructure and reliability platforms.
            </Paragraph>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-transparent bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                href={resumePdfPath}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Resume
              </a>
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 text-sm font-semibold text-foreground transition-colors hover:border-muted hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                download
                href={resumePdfPath}
              >
                Download Resume PDF
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Last Updated: July 2026</p>
          </div>
        </Container>
      </Section>
      <CareerHighlights
        description="A quick recruiter-ready overview of total experience, AWS and SRE depth, infrastructure scale, and automation delivery."
        eyebrow="Experience Overview"
        title="Experience overview for senior cloud infrastructure roles."
      />
      <SkillsMatrix />
      <CertificationsSection />
      <ResumeDownload />
    </>
  );
}
