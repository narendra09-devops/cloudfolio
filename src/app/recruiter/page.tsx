import type { Metadata } from "next";
import { RecruiterHub } from "@/components/sections/recruiter-hub";

export const metadata: Metadata = {
  title: "Recruiter Hub v2 | Narendra Pratap Singh",
  description:
    "Executive recruiter dashboard for Narendra Pratap Singh with experience, certifications, relocation readiness, featured projects, and direct contact paths.",
};

export default function RecruiterPage() {
  return <RecruiterHub />;
}
