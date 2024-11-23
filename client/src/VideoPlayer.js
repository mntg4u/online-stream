import React, { useEffect, useRef } from "react";
import "./VideoPlayer.css";

function VideoPlayer({ streamUrl }) {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play();

      // Enter fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  }, [streamUrl]);

  return (
    <div className="video-player-container">
      <video ref={videoRef} controls autoPlay>
        <source src={streamUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
