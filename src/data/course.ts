/** Annuity Factory Masterclass — full curriculum derived from source analysis */

export const COURSE_META = {
  title: "Annuity Factory Masterclass",
  subtitle: "Generational Wealth Sales for Middle America",
  thesis:
    "Flip the script: stop selling complexity up-market. Sell guaranteed income, principal safety, and family protection to the households that actually buy — middle and modest-income families, including Medicare and Medicaid populations.",
  tagline: "Against the grain. For the majority.",
};

export const CHAPTERS = [
  {
    id: "ch1",
    number: 1,
    slug: "79k-reality",
    metric: "$79,000",
    metricLabel: "Median household income of annuity owners",
    title: "The $79K Reality",
    shortTitle: "$79K Reality",
    subtitle: "Demographics, motivations, and the Annuity Puzzle",
    duration: "35 min",
    color: "var(--color-chart-1)",
    outcome:
      "You can open any appointment by naming the real buyer — not the myth — and diagnose the intention–execution gap.",
    lessons: ["demographics", "funding", "motivations", "puzzle", "charts"],
  },
  {
    id: "ch2",
    number: 2,
    slug: "zero-floor",
    metric: "0%",
    metricLabel: "Contractual market-loss floor on FIAs",
    title: "Zero Is Your Hero",
    shortTitle: "Zero Floor",
    subtitle: "Product architecture, tax rules, and state protection",
    duration: "40 min",
    color: "var(--color-chart-2)",
    outcome:
      "You can explain FIA math, LIFO vs exclusion ratio, and guaranty limits in plain language a client trusts.",
    lessons: ["hnw-vs-everyday", "fia-engine", "crediting", "tax72", "guaranty"],
  },
  {
    id: "ch3",
    number: 3,
    slug: "vulnerability-gap",
    metric: "50% → 12%",
    metricLabel: "Willing to buy vs actually buy (the gap you close)",
    title: "Close the Vulnerability Gap",
    shortTitle: "Sales System",
    subtitle: "Ethical 5-step close for middle-class & dual-eligible households",
    duration: "45 min",
    color: "var(--color-chart-3)",
    outcome:
      "You can run a full consultative close: measure the gap, reframe the product, prove the floor, protect legacy, and execute.",
    lessons: ["flip", "step1", "step2", "step3", "step4", "step5", "scripts"],
  },
] as const;

export type ChapterId = (typeof CHAPTERS)[number]["id"];
export type ChapterSlug = (typeof CHAPTERS)[number]["slug"];

/* ─── Chapter 1 data ─────────────────────────────────────────────── */

export const DEMOGRAPHICS = {
  medianIncome: 79000,
  medianIncome2001: 96000,
  under100k: 70,
  under75k: 46,
  under50k: 25,
  medianFirstPurchaseAge: 51,
  purchaseBefore65: 84,
  medianCurrentAge: 75,
  meanCurrentAge: 74,
  femalePct: 51,
  malePct: 49,
  retiredPct: 78,
  retiredDeltaFrom2013: 13,
};

export const incomeTier = [
  { tier: "Under $50k", pct: 25, fill: "var(--color-chart-5)" },
  { tier: "$50k–$75k", pct: 21, fill: "var(--color-chart-3)" },
  { tier: "$75k–$100k", pct: 24, fill: "var(--color-chart-1)" },
  { tier: "$100k+", pct: 30, fill: "var(--color-chart-2)" },
];

export const fundingSources = [
  { source: "General Savings", pct: 54 },
  { source: "Current Income", pct: 40 },
  { source: "Inheritance", pct: 35 },
  { source: "RE / Business Sale", pct: 17 },
  { source: "Employer Bonus", pct: 10 },
];

export const motivations = [
  { motive: "Peace of mind in retirement", pct: 88 },
  { motive: "Absolute safety of principal", pct: 89 },
  { motive: "Guaranteed retirement income", pct: 81 },
  { motive: "Avoid burdening children", pct: 79 },
  { motive: "Protect vs market/inflation", pct: 74 },
];

export const annuityPuzzle = {
  willingToBuy: 50,
  actualBuyers: 13,
  valueLifetimeIncome: 76,
  cushionAgainstLongevity: 84,
  barrier:
    "Product complexity, opaque distribution, and advisor failure to educate working-class households — not liquidity desire or bequest motive.",
};

/* ─── Chapter 2 data ─────────────────────────────────────────────── */

export const productCompare = [
  {
    trait: "Primary objective",
    hnw: "Tax alpha, asset protection, tax-free rebalancing",
    everyday: "Income floor, longevity hedge, principal safety",
  },
  {
    trait: "Underlying options",
    hnw: "Alternatives, hedge funds, PE, private credit",
    everyday: "Carrier general account, indexed options (S&P etc.)",
  },
  {
    trait: "Fee structure",
    hnw: "Institutional, unbundled low M&E",
    everyday: "Bundled pricing, caps/spreads, optional riders",
  },
  {
    trait: "Return floor",
    hnw: "No underlying downside principal guarantee",
    everyday: "0% absolute floor; fixed yield options",
  },
  {
    trait: "Distribution",
    hnw: "Private banks, multi-family offices, RIAs",
    everyday: "Independent agents, broker-dealers, banks",
  },
  {
    trait: "Creditor protection",
    hnw: "Statutory protection in 26 states + trusts",
    everyday: "State statutory protections; execution exemptions",
  },
];

