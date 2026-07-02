import { List } from "lucide-react";

type TableOfContentsPlaceholderProps = {
  items: string[];
};

export function TableOfContentsPlaceholder({ items }: TableOfContentsPlaceholderProps) {
  return (
    <aside className="rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-5 shadow-lg shadow-primary/10 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
          <List aria-hidden="true" className="size-5" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Article sections
          </h2>
          <p className="text-sm leading-6 text-muted">A quick scan of the article structure.</p>
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
