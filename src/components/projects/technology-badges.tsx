import { Badge } from "@/components/ui/badge";

type TechnologyBadgesProps = {
  technologies: string[];
  limit?: number;
};

export function TechnologyBadges({ technologies, limit }: TechnologyBadgesProps) {
  const visibleTechnologies = limit ? technologies.slice(0, limit) : technologies;
  const remainingCount = limit ? technologies.length - visibleTechnologies.length : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTechnologies.map((technology) => (
        <Badge key={technology} variant="outline">
          {technology}
        </Badge>
      ))}
      {remainingCount > 0 ? <Badge variant="secondary">+{remainingCount}</Badge> : null}
    </div>
  );
}
