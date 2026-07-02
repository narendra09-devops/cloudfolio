import { track } from "@vercel/analytics";

export const analyticsEvents = {
  resumeViewed: "Resume Viewed",
  resumeDownloaded: "Resume Downloaded",
  contactEmailClicked: "Contact Email Clicked",
  linkedinClicked: "LinkedIn Clicked",
  githubClicked: "GitHub Clicked",
  recruiterPageViewed: "Recruiter Page Viewed",
  vmAuditCaseStudyViewed: "VM Audit Case Study Viewed",
  projectCtaClicked: "Project CTA Clicked",
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsEventProperties = {
  pageSection?: string;
  ctaType?: string;
};

function isAnalyticsEnabled() {
  return process.env.NEXT_PUBLIC_VERCEL_ANALYTICS !== "false";
}

function sanitizeProperties(properties: AnalyticsEventProperties): Record<string, string> {
  return Object.fromEntries(
    Object.entries(properties).flatMap(([key, value]) => {
      if (typeof value !== "string") {
        return [];
      }

      const trimmed = value.trim();
      if (!trimmed) {
        return [];
      }

      return [[key, trimmed]];
    }),
  );
}

export function safeTrackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsEventProperties = {},
) {
  if (!isAnalyticsEnabled()) {
    return;
  }

  try {
    track(eventName, sanitizeProperties(properties));
  } catch {
    // Analytics is best-effort and must never break the UI.
  }
}
