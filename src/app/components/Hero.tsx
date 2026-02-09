"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[100vh] w-full overflow-hidden"
      aria-label="Professional painting services in Sydney - Prisma Coatings"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-label="Professional painters working on house painting projects"
        title="Prisma Coatings - Professional Painting Services in Sydney"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 📝 CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-snug drop-shadow-md">
          Professional House & Commercial Painters in Sydney On-Time. Clean. No
          Hidden Costs.
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-white max-w-xl font-medium drop-shadow-sm">
          Expert painters with 10+ years of experience. We transform homes,
          strata buildings, and commercial properties across Sydney with premium
          painting solutions. Licensed, insured & affordable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/contact"
            className="bg-[#D61C1C] hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg transition duration-300 shadow-lg"
            title="Get free painting quote from Prisma Coatings Sydney"
            aria-label="Contact us for a free painting estimate"
          >
            Get Your Free Quote Today
          </Link>

          <Link
            href="/gallery"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg transition duration-300 backdrop-blur-sm"
            title="View our painting portfolio and completed projects"
            aria-label="Browse our painting work gallery"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
