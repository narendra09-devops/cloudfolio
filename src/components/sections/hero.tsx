"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H1, Paragraph } from "@/components/ui/heading";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";

const heroBadges = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "Linux",
  "Observability",
  "Automation",
  "Germany/Europe Relocation",
  "Remote Roles",
] as const;

const roles = [
  "Senior Cloud Infrastructure Engineer",
  "Site Reliability Engineer",
  "Platform Engineer",
  "AWS Cloud Engineer",
] as const;

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";

export function Hero() {
  return (
    <section className="border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          animate="visible"
          className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          initial="hidden"
          variants={staggerContainer}
        >
          <div className="max-w-5xl">
            <motion.p
              className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary"
              variants={fadeUp}
            >
              Narendra Pratap Singh
            </motion.p>

            <motion.div className="mt-5 space-y-3" variants={fadeUp}>
              <H1 className="max-w-4xl">
                Senior Cloud Infrastructure Engineer for AWS, SRE, and platform reliability.
              </H1>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-muted sm:text-base">
                {roles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-6 max-w-3xl space-y-4" variants={fadeUp}>
              <Paragraph className="text-lg leading-8 sm:text-xl">
                14+ years in IT and telecom, including 5+ years focused on AWS infrastructure, cloud
                reliability, automation, and SRE practices for production environments.
              </Paragraph>
              <Paragraph>
                Open to Germany/Europe relocation and remote roles with teams hiring for cloud
                infrastructure, SRE, platform engineering, and AWS cloud operations.
              </Paragraph>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              variants={fadeUp}
            >
              <ButtonLink className="w-full sm:w-auto" href={resumePdfPath} size="lg" download>
                Download Resume
              </ButtonLink>
              <ButtonLink
                className="w-full sm:w-auto"
                href="/recruiter"
                size="lg"
                variant="outline"
              >
                Recruiter Hub
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="/projects" size="lg" variant="ghost">
                View Projects
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="/contact" size="lg" variant="ghost">
                Contact Me
              </ButtonLink>
            </motion.div>

            <motion.div className="mt-10 flex flex-wrap gap-2" variants={fadeIn}>
              {heroBadges.map((badge) => (
                <Badge key={badge} variant={badge === "Remote Roles" ? "success" : "outline"}>
                  {badge}
                </Badge>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="grid gap-4 rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6"
            variants={fadeUp}
          >
            <div>
              <p className="text-sm font-medium text-muted">Experience</p>
              <p className="mt-1 font-heading text-3xl font-semibold tracking-tight text-foreground">
                14+ years IT
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">5+ years AWS/SRE focus</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-md border border-border bg-background/50 p-4">
                <p className="text-sm font-medium text-foreground">Core stack</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  AWS, Terraform, Kubernetes, Linux, Observability, Automation
                </p>
              </div>
              <div className="rounded-md border border-border bg-background/50 p-4">
                <p className="text-sm font-medium text-foreground">Availability</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Germany/Europe relocation, remote roles, and international cloud teams.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
