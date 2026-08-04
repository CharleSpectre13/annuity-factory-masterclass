import {
  DEMOGRAPHICS,
  annuityPuzzle,
  fundingSources,
  motivations,
} from "@/data/course";
import {
  AnnuityPuzzleChart,
  FundingSourcesChart,
  IncomeTierChart,
  MotivationsChart,
} from "@/components/course/charts";
import {
  BackHome,
  Callout,
  LessonComplete,
  ScriptCard,
  Section,
  StatCard,
} from "@/components/course/shell";
import { Badge } from "@/components/ui/badge";

export function Chapter1Content() {
  return (
    <div>
      <BackHome />
      <div className="mb-8">
        <Badge variant="accent" className="mb-3">
          Chapter 1 · Metric: $79,000 median income
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          The $79K Reality
        </h1>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
          Macroeconomic landscape and demographic realities of annuity ownership.
          Debunk the HNW myth. Own the middle-class market with data.
        </p>
      </div>

      <Section
        id="demographics"
        eyebrow="Lesson 1.1"
        title="Debunk the High-Net-Worth Myth"
        action={<LessonComplete lessonKey="ch1:demographics" />}
      >
        <Callout title="Teaching point" tone="warn">
          A persistent misconception: private annuities are almost exclusively for
          the wealthy seeking tax-sheltered growth. Gallup / Committee of Annuity
          Insurers data says otherwise — the majority of owners are middle-class.
        </Callout>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Median household income"
            value={`$${(DEMOGRAPHICS.medianIncome / 1000).toFixed(0)}k`}
            hint={`Down from $${(DEMOGRAPHICS.medianIncome2001 / 1000).toFixed(0)}k in 2001`}
          />
          <StatCard
            label="Owners under $100k"
            value={`${DEMOGRAPHICS.under100k}%`}
            hint="Primary middle-class market share"
          />
          <StatCard
            label="Owners under $50k"
            value={`${DEMOGRAPHICS.under50k}%`}
            hint="Low-to-moderate income households"
          />
          <StatCard
            label="Owners under $75k"
            value={`${DEMOGRAPHICS.under75k}%`}
            hint="Nearly half of all individual owners"
          />
        </div>

        <div className="panel mt-5 rounded-[var(--radius-xl)] p-4 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold">Owner income distribution</h3>
            <span className="text-xs text-[var(--color-subtle)]">
              Source: Gallup / Committee of Annuity Insurers
            </span>
          </div>
          <IncomeTierChart />
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            Action: Open every team huddle with this chart. Your market is not
            the yacht club — it is the household making $79k.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            label="Median first purchase age"
            value={`${DEMOGRAPHICS.medianFirstPurchaseAge}`}
            hint={`${DEMOGRAPHICS.purchaseBefore65}% purchase before age 65`}
          />
          <StatCard
            label="Median current age"
            value={`${DEMOGRAPHICS.medianCurrentAge}`}
            hint={`Mean age ${DEMOGRAPHICS.meanCurrentAge}`}
          />
          <StatCard
            label="Retired owners"
            value={`${DEMOGRAPHICS.retiredPct}%`}
            hint={`+${DEMOGRAPHICS.retiredDeltaFrom2013} pts since 2013 · ${DEMOGRAPHICS.femalePct}% female`}
          />
        </div>
      </Section>

      <Section
        id="funding"
        eyebrow="Lesson 1.2"
        title="How Middle-Class Buyers Fund Contracts"
        action={<LessonComplete lessonKey="ch1:funding" />}
      >
        <p className="mb-4 max-w-2xl text-sm text-[var(--color-muted)]">
          Funding mechanisms prove annuities are risk-mitigation tools, not
          speculative toys. Clients use savings, paychecks, inheritances — real
          money from real lives.
        </p>
        <div className="panel rounded-[var(--radius-xl)] p-4 sm:p-6">
          <h3 className="mb-3 text-sm font-semibold">Funding sources (market share)</h3>
          <FundingSourcesChart />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {fundingSources.map((f) => (
            <div
              key={f.source}
              className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
            >
              <span className="text-sm">{f.source}</span>
              <span className="text-sm font-semibold tabular text-[var(--color-accent)]">
                {f.pct}%
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="motivations"
        eyebrow="Lesson 1.3"
        title="Why They Buy: Security, Not Speculation"
        action={<LessonComplete lessonKey="ch1:motivations" />}
      >
        <div className="panel rounded-[var(--radius-xl)] p-4 sm:p-6">
          <h3 className="mb-3 text-sm font-semibold">Purchase motivations</h3>
          <MotivationsChart />
        </div>
        <div className="mt-4 grid gap-2">
          {motivations.map((m) => (
            <div
              key={m.motive}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
            >
              <span className="w-12 shrink-0 text-lg font-semibold tabular text-[var(--color-chart-2)]">
                {m.pct}%
              </span>
              <span className="text-sm text-[var(--color-muted)]">{m.motive}</span>
            </div>
          ))}
        </div>
        <ScriptCard
          title="Motivation mirror"
          body={`Most people I sit with aren't looking for the next hot stock tip. They want peace of mind. National data shows about 88% of annuity owners buy for peace of mind in retirement, and 89% say principal safety is critical. Let's talk about locking a floor for your household — not chasing performance.`}
        />
      </Section>

      <Section
        id="puzzle"
        eyebrow="Lesson 1.4"
        title="The Annuity Puzzle: 50% Willing, ~12% Buy"
        action={<LessonComplete lessonKey="ch1:puzzle" />}
      >
        <Callout title="Deep analysis" tone="default">
          Boston College CRR research: ~50% of near-retirees with $100k+ investable
          assets are willing to buy at market rates. Only 12–13.5% execute. Classic
          hypotheses (liquidity, bequest) fail under behavioral evidence. The real
          barrier is structural friction: complexity, opaque channels, and advisor
          education failure for working families.
        </Callout>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="panel rounded-[var(--radius-xl)] p-4 sm:p-6">
            <h3 className="mb-1 text-sm font-semibold">Intention vs execution</h3>
            <p className="mb-3 text-xs text-[var(--color-subtle)]">
              Willing {annuityPuzzle.willingToBuy}% · Actual ~{annuityPuzzle.actualBuyers}%
            </p>
            <AnnuityPuzzleChart />
          </div>
          <div className="flex flex-col gap-3">
            <StatCard
              label="Rate lifetime income highly valuable"
              value={`${annuityPuzzle.valueLifetimeIncome}%`}
            />
            <StatCard
              label="Use as cushion vs outliving life expectancy"
              value={`${annuityPuzzle.cushionAgainstLongevity}%`}
            />
            <Callout title="Your job as the distributor" tone="success">
              {annuityPuzzle.barrier} You are the fix: clear education + ethical close.
            </Callout>
          </div>
        </div>
        <div className="mt-4">
          <LessonComplete lessonKey="ch1:charts" label="Mark chart lab complete" />
        </div>
      </Section>

      <Section eyebrow="Chapter 1 checkpoint" title="What you can say tomorrow">
        <div className="grid gap-3">
          <ScriptCard
            title="Opening frame"
            body={`There's a myth that annuities are only for the wealthy. The data says the median owner household earns about $79,000 a year, and 70% of owners earn under $100,000. You're not 'too small' for this conversation — you are the core market.`}
          />
          <ScriptCard
            title="Medicare / modest-income frame"
            body={`Whether you're on Medicare, managing a fixed income, or protecting a modest nest egg, the job is the same: make sure required bills never depend on a good stock market year. We measure that gap first — then we only use the capital needed to close it.`}
          />
        </div>
      </Section>
    </div>
  );
}
