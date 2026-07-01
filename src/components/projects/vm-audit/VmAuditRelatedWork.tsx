import { ArrowRight, Cloud, Database, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { VmAuditGlassCard } from "@/components/projects/vm-audit/VmAuditGlassCard";

export function VmAuditRelatedWork({ projects }: { projects: Project[] }) {
  const icons = [ShieldCheck, Cloud, Database];
  const accents = ["purple", "orange", "cyan"] as const;
  const toneClass = [
    "text-purple-400 bg-purple-500/12 border-purple-400/25",
    "text-orange-400 bg-orange-500/12 border-orange-400/25",
    "text-cyan-400 bg-cyan-500/12 border-cyan-400/25",
  ];
  return (
    <section className="px-4 py-7 sm:px-6 md:py-8 lg:px-8 xl:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Related Work
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Adjacent infrastructure case studies.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => {
            const Icon = icons[index % icons.length];
            const accent = accents[index % accents.length];
            return (
              <VmAuditGlassCard accent={accent} className="p-5" interactive key={project.slug}>
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl border ${toneClass[index % toneClass.length]}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-border bg-background/55 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {project.metrics[0]?.value ?? "SRE"}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-6 text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span
                      className="rounded-full border border-border bg-background/55 px-2.5 py-1 text-[0.68rem] font-semibold text-muted-foreground"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <Link
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
                  href={`/projects/${project.slug}`}
                >
                  Read case study
                  <ArrowRight className="size-4" />
                </Link>
              </VmAuditGlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
