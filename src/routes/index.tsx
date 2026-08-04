import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  MonitorPlay,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { CHAPTERS, COURSE_META, strategicConclusions } from "@/data/course";
import { CourseShell } from "@/components/course/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/lib/course/progress";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const overall = useProgress((s) => s.overallProgress());
  const chapterProgress = useProgress((s) => s.chapterProgress);
  const reset = useProgress((s) => s.reset);

  return (
    <CourseShell>
      <div className="mb-10">
        <Badge variant="accent" className="mb-4">
          Classroom masterclass · Sales team script system
        </Badge>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          {COURSE_META.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[var(--color-muted)]">
          {COURSE_META.subtitle}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-subtle)]">
          {COURSE_META.thesis}
        </p>
        <p className="mt-2 text-sm font-medium text-[var(--color-accent)]">
          {COURSE_META.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="accent" size="lg">
            <Link to="/present">
              <MonitorPlay className="size-4" /> Launch live slideshow
            </Link>
          </Button>
          <Button asChild variant="default" size="lg">
            <Link to="/chapter/$slug" params={{ slug: CHAPTERS[0].slug }}>
              Start Chapter 1 <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/playbook">Team playbook</Link>
          </Button>
        </div>

        <div className="mt-6 max-w-sm">
          <div className="mb-1 flex justify-between text-xs text-[var(--color-muted)]">
            <span>Overall mastery</span>
            <span className="tabular">{overall}%</span>
          </div>
          <Progress value={overall} />
          {overall > 0 && (
            <button
              type="button"
              onClick={reset}
              className="mt-2 text-xs text-[var(--color-subtle)] underline-offset-2 hover:underline"
            >
              Reset progress
            </button>
          )}
        </div>
      </div>

      <div className="panel mb-10 rounded-[var(--radius-xl)] border-l-4 border-l-[var(--color-accent)] p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Google Meet presentation mode
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
              Full-screen deck with charts, knowledge graphs, and word-for-word
              scripts. Arrow keys or swipe on iPad. Press F for fullscreen while
              screen-sharing.
            </p>
          </div>
          <Button asChild variant="accent">
            <Link to="/present">Open deck</Link>
          </Button>
        </div>
      </div>

      <div className="mb-10 grid gap-3 sm:grid-cols-3">
        {[
          {
            icon: Users,
            title: "Real buyers",
            body: "Median owner income $79k · 70% under $100k · not UHNW myth",
          },
          {
            icon: Shield,
            title: "Zero floor",
            body: "FIA math: participate upside, contractual 0% market-loss floor",
          },
          {
            icon: Target,
            title: "Close the gap",
            body: "50% willing · ~12% buy — your education + 5-step system is the edge",
          },
        ].map((item) => (
          <div key={item.title} className="panel rounded-[var(--radius-xl)] p-5">
            <item.icon className="mb-3 size-5 text-[var(--color-accent)]" />
            <h2 className="text-sm font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-semibold tracking-tight">Three chapters</h2>
      <div className="grid gap-4">
        {CHAPTERS.map((ch) => {
          const prog = chapterProgress(ch.id);
          return (
            <Link
              key={ch.id}
              to="/chapter/$slug"
              params={{ slug: ch.slug }}
              className="panel group block rounded-[var(--radius-xl)] p-5 no-underline transition-colors hover:border-[var(--color-border-strong)] sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-surface-2)] text-sm font-semibold tabular">
                      {ch.number}
                    </span>
                    <Badge variant="outline">{ch.duration}</Badge>
                    <Badge variant="accent" className="tabular">
                      {ch.metric}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight group-hover:text-[var(--color-primary)]">
                    {ch.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{ch.subtitle}</p>
                  <p className="mt-2 text-xs text-[var(--color-subtle)]">
                    {ch.metricLabel}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">
                    <span className="font-medium text-[var(--color-fg)]">Outcome: </span>
                    {ch.outcome}
                  </p>
                </div>
                <div className="flex w-full flex-col items-end gap-2 sm:w-28">
                  <BookOpen className="size-5 text-[var(--color-subtle)]" />
                  <span className="text-xs tabular text-[var(--color-muted)]">
                    {prog}%
                  </span>
                  <Progress value={prog} className="w-full" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Strategic takeaways
        </h2>
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
      </div>
    </CourseShell>
  );
}
