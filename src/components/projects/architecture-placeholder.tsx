import { GitBranch } from "lucide-react";

type ArchitecturePlaceholderProps = {
  title?: string;
  steps: string[];
};

export function ArchitecturePlaceholder({
  title = "Architecture placeholder",
  steps,
}: ArchitecturePlaceholderProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface/50 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10 text-sky-300">
          <GitBranch aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-sm leading-6 text-muted">
            Diagram-ready system flow for a future visual architecture asset.
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
