"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/content/blog";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function LatestBlogs() {
  const latestPosts = blogPosts.slice(0, 3);

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
            <H2 className="mt-3">Latest articles.</H2>
            <Paragraph className="mt-4">
              Technical writing on cloud security, cost optimization, reliability, and operational
              scale.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="grid gap-4 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
