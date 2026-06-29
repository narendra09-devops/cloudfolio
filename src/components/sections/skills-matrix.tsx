"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const skillGroups = [
  { category: "Cloud", skills: ["AWS"] },
  { category: "Containers", skills: ["Docker", "Kubernetes"] },
  { category: "Infrastructure as Code", skills: ["Terraform", "Ansible"] },
  { category: "CI/CD", skills: ["GitHub Actions", "Jenkins", "GitLab CI"] },
  { category: "Observability", skills: ["Prometheus", "Grafana", "Elasticsearch"] },
  { category: "Programming", skills: ["Bash", "Python"] },
  { category: "Operating Systems", skills: ["Linux"] },
  { category: "Networking", skills: ["DNS", "VPC", "Load Balancers", "Cloudflare"] },
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
                <Card className="h-full">
                  <CardHeader>
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
