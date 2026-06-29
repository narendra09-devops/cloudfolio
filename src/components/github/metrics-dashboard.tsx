import { Activity, Code2, GitPullRequest, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber, type GithubRepository } from "@/lib/github";

type MetricsDashboardProps = {
  languages: Record<string, number>;
  repositories: GithubRepository[];
};

function percent(value: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return Math.round((value / total) * 100);
}

export function MetricsDashboard({ languages, repositories }: MetricsDashboardProps) {
  const totalStars = repositories.reduce((sum, repository) => sum + repository.stars, 0);
  const totalForks = repositories.reduce((sum, repository) => sum + repository.forks, 0);
  const totalIssues = repositories.reduce((sum, repository) => sum + repository.openIssues, 0);
  const languageTotal = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);
  const topLanguages = Object.entries(languages)
    .sort(([, left], [, right]) => right - left)
    .slice(0, 5);

  const metrics = [
    {
      icon: GitPullRequest,
      label: "Tracked repos",
      value: formatCompactNumber(repositories.length),
    },
    {
      icon: Star,
      label: "Stars",
      value: formatCompactNumber(totalStars),
    },
    {
      icon: Activity,
      label: "Forks",
      value: formatCompactNumber(totalForks),
    },
    {
      icon: Code2,
      label: "Open issues",
      value: formatCompactNumber(totalIssues),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engineering metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                className="rounded-md border border-border bg-background/50 p-4"
                key={metric.label}
              >
                <dt className="flex items-center gap-2 text-sm text-muted">
                  <Icon aria-hidden="true" className="size-4 text-primary" />
                  {metric.label}
                </dt>
                <dd className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                  {metric.value}
                </dd>
              </div>
            );
          })}
        </dl>

        <div>
          <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground">
            Language distribution
          </h3>
          <div className="mt-4 space-y-3">
            {topLanguages.length > 0 ? (
              topLanguages.map(([language, bytes]) => {
                const value = percent(bytes, languageTotal);

                return (
                  <div className="space-y-2" key={language}>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-foreground">{language}</span>
                      <span className="font-mono text-muted">{value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-background">
                      <div
                        aria-hidden="true"
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-sm leading-6 text-muted">
                Language data will appear after GitHub returns repository language statistics.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
