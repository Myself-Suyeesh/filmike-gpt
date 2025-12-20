/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { MOVIE_VIDEO_URL } from "@/utils/constants";

interface VideoProps {
  movieId: string;
}

const VideoBackground: React.FC<VideoProps> = ({ movieId }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full h-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={MOVIE_VIDEO_URL + movieId}
        autoPlay
        loop
        muted
        playsInline
        className="w-screen aspect-video h-full object-cover"
      />
    </div>
  );
};

export default VideoBackground;
