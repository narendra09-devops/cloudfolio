"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const availabilityItems = [
  "Open to Remote Opportunities",
  "Open to Europe Relocation",
  "Open to UAE Relocation",
  "Open to Consulting Engagements",
] as const;

export function AvailabilitySection() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <Container>
        <motion.div
          animate="visible"
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Availability
            </p>
            <H2 className="mt-3">Open to aligned international opportunities.</H2>
            <Paragraph className="mt-4">
              Available for senior cloud infrastructure, SRE, platform engineering, and consulting
              conversations.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardContent className="p-6">
                <ul className="grid gap-3" aria-label="Availability details">
                  {availabilityItems.map((item) => (
                    <li className="flex items-start gap-3 text-sm text-foreground" key={item}>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success"
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
