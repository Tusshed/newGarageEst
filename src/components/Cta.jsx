import { RiPauseFill, RiPlayFill } from "@remixicon/react";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const Cta = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <section className="py-20">
      <div className="container h-[600px] flex justify-center relative bg-white group overflow-hidden rounded-lg">
        {/* React video player */}
        <div>
          <ReactPlayer
            ref={playerRef}
            url="https://d364i7dtinf8p5.cloudfront.net/w4wkzq%2Ffile%2Ff7aa3790fe2e95e175cfbfdac93f6896_cba54884b8b33e6fa63809addb9e8181.mp4?response-content-disposition=inline%3Bfilename%3D%22f7aa3790fe2e95e175cfbfdac93f6896_cba54884b8b33e6fa63809addb9e8181.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1754624750&Signature=hWyoCcAvTZ5NBDF6a67F4hAl-qafRbF5dG-SQwMDdvpU-l7mZrXmLwXWMsWYUhq7mxxjzlDTo1SFL9uMsutfuPy78VChWmcPcpnelmBXgtN1rryctjA~CAzKPVCZfYnQl8-mZHZmKTZnVU8pMNvsrZOfvhqmrqiSu8Q4ihIfanv1aKgNsJ8cwz7zm-Oa5NC2JUS~NfhW9UAovPfcqiWmT2XfJoA5NEZb7~~sFuSFb5W0uj5-LlxzEt9NRTw04eRlecyB4aw1jjypf9Q75a4m~Yq8yOCxq6gZFldr-gsomkSdmmxjYg8zdt7kS0mSdUv99MIaJj7Km2g6cJeiDRf-hQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
            playing={isPlaying}
            playsinline
            width="100%"
            height="100%"
            controls={true}
          />
        </div>

        {/* play/pause button */}
        <button
          className={`absolute inset-0 m-auto bg-neutral-50/90 w-[60px] h-[60px] flex items-center rounded-full justify-center shadow-lg ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
          onClick={handlePlayPause}
        >
          {isPlaying ? <RiPauseFill size={30} /> : <RiPlayFill size={30} />}
        </button>
      </div>
    </section>
  );
};

export default Cta;
