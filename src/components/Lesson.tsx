import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  isCurrent = false,
  onPlay,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex gap-3 items-center text-sm text-zinc-400 data-[active=true]:text-orange-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-orange-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
