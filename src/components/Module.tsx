import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { play } from "../store/slices/player";
import { Lesson } from "./Lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amoutnOfLessons: number;
}
export function Module({ moduleIndex, title, amoutnOfLessons }: ModuleProps) {
  const dispatch = useDispatch();

  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons;
  });

  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex gap-3 items-center p-4 w-full bg-zinc-800">
        <div className="flex justify-center items-center w-10 h-10 text-xs rounded-full bg-zinc-950">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amoutnOfLessons} aulas</span>
        </div>

        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="flex relative flex-col gap-4 p-6">
          {lessons.map((lesson, lessonIdex) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              duration={lesson.duration}
              onPlay={() => dispatch(play([moduleIndex, lessonIdex]))}
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
