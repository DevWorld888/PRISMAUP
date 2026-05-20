"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Skip video on mobile — saves bandwidth, avoids layout jank
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
    <section
      className="relative h-[100vh] w-full overflow-hidden"
      aria-label="Professional painting services in Sydney - Prisma Coatings"
    >
      {/* LCP IMAGE — priority-loaded WebP, shown immediately on all devices */}
      <Image
        src="/images/aboutus/exterior-house-painting-sydney.webp"
        alt="Professional exterior house painters in Sydney – Prisma Coatings"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover z-0"
      />

      {/* VIDEO — desktop only, injected after page load, fades over the image */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoReady(true)}
        aria-hidden="true"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-snug drop-shadow-md">
          House Painters Sydney – Professional Residential & Commercial Painting
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 text-white font-semibold drop-shadow-sm">
          On-Time. Clean. No Hidden Costs.
        </h2>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-white max-w-xl font-medium drop-shadow-sm">
          Professional house painters in Sydney with over 10 years of experience
          delivering high-quality interior and exterior painting services. We
          transform homes, strata properties and commercial spaces with premium
          finishes built to last.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/contact"
            className="bg-[#D61C1C] hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg transition duration-300 shadow-lg"
            title="Get free painting quote from Prisma Coatings Sydney"
            aria-label="Contact us for a free painting estimate"
          >
            Get Your Free Quote
          </Link>

          <Link
            href="/gallery"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg transition duration-300 backdrop-blur-sm"
            title="View our painting portfolio and completed projects"
            aria-label="Browse our painting work gallery"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
