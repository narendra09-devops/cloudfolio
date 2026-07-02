"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const skillGroups = [
  { category: "Cloud", skills: ["AWS"], accent: "bg-primary/10 text-primary" },
  {
    category: "Containers",
    skills: ["Docker", "Kubernetes"],
    accent: "bg-secondary/10 text-secondary",
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform", "Ansible"],
    accent: "bg-accent/10 text-accent",
  },
  {
    category: "CI/CD",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI"],
    accent: "bg-success/10 text-success",
  },
  {
    category: "Observability",
    skills: ["Prometheus", "Grafana", "Elasticsearch"],
    accent: "bg-cyan-500/10 text-cyan-500",
  },
  { category: "Programming", skills: ["Bash", "Python"], accent: "bg-amber-500/10 text-amber-500" },
  { category: "Operating Systems", skills: ["Linux"], accent: "bg-blue-500/10 text-blue-500" },
  {
    category: "Networking",
    skills: ["DNS", "VPC", "Load Balancers", "Cloudflare"],
    accent: "bg-emerald-500/10 text-emerald-500",
  },
] as const;

export function SkillsMatrix() {
  return (
    <Section className="bg-surface/30">
      <Container>
        <motion.div animate="visible" initial="hidden" variants={staggerContainer}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Core Skills
            </p>
            <H2 className="mt-3">Technical matrix for cloud infrastructure roles.</H2>
            <Paragraph className="mt-4">
              Skills grouped around the systems, tools, and practices used in platform and SRE work.
            </Paragraph>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {skillGroups.map((group) => (
              <motion.div key={group.category} variants={fadeUp}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader>
                    <div className={`mb-1 size-2.5 rounded-full ${group.accent}`} />
                    <CardTitle className="text-lg">{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
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
