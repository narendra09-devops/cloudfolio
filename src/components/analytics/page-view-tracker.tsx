"use client";

import { useEffect } from "react";
import { safeTrackEvent, type AnalyticsEventName } from "@/lib/analytics";

type PageViewTrackerProps = {
  eventName: AnalyticsEventName;
  pageSection: string;
};

export function PageViewTracker({ eventName, pageSection }: PageViewTrackerProps) {
  useEffect(() => {
    safeTrackEvent(eventName, {
      pageSection,
      ctaType: "page-view",
    });
  }, [eventName, pageSection]);

  return null;
}
