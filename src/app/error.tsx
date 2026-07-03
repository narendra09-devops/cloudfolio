"use client";

import { AlertTriangle, BriefcaseBusiness, Home, Mail, RotateCcw } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { H1, Paragraph } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

type RootErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function RootError({ error, reset }: RootErrorProps) {
  return (
    <main>
      <Section className="min-h-[calc(100vh-4rem)] border-b border-border bg-[radial-gradient(circle_at_16%_12%,rgb(var(--color-primary)/0.16),transparent_24rem),linear-gradient(135deg,rgb(var(--color-secondary)/0.10),transparent_42%)]">
        <Container>
          <Card className="mx-auto max-w-3xl overflow-hidden border-primary/20 shadow-xl shadow-primary/10">
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <CardContent className="p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <AlertTriangle aria-hidden="true" className="size-4" />
                Portfolio temporarily unavailable
              </div>
              <H1 className="mt-5">CloudFolio hit an application error.</H1>
              <Paragraph className="mt-5 max-w-2xl text-lg leading-8">
                Try reloading the page. If the issue persists, the recruiter hub and contact routes
                remain the fastest way to review profile details and reach Narendra.
              </Paragraph>
              <p className="mt-4 rounded-md border border-border bg-background/70 p-3 text-sm leading-6 text-muted">
                {error.message || "An unexpected application error occurred."}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Button onClick={reset} size="lg">
                  <RotateCcw aria-hidden="true" className="size-4" />
                  Try Again
                </Button>
                <ButtonLink href="/" size="lg" variant="outline">
                  <Home aria-hidden="true" className="size-4" />
                  Back Home
                </ButtonLink>
                <ButtonLink href="/recruiter" size="lg" variant="outline">
                  <BriefcaseBusiness aria-hidden="true" className="size-4" />
                  Recruiter Hub
                </ButtonLink>
                <ButtonLink href="/contact" size="lg" variant="ghost">
                  <Mail aria-hidden="true" className="size-4" />
                  Contact
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
