import type { Metadata } from "next";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { RecruiterHub } from "@/components/sections/recruiter-hub";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/config/site";
import { analyticsEvents } from "@/lib/analytics";

export const metadata: Metadata = createPageMetadata({
  title: "Recruiter Hub v2 | Narendra Pratap Singh",
  description:
    "Executive recruiter dashboard for Narendra Pratap Singh with experience, certifications, relocation readiness, featured projects, and direct contact paths.",
  path: "/recruiter",
});

const recruiterStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What roles is Narendra Pratap Singh aligned to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Senior Cloud Infrastructure Engineer, Site Reliability Engineer, Platform Engineer, Cloud Security Engineer, DevOps Engineer, and Cloud Architect roles.",
        },
      },
      {
        "@type": "Question",
        name: "Is Narendra available for remote or relocation opportunities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CloudFolio presents Narendra as available for remote-first roles and relocation discussions where there is a strong technical fit.",
        },
      },
      {
        "@type": "Question",
        name: "Where can recruiters find resume and contact options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The recruiter hub includes direct resume download, email, LinkedIn, project, architecture, and timeline navigation paths.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Recruiter Hub",
        item: absoluteUrl("/recruiter"),
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.owner,
    url: siteConfig.url,
    jobTitle: [
      "Senior Cloud Infrastructure Engineer",
      "Site Reliability Engineer",
      "Platform Engineer",
      "Cloud Security Engineer",
    ],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  },
];

export default function RecruiterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recruiterStructuredData) }}
      />
      <PageViewTracker
        eventName={analyticsEvents.recruiterPageViewed}
        pageSection="Recruiter Page"
      />
      <RecruiterHub />
    </>
  );
}
