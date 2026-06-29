"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const milestones = [
  { year: "2011", title: "Started IT Career" },
  { year: "2020", title: "AWS Solutions Architect Certification" },
  { year: "2024", title: "AWS Developer Associate Certification" },
  { year: "2025", title: "Cloud Platform Engineering & SRE Focus" },
  { year: "2026", title: "International Opportunities & CloudFolio" },
] as const;

export function ExperienceTimeline() {
  return (
    <Section>
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Timeline
            </p>
            <H1>Career Timeline</H1>
            <Paragraph className="mt-4">
              Key milestones across IT operations, AWS certification, cloud platform engineering,
              and international opportunity readiness.
            </Paragraph>
          </motion.div>

          <motion.ol
            className="relative mt-12 grid gap-6 border-l border-border pl-6"
            variants={staggerContainer}
          >
            {milestones.map((milestone) => (
              <motion.li className="relative" key={milestone.year} variants={fadeUp}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-7 size-3 rounded-full border border-primary bg-background shadow-[0_0_0_4px_rgb(var(--color-background))]"
                />
                <Card
                  className="transition-colors hover:border-primary/60 focus-visible:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  tabIndex={0}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Badge variant="primary">{milestone.year}</Badge>
                      <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                        {milestone.title}
                      </h2>
                    </div>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </Container>
    </Section>
  );
}
