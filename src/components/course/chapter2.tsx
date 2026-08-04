import {
  creditingMethods,
  fiaScenarios,
  fiaStages,
  guarantyStates,
  productCompare,
} from "@/data/course";
import { ScenarioCompareChart } from "@/components/course/charts";
import {
  BackHome,
  Callout,
  LessonComplete,
  ScriptCard,
  Section,
  StatCard,
} from "@/components/course/shell";
import { Badge } from "@/components/ui/badge";

export function Chapter2Content() {
  return (
    <div>
      <BackHome />
      <div className="mb-8">
        <Badge variant="success" className="mb-3">
          Chapter 2 · Metric: 0% contractual market-loss floor
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Zero Is Your Hero
        </h1>
        <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
          Product architecture for HNW vs everyday families. FIA math, crediting
          methods, IRC §72 taxation, and state guaranty protections.
        </p>
      </div>

      <Section
        id="hnw-vs-everyday"
        eyebrow="Lesson 2.1"
        title="HNW Optimization vs Everyday Protection"
        action={<LessonComplete lessonKey="ch2:hnw-vs-everyday" />}
      >
        <Callout title="Alignment rule">
          Same insurance wrapper. Different economic job. HNW uses PPVA for tax
          alpha on alternatives. Middle-class uses Fixed / MYGA / FIA to replace
          the vanished pension and kill sequence-of-returns risk.
        </Callout>
        <div className="mt-5 overflow-x-auto rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <th className="px-4 py-3 font-medium text-[var(--color-muted)]">
                  Characteristic
                </th>
                <th className="px-4 py-3 font-medium text-[var(--color-muted)]">
                  HNW (PPVA)
                </th>
                <th className="px-4 py-3 font-medium text-[var(--color-muted)]">
                  Everyday (MYGA / FIA)
                </th>
              </tr>
            </thead>
            <tbody>
              {productCompare.map((row) => (
                <tr
                  key={row.trait}
                  className="border-b border-[var(--color-border)] last:border-0"
                >
                  <td className="px-4 py-3 font-medium">{row.trait}</td>
                  <td className="px-4 py-3 text-[var(--color-muted)]">{row.hnw}</td>
                  <td className="px-4 py-3 text-[var(--color-muted)]">
                    {row.everyday}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="panel rounded-[var(--radius-xl)] p-5">
            <h3 className="text-sm font-semibold">PPVA in one breath</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Unregistered structure for accredited / qualified purchasers. Capital
              into Insurance Dedicated Funds or SMAs. Tax-deferred growth and
              rebalancing among alternatives without annual gain recognition.
              Multi-decade tax alpha can compound into millions more after-tax vs
              a taxable account. Cash surrender values protected from creditors in
              26 states.
            </p>
          </div>
          <div className="panel rounded-[var(--radius-xl)] p-5">
            <h3 className="text-sm font-semibold">Retail Fixed / MYGA / FIA</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Answer to pension collapse. Households now own investment risk,
              inflation risk, and longevity risk via 401(k)/IRA. MYGAs credit a
              fixed rate for a term (CD-like, general account). FIAs link upside to
              an index with a contractual 0% floor — no market-driven principal loss.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="fia-engine"
        eyebrow="Lesson 2.2"
        title="FIA Engine: Bonds + Option Budget"
        action={<LessonComplete lessonKey="ch2:fia-engine" />}
      >
        <p className="mb-4 max-w-2xl text-sm text-[var(--color-muted)]">
          Carriers do not dump premium into the S&P. Roughly 90–95% goes into
          high-grade fixed income to back principal. Excess yield is the option
          budget used to buy OTC call options on benchmarks. Credited interest
          follows option payoff, limited by Cap (C), Participation (P), and Spread (S).
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {fiaStages.map((s) => (
            <div
              key={s.stage}
              className="panel rounded-[var(--radius-lg)] p-4 sm:p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-[var(--color-success-soft)] text-xs font-semibold text-[var(--color-success)] tabular">
                  {s.stage}
                </span>
                <h3 className="text-sm font-semibold">{s.name}</h3>
              </div>
              <code className="mb-2 block rounded-[var(--radius-sm)] bg-[var(--color-bg)] px-2 py-1.5 font-mono text-xs text-[var(--color-accent)]">
                {s.formula}
              </code>
              <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
        <Callout title="Unified formula" tone="success">
          <code className="font-mono text-[var(--color-fg)]">
            R_credited = min(C, max(0, R_index × P − S))
          </code>
          <p className="mt-2">
            Example contract: P = 80%, S = 2%, C = 6%, Floor = 0%.
          </p>
        </Callout>
        <div className="panel mt-5 rounded-[var(--radius-xl)] p-4 sm:p-6">
          <h3 className="mb-3 text-sm font-semibold">
            Scenario lab: index vs credited
          </h3>
          <ScenarioCompareChart />
          <ul className="mt-4 space-y-2">
            {fiaScenarios.map((sc) => (
              <li
                key={sc.name}
                className="rounded-[var(--radius-md)] border border-[var(--color-border)] px-3 py-2 text-xs text-[var(--color-muted)]"
              >
                <span className="font-semibold text-[var(--color-fg)]">
                  {sc.name}:
                </span>{" "}
                Index {sc.index > 0 ? "+" : ""}
                {sc.index}% → Credited {sc.credited}% — {sc.note}
              </li>
            ))}
          </ul>
        </div>
        <ScriptCard
          title="Zero is your hero"
          body={`When the market is up, you can participate — subject to the contract's cap or participation rate. When the market is down hard, your account is not down hard with it. The floor is zero. That is the hero of the contract: no market-driven principal loss, previously locked gains stay locked.`}
        />
      </Section>

      <Section
        id="crediting"
        eyebrow="Lesson 2.3"
        title="Crediting Methods"
        action={<LessonComplete lessonKey="ch2:crediting" />}
      >
        <div className="grid gap-3">
          {creditingMethods.map((m) => (
            <div key={m.name} className="panel rounded-[var(--radius-lg)] p-4 sm:p-5">
              <h3 className="text-sm font-semibold">{m.name}</h3>
              <dl className="mt-3 grid gap-2 text-xs sm:grid-cols-3">
                <div>
                  <dt className="text-[var(--color-subtle)]">Best suited</dt>
                  <dd className="mt-0.5 text-[var(--color-muted)]">{m.bestFor}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-subtle)]">Key risk</dt>
                  <dd className="mt-0.5 text-[var(--color-muted)]">{m.risk}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-subtle)]">Vulnerability</dt>
                  <dd className="mt-0.5 text-[var(--color-muted)]">
                    {m.vulnerability}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="tax72"
        eyebrow="Lesson 2.4"
        title="Taxation — IRC Section 72"
        action={<LessonComplete lessonKey="ch2:tax72" />}
      >
        <div className="grid gap-3 lg:grid-cols-3">
          <StatCard
            label="Non-qualified accumulation"
            value="Tax-deferred"
            hint="No annual 1099-INT / 1099-DIV on inside build-up"
          />
          <StatCard
            label="Partial withdrawals"
            value="LIFO"
            hint="Earnings first as ordinary income; basis last (§72(e))"
          />
          <StatCard
            label="Before 59½"
            value="+10%"
            hint="Penalty on taxable earnings portion (§72(q)), with exceptions"
          />
        </div>
        <Callout title="Annuitized payouts — exclusion ratio" tone="default">
          Under §72(b), each payment splits into non-taxable return of premium and
          taxable earnings via the exclusion ratio: non-taxable portion =
          investment in the contract ÷ expected return. After basis is recovered
          over actuarial life expectancy, further payments are fully taxable as
          ordinary income.
        </Callout>
      </Section>

      <Section
        id="guaranty"
        eyebrow="Lesson 2.5"
        title="Insolvency Safeguards — State Guaranty / NOLHGA"
        action={<LessonComplete lessonKey="ch2:guaranty" />}
      >
        <p className="mb-4 max-w-2xl text-sm text-[var(--color-muted)]">
          Not FDIC. State-regulated. On liquidation with insolvency, the guaranty
          association in the owner's state of residence covers benefits up to
          statutory limits; NOLHGA coordinates multi-state cases. Excess becomes a
          class-three estate claim.
        </p>
        <div className="overflow-x-auto rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <th className="px-4 py-3 font-medium text-[var(--color-muted)]">
                  Jurisdiction
                </th>
                <th className="px-4 py-3 font-medium text-[var(--color-muted)]">
                  Limit
                </th>
                <th className="px-4 py-3 font-medium text-[var(--color-muted)]">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {guarantyStates.map((g) => (
                <tr
                  key={g.state}
                  className="border-b border-[var(--color-border)] last:border-0"
                >
                  <td className="px-4 py-3 font-medium">{g.state}</td>
                  <td className="px-4 py-3 tabular text-[var(--color-accent)]">
                    {g.limit}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)]">{g.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ScriptCard
          title="Carrier strength + guaranty"
          body={`Insurance contracts are backed first by the carrier's claims-paying ability, then by state guaranty associations if a company is liquidated. Most states protect around $250,000 present value of annuity benefits per owner per company — higher in places like New York, New Jersey, and Washington. When needed, we structure across carriers so coverage maps cleanly.`}
        />
      </Section>
    </div>
  );
}
