"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ResumeDownload() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <Container>
        <motion.div
          animate="visible"
          className="mx-auto max-w-3xl"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="p-6 text-center sm:p-8">
                <H2>Download Resume</H2>
                <Paragraph className="mt-4">
                  Placeholder resume PDF link. The final downloadable resume asset will be added in
                  a later milestone.
                </Paragraph>
                <div className="mt-8">
                  <ButtonLink href="/resume-placeholder.pdf" size="lg">
                    Download Resume
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
