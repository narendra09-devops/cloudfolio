"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function LatestBlogs() {
  return (
    <Section>
      <Container>
        <motion.div
          animate="visible"
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Writing
            </p>
            <H2 className="mt-3">Latest Articles</H2>
            <Paragraph className="mt-4">
              Technical blogs and engineering notes coming soon.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card aria-label="Latest articles placeholder">
              <CardContent className="grid min-h-48 place-items-center p-6">
                <p className="max-w-sm text-center text-sm leading-6 text-muted">
                  Blog previews will appear here after the content system is introduced.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
