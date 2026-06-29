"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H1, Paragraph } from "@/components/ui/heading";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";

const heroBadges = [
  "AWS",
  "Kubernetes",
  "Terraform",
  "Linux",
  "DevOps",
  "SRE",
  "Observability",
  "Open to Relocation",
  "Remote",
] as const;

const roles = [
  "Senior Cloud Infrastructure Engineer",
  "Site Reliability Engineer",
  "Platform Engineer",
  "AWS Cloud Engineer",
] as const;

export function Hero() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-24 lg:py-28">
      <Container>
        <motion.div
          animate="visible"
          className="max-w-5xl"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.p
            className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary"
            variants={fadeUp}
          >
            Narendra Pratap Singh
          </motion.p>

          <motion.div className="mt-5 space-y-3" variants={fadeUp}>
            <H1 className="max-w-4xl">
              Senior Cloud Infrastructure Engineer for reliable, automated platforms.
            </H1>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-muted sm:text-base">
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="mt-6 max-w-3xl space-y-4" variants={fadeUp}>
            <Paragraph className="text-lg leading-8 sm:text-xl">
              14+ years of experience designing, automating, and operating scalable cloud
              infrastructure, platform engineering solutions, and reliability systems.
            </Paragraph>
            <Paragraph>
              Open to remote opportunities and relocation across Europe and the UAE.
            </Paragraph>
          </motion.div>

          <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
            <ButtonLink className="w-full sm:w-auto" href="/resume" size="lg">
              Download Resume
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/projects" size="lg" variant="outline">
              View Projects
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/contact" size="lg" variant="ghost">
              Contact Me
            </ButtonLink>
          </motion.div>

          <motion.div className="mt-10 flex flex-wrap gap-2" variants={fadeIn}>
            {heroBadges.map((badge) => (
              <Badge key={badge} variant={badge === "Remote" ? "success" : "outline"}>
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
