import { RiPauseFill, RiPlayFill } from "@remixicon/react";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden group">
          <ReactPlayer
            ref={playerRef}
            url="https://pouch.jumpshare.com/preview/LgHUiOcpm1nMIeNFqxKm2fMCK9YTjLDAY7nggt5tbxBujFudrUCjhROgCJ62VALEkb7jLmddrS3zVkIxFCVkC_UQhI94nTmf4FHW39h-miP2lER-FL76eqxGwmC7glOSwbF8Xc8XeapBtnO9FF6KmG6yjbN-I2pg_cnoHs_AmgI.mp4"
            playing={isPlaying}
            playsinline
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className={`absolute inset-0 m-auto w-14 h-14 rounded-full bg-white bg-opacity-90 shadow-lg flex items-center justify-center transition-opacity duration-300 z-10 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <RiPauseFill size={30} /> : <RiPlayFill size={30} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
