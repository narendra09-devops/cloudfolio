"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { H1, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const titles = [
  "Senior Cloud Infrastructure Engineer",
  "Cloud Site Reliability Engineer",
  "Cloud Platform Engineer",
  "AWS Cloud Engineer",
] as const;

export function AboutHero() {
  return (
    <Section className="border-b border-border bg-background">
      <Container>
        <motion.div
          animate="visible"
          className="max-w-5xl"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.p
            className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary"
            variants={fadeUp}
          >
            Narendra Pratap Singh
          </motion.p>
          <motion.div className="mt-5 space-y-4" variants={fadeUp}>
            <H1>Career foundation for cloud, reliability, and platform engineering.</H1>
            <div className="flex flex-wrap gap-2">
              {titles.map((title) => (
                <Badge key={title} variant="outline">
                  {title}
                </Badge>
              ))}
            </div>
          </motion.div>
          <motion.div className="mt-6 max-w-3xl" variants={fadeUp}>
            <Paragraph className="text-lg leading-8 sm:text-xl">
              14+ years of experience designing, automating, and operating scalable cloud
              infrastructure and reliability platforms with expertise in AWS, Kubernetes, Terraform,
              Linux, observability, and automation.
            </Paragraph>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
