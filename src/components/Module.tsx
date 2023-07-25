import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";

import { Lesson } from "./Lesson";

import { useStore } from "../zustend-store";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const { currentLessonIndex, currentModuleIndex, play, lessons } = useStore((store) => {
    return {
      lessons: store.course?.modules[moduleIndex].lessons,
      currentLessonIndex: store.currentLessonIndex,
      currentModuleIndex: store.currentModuleIndex,
      play: store.play,
    };
  });

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex gap-3 items-center p-4 w-full bg-zinc-800">
        <div className="flex justify-center items-center w-10 h-10 text-xs rounded-full bg-zinc-950">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="flex relative flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIdex) => {
              const isCurrent =
                moduleIndex === currentModuleIndex &&
                lessonIdex === currentLessonIndex;
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => play([moduleIndex, lessonIdex])}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
