import type { Metadata } from "next";
import { RecruiterHub } from "@/components/sections/recruiter-hub";

export const metadata: Metadata = {
  title: "Recruiter Hub | Germany & Europe Cloud SRE Roles | Narendra Pratap Singh",
  description:
    "Recruiter hub for Narendra Pratap Singh, targeting Germany, Europe, UAE, Singapore, and remote cloud infrastructure, SRE, platform engineering, and AWS roles.",
};

export default function RecruiterPage() {
  return <RecruiterHub />;
}
