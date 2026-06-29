import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AvailabilitySection } from "@/components/sections/availability-section";
import { CareerHighlights } from "@/components/sections/career-highlights";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About Narendra Pratap Singh",
  description:
    "Professional summary, core skills, certifications, and availability for Narendra Pratap Singh, Senior Cloud Infrastructure Engineer and SRE.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Professional Summary
            </p>
            <H2 className="mt-3">Senior infrastructure engineer with cloud reliability depth.</H2>
            <Paragraph className="mt-4">
              Narendra Pratap Singh is a Senior Cloud Infrastructure Engineer, Cloud Site
              Reliability Engineer, Cloud Platform Engineer, and AWS Cloud Engineer with 14+ years
              of experience designing, automating, and operating scalable cloud infrastructure and
              reliability platforms.
            </Paragraph>
            <Paragraph className="mt-4">
              His work focuses on AWS, Kubernetes, Terraform, Linux, observability, automation, and
              platform practices that improve operational consistency and reduce manual toil.
            </Paragraph>
          </div>
        </Container>
      </Section>
      <SkillsMatrix />
      <CareerHighlights />
      <CertificationsSection />
      <AvailabilitySection />
    </>
  );
}
