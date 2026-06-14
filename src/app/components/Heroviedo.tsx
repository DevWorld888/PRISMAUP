"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const loadVideo = () => {
      const video = videoRef.current;
      if (!video) return;

      video.src = "/videos/hero.mp4";
      video.load();
    };

    if (document.readyState === "complete") {
      loadVideo();
    } else {
      window.addEventListener("load", loadVideo, { once: true });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      preload="none"
      className={`hidden md:block absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-700 ${
        videoReady ? "opacity-100" : "opacity-0"
      }`}
      autoPlay
      loop
      muted
      playsInline
      onLoadedData={() => setVideoReady(true)}
      aria-hidden="true"
    />
  );
}