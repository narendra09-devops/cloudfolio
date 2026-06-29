import { ArchitectureCard } from "@/components/architecture/architecture-card";
import type { ArchitectureTopic } from "@/content/architecture";

type ArchitectureGridProps = {
  topics: ArchitectureTopic[];
};

export function ArchitectureGrid({ topics }: ArchitectureGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {topics.map((topic) => (
        <ArchitectureCard key={topic.slug} topic={topic} />
      ))}
    </div>
  );
}
