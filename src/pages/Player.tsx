import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { Video } from "../components/Video";
import { useAppSelector } from "../store";

export function Player() {
  const modules = useAppSelector((state) => {
    return state.player.course.modules;
  });
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex justify-between items-center">
          <Header />

          <button className="flex gap-2 items-center px-3 py-2 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="flex overflow-hidden relative pr-80 rounded-lg border shadow border-zinc-800 bg-zinc-900">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="overflow-y-scroll absolute top-0 right-0 bottom-0 w-80 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amoutnOfLessons={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}