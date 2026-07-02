"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function AboutPreview() {
  return (
    <Section>
      <Container>
        <motion.div
          animate="visible"
          className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              About
            </p>
            <H2 className="mt-3">
              Cloud infrastructure engineer ready for Germany and Europe hiring.
            </H2>
          </motion.div>

          <motion.div className="space-y-5" variants={fadeUp}>
            <Paragraph>
              I design and operate AWS cloud infrastructure, platform engineering workflows, and
              reliability systems for teams that need production environments to be observable,
              repeatable, and resilient.
            </Paragraph>
            <Paragraph>
              My work spans AWS, Terraform, Kubernetes, Linux, observability, automation, and
              operational practices that reduce manual toil while improving delivery confidence.
            </Paragraph>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink className="w-full sm:w-auto" href="/about" variant="outline">
                Learn More
              </ButtonLink>
              <ButtonLink className="w-full sm:w-auto" href="/recruiter" variant="ghost">
                Recruiter Hub
              </ButtonLink>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
