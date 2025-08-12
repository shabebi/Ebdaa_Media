import React, { useRef, useEffect } from "react";
import "./VideoSection.css";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  }, []);

  return (
    <div className="video-section">
      <video ref={videoRef} src="/0812 (1).mp4" autoPlay muted></video>
    </div>
  );
}
