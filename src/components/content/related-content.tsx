import type { ReactNode } from "react";
import { H2, Paragraph } from "@/components/ui/heading";

type RelatedContentProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function RelatedContent({ title, description, children }: RelatedContentProps) {
  return (
    <section>
      <div className="mb-8 max-w-3xl">
        <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-primary">
          Related Content
        </p>
        <H2 className="mt-3">{title}</H2>
        <Paragraph className="mt-4">{description}</Paragraph>
      </div>
      {children}
    </section>
  );
}
