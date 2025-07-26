'use client';

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden" aria-label="Hero section with painting service introduction">
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/painting.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 📝 CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-snug drop-shadow-md">
          Trusted House & Commercial Painting Experts in Sydney
        </h1>

        <p className="text-base sm:text-lg md:text-xl mt-6 text-white max-w-xl font-medium drop-shadow-sm">
          With 9+ years of experience, Prisma Coatings transforms homes, strata and businesses with professional painting solutions.
        </p>

        <a
          href="https://wa.me/614XXXXXXXX"
          className="mt-8 bg-[#D61C1C] hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold text-sm sm:text-base md:text-lg transition duration-300 shadow-lg"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}