export const fiaStages = [
  {
    stage: 1,
    name: "Participation Rate",
    formula: "R_part = R_index × P",
    detail: "Gross index return multiplied by participation rate.",
  },
  {
    stage: 2,
    name: "Spread Deduction",
    formula: "R_spread = R_part − S",
    detail: "Contractual spread/margin subtracted from adjusted return.",
  },
  {
    stage: 3,
    name: "Non-Negative Floor",
    formula: "R_floored = max(0, R_spread)",
    detail: "0% floor kills market-driven losses. Zero is your hero.",
  },
  {
    stage: 4,
    name: "Cap Ceiling",
    formula: "R_credited = min(C, R_floored)",
    detail: "Final credit cannot exceed the contractual cap.",
  },
];

export const fiaScenarios = [
  {
    name: "Moderate Bull",
    index: 10,
    credited: 6,
    note: "P 80% → 8%, −2% spread → 6%, cap 6% → 6%",
  },
  {
    name: "Subdued Growth",
    index: 4,
    credited: 1.2,
    note: "P 80% → 3.2%, −2% spread → 1.2%, under cap → 1.2%",
  },
  {
    name: "Severe Crash",
    index: -15,
    credited: 0,
    note: "Negative path floored at 0%. Principal fully preserved.",
  },
];

export const creditingMethods = [
  {
    name: "Annual Point-to-Point",
    bestFor: "Steady annual bull expansion",
    risk: "Misses intra-year spikes if market drops late",
    vulnerability: "High caps may be lowered on annual renewal",
  },
  {
    name: "Monthly Point-to-Point",
    bestFor: "Low-vol, slow monthly gains",
    risk: "Uncapped negatives erode capped positives",
    vulnerability: "One severe drop month can wipe eleven good months",
  },
  {
    name: "Monthly Averaging",
    bestFor: "Highly volatile mid-year swings",
    risk: "Lags strong sustained year-end rallies",
    vulnerability: "Averaging dampens full point-to-point gains",
  },
];

export const guarantyStates = [
  { state: "Baseline (TX, FL, GA…)", limit: "$250,000", note: "NAIC Model Act present value" },
  { state: "New York", limit: "$500,000", note: "High coverage ceiling" },
  { state: "New Jersey", limit: "$500,000", note: "High statutory threshold" },
  { state: "Washington", limit: "$500,000", note: "Expanded guaranty limit" },
  { state: "California", limit: "80% up to $250k", note: "Co-insurance structure" },
];

/* ─── Chapter 3 sales system ─────────────────────────────────────── */

export const salesSteps = [
  {
    id: 1,
    title: "Uncover the Vulnerability Gap",
    principle: "Pension elimination realization",
    formula: "Gap = Mandatory Monthly Bills − Social Security Floor",
    action:
      "Audit fixed monthly costs vs guaranteed income. Name the dollar gap out loud.",
    script: `For our parents' generation, retirement was a three-legged stool: corporate pensions, Social Security, and personal savings. Today, employer pensions are nearly gone — replaced by 401(k)s. That quietly put market risk, sequence risk, and longevity risk on your family's shoulders.

Social Security was designed to replace only about 30–40% of working income. If markets drop in the exact years you start drawing, the damage can be permanent.

Our first job is to measure your household's Vulnerability Gap — the exact dollars by which your mandatory bills exceed your guaranteed Social Security floor.`,
  },
  {
    id: 2,
    title: "Re-Frame the Product",
    principle: "From complex instrument to family baseline floor",
    formula: "Allocate only enough capital to close the Gap",
    action:
      "De-jargonize. Call it a personal pension. Fund only the floor; leave the rest liquid for growth.",
    script: `An annuity is not an aggressive growth vehicle and not a Wall Street trading product. It is a contract for a privately secured personal pension.

When capital goes into a Fixed Indexed Annuity, you are buying an income foundation. No matter what happens to stocks, real estate, or rates, a guaranteed check can hit your account for life. You eliminate the fear of outliving your money.`,
  },
  {
    id: 3,
    title: "Deconstruct Downside Risk",
    principle: "Zero is your hero",
    formula: "Upside with caps/participation · Floor = 0%",
    action:
      "Show bull / moderate / crash scenarios. Back-test 2000–02 or 2008 vs FIA floor.",
    script: `The single most important rule in these contracts: Zero is your hero.

When the S&P rises, your contract can be credited subject to caps or participation rates. If the market crashes 20%, 30%, or 40%, your account does not lose a dollar to market declines. Principal and previously locked-in gains stay intact. You participate in upside and bypass downturns.`,
  },
  {
    id: 4,
    title: "Legacy & Liquidity Framework",
    principle: "Death benefit + penalty-free access",
    formula: "Typical 10% annual free withdrawal + named beneficiaries",
    action:
      "Kill the 'company keeps the money' myth. Review beneficiaries and free-withdrawal riders.",
    script: `A common myth is that if you pass away early, the insurance company keeps your money. Modern deferred contracts include death benefits. Remaining cash value goes to your named family beneficiaries — typically outside probate.

You also keep access. Most contracts allow annual penalty-free withdrawals — often about 10% of account value — for unexpected needs. Family liquidity and legacy are preserved.`,
  },
  {
    id: 5,
    title: "Execute the Close",
    principle: "Dual choice → decisive action",
    formula: "Recap Gap → Dual Choice → Floor allocation → Application",
    action:
      "Recap numbers. Present Option A (do nothing) vs Option B (fund the floor). Move to paperwork.",
    script: `We measured your Vulnerability Gap between guaranteed income and mandatory bills. You face two choices:

Option A — Do nothing. Leave 100% of the nest egg exposed to sequence-of-returns risk and the chance of outliving money.

Option B — Act today. Set aside only the capital needed for your personal pension floor. Lock a contractual 0% market-loss floor, secure income for life, and leave remaining assets free to grow.

Let's complete the paperwork, protect principal, and take market fear off the table for your family.`,
  },
] as const;

