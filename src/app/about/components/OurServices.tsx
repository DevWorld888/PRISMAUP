import React from 'react'
import Image from 'next/image'

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Residential Painting Services",
      description: "Professional interior and exterior house painting with premium quality paints. We transform homes with expert color consultation, surface preparation, and lasting protective coatings for all residential properties.",
      icon: "🏠",
      position: "top-left"
    },
    {
      id: 2,
      title: "Commercial Painting Solutions", 
      description: "Complete commercial painting services for offices, retail spaces, and industrial buildings. Our team delivers durable, professional finishes that enhance your business image and protect your investment.",
      icon: "🏢",
      position: "top-right"
    },
    {
      id: 3,
      title: "Wallpapering & Wall Coverings",
      description: "Expert wallpaper installation and removal services. From designer wallpapers to textured wall coverings, we create stunning feature walls and complete room transformations with precision and care.", 
      icon: "🎨",
      position: "bottom-left"
    },
    {
      id: 4,
      title: "Restoration & Repair Services",
      description: "Specialized restoration services for damaged surfaces, historic buildings, and weathered exteriors. We restore and protect your property with advanced coating technologies and traditional craftsmanship.",
      icon: "🔧",
      position: "bottom-right"
    }
  ]

  return (
    <section className="py-16 px-4 bg-[#1F2937]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D61C1C] font-medium text-lg mb-2">Our Painting Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Painting & Coating Solutions
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed">
            Transform your property with our comprehensive painting and coating services. From residential homes to commercial buildings, we deliver exceptional results using premium materials, expert techniques, and years of professional experience in the painting industry.
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
                  ${index === 0 
                    ? 'bg-[#D61C1C] text-white' 
                    : 'bg-[#374151] text-white hover:bg-[#D61C1C] hover:text-white border border-gray-600'
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  text-3xl sm:text-4xl mb-3 sm:mb-4 transition-all duration-300
                  ${index === 0 
                    ? 'text-white' 
                    : 'text-[#D61C1C] group-hover:text-white'
                  }
                `}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-sm leading-relaxed
                  ${index === 0 
                    ? 'text-white/90' 
                    : 'text-white/80 group-hover:text-white/90'
                  }
                `}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
