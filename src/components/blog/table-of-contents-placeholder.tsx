import { List } from "lucide-react";

type TableOfContentsPlaceholderProps = {
  items: string[];
};

export function TableOfContentsPlaceholder({ items }: TableOfContentsPlaceholderProps) {
  return (
    <aside className="rounded-lg border border-dashed border-border bg-surface/50 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-blue-300">
          <List aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Table of contents placeholder
          </h2>
          <p className="text-sm leading-6 text-muted">
            Planned anchor navigation for the article body.
          </p>
        </div>
      </div>

      <ol className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li className="flex items-start gap-3 text-sm text-muted" key={item}>
            <span className="mt-0.5 font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}
