import { Clock3 } from "lucide-react";

type ReadingTimeProps = {
  minutes: number;
};

export function ReadingTime({ minutes }: ReadingTimeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
      <Clock3 aria-hidden="true" className="size-3.5" />
      {minutes} min read
    </span>
  );
}
