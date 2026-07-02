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
      <div className="h-1 bg-gradient-to-r from-secondary via-primary to-accent" />
      <CardHeader>
        <CardTitle>Analytics integration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="rounded-2xl border border-border/60 bg-gradient-to-br from-background/70 via-card/60 to-secondary/5 p-4 shadow-sm shadow-secondary/5"
                key={item.label}
              >
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
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
