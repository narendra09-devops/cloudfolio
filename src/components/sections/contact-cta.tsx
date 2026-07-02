"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { analyticsEvents } from "@/lib/analytics";

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";

export function ContactCta() {
  return (
    <Section className="border-t border-border bg-surface/40">
      <Container>
        <motion.div
          animate="visible"
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <H2>Hiring for cloud infrastructure, SRE, or platform engineering?</H2>
            <Paragraph className="mt-4">
              Open to Germany/Europe relocation and remote roles with teams hiring for AWS,
              Terraform, Kubernetes, Linux, observability, and automation experience.
            </Paragraph>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"
            variants={fadeUp}
          >
            <ButtonLink
              className="w-full sm:w-auto"
              href={resumePdfPath}
              size="lg"
              download
              tracking={{
                eventName: analyticsEvents.resumeDownloaded,
                pageSection: "Home Contact CTA",
                ctaType: "resume-download",
              }}
            >
              Download Resume
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href="/recruiter"
              size="lg"
              variant="outline"
              tracking={{
                eventName: analyticsEvents.projectCtaClicked,
                pageSection: "Home Contact CTA",
                ctaType: "recruiter-hub",
              }}
            >
              Recruiter Hub
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href="/contact"
              size="lg"
              variant="outline"
              tracking={{
                eventName: analyticsEvents.contactEmailClicked,
                pageSection: "Home Contact CTA",
                ctaType: "contact-me",
              }}
            >
              Contact Me
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href="/projects"
              size="lg"
              variant="ghost"
              tracking={{
                eventName: analyticsEvents.projectCtaClicked,
                pageSection: "Home Contact CTA",
                ctaType: "projects",
              }}
            >
              View Projects
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
