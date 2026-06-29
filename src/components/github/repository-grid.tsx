import { RepositoryCard } from "@/components/github/repository-card";
import { Card, CardContent } from "@/components/ui/card";
import type { GithubRepository } from "@/lib/github";

type RepositoryGridProps = {
  repositories: GithubRepository[];
};

export function RepositoryGrid({ repositories }: RepositoryGridProps) {
  if (repositories.length === 0) {
    return (
      <Card>
        <CardContent className="grid min-h-40 place-items-center p-6 text-center">
          <p className="max-w-md text-sm leading-6 text-muted">
            No repositories are available yet. The dashboard will populate when GitHub returns
            repository data.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
}
