"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer } from "@/lib/animations";

const availability = [
  "Germany/Europe relocation",
  "Remote roles",
  "Cloud/SRE roles",
  "Platform engineering",
] as const;

export function AvailabilityBanner() {
  return (
    <section aria-label="Availability" className="border-b border-border bg-surface/40 py-5">
      <Container>
        <motion.div
          animate="visible"
          className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          initial="hidden"
          variants={staggerContainer}
        >
          <motion.p className="text-sm font-medium text-foreground" variants={fadeUp}>
            Open to:
          </motion.p>
          <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
            {availability.map((item) => (
              <Badge key={item} variant="primary">
                {item}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
