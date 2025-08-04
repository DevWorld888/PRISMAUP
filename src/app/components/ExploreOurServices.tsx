import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExploreOurServices = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 ">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Illustration */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/explore-our-services.png"
              alt="Explore Our Services"
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="mb-4">
              <span className="text-sm md:text-base font-medium text-[#13233A]  uppercase tracking-wider">
                Transforming Homes and Businesses with Color
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900  mb-6">
              <span className="text-[#D61C1C]">Expert Painting Services in Sydney</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600  leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
               We provide expert interior and exterior painting services for homes, strata, and businesses in Sydney.
            We guarantee smooth finishes, clean work, and long-lasting results.
            </p>

            <Link href="/contact" className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#D61C1C] hover:bg-[#d61c1ce8] text-amber-50 font-semibold text-sm md:text-base rounded-md transition-colors duration-200 focus:outline-none focus:ring-2  focus:ring-offset-2">
              Get a Free Quote
              <svg 
                className="ml-2 w-4 h-4 md:w-5 md:h-5 text-amber-50" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreOurServices   
