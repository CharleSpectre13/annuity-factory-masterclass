import {
  flipThesis,
  keyFormulas,
  salesSteps,
  strategicConclusions,
  teamObjections,
} from "@/data/course";
import {
  BackHome,
  Callout,
  LessonComplete,
  ScriptCard,
  Section,
  StatCard,
} from "@/components/course/shell";
import { Badge } from "@/components/ui/badge";

export function Chapter3Content() {
  return (
    <div>
      <BackHome />
      <div className="mb-8">
        <Badge variant="warn" className="mb-3">
          Chapter 3 · Metric: 50% willing → ~12% buy
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Close the Vulnerability Gap
        </h1>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
          Ethical high-impact sales architecture. Flip the old up-market hustle:
          sell real generational protection to middle and modest-income households —
          including Medicare and Medicaid populations.
        </p>
      </div>

      <Section
        id="flip"
        eyebrow="Lesson 3.0"
        title="The Flip: Against the Grain"
        action={<LessonComplete lessonKey="ch3:flip" />}
      >
        <Callout title="Doctrine" tone="warn">
          Classic high-pressure finance sold overpriced complexity to status-seeking
          wealth. You invert it: sell clarity and durable income to the people the
          industry under-serves — middle class, fixed-income retirees, and dual-eligible
          households who need a floor more than a story.
        </Callout>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="panel rounded-[var(--radius-xl)] p-5">
            <h3 className="text-sm font-semibold text-[var(--color-danger)]">
              {flipThesis.oldModel.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {flipThesis.oldModel.points.map((p) => (
                <li
                  key={p}
                  className="border-l-2 border-[var(--color-danger)] pl-3 text-sm text-[var(--color-muted)]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel rounded-[var(--radius-xl)] p-5">
            <h3 className="text-sm font-semibold text-[var(--color-success)]">
              {flipThesis.newModel.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {flipThesis.newModel.points.map((p) => (
                <li
                  key={p}
                  className="border-l-2 border-[var(--color-success)] pl-3 text-sm text-[var(--color-muted)]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {flipThesis.whyItWorks.map((w) => (
            <div
              key={w}
              className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]"
            >
              {w}
            </div>
          ))}
        </div>
        <ScriptCard
          title="Against-the-grain opener (Medicare / modest income)"
          body={`I'm not here to sell you something flashy. Most of the industry chases big accounts and complicated products. My job is the opposite: help households on fixed income — Medicare, Medicaid, Social Security — build a personal pension floor so the grocery bill and the pharmacy never depend on the stock market. We only use the dollars that close that gap. Everything else stays flexible for you and your family.`}
        />
      </Section>

      {salesSteps.map((step) => (
        <Section
          key={step.id}
          id={`step${step.id}`}
          eyebrow={`Step ${step.id} of 5`}
          title={step.title}
          action={
            <LessonComplete
              lessonKey={`ch3:step${step.id}`}
              label={`Mark step ${step.id} complete`}
            />
          }
        >
          <div className="mb-4 grid gap-3 sm:grid-cols-3">
            <StatCard label="Principle" value={step.principle} />
            <div className="panel rounded-[var(--radius-lg)] p-4 sm:col-span-2 sm:p-5">
              <p className="text-xs text-[var(--color-muted)]">Formula / rule</p>
              <code className="mt-1 block font-mono text-sm text-[var(--color-accent)]">
                {step.formula}
              </code>
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                <span className="font-medium text-[var(--color-fg)]">Action: </span>
                {step.action}
              </p>
            </div>
          </div>
          <ScriptCard step={step.id} title={step.title} body={step.script} />
        </Section>
      ))}

      <Section
        id="scripts"
        eyebrow="Lesson 3.6"
        title="Objection Handling & Formulas"
        action={<LessonComplete lessonKey="ch3:scripts" />}
      >
        <div className="grid gap-3">
          {teamObjections.map((o) => (
            <div key={o.objection} className="panel rounded-[var(--radius-lg)] p-4 sm:p-5">
              <p className="text-xs font-medium tracking-wide text-[var(--color-warn)] uppercase">
                Objection
              </p>
              <p className="mt-1 text-sm font-semibold">&ldquo;{o.objection}&rdquo;</p>
              <p className="mt-3 text-xs font-medium tracking-wide text-[var(--color-success)] uppercase">
                Response
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {o.response}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 mb-3 text-sm font-semibold">Master formulas (memorize)</h3>
        <div className="grid gap-2">
          {keyFormulas.map((f) => (
            <div
              key={f.name}
              className="flex flex-col gap-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium">{f.name}</span>
              <code className="font-mono text-xs text-[var(--color-accent)]">
                {f.expression}
              </code>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Strategic close" title="What the firm does next">
        <div className="grid gap-3 sm:grid-cols-2">
          {strategicConclusions.map((c) => (
            <div key={c.title} className="panel rounded-[var(--radius-lg)] p-4 sm:p-5">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <ScriptCard
            title="Full dual-choice close (word-for-word)"
            body={`We measured your Vulnerability Gap. Two paths:

Option A — Do nothing. Leave the nest egg fully exposed to sequence-of-returns risk and longevity risk.

Option B — Act. Fund only the personal pension floor with a contractual 0% market-loss floor. Secure lifetime income structure. Keep remaining assets free to grow and stay liquid for family needs.

Protect principal. Take market fear off the table. Complete the application today.`}
          />
        </div>
      </Section>
    </div>
  );
}
