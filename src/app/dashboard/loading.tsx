import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <div className="h-6 w-40 rounded-md bg-border/60" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-4 w-full rounded-md bg-border/50" />
        <div className="h-4 w-4/5 rounded-md bg-border/50" />
        <div className="h-24 rounded-md bg-background" />
      </CardContent>
    </Card>
  );
}

export default function DashboardLoading() {
  return (
    <Section>
      <Container className="space-y-6">
        <div className="h-10 w-64 rounded-md bg-border/60" />
        <div className="grid gap-6 lg:grid-cols-2">
          <SkeletonCard />
          <SkeletonCard />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </Container>
    </Section>
  );
}
