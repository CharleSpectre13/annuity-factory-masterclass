import { createFileRoute } from "@tanstack/react-router";
import {
  keyFormulas,
  salesSteps,
  teamObjections,
  DEMOGRAPHICS,
  annuityPuzzle,
} from "@/data/course";
import {
  BackHome,
  CourseShell,
  ScriptCard,
  Section,
  StatCard,
} from "@/components/course/shell";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/playbook")({
  component: PlaybookPage,
});

function PlaybookPage() {
  return (
    <CourseShell>
      <BackHome />
      <div className="mb-8">
        <Badge variant="accent" className="mb-3">
          One-page team deployment
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Sales Team Playbook
        </h1>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
          Print-ready scripting system. Memorize numbers. Run the five steps.
          Handle objections without pressure theater.
        </p>
      </div>

      <Section title="Numbers to open with">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Median owner income" value={`$${DEMOGRAPHICS.medianIncome.toLocaleString()}`} />
          <StatCard label="Owners under $100k" value={`${DEMOGRAPHICS.under100k}%`} />
          <StatCard label="Principal safety critical" value="89%" />
          <StatCard
            label="Willing vs buy"
            value={`${annuityPuzzle.willingToBuy}% → ~${annuityPuzzle.actualBuyers}%`}
          />
        </div>
      </Section>

      <Section title="5-step sequence (action first)">
        <ol className="space-y-4">
          {salesSteps.map((s) => (
            <li key={s.id} className="panel rounded-[var(--radius-xl)] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-accent)] tabular">
                  {s.id}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-xs text-[var(--color-subtle)]">
                    {s.principle}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">
                    <span className="font-medium text-[var(--color-fg)]">Do: </span>
                    {s.action}
                  </p>
                  <code className="mt-2 block font-mono text-xs text-[var(--color-accent)]">
                    {s.formula}
                  </code>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Word-for-word scripts">
        <div className="grid gap-4">
          {salesSteps.map((s) => (
            <ScriptCard key={s.id} step={s.id} title={s.title} body={s.script} />
          ))}
        </div>
      </Section>

      <Section title="Objection stack">
        <div className="grid gap-3">
          {teamObjections.map((o) => (
            <div key={o.objection} className="panel rounded-[var(--radius-lg)] p-4">
              <p className="text-sm font-semibold">&ldquo;{o.objection}&rdquo;</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{o.response}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Formulas card">
        <div className="grid gap-2">
          {keyFormulas.map((f) => (
            <div
              key={f.name}
              className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
            >
              <p className="text-xs text-[var(--color-subtle)]">{f.name}</p>
              <code className="font-mono text-sm text-[var(--color-accent)]">
                {f.expression}
              </code>
            </div>
          ))}
        </div>
      </Section>
    </CourseShell>
  );
}
