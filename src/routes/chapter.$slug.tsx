import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CHAPTERS } from "@/data/course";
import { Chapter1Content } from "@/components/course/chapter1";
import { Chapter2Content } from "@/components/course/chapter2";
import { Chapter3Content } from "@/components/course/chapter3";
import { CourseShell } from "@/components/course/shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/chapter/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const index = CHAPTERS.findIndex((c) => c.slug === slug);
  if (index < 0) throw notFound();
  const chapter = CHAPTERS[index];
  const prev = index > 0 ? CHAPTERS[index - 1] : null;
  const next = index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null;

  return (
    <CourseShell>
      {chapter.id === "ch1" && <Chapter1Content />}
      {chapter.id === "ch2" && <Chapter2Content />}
      {chapter.id === "ch3" && <Chapter3Content />}

      <nav className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6">
        {prev ? (
          <Button asChild variant="secondary">
            <Link to="/chapter/$slug" params={{ slug: prev.slug }}>
              <ArrowLeft className="size-4" /> {prev.shortTitle}
            </Link>
          </Button>
        ) : (
          <Button asChild variant="ghost">
            <Link to="/">Course home</Link>
          </Button>
        )}
        {next ? (
          <Button asChild variant="accent">
            <Link to="/chapter/$slug" params={{ slug: next.slug }}>
              {next.shortTitle} <ArrowRight className="size-4" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="accent">
            <Link to="/playbook">
              Team playbook <ArrowRight className="size-4" />
            </Link>
          </Button>
        )}
      </nav>
    </CourseShell>
  );
}
