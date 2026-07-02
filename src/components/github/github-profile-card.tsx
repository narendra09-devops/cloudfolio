import Image from "next/image";
import { Building2, Github, Link as LinkIcon, MapPin, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCompactNumber, type GithubProfile } from "@/lib/github";

type GithubProfileCardProps = {
  profile: GithubProfile | null;
};

export function GithubProfileCard({ profile }: GithubProfileCardProps) {
  if (!profile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>GitHub profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted">
            GitHub profile data is unavailable. Check the username, token, or API rate limit.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      <CardHeader>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {profile.avatarUrl ? (
            <Image
              alt={`${profile.login} GitHub avatar`}
              className="size-20 rounded-2xl border border-border/60 bg-background object-cover shadow-lg shadow-primary/10"
              height={80}
              src={profile.avatarUrl}
              width={80}
            />
          ) : (
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 font-heading text-xl font-semibold text-primary shadow-lg shadow-primary/10">
              NPS
            </div>
          )}
          <div className="min-w-0">
            <CardTitle>{profile.name ?? profile.login}</CardTitle>
            <p className="mt-1 font-mono text-sm text-primary">@{profile.login}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm leading-6 text-muted">
          {profile.bio ?? "Engineering profile connected through the GitHub API."}
        </p>

        <div className="grid gap-3 text-sm text-muted sm:grid-cols-2">
          {profile.location ? (
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              {profile.location}
            </span>
          ) : null}
          {profile.company ? (
            <span className="inline-flex items-center gap-2">
              <Building2 aria-hidden="true" className="size-4 text-primary" />
              {profile.company}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-2">
            <Users aria-hidden="true" className="size-4 text-primary" />
            {formatCompactNumber(profile.followers)} followers
          </span>
          <span className="inline-flex items-center gap-2">
            <Github aria-hidden="true" className="size-4 text-primary" />
            {formatCompactNumber(profile.publicRepos)} public repos
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={profile.htmlUrl}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="primary"
          >
            <Github aria-hidden="true" className="size-4" />
            View GitHub
          </ButtonLink>
          {profile.blog ? (
            <ButtonLink
              href={profile.blog}
              rel="noopener noreferrer"
              size="sm"
              target="_blank"
              variant="outline"
            >
              <LinkIcon aria-hidden="true" className="size-4" />
              Website
            </ButtonLink>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
