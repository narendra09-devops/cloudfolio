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
              A quick visual preview of repository momentum, contribution rhythm, and engineering
              activity connected to CloudFolio.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card aria-label="GitHub activity preview" className="overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 84 }, (_, index) => (
                    <span
                      aria-hidden="true"
                      className={[
                        "aspect-square rounded-sm border border-border/50",
                        index % 7 === 0
                          ? "bg-success/70"
                          : index % 5 === 0
                            ? "bg-secondary/50"
                            : index % 3 === 0
                              ? "bg-primary/35"
                              : "bg-background",
                      ].join(" ")}
                      key={index}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Contribution-style activity preview for repository, writing, and project updates.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
