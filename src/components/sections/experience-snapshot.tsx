"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "5+", label: "Years AWS & SRE" },
  { value: "1000+", label: "Servers Managed" },
  { value: "50+", label: "Automations Delivered" },
] as const;

export function ExperienceSnapshot() {
  return (
    <Section>
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Experience
            </p>
            <H2 className="mt-3">Operational depth across infrastructure at scale.</H2>
            <Paragraph className="mt-4">
              A snapshot of hands-on experience across cloud platforms, Linux operations,
              automation, and reliability engineering.
            </Paragraph>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="font-heading text-4xl font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
