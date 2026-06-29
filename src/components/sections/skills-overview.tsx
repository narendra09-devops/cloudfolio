"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const skillCategories = [
  {
    title: "Cloud",
    description: "AWS infrastructure, scalable environments, migration planning, operations.",
  },
  {
    title: "Containers",
    description: "Kubernetes platforms, workload operations, deployment reliability.",
  },
  {
    title: "IaC",
    description: "Terraform-driven provisioning, repeatable environments, configuration control.",
  },
  {
    title: "CI/CD",
    description: "Delivery pipelines, release automation, deployment governance.",
  },
  {
    title: "Observability",
    description: "Monitoring, alerting, logs, metrics, incident visibility, SRE practices.",
  },
  {
    title: "Programming",
    description: "Automation scripts, platform tooling, operational utilities.",
  },
  {
    title: "Networking",
    description: "Linux networking, cloud connectivity, DNS, SSL, routing fundamentals.",
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
            <H2 className="mt-3">Cloud, platform, and reliability engineering.</H2>
            <Paragraph className="mt-4">
              Practical engineering coverage across infrastructure design, automation, operations,
              and production reliability.
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
