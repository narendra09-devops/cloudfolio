import { AlertCircle, ArrowUpRight, Code2, GitFork, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber, type GithubRepository } from "@/lib/github";

type RepositoryCardProps = {
  repository: GithubRepository;
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  const languages = Object.keys(repository.languages).slice(0, 3);

  return (
    <a
      className="group block h-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      href={repository.htmlUrl}
      rel="noreferrer"
      target="_blank"
    >
      <Card className="h-full transition-colors group-hover:border-primary/40 group-hover:bg-surface/80">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <CardTitle className="truncate text-lg">{repository.name}</CardTitle>
              <CardDescription className="mt-2 line-clamp-2">
                {repository.description ?? "No repository description provided."}
              </CardDescription>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-muted transition-colors group-hover:text-primary"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {languages.length > 0 ? (
              languages.map((language) => (
                <Badge key={language} variant="outline">
                  {language}
                </Badge>
              ))
            ) : repository.language ? (
              <Badge variant="outline">{repository.language}</Badge>
            ) : (
              <Badge variant="default">Source</Badge>
            )}
            {repository.fork ? <Badge variant="secondary">Fork</Badge> : null}
          </div>

          <dl className="grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-md border border-border bg-background/50 p-3">
              <dt className="sr-only">Stars</dt>
              <dd className="inline-flex items-center gap-1.5 text-foreground">
                <Star aria-hidden="true" className="size-4 text-primary" />
                {formatCompactNumber(repository.stars)}
              </dd>
            </div>
            <div className="rounded-md border border-border bg-background/50 p-3">
              <dt className="sr-only">Forks</dt>
              <dd className="inline-flex items-center gap-1.5 text-foreground">
                <GitFork aria-hidden="true" className="size-4 text-primary" />
                {formatCompactNumber(repository.forks)}
              </dd>
            </div>
            <div className="rounded-md border border-border bg-background/50 p-3">
              <dt className="sr-only">Open issues</dt>
              <dd className="inline-flex items-center gap-1.5 text-foreground">
                <AlertCircle aria-hidden="true" className="size-4 text-primary" />
                {formatCompactNumber(repository.openIssues)}
              </dd>
            </div>
          </dl>

          <p className="inline-flex items-center gap-2 text-xs text-muted">
            <Code2 aria-hidden="true" className="size-4" />
            Updated{" "}
            {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
              new Date(repository.pushedAt),
            )}
          </p>
        </CardContent>
      </Card>
    </a>
  );
}
