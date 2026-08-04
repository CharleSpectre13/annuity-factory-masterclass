import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CHAPTERS } from "@/data/course";

type ProgressState = {
  completedLessons: Record<string, boolean>;
  markComplete: (lessonKey: string) => void;
  isComplete: (lessonKey: string) => boolean;
  chapterProgress: (chapterId: string) => number;
  overallProgress: () => number;
  reset: () => void;
};

const allLessonKeys = CHAPTERS.flatMap((c) =>
  c.lessons.map((l) => `${c.id}:${l}`),
);

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      markComplete: (lessonKey) =>
        set((s) => ({
          completedLessons: { ...s.completedLessons, [lessonKey]: true },
        })),
      isComplete: (lessonKey) => !!get().completedLessons[lessonKey],
      chapterProgress: (chapterId) => {
        const chapter = CHAPTERS.find((c) => c.id === chapterId);
        if (!chapter) return 0;
        const keys = chapter.lessons.map((l) => `${chapterId}:${l}`);
        const done = keys.filter((k) => get().completedLessons[k]).length;
        return Math.round((done / keys.length) * 100);
      },
      overallProgress: () => {
        const done = allLessonKeys.filter((k) => get().completedLessons[k])
          .length;
        return Math.round((done / allLessonKeys.length) * 100);
      },
      reset: () => set({ completedLessons: {} }),
    }),
    { name: "annuity-factory-progress" },
  ),
);
