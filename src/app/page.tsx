import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/about-preview";
import { AvailabilityBanner } from "@/components/sections/availability-banner";
import { CertificationsPreview } from "@/components/sections/certifications-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExperienceSnapshot } from "@/components/sections/experience-snapshot";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { GitHubPreview } from "@/components/sections/github-preview";
import { Hero } from "@/components/sections/hero";
import { LatestBlogs } from "@/components/sections/latest-blogs";
import { SkillsOverview } from "@/components/sections/skills-overview";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Narendra Pratap Singh | Senior Cloud Infrastructure Engineer | SRE | Platform Engineer",
  description:
    "Senior Cloud Infrastructure Engineer, SRE, Platform Engineer, and AWS Cloud Engineer with 14+ years IT experience, 5+ years AWS/SRE focus, and availability for Germany/Europe relocation and remote roles.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AvailabilityBanner />
      <AboutPreview />
      <SkillsOverview />
      <ExperienceSnapshot />
      <FeaturedProjects />
      <CertificationsPreview />
      <GitHubPreview />
      <LatestBlogs />
      <ContactCta />
    </>
  );
}
