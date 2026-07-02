import { GitBranch } from "lucide-react";

type ArchitecturePlaceholderProps = {
  title?: string;
  steps: string[];
};

export function ArchitecturePlaceholder({
  title = "Architecture system flow",
  steps,
}: ArchitecturePlaceholderProps) {
  return (
    <div className="rounded-lg border border-secondary/20 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 p-5 shadow-lg shadow-secondary/10 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10 text-secondary">
          <GitBranch aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-sm leading-6 text-muted">
            Key architecture steps for review, discussion, and implementation planning.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            className="relative rounded-md border border-border bg-background/70 p-4 text-sm font-medium text-foreground"
            key={step}
          >
            <span className="mb-3 block font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
