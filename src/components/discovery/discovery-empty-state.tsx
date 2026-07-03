import { ButtonLink } from "@/components/ui/button";

type DiscoveryEmptyStateProps = {
  title: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
};

export function DiscoveryEmptyState({
  title,
  description,
  ctaHref,
  ctaLabel,
}: DiscoveryEmptyStateProps) {
  return (
    <div className="rounded-2xl border border-border/70 bg-surface/70 p-8 text-center shadow-lg shadow-primary/5">
      <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted">{description}</p>
      <div className="mt-6">
        <ButtonLink href={ctaHref} variant="outline">
          {ctaLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
