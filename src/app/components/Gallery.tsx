'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const galleryImages = [
    {
      id: 1,
      src: '/images/1.jpg',
      alt: 'Professional painting work',
      title: 'Interior Painting'
    },
    {
      id: 2,
      src: '/images/2.jpg',
      alt: 'Spray painting service',
      title: 'Spray Coating'
    },
    {
      id: 3,
      src: '/images/3.jpg',
      alt: 'Wall preparation',
      title: 'Surface Preparation'
    },
    {
      id: 4,
      src: '/images/4.jpg',
      alt: 'Paint mixing process',
      title: 'Color Mixing'
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#13233A] ">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-12 bg-red-500 mr-4"></div>
            <span className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
              Our Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Get <span className="text-red-500 italic font-script">inspired.</span>
          </h2>
        </div>

        {/* Gallery Slider */}
        <div className="relative">
          {/* Main Slider Container */}
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={image.id} className="w-full flex-shrink-0 relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                      <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  index === currentIndex
                    ? 'bg-red-500 scale-110'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip for larger screens */}
        <div className="hidden lg:block mt-8">
          <div className="grid grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative h-24 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  index === currentIndex
                    ? 'ring-2 ring-red-500 scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Ready to transform your space with professional painting and coating services? 
            Contact us today for a personalized quote tailored to your project needs.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm md:text-base rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Get a Free Quote
            <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
