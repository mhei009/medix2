// app/about-us/VideoSection.tsx
"use client"; // Mark this as a client component to handle client-side logic

import React, { useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && videoRef.current) {
      videoRef.current.removeAttribute("autoPlay");
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src="/assets/onboarding-video.mp4"
      height="1000"
      width="1000"
      className="side-img max-w-[50%]" // This preserves the 50% width from your original code
      autoPlay
      muted
      loop
      playsInline
      aria-label="Medix onboarding video"
    />
  );
};

export default VideoSection;
