"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const highlights = [
  { value: "14+", label: "Years Experience", accent: "from-primary/20 to-secondary/10" },
  { value: "5+", label: "Years AWS & SRE", accent: "from-secondary/20 to-accent/10" },
  { value: "1000+", label: "Servers Managed", accent: "from-accent/20 to-primary/10" },
  { value: "50+", label: "Automations Delivered", accent: "from-success/20 to-secondary/10" },
] as const;

interface CareerHighlightsProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function CareerHighlights({
  eyebrow = "Career Highlights",
  title = "Operational experience with measurable scope.",
  description = "A concise view of infrastructure, SRE, and automation experience for recruiter screening.",
}: CareerHighlightsProps) {
  return (
    <Section>
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              {eyebrow}
            </p>
            <H2 className="mt-3">{title}</H2>
            <Paragraph className="mt-4">{description}</Paragraph>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {highlights.map((highlight) => (
              <motion.div key={highlight.label} variants={fadeUp}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10">
                  <CardContent className={`bg-gradient-to-br ${highlight.accent} p-5 sm:p-6`}>
                    <p className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                      {highlight.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted">{highlight.label}</p>
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