export const flipThesis = {
  oldModel: {
    title: "Old Model (Against You)",
    points: [
      "Sell complexity and status products up-market",
      "Treat middle America as 'not the real buyer'",
      "Hide mechanics; hope commission carries the day",
      "Ignore Medicare / Medicaid households as too small",
    ],
  },
  newModel: {
    title: "New Model (Your Edge)",
    points: [
      "Sell clarity, safety, and generational protection down-market",
      "Target the proven owner profile: median ~$79k, 70% under $100k",
      "Teach mechanics until trust is non-negotiable",
      "Serve modest-income retirees — including dual-eligible populations — with ethical income floors",
    ],
  },
  whyItWorks: [
    "Data: actual owners are middle class, not UHNW myth",
    "Motivation: 88–89% buy for peace of mind and principal safety",
    "Puzzle: 50% willing, ~12–13% buy — friction is education + distribution",
    "Product fit: MYGA / FIA solve pension collapse; PPVA is a different job",
  ],
};

export const teamObjections = [
  {
    objection: "I don't have enough money for an annuity.",
    response:
      "We only move the capital needed to close your Vulnerability Gap. Remaining savings stay liquid for growth and emergencies.",
  },
  {
    objection: "What if I need cash?",
    response:
      "Most contracts allow annual penalty-free withdrawals (often ~10%). This is a floor, not a lockbox on your entire net worth.",
  },
  {
    objection: "What if I die early?",
    response:
      "Death benefit provisions pass remaining value to named beneficiaries, usually outside probate. The company does not simply keep the money.",
  },
  {
    objection: "Isn't this only for rich people?",
    response:
      "Opposite. Median owner income is about $79,000. Seven in ten owners earn under $100,000. This product was built for households like yours.",
  },
  {
    objection: "What if the insurance company fails?",
    response:
      "State guaranty associations cover annuity benefits up to statutory limits (often $250k present value; higher in some states). We also diversify carriers when needed.",
  },
  {
    objection: "I already have a 401(k).",
    response:
      "A 401(k) accumulates. It does not guarantee a paycheck for life. We convert a slice into a personal pension floor so sequence risk can't erase the plan.",
  },
];

export const keyFormulas = [
  {
    name: "Vulnerability Gap",
    expression: "Gap = Mandatory Bills − SS (and other guaranteed income)",
  },
  {
    name: "FIA Credited Rate",
    expression: "min(C, max(0, R_index × P − S))",
  },
  {
    name: "Exclusion Ratio (annuitized)",
    expression: "Non-taxable share = Investment in Contract ÷ Expected Return",
  },
  {
    name: "LIFO (non-annuitized)",
    expression: "Earnings out first → ordinary income; basis last",
  },
];

export const strategicConclusions = [
  {
    title: "Target market",
    body: "70% of owners under $100k income. Middle-class is the volume opportunity — not a consolation prize.",
  },
  {
    title: "Product alignment",
    body: "HNW → PPVA for tax-deferred alternatives. Everyday families → Fixed / MYGA / FIA for income floors.",
  },
  {
    title: "Transparent education",
    body: "Solve the Annuity Puzzle by teaching caps, participation, spreads, IRC §72, and guaranty limits in plain speech.",
  },
  {
    title: "Structured selling",
    body: "Run the five-step ethical system every time. Measure → reframe → prove floor → legacy → dual-choice close.",
  },
];
