import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function ActivityLoading() {
  return (
    <Section>
      <Container>
        <Card>
          <CardHeader>
            <div className="h-6 w-40 rounded-md bg-border/60" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div className="rounded-md border border-border bg-background/50 p-4" key={index}>
                <div className="h-4 w-36 rounded-md bg-border/50" />
                <div className="mt-4 h-5 w-2/3 rounded-md bg-border/60" />
                <div className="mt-3 h-4 w-full rounded-md bg-border/50" />
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
