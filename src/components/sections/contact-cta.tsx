"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

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
            <H2>Interested in working together?</H2>
            <Paragraph className="mt-4">
              Open to senior cloud infrastructure, SRE, platform engineering, and consulting
              conversations.
            </Paragraph>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            variants={fadeUp}
          >
            <ButtonLink className="w-full sm:w-auto" href="/contact" size="lg">
              Contact Me
            </ButtonLink>
            <ButtonLink className="w-full sm:w-auto" href="/resume" size="lg" variant="outline">
              Download Resume
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
