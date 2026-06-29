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

export const metadata: Metadata = {
  title: "Narendra Pratap Singh | Senior Cloud Infrastructure Engineer | SRE",
  description:
    "Senior Cloud Infrastructure Engineer, Site Reliability Engineer, and Platform Engineer with 14+ years of experience in AWS, Kubernetes, Terraform, and automation.",
};

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
