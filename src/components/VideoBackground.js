import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
const VideoBackground = ({ movieId }) => {
  const videoTrailer = useSelector((store) => store.movies?.trailerVideo);
  useVideoTrailer(movieId);

  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoTrailer?.key) return;

    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT) {
          resolve(window.YT);
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(tag);
          window.onYouTubeIframeAPIReady = () => {
            resolve(window.YT);
          };
        }
      });
    };

    loadYouTubeAPI().then((YT) => {
      const newPlayer = new YT.Player("youtube-player", {
        videoId: videoTrailer.key,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          playsinline: 1,
          start: 10,
          
          loop: 1,
          playlist: videoTrailer.key,
        },
        events: {
            onReady: (e) => {
              e.target.playVideo();
              setPlayer(e.target);
          
              const durationCheck = setInterval(() => {
                const currentTime = e.target.getCurrentTime();
                const duration = e.target.getDuration();
          
                if (duration && currentTime >= duration - 10) {
                  e.target.pauseVideo();
                  clearInterval(durationCheck);
                }
              }, 500); 
            },
          }
          
      });
    });
  }, [videoTrailer]);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div
        id="youtube-player"
        className="absolute top-0 left-0 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[14%]"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent z-10"></div>
      <button
        className="absolute z-30 bottom-64 right-24 backdrop-blur-md text-white px-2 py-2 rounded-full flex items-center gap-2 hover:bg-black/20 transition pointer-events-auto border"
        onClick={toggleMute}
      >
        {isMuted ? (
          <>
            <IoVolumeMute size={20} />
          </>
        ) : (
          <>
            <IoVolumeHigh size={20} />
          </>
        )}
      </button>

    </div>
  );
};

export default VideoBackground;
