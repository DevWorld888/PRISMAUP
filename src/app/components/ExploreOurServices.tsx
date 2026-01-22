import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Check } from 'lucide-react'

const ExploreOurServices = () => {
  return (
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Illustration */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/8.jpg"
              alt="Professional painting services in Sydney - interior and exterior painting for homes and businesses"
              className="w-full h-auto rounded-lg"
              width={500}
              height={500}
              priority
              loading="eager"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-4">
              <span 
                className="text-sm md:text-sm font-normal text-gray-600 uppercase tracking-wider"
                itemProp="category"
              >
                Transforming Homes and Businesses with Color
              </span>
            </div>
            
            <h2 
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              itemProp="name"
            >
              <span className="text-[#D61C1C]">Professional Painters in Sydney You Can Trust</span>
            </h2>
            
            <p 
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              itemProp="description"
            >
              Clean finishes, professional service, and long-lasting results — all delivered by experienced painters.
            </p>

            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#D61C1C] hover:bg-[#d61c1ce8] text-amber-50 font-semibold text-sm md:text-base rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              itemProp="url"
              aria-label="Get a free painting quote from Prisma Coatings in Sydney"
              title="Contact us for a free painting estimate"
            >
              Get a Free Quote – No Obligation
              <svg 
                className="ml-2 w-4 h-4 md:w-5 md:h-5 text-amber-50" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="img"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>

            {/* Features with green checkmarks */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 font-medium">9+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 font-medium">Sydney Based</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 font-medium">Fully Insured</span>
              </div>
            </div>

            
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ExploreOurServices   
