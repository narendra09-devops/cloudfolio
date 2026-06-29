"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function GitHubPreview() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <motion.div
          animate="visible"
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              GitHub
            </p>
            <H2 className="mt-3">Open Source & GitHub Activity</H2>
            <Paragraph className="mt-4">
              GitHub contribution graph and recent repositories will be integrated in future
              milestones.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card aria-label="GitHub activity placeholder">
              <CardContent className="grid min-h-48 place-items-center p-6">
                <p className="max-w-sm text-center text-sm leading-6 text-muted">
                  Contribution graph and repository activity placeholder.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
