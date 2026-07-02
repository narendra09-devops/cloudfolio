import { GitBranch } from "lucide-react";

type DiagramPlaceholderProps = {
  title?: string;
  nodes: string[];
};

export function DiagramPlaceholder({
  title = "Diagram-ready system flow",
  nodes,
}: DiagramPlaceholderProps) {
  return (
    <div className="rounded-lg border border-accent/20 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 p-5 shadow-lg shadow-accent/10 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10 text-secondary">
          <GitBranch aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-sm leading-6 text-muted">
            System steps organized for architecture review and visual implementation.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {nodes.map((node, index) => (
          <div
            className="rounded-md border border-border bg-background/70 p-4 text-sm font-medium text-foreground"
            key={node}
          >
            <span className="mb-3 block font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
