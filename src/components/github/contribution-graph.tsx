import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const weeks = Array.from({ length: 28 }, (_, week) => week);
const days = Array.from({ length: 7 }, (_, day) => day);

function getLevel(week: number, day: number) {
  return (week * 3 + day * 5) % 5;
}

const levels = [
  "bg-background",
  "bg-primary/20",
  "bg-primary/35",
  "bg-secondary/50",
  "bg-success/70",
];

export function ContributionGraph() {
  return (
    <Card className="min-w-0 overflow-hidden">
      <CardHeader>
        <CardTitle>Contribution graph</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="min-w-0 max-w-full overflow-x-auto">
          <div
            aria-label="Contribution activity visualization"
            className="grid min-w-[560px] grid-flow-col grid-rows-7 gap-1"
            role="img"
          >
            {weeks.map((week) =>
              days.map((day) => (
                <span
                  aria-hidden="true"
                  className={`size-3 rounded-sm border border-border/60 ${levels[getLevel(week, day)]}`}
                  key={`${week}-${day}`}
                />
              )),
            )}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 text-xs text-muted">
          <span>Contribution activity</span>
          <span>Less to more</span>
        </div>
      </CardContent>
    </Card>
  );
}
