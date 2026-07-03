import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Career Timeline | Narendra Pratap Singh",
  description:
    "Career timeline for Narendra Pratap Singh, including AWS certifications, SRE focus, and CloudFolio international opportunity milestones.",
  path: "/timeline",
});

export default function TimelinePage() {
  return <ExperienceTimeline />;
}
