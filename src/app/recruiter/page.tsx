import type { Metadata } from "next";
import { RecruiterHub } from "@/components/sections/recruiter-hub";

export const metadata: Metadata = {
  title: "Recruiter Hub | Narendra Pratap Singh",
  description:
    "Recruiter hub for Narendra Pratap Singh with location, availability, remote work, relocation, visa sponsorship, resume, and contact details.",
};

export default function RecruiterPage() {
  return <RecruiterHub />;
}
