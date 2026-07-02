"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
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
            <Card className="overflow-hidden border-primary/20 bg-[linear-gradient(135deg,rgb(var(--color-primary)/0.10),rgb(var(--color-secondary)/0.08)_45%,rgb(var(--color-accent)/0.10))] shadow-xl shadow-primary/10">
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardContent className="p-6 text-center sm:p-8">
                <H2>Download Resume</H2>
                <Paragraph className="mt-4">
                  Download my latest ATS-optimized resume for Senior Cloud Infrastructure Engineer,
                  Site Reliability Engineer, Platform Engineer, and AWS Cloud Engineer roles.
                </Paragraph>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <ButtonLink
                    className="w-full sm:w-auto"
                    href={resumePdfPath}
                    rel="noopener noreferrer"
                    size="lg"
                    target="_blank"
                    variant="outline"
                  >
                    View Resume
                  </ButtonLink>
                  <ButtonLink className="w-full sm:w-auto" download href={resumePdfPath} size="lg">
                    Download Resume PDF
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
