"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type DashboardErrorProps = {
  error: Error;
  reset: () => void;
};

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <Section>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2">
              <AlertTriangle aria-hidden="true" className="size-5 text-primary" />
              Dashboard unavailable
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-6 text-muted">
              {error.message || "The dashboard failed to load."}
            </p>
            <Button onClick={reset}>Try again</Button>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
