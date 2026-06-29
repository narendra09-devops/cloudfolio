import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectMetric } from "@/content/projects";

type MetricsCardsProps = {
  metrics: ProjectMetric[];
};

export function MetricsCards({ metrics }: MetricsCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <Card className="h-full bg-background/50" key={metric.label}>
          <CardContent className="space-y-3 p-5">
            <div className="flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-blue-300">
              <TrendingUp aria-hidden="true" className="size-4" />
            </div>
            <div>
              <p className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{metric.context}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
