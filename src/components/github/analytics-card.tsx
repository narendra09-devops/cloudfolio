import { BarChart3, Clock, Database, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AnalyticsCardProps = {
  fetchedAt: string;
};

export function AnalyticsCard({ fetchedAt }: AnalyticsCardProps) {
  const items = [
    {
      icon: Database,
      label: "Cache strategy",
      value: "GitHub API cached for 30 minutes with Next.js revalidation.",
    },
    {
      icon: ShieldCheck,
      label: "Token support",
      value: "Uses server-only GITHUB_TOKEN when available.",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      value: "Prepared for page views, conversion events, and repository trend tracking.",
    },
    {
      icon: Clock,
      label: "Last refresh",
      value: new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(fetchedAt)),
    },
  ];

  return (
    <Card className="min-w-0 overflow-hidden">
      <CardHeader>
        <CardTitle>Analytics integration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="rounded-md border border-border bg-background/50 p-4"
                key={item.label}
              >
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <Icon aria-hidden="true" className="size-4 text-primary" />
                  {item.label}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{item.value}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
