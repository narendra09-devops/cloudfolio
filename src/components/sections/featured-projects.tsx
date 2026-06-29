"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "Cloud Migration Platform",
    description: "Repeatable migration workflows for infrastructure discovery and AWS adoption.",
    tags: ["AWS", "Terraform", "Automation"],
  },
  {
    title: "VM Audit Automation",
    description: "Operational audit tooling for inventory, compliance, and server visibility.",
    tags: ["Linux", "Python", "Reporting"],
  },
  {
    title: "Infrastructure Dashboard",
    description: "Centralized infrastructure health, ownership, and operational status views.",
    tags: ["Observability", "Dashboards", "SRE"],
  },
  {
    title: "SSL Automation Platform",
    description: "Certificate lifecycle automation for renewal tracking and service reliability.",
    tags: ["SSL", "DNS", "Automation"],
  },
] as const;

export function FeaturedProjects() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Projects
            </p>
            <H2 className="mt-3">Featured engineering work.</H2>
            <Paragraph className="mt-4">
              Selected project case studies will be expanded in future milestones.
            </Paragraph>
          </motion.div>

          <motion.div className="mt-10 grid gap-4 md:grid-cols-2" variants={staggerContainer}>
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <CardTitle>{project.title}</CardTitle>
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
