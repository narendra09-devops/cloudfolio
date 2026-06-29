import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

export const metadata: Metadata = {
  title: "Career Timeline | Narendra Pratap Singh",
  description:
    "Career timeline for Narendra Pratap Singh, including AWS certifications, SRE focus, and CloudFolio international opportunity milestones.",
};

export default function TimelinePage() {
  return <ExperienceTimeline />;
}
