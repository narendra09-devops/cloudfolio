"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H2, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { fadeUp, staggerContainer } from "@/lib/animations";

const resumePdfPath = "/resume/narendra-pratap-singh-resume.pdf";

export function ResumeDownload() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <Container>
        <motion.div
          animate="visible"
          className="mx-auto max-w-3xl"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Card>
              <CardContent className="p-6 text-center sm:p-8">
                <H2>Download Resume</H2>
                <Paragraph className="mt-4">
                  Download my latest ATS-optimized resume for Senior Cloud Infrastructure Engineer,
                  Site Reliability Engineer, Platform Engineer, and AWS Cloud Engineer roles.
                </Paragraph>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-transparent px-5 text-base font-medium text-foreground transition-colors hover:border-muted hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    href={resumePdfPath}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Resume
                  </a>
                  <a
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-transparent bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    download
                    href={resumePdfPath}
                  >
                    Download Resume PDF
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
