import { useEffect, useRef, useState } from "react";
import { formaDuration } from "../utils/formatDuration";
import { formatTimePosted } from "../utils/formatTimePosted";

type VideoItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const FORMATTER_VIEW = Intl.NumberFormat(undefined, { notation: "compact" });

const VideoItems = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoItemProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return;
    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);
  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          alt=""
          className={`block h-full w-full object-cover transition-[border-radius] duration-200 ease-in-out ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }`}
        />
        <div className=" absolute bottom-1 right-1 bg-secondary-dark p-0.5 text-sm text-secondary">
          {formaDuration(duration)}
        </div>
        <video
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
          className={`absolute inset-0 block h-full object-cover transition-opacity  duration-200  ${
            isVideoPlaying ? "opacity-100 delay-200 ease-in" : "opacity-0"
          }`}
        ></video>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className=" flex-shrink-0">
          <img
            src={channel.profileUrl}
            alt=""
            className="h-12 w-12 rounded-full"
          />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-sm text-secondary-text">
            {channel.name}
          </a>
          <div className="text-sm text-secondary-text ">
            {FORMATTER_VIEW.format(views)} Views •{formatTimePosted(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItems;
