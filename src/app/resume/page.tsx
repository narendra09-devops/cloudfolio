import type { Metadata } from "next";
import { CareerHighlights } from "@/components/sections/career-highlights";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ResumeDownload } from "@/components/sections/resume-download";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { ButtonLink } from "@/components/ui/button";
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
      <Section className="border-b border-border bg-[radial-gradient(circle_at_12%_12%,rgb(var(--color-primary)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.10),transparent_42%)]">
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                className="w-full sm:w-auto"
                href={resumePdfPath}
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
              >
                View Resume
              </ButtonLink>
              <ButtonLink
                className="w-full sm:w-auto"
                download
                href={resumePdfPath}
                size="lg"
                variant="outline"
              >
                Download Resume PDF
              </ButtonLink>
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
