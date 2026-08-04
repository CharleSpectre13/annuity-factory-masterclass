import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  annuityPuzzle,
  fundingSources,
  incomeTier,
  motivations,
} from "@/data/course";

const tooltipStyle = {
  background: "#161a22",
  border: "1px solid #2a3040",
  borderRadius: 8,
  color: "#eef0f4",
  fontSize: 12,
};

export function IncomeTierChart() {
  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={incomeTier} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#2a3040" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="tier"
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={{ stroke: "#2a3040" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            unit="%"
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(v: number) => [`${v}% of owners`, "Share"]}
          />
          <Bar dataKey="pct" radius={[6, 6, 0, 0]} maxBarSize={56}>
            {incomeTier.map((entry) => (
              <Cell key={entry.tier} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FundingSourcesChart() {
  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={fundingSources}
          margin={{ top: 4, right: 16, left: 8, bottom: 0 }}
        >
          <CartesianGrid stroke="#2a3040" strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 60]}
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            unit="%"
          />
          <YAxis
            type="category"
            dataKey="source"
            width={110}
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(v: number) => [`${v}%`, "Market share"]}
          />
          <Bar dataKey="pct" fill="var(--color-chart-1)" radius={[0, 6, 6, 0]} maxBarSize={28} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MotivationsChart() {
  return (
    <div className="h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={motivations}
          margin={{ top: 4, right: 16, left: 8, bottom: 0 }}
        >
          <CartesianGrid stroke="#2a3040" strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            unit="%"
          />
          <YAxis
            type="category"
            dataKey="motive"
            width={150}
            tick={{ fill: "#9aa3b2", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(v: number) => [`${v}%`, "Cite as primary"]}
          />
          <Bar dataKey="pct" fill="var(--color-chart-2)" radius={[0, 6, 6, 0]} maxBarSize={26} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AnnuityPuzzleChart() {
  const data = [
    { name: "Willing to buy", value: annuityPuzzle.willingToBuy, fill: "var(--color-chart-1)" },
    { name: "Actually buy", value: annuityPuzzle.actualBuyers, fill: "var(--color-chart-3)" },
    {
      name: "Gap (no action)",
      value: annuityPuzzle.willingToBuy - annuityPuzzle.actualBuyers,
      fill: "var(--color-border-strong)",
    },
  ];
  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={58}
            outerRadius={92}
            paddingAngle={3}
            stroke="none"
          >
            {data.map((d) => (
              <Cell key={d.name} fill={d.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(v: number, name: string) => [`${v}%`, name]}
          />
          <Legend
            verticalAlign="bottom"
            formatter={(value) => (
              <span style={{ color: "#9aa3b2", fontSize: 12 }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ScenarioCompareChart() {
  const data = [
    { scenario: "Bull +10%", index: 10, credited: 6 },
    { scenario: "Growth +4%", index: 4, credited: 1.2 },
    { scenario: "Crash −15%", index: -15, credited: 0 },
  ];
  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#2a3040" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="scenario"
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={{ stroke: "#2a3040" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9aa3b2", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            unit="%"
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend
            formatter={(value) => (
              <span style={{ color: "#9aa3b2", fontSize: 12 }}>{value}</span>
            )}
          />
          <Bar dataKey="index" name="Index return" fill="var(--color-chart-5)" radius={[4, 4, 0, 0]} maxBarSize={36} />
          <Bar dataKey="credited" name="FIA credited" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} maxBarSize={36} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
