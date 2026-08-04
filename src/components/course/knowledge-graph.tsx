import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  tone?: "core" | "metric" | "action" | "risk" | "product";
};

type Edge = { from: string; to: string; label?: string };

const GRAPHS: Record<
  string,
  { title: string; nodes: Node[]; edges: Edge[] }
> = {
  market: {
    title: "Market reality graph",
    nodes: [
      { id: "myth", label: "HNW Myth", x: 12, y: 18, tone: "risk" },
      { id: "data", label: "Gallup Data", x: 38, y: 12, tone: "core" },
      { id: "m79", label: "$79k Median", x: 62, y: 20, tone: "metric" },
      { id: "u100", label: "70% < $100k", x: 82, y: 14, tone: "metric" },
      { id: "fund", label: "Funding Mix", x: 22, y: 48, tone: "product" },
      { id: "motive", label: "Safety 89%", x: 48, y: 42, tone: "metric" },
      { id: "peace", label: "Peace 88%", x: 72, y: 48, tone: "metric" },
      { id: "puzzle", label: "Annuity Puzzle", x: 35, y: 72, tone: "risk" },
      { id: "will", label: "50% Willing", x: 58, y: 78, tone: "metric" },
      { id: "buy", label: "~12% Buy", x: 80, y: 72, tone: "risk" },
      { id: "you", label: "You = Distribution Fix", x: 50, y: 92, tone: "action" },
    ],
    edges: [
      { from: "myth", to: "data", label: "debunked by" },
      { from: "data", to: "m79" },
      { from: "data", to: "u100" },
      { from: "data", to: "fund" },
      { from: "data", to: "motive" },
      { from: "motive", to: "peace" },
      { from: "m79", to: "puzzle" },
      { from: "puzzle", to: "will" },
      { from: "will", to: "buy", label: "gap" },
      { from: "buy", to: "you", label: "closes" },
      { from: "puzzle", to: "you" },
    ],
  },
  product: {
    title: "Product architecture graph",
    nodes: [
      { id: "client", label: "Client Capital", x: 50, y: 10, tone: "core" },
      { id: "ppva", label: "PPVA (HNW)", x: 18, y: 30, tone: "product" },
      { id: "retail", label: "MYGA / FIA", x: 78, y: 30, tone: "product" },
      { id: "bonds", label: "90–95% Bonds", x: 62, y: 48, tone: "metric" },
      { id: "opt", label: "Option Budget", x: 88, y: 48, tone: "metric" },
      { id: "p", label: "Participation P", x: 58, y: 66, tone: "action" },
      { id: "s", label: "Spread S", x: 76, y: 66, tone: "action" },
      { id: "floor", label: "0% Floor", x: 68, y: 82, tone: "metric" },
      { id: "cap", label: "Cap C", x: 88, y: 82, tone: "action" },
      { id: "tax", label: "IRC §72", x: 22, y: 58, tone: "risk" },
      { id: "ga", label: "State Guaranty", x: 18, y: 82, tone: "metric" },
      { id: "credit", label: "Credited Rate", x: 78, y: 96, tone: "core" },
    ],
    edges: [
      { from: "client", to: "ppva" },
      { from: "client", to: "retail" },
      { from: "retail", to: "bonds" },
      { from: "retail", to: "opt" },
      { from: "opt", to: "p" },
      { from: "p", to: "s" },
      { from: "s", to: "floor" },
      { from: "floor", to: "cap" },
      { from: "cap", to: "credit" },
      { from: "ppva", to: "tax" },
      { from: "retail", to: "tax" },
      { from: "client", to: "ga" },
    ],
  },
  sales: {
    title: "Sales pipeline graph",
    nodes: [
      { id: "open", label: "Open $79k Reality", x: 50, y: 8, tone: "action" },
      { id: "s1", label: "1 · Vulnerability Gap", x: 50, y: 24, tone: "core" },
      { id: "s2", label: "2 · Personal Pension", x: 50, y: 40, tone: "action" },
      { id: "s3", label: "3 · Zero Floor Demo", x: 50, y: 56, tone: "metric" },
      { id: "s4", label: "4 · Legacy + Liquidity", x: 50, y: 72, tone: "product" },
      { id: "a", label: "Option A Nothing", x: 22, y: 88, tone: "risk" },
      { id: "b", label: "Option B Fund Floor", x: 72, y: 88, tone: "action" },
      { id: "app", label: "Application", x: 72, y: 98, tone: "core" },
    ],
    edges: [
      { from: "open", to: "s1" },
      { from: "s1", to: "s2" },
      { from: "s2", to: "s3" },
      { from: "s3", to: "s4" },
      { from: "s4", to: "a" },
      { from: "s4", to: "b" },
      { from: "b", to: "app" },
    ],
  },
};

const toneClass: Record<string, string> = {
  core: "fill-[var(--color-surface-2)] stroke-[var(--color-accent)]",
  metric: "fill-[var(--color-accent-soft)] stroke-[var(--color-accent)]",
  action: "fill-[var(--color-success-soft)] stroke-[var(--color-success)]",
  risk: "fill-[var(--color-warn-soft)] stroke-[var(--color-warn)]",
  product: "fill-[var(--color-surface)] stroke-[var(--color-border-strong)]",
};

export function KnowledgeGraph({
  graphId,
  className,
}: {
  graphId: "market" | "product" | "sales";
  className?: string;
}) {
  const g = GRAPHS[graphId];
  const byId = Object.fromEntries(g.nodes.map((n) => [n.id, n]));

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        role="img"
        aria-label={g.title}
      >
        {g.edges.map((e, i) => {
          const a = byId[e.from];
          const b = byId[e.to];
          if (!a || !b) return null;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          return (
            <g key={`${e.from}-${e.to}-${i}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="var(--color-border-strong)"
                strokeWidth={0.35}
              />
              {e.label && (
                <text
                  x={mx}
                  y={my - 1.2}
                  textAnchor="middle"
                  fill="var(--color-subtle)"
                  fontSize={2.2}
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}
        {g.nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x - 9}
              y={n.y - 3.2}
              width={18}
              height={6.4}
              rx={1.4}
              className={toneClass[n.tone ?? "core"]}
              strokeWidth={0.35}
            />
            <text
              x={n.x}
              y={n.y + 0.8}
              textAnchor="middle"
              fill="var(--color-fg)"
              fontSize={2.4}
              fontWeight={600}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
