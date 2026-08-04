/** Ultimate Google Meet slideshow — presentation-optimized frames */

export type SlideKind =
  | "title"
  | "section"
  | "stats"
  | "bullets"
  | "chart"
  | "compare"
  | "script"
  | "formula"
  | "graph"
  | "close";

export type Slide = {
  id: string;
  kind: SlideKind;
  chapter?: 0 | 1 | 2 | 3;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  stats?: { label: string; value: string; hint?: string }[];
  chart?: "income" | "funding" | "motivations" | "puzzle" | "scenario";
  compare?: { leftTitle: string; rightTitle: string; left: string[]; right: string[] };
  script?: string;
  formula?: string;
  formulaLabel?: string;
  graphId?: "market" | "product" | "sales";
  footer?: string;
};

export const SLIDES: Slide[] = [
  // ── OPEN ──────────────────────────────────────────
  {
    id: "open",
    kind: "title",
    chapter: 0,
    eyebrow: "Annuity Factory Masterclass",
    title: "Generational Wealth Sales for Middle America",
    subtitle: "Against the grain. For the majority.",
    body: "Three chapters. One system. Every person on this call leaves able to open, teach, and close.",
    footer: "Share this deck live · Arrow keys or swipe · Space = next",
  },
  {
    id: "agenda",
    kind: "bullets",
    chapter: 0,
    eyebrow: "Agenda",
    title: "What we master today",
    bullets: [
      "Chapter 1 — The $79K Reality: who actually buys",
      "Chapter 2 — Zero Is Your Hero: product + tax + protection math",
      "Chapter 3 — Close the Vulnerability Gap: ethical 5-step close",
      "Knowledge graphs: market · product · sales pipeline",
      "Team scripts you can run on the next iPad appointment",
    ],
  },
  {
    id: "thesis",
    kind: "compare",
    chapter: 0,
    eyebrow: "Doctrine",
    title: "Flip the script",
    compare: {
      leftTitle: "Old model (against you)",
      rightTitle: "Our model (your edge)",
      left: [
        "Sell complexity up-market",
        "Treat middle America as too small",
        "Hide mechanics; chase commission",
        "Ignore Medicare / modest income",
      ],
      right: [
        "Sell clarity & family floors down-market",
        "Target proven owners: median ~$79k",
        "Teach until trust is non-negotiable",
        "Serve fixed-income & dual-eligible households",
      ],
    },
  },

  // ── CH 1 ──────────────────────────────────────────
  {
    id: "ch1-open",
    kind: "section",
    chapter: 1,
    eyebrow: "Chapter 1 · Metric $79,000",
    title: "The $79K Reality",
    subtitle: "Debunk the HNW myth. Own the real market.",
  },
  {
    id: "ch1-stats",
    kind: "stats",
    chapter: 1,
    eyebrow: "Gallup / Committee of Annuity Insurers",
    title: "Who owns individual annuities",
    stats: [
      { label: "Median household income", value: "$79k", hint: "Down from $96k in 2001" },
      { label: "Owners under $100k", value: "70%", hint: "Primary middle-class share" },
      { label: "Owners under $50k", value: "25%", hint: "Low-to-moderate income" },
      { label: "Owners under $75k", value: "46%", hint: "Nearly half of all owners" },
    ],
  },
  {
    id: "ch1-income-chart",
    kind: "chart",
    chapter: 1,
    eyebrow: "Graph · Income distribution",
    title: "Owner income tiers",
    subtitle: "Your market is not the yacht club — it is the $79k household.",
    chart: "income",
  },
  {
    id: "ch1-profile",
    kind: "stats",
    chapter: 1,
    eyebrow: "Buyer profile",
    title: "Age, gender, retirement",
    stats: [
      { label: "Median first purchase age", value: "51", hint: "84% buy before 65" },
      { label: "Median current age", value: "75", hint: "Mean age 74" },
      { label: "Retired", value: "78%", hint: "+13 pts since 2013" },
      { label: "Female / Male", value: "51/49", hint: "Female majority since 1997" },
    ],
  },
  {
    id: "ch1-funding",
    kind: "chart",
    chapter: 1,
    eyebrow: "Graph · Funding sources",
    title: "How they fund contracts",
    subtitle: "Risk mitigation, not speculation — savings, income, inheritance.",
    chart: "funding",
  },
  {
    id: "ch1-motivations",
    kind: "chart",
    chapter: 1,
    eyebrow: "Graph · Motivations",
    title: "Why they buy",
    subtitle: "Peace of mind and principal safety dominate — not alpha chase.",
    chart: "motivations",
  },
  {
    id: "ch1-puzzle",
    kind: "chart",
    chapter: 1,
    eyebrow: "The Annuity Puzzle",
    title: "50% willing · ~12–13% buy",
    subtitle: "Barrier is complexity + distribution failure — not bequest desire.",
    chart: "puzzle",
  },
  {
    id: "ch1-graph",
    kind: "graph",
    chapter: 1,
    eyebrow: "Knowledge graph · Market",
    title: "Demographic reality map",
    graphId: "market",
    body: "Nodes = facts your team must own. Edges = how you argue the market.",
  },
  {
    id: "ch1-script",
    kind: "script",
    chapter: 1,
    eyebrow: "Team script",
    title: "Open with the real buyer",
    script:
      "There's a myth that annuities are only for the wealthy. The data says the median owner household earns about $79,000 a year, and 70% of owners earn under $100,000. You're not 'too small' for this conversation — you are the core market.",
  },

  // ── CH 2 ──────────────────────────────────────────
  {
    id: "ch2-open",
    kind: "section",
    chapter: 2,
    eyebrow: "Chapter 2 · Metric 0%",
    title: "Zero Is Your Hero",
    subtitle: "Product architecture · tax · state protection",
  },
  {
    id: "ch2-compare",
    kind: "compare",
    chapter: 2,
    eyebrow: "Product alignment",
    title: "Same wrapper. Different job.",
    compare: {
      leftTitle: "HNW · PPVA",
      rightTitle: "Everyday · MYGA / FIA",
      left: [
        "Tax alpha on alternatives",
        "IDF / SMA rebalancing",
        "Institutional unbundled fees",
        "Creditor shield in 26 states",
      ],
      right: [
        "Income floor & longevity hedge",
        "General account + index options",
        "0% absolute return floor",
        "Independent agents / banks / BDs",
      ],
    },
  },
  {
    id: "ch2-engine",
    kind: "bullets",
    chapter: 2,
    eyebrow: "FIA engine",
    title: "Bonds + option budget",
    bullets: [
      "90–95% of premium → high-grade fixed income (principal backstop)",
      "Remaining yield = option budget for OTC calls on indices",
      "Credited interest follows option payoff, limited by C / P / S",
      "You do not ‘own the S&P’ — you own a structured floor + capped upside",
    ],
  },
  {
    id: "ch2-formula",
    kind: "formula",
    chapter: 2,
    eyebrow: "Master formula",
    title: "Four-stage credit sequence",
    formulaLabel: "Unified credited rate",
    formula: "R_credited = min(C, max(0, R_index × P − S))",
    bullets: [
      "1 · Participation: R_part = R_index × P",
      "2 · Spread: R_spread = R_part − S",
      "3 · Floor: R_floored = max(0, R_spread)  ← Zero is your hero",
      "4 · Cap: R_credited = min(C, R_floored)",
    ],
  },
  {
    id: "ch2-scenario",
    kind: "chart",
    chapter: 2,
    eyebrow: "Scenario lab",
    title: "Index vs FIA credited",
    subtitle: "Example: P=80%, S=2%, C=6%, Floor=0%",
    chart: "scenario",
  },
  {
    id: "ch2-crediting",
    kind: "bullets",
    chapter: 2,
    eyebrow: "Crediting methods",
    title: "How carriers measure the index",
    bullets: [
      "Annual Point-to-Point — best for steady annual bulls; renewal cap risk",
      "Monthly Point-to-Point — uncapped down months can erase capped up months",
      "Monthly Averaging — smooths volatility; lags strong year-end rallies",
    ],
  },
  {
    id: "ch2-tax",
    kind: "bullets",
    chapter: 2,
    eyebrow: "IRC Section 72",
    title: "Taxation in one screen",
    bullets: [
      "Non-qualified: tax-deferred accumulation (no annual 1099 on inside build-up)",
      "Partial withdrawals: LIFO — earnings first as ordinary income",
      "Before 59½: +10% penalty on taxable earnings (§72(q)), with exceptions",
      "Annuitized: exclusion ratio splits each check into basis vs earnings",
    ],
  },
  {
    id: "ch2-guaranty",
    kind: "stats",
    chapter: 2,
    eyebrow: "State guaranty / NOLHGA",
    title: "If a carrier fails",
    stats: [
      { label: "Baseline most states", value: "$250k", hint: "PV of annuity benefits / owner / company" },
      { label: "NY · NJ · WA", value: "$500k", hint: "Higher statutory ceilings" },
      { label: "California", value: "80%", hint: "Of value up to $250k co-insurance" },
      { label: "Coverage basis", value: "Residence", hint: "Owner’s state at insolvency date" },
    ],
  },
  {
    id: "ch2-graph",
    kind: "graph",
    chapter: 2,
    eyebrow: "Knowledge graph · Product",
    title: "Technical architecture map",
    graphId: "product",
  },
  {
    id: "ch2-script",
    kind: "script",
    chapter: 2,
    eyebrow: "Team script",
    title: "Zero is your hero",
    script:
      "When the market is up, you can participate — subject to the contract's cap or participation rate. When the market is down hard, your account is not down hard with it. The floor is zero. That is the hero of the contract: no market-driven principal loss, previously locked gains stay locked.",
  },

  // ── CH 3 ──────────────────────────────────────────
  {
    id: "ch3-open",
    kind: "section",
    chapter: 3,
    eyebrow: "Chapter 3 · Metric 50% → 12%",
    title: "Close the Vulnerability Gap",
    subtitle: "Ethical high-impact sales for middle & modest-income households",
  },
  {
    id: "ch3-gap-formula",
    kind: "formula",
    chapter: 3,
    eyebrow: "Step 1",
    title: "Uncover the Vulnerability Gap",
    formulaLabel: "The only number that matters first",
    formula: "Gap = Mandatory Monthly Bills − Social Security Floor",
    bullets: [
      "Walk the three-legged stool collapse: pension gone → 401(k) owns all risk",
      "SS replaces ~30–40% of working income by design",
      "Name the dollar gap out loud — that is your product sizing target",
    ],
  },
  {
    id: "ch3-step2",
    kind: "bullets",
    chapter: 3,
    eyebrow: "Step 2",
    title: "Re-frame: personal pension, not Wall Street toy",
    bullets: [
      "De-jargonize: contract for a privately secured personal pension",
      "Allocate only enough capital to close the Gap",
      "Leave remaining assets liquid for growth and family needs",
    ],
  },
  {
    id: "ch3-step3",
    kind: "bullets",
    chapter: 3,
    eyebrow: "Step 3",
    title: "Deconstruct downside — prove the floor",
    bullets: [
      "Show bull / moderate / crash scenarios side by side",
      "Back-test 2000–02 or 2008 vs FIA floor narrative",
      "89% say principal safety is critical — lead with that math",
    ],
  },
  {
    id: "ch3-step4",
    kind: "bullets",
    chapter: 3,
    eyebrow: "Step 4",
    title: "Legacy & liquidity",
    bullets: [
      "Kill the myth: company does not simply keep the money on early death",
      "Death benefit → named beneficiaries, typically outside probate",
      "Typical ~10% annual penalty-free withdrawal for emergencies",
    ],
  },
  {
    id: "ch3-step5",
    kind: "compare",
    chapter: 3,
    eyebrow: "Step 5 · Dual choice close",
    title: "Decisive action",
    compare: {
      leftTitle: "Option A — Do nothing",
      rightTitle: "Option B — Fund the floor",
      left: [
        "100% market exposure",
        "Sequence-of-returns risk intact",
        "Longevity risk unhedged",
        "Bills still depend on good years",
      ],
      right: [
        "Only Gap capital moved",
        "Contractual 0% market-loss floor",
        "Income structure for life",
        "Remaining assets free to grow",
      ],
    },
  },
  {
    id: "ch3-graph",
    kind: "graph",
    chapter: 3,
    eyebrow: "Knowledge graph · Sales pipeline",
    title: "Ethical close pipeline",
    graphId: "sales",
  },
  {
    id: "ch3-script",
    kind: "script",
    chapter: 3,
    eyebrow: "Full close script",
    title: "Word-for-word dual choice",
    script:
      "We measured your Vulnerability Gap. Two paths:\n\nOption A — Do nothing. Leave the nest egg fully exposed to sequence-of-returns risk and longevity risk.\n\nOption B — Act. Fund only the personal pension floor with a contractual 0% market-loss floor. Secure lifetime income structure. Keep remaining assets free to grow.\n\nProtect principal. Take market fear off the table. Complete the application today.",
  },
  {
    id: "objections",
    kind: "bullets",
    chapter: 3,
    eyebrow: "Objection stack",
    title: "Six answers every rep owns",
    bullets: [
      "Not enough money → only fund the Gap; rest stays liquid",
      "Need cash → typical ~10% annual free withdrawal",
      "Die early → death benefit to beneficiaries",
      "Only for rich? → median owner $79k; 70% under $100k",
      "Company fails? → state guaranty limits + multi-carrier design",
      "I have a 401(k) → accumulation ≠ lifetime paycheck",
    ],
  },

  // ── CLOSE ─────────────────────────────────────────
  {
    id: "formulas",
    kind: "bullets",
    chapter: 0,
    eyebrow: "Memorize",
    title: "Four formulas that run the firm",
    bullets: [
      "Vulnerability Gap = Bills − SS (and other guaranteed income)",
      "FIA credit = min(C, max(0, R_index × P − S))",
      "Exclusion ratio = Investment in contract ÷ Expected return",
      "LIFO withdrawals = earnings first, basis last",
    ],
  },
  {
    id: "close",
    kind: "close",
    chapter: 0,
    eyebrow: "Deploy",
    title: "Leave this room dangerous",
    subtitle: "Open with $79k. Teach zero. Measure the Gap. Close with dual choice.",
    bullets: [
      "Send every teammate the live app link for iPad study",
      "Run this slideshow on Google Meet screen share",
      "Drill scripts out loud — mark lessons complete in the course",
      "Next appointment: Gap first, product second, paperwork third",
    ],
    footer: "Annuity Factory Masterclass · Generational wealth for the majority",
  },
];

export const SLIDE_COUNT = SLIDES.length;
