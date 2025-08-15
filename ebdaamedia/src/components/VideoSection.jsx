import React, { useRef, useEffect } from "react";
import "./VideoSection.css";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      
      const handleVideoEnd = () => {
        // Pause at the last frame
        video.pause();
        // Remove the event listener after first use
        video.removeEventListener('ended', handleVideoEnd);
      };

      video.addEventListener('ended', handleVideoEnd);

      const playVideo = () => {
        video.muted = true; // Ensure muted for autoplay
        const promise = video.play();
        
        if (promise !== undefined) {
          promise.catch(() => {
            // Fallback if autoplay fails
            video.play().catch(e => console.log("Playback failed:", e));
          });
        }
      };

      playVideo();

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="video-section">
      <video
        ref={videoRef}
        src="0812 (1).mp4"
        autoPlay
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="background-video"
      />
    </div>
  );
}