"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const recruiterDetails = [
  { label: "Current Location", value: "India" },
  { label: "Availability", value: "Immediate / Negotiable" },
  { label: "Remote", value: "Yes" },
  { label: "Relocation", value: "Europe & UAE" },
  { label: "Visa Sponsorship Required", value: "Yes" },
] as const;

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";
const emailHref = "mailto:napr.singh09@gmail.com?subject=CloudFolio%20Opportunity%20Discussion";
const linkedinHref = "https://www.linkedin.com/in/narendra09-devops";
const githubHref = "https://github.com/narendra09-devops";

export function RecruiterHub() {
  return (
    <Section>
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Recruiter Hub
            </p>
            <H1>Hiring information for cloud infrastructure roles.</H1>
            <Paragraph className="mt-4">
              Quick screening details for senior cloud infrastructure, SRE, platform engineering,
              and AWS-focused opportunities.
            </Paragraph>
          </motion.div>

          <motion.div className="mt-10 grid gap-4 md:grid-cols-2" variants={staggerContainer}>
            {recruiterDetails.map((detail) => (
              <motion.div key={detail.label} variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{detail.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-medium text-foreground">{detail.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
            <ButtonLink className="w-full sm:w-auto" href={resumePdfPath} size="lg">
              Download Resume
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/contact" size="lg" variant="outline">
              Contact Me
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href={emailHref} size="lg" variant="outline">
              <Mail className="size-4" />
              Email
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href={linkedinHref}
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
              variant="outline"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </ButtonLink>
            <ButtonLink
              className="w-full sm:w-auto"
              href={githubHref}
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
              variant="outline"
            >
              <Github className="size-4" />
              GitHub
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
