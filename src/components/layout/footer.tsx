import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Resume: FileText,
} as const;

const socialStyles = {
  GitHub:
    "border-purple-400/25 bg-purple-500/10 text-purple-500 hover:border-purple-400/60 hover:bg-purple-500/15",
  LinkedIn:
    "border-blue-400/25 bg-blue-500/10 text-blue-500 hover:border-blue-400/60 hover:bg-blue-500/15",
  Email:
    "border-emerald-400/25 bg-emerald-500/10 text-emerald-500 hover:border-emerald-400/60 hover:bg-emerald-500/15",
  Resume:
    "border-orange-400/25 bg-orange-500/10 text-orange-500 hover:border-orange-400/60 hover:bg-orange-500/15",
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background" aria-label="Footer">
      <Container className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-foreground">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted">
              Cloud infrastructure, SRE, and automation portfolio.
            </p>
          </div>

          <nav aria-label="Social links" className="flex flex-wrap gap-3">
            {footerNavigation.map((item) => {
              const Icon = socialIcons[item.label];
              const isExternal = item.href.startsWith("http");
              return (
                <Link
                  aria-label={item.label}
                  className={`inline-flex size-10 items-center justify-center rounded-md border transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${socialStyles[item.label]}`}
                  href={item.href}
                  key={item.label}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </nav>
        </div>

        <Divider className="my-6" />

        <p className="text-sm text-muted">
          Copyright &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
