import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  AnnuityPuzzleChart,
  FundingSourcesChart,
  IncomeTierChart,
  MotivationsChart,
  ScenarioCompareChart,
} from "@/components/course/charts";
import { KnowledgeGraph } from "@/components/course/knowledge-graph";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SLIDES, type Slide } from "@/data/slides";
import { cn } from "@/lib/utils";

type PresentSearch = {
  s?: number;
};

export const Route = createFileRoute("/present")({
  component: PresentPage,
  validateSearch: (s: Record<string, unknown>): PresentSearch => {
    const raw = s.s;
    const n = typeof raw === "string" ? Number(raw) : typeof raw === "number" ? raw : undefined;
    if (n == null || Number.isNaN(n)) return {};
    return { s: Math.min(Math.max(0, Math.floor(n)), SLIDES.length - 1) };
  },
});

function ChartBlock({ id }: { id: NonNullable<Slide["chart"]> }) {
  switch (id) {
    case "income":
      return <IncomeTierChart />;
    case "funding":
      return <FundingSourcesChart />;
    case "motivations":
      return <MotivationsChart />;
    case "puzzle":
      return <AnnuityPuzzleChart />;
    case "scenario":
      return <ScenarioCompareChart />;
  }
}

function PresentPage() {
  const search = Route.useSearch();
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(0, search.s ?? 0), SLIDES.length - 1),
  );
  const [fs, setFs] = useState(false);
  const slide = SLIDES[index];
  const progress = ((index + 1) / SLIDES.length) * 100;

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => Math.min(Math.max(0, i + dir), SLIDES.length - 1));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Home") {
        setIndex(0);
      } else if (e.key === "End") {
        setIndex(SLIDES.length - 1);
      } else if (e.key === "f" || e.key === "F") {
        void toggleFs();
      } else if (e.key === "Escape" && document.fullscreenElement) {
        void document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.changedTouches[0]?.clientX ?? 0;
    };
    const onEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0]?.clientX ?? 0;
      const d = endX - startX;
      if (Math.abs(d) > 50) go(d < 0 ? 1 : -1);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [go]);

  useEffect(() => {
    const onFs = () => setFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  async function toggleFs() {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen().catch(() => {});
    } else {
      await document.exitFullscreen().catch(() => {});
    }
  }

  const chapterColor =
    slide.chapter === 1
      ? "var(--color-chart-1)"
      : slide.chapter === 2
        ? "var(--color-chart-2)"
        : slide.chapter === 3
          ? "var(--color-chart-3)"
          : "var(--color-accent)";

  return (
    <div className="flex h-dvh flex-col bg-[var(--color-bg)] text-[var(--color-fg)] select-none">
      <header className="flex h-12 shrink-0 items-center justify-between gap-3 border-b border-[var(--color-border)] px-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="shrink-0">
            <Link to="/">
              <X className="size-4" /> Exit
            </Link>
          </Button>
          <span className="hidden truncate text-xs text-[var(--color-muted)] sm:inline">
            Annuity Factory · Live deck
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs tabular text-[var(--color-muted)]">
            {index + 1} / {SLIDES.length}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => void toggleFs()}
            aria-label="Fullscreen"
          >
            {fs ? <Minimize2 /> : <Maximize2 />}
          </Button>
        </div>
      </header>

      <div className="h-1 w-full bg-[var(--color-surface-2)]">
        <div
          className="h-full transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%`, background: chapterColor }}
        />
      </div>

      <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <div
          key={slide.id}
          className={cn(
            "flex min-h-0 flex-1 flex-col justify-center px-5 py-6 sm:px-10 sm:py-8 lg:px-16",
          )}
        >
          {slide.eyebrow && (
            <p
              className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase sm:text-sm"
              style={{ color: chapterColor }}
            >
              {slide.eyebrow}
            </p>
          )}

          {slide.kind === "title" && (
            <div className="max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="mt-4 text-xl text-[var(--color-accent)] sm:text-2xl">
                  {slide.subtitle}
                </p>
              )}
              {slide.body && (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                  {slide.body}
                </p>
              )}
            </div>
          )}

          {slide.kind === "section" && (
            <div className="max-w-4xl">
              <Badge
                variant="outline"
                className="mb-4 border-[var(--color-border-strong)] px-3 py-1 text-sm"
              >
                Chapter {slide.chapter}
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="mt-4 text-xl text-[var(--color-muted)] sm:text-2xl">
                  {slide.subtitle}
                </p>
              )}
            </div>
          )}

          {slide.kind === "stats" && (
            <div>
              <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {slide.stats?.map((st) => (
                  <div
                    key={st.label}
                    className="panel rounded-[var(--radius-xl)] p-5 sm:p-6"
                  >
                    <p className="text-xs text-[var(--color-muted)] sm:text-sm">
                      {st.label}
                    </p>
                    <p
                      className="mt-2 text-3xl font-semibold tracking-tight tabular sm:text-4xl"
                      style={{ color: chapterColor }}
                    >
                      {st.value}
                    </p>
                    {st.hint && (
                      <p className="mt-2 text-xs text-[var(--color-subtle)] sm:text-sm">
                        {st.hint}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.kind === "bullets" && (
            <div className="max-w-4xl">
              <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
              <ul className="space-y-3 sm:space-y-4">
                {slide.bullets?.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-base leading-snug text-[var(--color-fg)] sm:text-xl"
                  >
                    <span
                      className="mt-2 size-2 shrink-0 rounded-full"
                      style={{ background: chapterColor }}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {slide.kind === "chart" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <h1 className="mb-1 text-2xl font-semibold tracking-tight sm:text-4xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="mb-4 text-sm text-[var(--color-muted)] sm:text-base">
                  {slide.subtitle}
                </p>
              )}
              <div className="panel min-h-0 flex-1 rounded-[var(--radius-xl)] p-3 sm:p-6">
                <div className="h-full min-h-[240px] sm:min-h-[320px]">
                  {slide.chart && <ChartBlock id={slide.chart} />}
                </div>
              </div>
            </div>
          )}

          {slide.kind === "compare" && slide.compare && (
            <div>
              <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {slide.title}
              </h1>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="panel rounded-[var(--radius-xl)] border-l-4 border-l-[var(--color-danger)] p-5 sm:p-6">
                  <h2 className="mb-4 text-lg font-semibold text-[var(--color-danger)]">
                    {slide.compare.leftTitle}
                  </h2>
                  <ul className="space-y-3">
                    {slide.compare.left.map((x) => (
                      <li
                        key={x}
                        className="text-sm text-[var(--color-muted)] sm:text-base"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel rounded-[var(--radius-xl)] border-l-4 border-l-[var(--color-success)] p-5 sm:p-6">
                  <h2 className="mb-4 text-lg font-semibold text-[var(--color-success)]">
                    {slide.compare.rightTitle}
                  </h2>
                  <ul className="space-y-3">
                    {slide.compare.right.map((x) => (
                      <li
                        key={x}
                        className="text-sm text-[var(--color-muted)] sm:text-base"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {slide.kind === "script" && (
            <div className="max-w-4xl">
              <h1 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {slide.title}
              </h1>
              <div className="script-block p-5 sm:p-8">
                <p className="mb-3 text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
                  Say this
                </p>
                <p className="whitespace-pre-line text-base leading-relaxed sm:text-xl">
                  {slide.script}
                </p>
              </div>
            </div>
          )}

          {slide.kind === "formula" && (
            <div className="max-w-4xl">
              <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {slide.title}
              </h1>
              {slide.formulaLabel && (
                <p className="mb-2 text-sm text-[var(--color-muted)]">
                  {slide.formulaLabel}
                </p>
              )}
              <div className="panel mb-6 rounded-[var(--radius-xl)] p-5 sm:p-8">
                <code className="block font-mono text-lg text-[var(--color-accent)] sm:text-2xl lg:text-3xl">
                  {slide.formula}
                </code>
              </div>
              {slide.bullets && (
                <ul className="space-y-2">
                  {slide.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm text-[var(--color-muted)] sm:text-lg"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {slide.kind === "graph" && (
            <div className="flex min-h-0 flex-1 flex-col">
              <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-4xl">
                {slide.title}
              </h1>
              {slide.body && (
                <p className="mb-3 text-sm text-[var(--color-muted)]">{slide.body}</p>
              )}
              <div className="panel min-h-0 flex-1 rounded-[var(--radius-xl)] p-2 sm:p-4">
                <KnowledgeGraph
                  graphId={slide.graphId ?? "market"}
                  className="h-full min-h-[280px] sm:min-h-[360px]"
                />
              </div>
            </div>
          )}

          {slide.kind === "close" && (
            <div className="max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="mt-4 text-xl text-[var(--color-accent)] sm:text-2xl">
                  {slide.subtitle}
                </p>
              )}
              {slide.bullets && (
                <ul className="mt-8 space-y-3">
                  {slide.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-base text-[var(--color-fg)] sm:text-xl"
                    >
                      <span
                        className="mt-2 size-2 shrink-0 rounded-full"
                        style={{ background: chapterColor }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {slide.footer && (
            <p className="mt-8 text-xs text-[var(--color-subtle)] sm:text-sm">
              {slide.footer}
            </p>
          )}
        </div>
      </main>

      <footer className="flex h-14 shrink-0 items-center justify-between gap-3 border-t border-[var(--color-border)] px-3 sm:px-5">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => go(-1)}
          disabled={index === 0}
          className="min-w-24"
        >
          <ChevronLeft /> Prev
        </Button>
        <div className="hidden text-center text-[11px] text-[var(--color-subtle)] sm:block">
          ← → or swipe · Space next · F fullscreen
        </div>
        <Button
          variant="accent"
          size="lg"
          onClick={() => go(1)}
          disabled={index === SLIDES.length - 1}
          className="min-w-24"
        >
          Next <ChevronRight />
        </Button>
      </footer>
    </div>
  );
}
