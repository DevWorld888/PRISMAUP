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
    title: "Residential Painting Services",
    icon: <Home />,
    description: "Professional interior and exterior house painting for homes, apartments, and residential properties with premium quality paints",
    keywords: "house painting, residential painting, interior painting, exterior painting",
    active: true,
  },
  {
    id: 2,
    title: "Commercial Painting Services",
    icon: <Building2 />,
    description: "Expert commercial painting for offices, retail stores, warehouses, and business facilities with minimal disruption",
    keywords: "commercial painting, office painting, business painting, retail painting",
    active: false,
  },
  {
    id: 3,
    title: "Strata & Apartment Complex Painting",
    icon: <Paintbrush />,
    description: "Specialized strata painting services for apartment buildings, condos, and multi-unit residential complexes",
    keywords: "strata painting, apartment painting, condo painting, multi-unit painting",
    active: false,
  },
  {
    id: 4,
    title: "Professional Color Consulting",
    icon: <Palette />,
    description: "Expert color consultation and design advice to help you choose the perfect color schemes for your space",
    keywords: "color consulting, paint color advice, interior design, color schemes",
    active: false,
  },
  {
    id: 5,
    title: "Surface Preparation & Priming",
    icon: <Brush />,
    description: "Thorough surface cleaning, sanding, priming, and preparation to ensure long-lasting paint results",
    keywords: "surface preparation, paint preparation, priming, sanding, paint prep",
    active: false,
  },
  {
    id: 6,
    title: "Professional Spray Painting",
    icon: <SprayCan />,
    description: "High-quality spray painting services for smooth, even finishes on cabinets, furniture, and large surfaces",
    keywords: "spray painting, cabinet painting, furniture painting, airless spraying",
    active: false,
  },
];



  return (
    <section 
      className="py-16 px-4 bg-[#125386]" 
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wide">
            WHAT WE DO
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Professional Painting Solutions for{' '}
            <span className="text-brand-primary">Every Space</span>
          </h1>
          <p className="text-lg text-white/90 mt-4 max-w-3xl mx-auto">
            Expert painting services for residential, commercial, and strata properties. 
            Quality workmanship with premium materials and professional color consulting.
          </p>
        </div>


        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Painting services offered"
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4" aria-hidden="true">
                <div className="w-16 h-16 bg-[#13233A] text-white rounded-full flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h2 
                className="text-xl font-semibold text-center mb-3 text-gray-900"
                itemProp="name"
              >
                {service.title}
              </h2>

              {/* Description */}
              <p 
                className="text-gray-600 text-center text-sm mb-4"
                itemProp="description"
              >
                {service.description}
              </p>

              {/* Hidden keywords for SEO */}
              <meta itemProp="keywords" content={service.keywords} />
              <meta itemProp="serviceType" content="PaintingService" />
              <meta itemProp="provider" content="Prisma Coatings" />

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
