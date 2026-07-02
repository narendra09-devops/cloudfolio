import type { Metadata } from "next";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { RecruiterHub } from "@/components/sections/recruiter-hub";
import { analyticsEvents } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Recruiter Hub v2 | Narendra Pratap Singh",
  description:
    "Executive recruiter dashboard for Narendra Pratap Singh with experience, certifications, relocation readiness, featured projects, and direct contact paths.",
};

export default function RecruiterPage() {
  return (
    <>
      <PageViewTracker
        eventName={analyticsEvents.recruiterPageViewed}
        pageSection="Recruiter Page"
      />
      <RecruiterHub />
    </>
  );
}
