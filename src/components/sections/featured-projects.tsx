"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { projects } from "@/content/projects";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 4);

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
              Selected case studies across AWS security, infrastructure automation, cost
              optimization, and reliability engineering.
            </Paragraph>
          </motion.div>

          <motion.div className="mt-10 grid gap-4 md:grid-cols-2" variants={staggerContainer}>
            {featuredProjects.map((project) => (
              <motion.div className="h-full" key={project.slug} variants={fadeUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
