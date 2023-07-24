import ReactPlayer from "react-player";
export function Video() {
  return (
      <div className="w-full bg-zinc-950 aspect-video">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=8hWgkW2nusA&ab_channel=IaraIguti"
          controls={true}
        />
      </div>
  );
}
