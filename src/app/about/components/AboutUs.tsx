import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutUs = () => {
  // Schema structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prisma Coatings",
    "description": "Professional painting services in Sydney with over 9 years of experience specializing in residential, commercial, and strata painting",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "NSW",
      "addressCountry": "AU",
      "addressLocality": "Sydney"
    },
    "areaServed": [
      "Sydney", "Inner West", "Eastern Suburbs", "Northern Beaches", "North Shore", "Western Sydney"
    ],
    "serviceType": [
      "House Painting", "Commercial Painting", "Strata Painting", "Interior Painting", "Exterior Painting"
    ]
  };

  return (
    <>
      {/* Schema markup for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <section className="pt-16 pb-8 sm:pb-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
            <div className="flex justify-center">
                <Image
                src="/images/about-us.png"
                alt="Professional painting team from Prisma Coatings - Sydney's leading house and commercial painting specialists with 9+ years experience"
                width={450}
                height={450}
                className="rounded-lg shadow-lg"
                loading="eager"
                />
            </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <p className="text-[#D61C1C] font-medium text-sm uppercase tracking-wide mb-2">
                About Prisma Coatings
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#13233A] leading-tight">
                Sydney&apos;s Premier Painting Professionals with 9+ Years Excellence
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Established in 2015, Prisma Coatings has become Sydney&apos;s most trusted painting company, 
              delivering exceptional <strong>residential painting</strong>, <strong>commercial painting</strong>, 
              and <strong>strata painting services</strong> across all Sydney suburbs. Our licensed and 
              insured painters bring over 9 years of expertise to every project, from single-room repaints 
              to large-scale commercial developments.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D61C1C] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#13233A] font-medium">
                  Licensed & fully insured painters across all Sydney regions
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D61C1C] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#13233A] font-medium">
                  Premium quality paints & eco-friendly coating solutions
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#D61C1C] rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#13233A] font-medium">
                  Free detailed quotes & comprehensive project consultation
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Whether you need <strong>interior house painting</strong>, <strong>exterior home painting</strong>, 
              <strong>office painting</strong>, or <strong>apartment complex painting</strong>, our skilled team 
              delivers exceptional results on time and within budget. We serve all Sydney areas including 
              Inner West, Eastern Suburbs, Northern Beaches, North Shore, and Western Sydney.
            </p>

            <div className="pt-4">
              <Link href="/contact" className="inline-block bg-[#D61C1C] hover:bg-[#C62828] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs
