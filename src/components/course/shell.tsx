import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronLeft,
  GraduationCap,
  Home,
  Menu,
  MonitorPlay,
  X,
} from "lucide-react";
import { useState } from "react";
import { CHAPTERS, COURSE_META } from "@/data/course";
import { useProgress } from "@/lib/course/progress";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function CourseShell({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overall = useProgress((s) => s.overallProgress());
  const chapterProgress = useProgress((s) => s.chapterProgress);

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setNavOpen((v) => !v)}
              aria-label={navOpen ? "Close menu" : "Open menu"}
            >
              {navOpen ? <X /> : <Menu />}
            </Button>
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span className="flex size-8 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                <GraduationCap className="size-4" />
              </span>
              <span className="hidden font-semibold tracking-tight sm:inline">
                {COURSE_META.title}
              </span>
            </Link>
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:max-w-md">
            <div className="hidden w-full max-w-[160px] flex-col gap-1 sm:flex">
              <div className="flex justify-between text-[11px] text-[var(--color-muted)]">
                <span>Progress</span>
                <span className="tabular">{overall}%</span>
              </div>
              <Progress value={overall} />
            </div>
            <Button asChild variant="accent" size="sm" className="shrink-0">
              <Link to="/present">
                <MonitorPlay className="size-3.5" /> Present
              </Link>
            </Button>
            <Badge variant="outline" className="hidden shrink-0 md:inline-flex">
              Team Script Lab
            </Badge>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[240px_1fr]">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-72 border-r border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 pt-16 transition-transform lg:static lg:z-0 lg:w-auto lg:translate-x-0 lg:border-0 lg:bg-transparent lg:p-6 lg:pt-8",
            navOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Course navigation">
            <Link
              to="/"
              onClick={() => setNavOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-[var(--radius-md)] px-3 py-2.5 text-sm no-underline transition-colors",
                pathname === "/"
                  ? "bg-[var(--color-surface-2)] text-[var(--color-fg)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
              )}
            >
              <Home className="size-4 shrink-0" />
              Course Home
            </Link>
            <Link
              to="/present"
              onClick={() => setNavOpen(false)}
              className={cn(
                "flex items-center gap-2 rounded-[var(--radius-md)] px-3 py-2.5 text-sm no-underline transition-colors",
                pathname === "/present"
                  ? "bg-[var(--color-surface-2)] text-[var(--color-fg)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
              )}
            >
              <MonitorPlay className="size-4 shrink-0" />
              Live Slideshow
            </Link>
            <p className="mt-4 mb-2 px-3 text-[11px] font-medium tracking-wide text-[var(--color-subtle)] uppercase">
              Chapters
            </p>
            {CHAPTERS.map((ch) => {
              const href = `/chapter/${ch.slug}`;
              const active = pathname.startsWith(href);
              const prog = chapterProgress(ch.id);
              return (
                <Link
                  key={ch.id}
                  to="/chapter/$slug"
                  params={{ slug: ch.slug }}
                  onClick={() => setNavOpen(false)}
                  className={cn(
                    "flex flex-col gap-1 rounded-[var(--radius-md)] px-3 py-2.5 no-underline transition-colors",
                    active
                      ? "bg-[var(--color-surface-2)] text-[var(--color-fg)]"
                      : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
                  )}
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <BookOpen className="size-4 shrink-0 opacity-70" />
                    <span className="truncate">
                      {ch.number}. {ch.shortTitle}
                    </span>
                  </div>
                  <div className="pl-6">
                    <div className="mb-1 flex justify-between text-[10px] text-[var(--color-subtle)]">
                      <span className="tabular">{ch.metric}</span>
                      <span className="tabular">{prog}%</span>
                    </div>
                    <Progress value={prog} className="h-1" />
                  </div>
                </Link>
              );
            })}
            <Link
              to="/playbook"
              onClick={() => setNavOpen(false)}
              className={cn(
                "mt-4 flex items-center gap-2 rounded-[var(--radius-md)] px-3 py-2.5 text-sm no-underline transition-colors",
                pathname === "/playbook"
                  ? "bg-[var(--color-surface-2)] text-[var(--color-fg)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
              )}
            >
              Team Playbook
            </Link>
          </nav>
        </aside>

        {navOpen && (
          <button
            type="button"
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            aria-label="Close navigation"
            onClick={() => setNavOpen(false)}
          />
        )}

        <main className="min-w-0 px-4 py-6 sm:px-6 sm:py-8 lg:pl-0">{children}</main>
      </div>
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  action,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          {eyebrow && (
            <p className="mb-1 text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="panel rounded-[var(--radius-lg)] p-4 sm:p-5">
      <p className="text-xs text-[var(--color-muted)]">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight tabular sm:text-3xl">
        {value}
      </p>
      {hint && (
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-subtle)]">{hint}</p>
      )}
    </div>
  );
}

export function ScriptCard({
  title,
  body,
  step,
}: {
  title: string;
  body: string;
  step?: number;
}) {
  return (
    <div className="script-block p-4 sm:p-5">
      <div className="mb-2 flex items-center gap-2">
        {step != null && (
          <span className="flex size-6 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-semibold text-[var(--color-accent)] tabular">
            {step}
          </span>
        )}
        <p className="text-xs font-medium tracking-wide text-[var(--color-accent)] uppercase">
          Team script — {title}
        </p>
      </div>
      <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--color-fg)]">
        {body}
      </p>
    </div>
  );
}

export function LessonComplete({
  lessonKey,
  label = "Mark lesson complete",
}: {
  lessonKey: string;
  label?: string;
}) {
  const isComplete = useProgress((s) => s.isComplete(lessonKey));
  const mark = useProgress((s) => s.markComplete);
  return (
    <Button
      variant={isComplete ? "secondary" : "accent"}
      size="sm"
      onClick={() => mark(lessonKey)}
      disabled={isComplete}
    >
      {isComplete ? "Completed" : label}
    </Button>
  );
}

export function BackHome() {
  return (
    <Link
      to="/"
      className="mb-4 inline-flex items-center gap-1 text-sm text-[var(--color-muted)] no-underline hover:text-[var(--color-fg)]"
    >
      <ChevronLeft className="size-4" /> Course home
    </Link>
  );
}

export function Callout({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "success" | "warn";
}) {
  const border =
    tone === "success"
      ? "border-[var(--color-success)]"
      : tone === "warn"
        ? "border-[var(--color-warn)]"
        : "border-[var(--color-accent)]";
  return (
    <div className={cn("panel rounded-[var(--radius-lg)] border-l-4 p-4 sm:p-5", border)}>
      <p className="mb-1 text-sm font-semibold">{title}</p>
      <div className="text-sm leading-relaxed text-[var(--color-muted)]">{children}</div>
    </div>
  );
}
