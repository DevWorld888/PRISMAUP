import React from "react";
import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="about-us-heading"
      id="about-us"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Images */}
          <div className="order-2 lg:order-1">
            {/* Mobile: 2x2 Grid más compacto */}
            <div
              className="grid grid-cols-2 gap-2 sm:gap-3 lg:hidden"
              role="img"
              aria-label="Prisma Coatings services showcase"
            >
              <div className="relative h-32 sm:h-40 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutus/1.jpeg"
                  alt="Professional Prisma Coatings team applying protective coating to residential property exterior"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 sm:h-40 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutus/2.jpeg"
                  alt="High-quality coating application process using professional equipment and techniques"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 sm:h-40 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutus/3.jpeg"
                  alt="Professional moving services and comprehensive project management by Prisma Coatings"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-32 sm:h-40 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/aboutus/4.jpeg"
                  alt="Exterior coating services for commercial and residential buildings with premium materials"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Desktop: Layout original */}
            <div
              className="hidden lg:grid grid-cols-2 gap-4"
              role="img"
              aria-label="Professional coating services gallery"
            >
              <div className="space-y-4">
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/aboutus/1.jpeg"
                    alt="Professional Prisma Coatings team applying protective coating to residential property exterior"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/aboutus/2.jpeg"
                    alt="High-quality coating application process using professional equipment and techniques"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/aboutus/3.jpeg"
                    alt="Professional moving services and comprehensive project management by Prisma Coatings"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/aboutus/4.jpeg"
                    alt="Exterior coating services for commercial and residential buildings with premium materials"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-[#D61C1C] text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                ABOUT US
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h2
                id="about-us-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13233A] leading-tight"
              >
                
                A Complete Suite of {" "}
                <span className="text-[#D61C1C]">Professional Painting Services</span>
              </h2>
              <div
                className="w-16 h-1 bg-[#D61C1C] mt-4"
                role="presentation"
              ></div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#13233A] leading-relaxed px-2 sm:px-0">
              At <strong>Prisma Coatings</strong>, we’ve been helping
              <strong> Sydney home owners and businesses</strong> transform their
              spaces for over <strong>10 years</strong>. We understand that
              hiring painters is not just about colour — it’s about
               <strong> trust</strong>, <strong>timelines</strong>, and getting
              the job done
              <strong> right the first time</strong>. That’s why our experienced
              team combines <strong>proven techniques </strong>
              with <strong>premium materials</strong> to deliver
              <strong> clean, long-lasting finishes</strong> with{" "}
              <strong>no surprises</strong>. From{" "}
              <strong>residential homes</strong> to{" "}
              <strong>commercial properties</strong>, we take care of every
              detail with <strong>professionalism</strong>,
              <strong> transparency</strong>, and genuine pride in our work.
            </p>

            {/* Features List */}
            <div className="space-y-4 px-2 sm:px-0" role="list">
              <div className="flex items-center space-x-3" role="listitem">
                <div
                  className="w-2 h-2 bg-[#D61C1C] rounded-full flex-shrink-0"
                  role="presentation"
                ></div>
                <span className="text-[#13233A] text-sm sm:text-base">
                  <strong>Flawless</strong>, professional finishes that stand the test of time  
                </span>
              </div>
              <div className="flex items-center space-x-3" role="listitem">
                <div
                  className="w-2 h-2 bg-[#D61C1C] rounded-full flex-shrink-0"
                  role="presentation"
                ></div>
                <span className="text-[#13233A] text-sm sm:text-base">
                  <strong>Expert guidance </strong>  and <strong>  clear planning </strong>before we start
                </span>
              </div>
              <div className="flex items-center space-x-3" role="listitem">
                <div
                  className="w-2 h-2 bg-[#D61C1C] rounded-full flex-shrink-0"
                  role="presentation"
                ></div>
                <span className="text-[#13233A] text-sm sm:text-base">
                  <strong>Quality materials and equipment</strong> from trusted
                  suppliers
                </span>
              </div>
              <div className="flex items-center space-x-3" role="listitem">
                <div
                  className="w-2 h-2 bg-[#D61C1C] rounded-full flex-shrink-0"
                  role="presentation"
                ></div>
                <span className="text-[#13233A] text-sm sm:text-base">
                  <strong>Comprehensive project management</strong> from start
                  to finish
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 px-2 sm:px-0">
              <Link
                href="/contact"
                aria-label="Contact Prisma Coatings for a free quote"
              >
                <button
                  className="bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
                  type="button"
                >
                  Get a Free Quote – No Obligation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
