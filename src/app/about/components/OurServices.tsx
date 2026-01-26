import React from "react";
import Link from "next/link";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Residential Painting Services",
      description:
        "Professional interior and exterior house painting designed to protect your home, enhance its value, and deliver long-lasting finishes youcan trust.",
      icon: "🏠",
      position: "top-left",
    },
    {
      id: 2,
      title: "Commercial Painting Solutions",
      description:
        "Professional commercial painting for offices, retail spaces, and industrial buildings. We deliver durable, high-quality finishes that enhance your business image, minimize disruption, and protect your investment long term.",
      icon: "🏢",
      position: "top-right",
    },
    {
      id: 3,
      title: "Wallpapering & Wall Coverings",
      description:
        "Expert wallpaper installation and removal services for homes and commercial spaces. From designer wallpapers to textured wall coverings, we create elegant feature walls and complete room transformations with precision and care.",
      icon: "🎨",
      position: "bottom-left",
    },
    {
      id: 4,
      title: "Restoration & Repair Services",
      description:
        "Specialized surface restoration and repair services for damaged areas, heritage buildings, and weathered exteriors. We restore, strengthen, and protect your property using advanced coating systems and proven craftsmanship.",
      icon: "🔧",
      position: "bottom-right",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D61C1C] font-medium text-lg mb-2">
            Our Painting Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Painting & Coating Solutions
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            Transform your property with professional painting and coating
            services. From residential homes to commercial buildings, we deliver
            durable, high-quality finishes using premium materials and expert
            techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative">
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`
                  relative p-6 sm:p-8 rounded-2xl transition-all duration-300 cursor-pointer group
                  ${
                    index === 0
                      ? "bg-[#D61C1C] text-white"
                      : "bg-[#374151] text-white hover:bg-[#D61C1C] hover:text-white border border-gray-600"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                  text-3xl sm:text-4xl mb-3 sm:mb-4 transition-all duration-300
                  ${
                    index === 0
                      ? "text-white"
                      : "text-[#D61C1C] group-hover:text-white"
                  }
                `}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                  text-sm leading-relaxed mb-4
                  ${
                    index === 0
                      ? "text-white/90"
                      : "text-white/80 group-hover:text-white/90"
                  }
                `}
                >
                  {service.description}
                </p>

                {/* Request a quote link */}
                <Link
                  href="/contact"
                  className={`
                    inline-flex items-center text-sm font-medium transition-all duration-300
                    ${
                      index === 0
                        ? "text-white hover:text-white/80 underline underline-offset-4"
                        : "text-[#D61C1C] group-hover:text-white hover:underline underline-offset-4"
                    }
                  `}
                >
                  Request a quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
