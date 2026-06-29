"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const certifications = [
  "AWS Certified Developer – Associate (2024)",
  "AWS Certified Solutions Architect – Associate (2020)",
] as const;

export function CertificationsSection() {
  return (
    <Section>
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Certifications
            </p>
            <H2 className="mt-3">AWS credentials aligned with delivery and architecture.</H2>
            <Paragraph className="mt-4">
              Cloud certifications supporting practical infrastructure, application, and
              architecture experience.
            </Paragraph>
          </motion.div>

          <motion.div className="mt-10 grid gap-4 md:grid-cols-2" variants={staggerContainer}>
            {certifications.map((certification) => (
              <motion.div key={certification} variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{certification}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="primary">AWS Certified</Badge>
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
