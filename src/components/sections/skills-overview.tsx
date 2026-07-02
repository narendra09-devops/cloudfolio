"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const skillCategories = [
  {
    title: "AWS Cloud Infrastructure",
    description: "Scalable AWS environments, cloud operations, migration planning, and governance.",
  },
  {
    title: "Terraform / IaC",
    description: "Repeatable provisioning, environment standards, and configuration control.",
  },
  {
    title: "Kubernetes",
    description: "Container platform operations, workload reliability, and deployment readiness.",
  },
  {
    title: "Linux Operations",
    description:
      "Production Linux administration, troubleshooting, networking, and service support.",
  },
  {
    title: "Observability",
    description: "Monitoring, alerting, logs, metrics, incident visibility, and SRE practices.",
  },
  {
    title: "Automation",
    description: "Scripts, platform tooling, operational utilities, and toil reduction workflows.",
  },
  {
    title: "Reliability & Cost",
    description:
      "Reliability improvement, cloud cost optimization, security, and compliance hygiene.",
  },
] as const;

export function SkillsOverview() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Skills
            </p>
            <H2 className="mt-3">Cloud, platform, and reliability strengths.</H2>
            <Paragraph className="mt-4">
              Recruiter-ready coverage across AWS, Terraform, Kubernetes, Linux, observability,
              automation, and production reliability.
            </Paragraph>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {skillCategories.map((skill) => (
              <motion.div key={skill.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{skill.description}</CardDescription>
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
