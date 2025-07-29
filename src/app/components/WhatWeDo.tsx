import React from 'react'
import {
  Home,
  Building2,
  Paintbrush,
  Palette,
  Brush,
  SprayCan,
} from "lucide-react";


const WhatWeDo = () => {
const services = [
  {
    id: 1,
    title: "Residential Painting",
    icon: <Home />,
    description: "Interior and exterior painting for homes and apartments",
    active: true,
  },
  {
    id: 2,
    title: "Commercial Painting",
    icon: <Building2 />,
    description: "Painting for offices, shops, and commercial buildings",
    active: false,
  },
  {
    id: 3,
    title: "Strata Painting",
    icon: <Paintbrush />,
    description: "Professional strata and apartment complex painting",
    active: false,
  },
  {
    id: 4,
    title: "Color Consulting",
    icon: <Palette />,
    description: "We help you choose the right color combination",
    active: false,
  },
  {
    id: 5,
    title: "Surface Preparation",
    icon: <Brush />,
    description: "We clean and prepare surfaces before painting",
    active: false,
  },
  {
    id: 6,
    title: "Spray Painting",
    icon: <SprayCan />,
    description: "Smooth and modern spray paint finishes",
    active: false,
  },
];



  return (
    <section className="py-16 px-4 bg-[#125386]">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wide">
            WHAT WE DO
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
            Solutions for  {' '}
            <span className="text-brand-primary">Every Space</span>
          </h2>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 "
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#13233A] text-white rounded-full flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900 ">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600  text-center text-sm mb-4">
                {service.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
