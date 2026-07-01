import { GitBranch } from "lucide-react";
import type { ProjectMermaidDiagram } from "@/content/projects";

type MermaidDiagramProps = {
  diagram: ProjectMermaidDiagram;
};

function getMermaidLabels(code: string) {
  const matches = [...code.matchAll(/\[([^\]]+)\]/g)].map((match) => match[1]);

  return [...new Set(matches)];
}

export function MermaidDiagram({ diagram }: MermaidDiagramProps) {
  const labels = getMermaidLabels(diagram.code);

  return (
    <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10 text-sky-300">
          <GitBranch aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {diagram.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{diagram.description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {labels.map((label, index) => (
          <div className="flex items-center gap-3" key={`${diagram.title}-${label}`}>
            <div className="min-h-20 flex-1 rounded-md border border-border bg-background/70 p-4">
              <span className="block font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-sm font-medium leading-5 text-foreground">
                {label}
              </span>
            </div>
            {index < labels.length - 1 ? (
              <span aria-hidden="true" className="hidden text-muted md:block">
                -&gt;
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <details className="mt-6 rounded-md border border-border bg-background/70">
        <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-foreground">
          Mermaid source
        </summary>
        <pre className="overflow-x-auto border-t border-border p-4 text-xs leading-6 text-muted">
          <code className="language-mermaid">{diagram.code}</code>
        </pre>
      </details>
    </div>
  );
}
