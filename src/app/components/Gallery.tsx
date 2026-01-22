'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description?: string;
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/1.jpg',
      alt: 'Professional interior painting service by Prisma Coatings showing high-quality residential wall painting work',
      title: 'Interior Painting',
      description: 'Professional interior painting services with premium quality finishes'
    },
    {
      id: 2,
      src: '/images/2.jpg',
      alt: 'Expert spray coating application by Prisma Coatings team using professional spray equipment',
      title: 'Spray Coating',
      description: 'Advanced spray coating techniques for smooth and durable finishes'
    },
    {
      id: 3,
      src: '/images/3.jpg',
      alt: 'Professional wall surface preparation process before painting by Prisma Coatings specialists',
      title: 'Surface Preparation',
      description: 'Meticulous surface preparation ensuring perfect paint adhesion'
    },
    {
      id: 4,
      src: '/images/4.jpg',
      alt: 'Professional exterior house painting service with weather-resistant coating by Prisma Coatings',
      title: 'Exterior House Painting',
      description: 'Durable exterior painting solutions with premium weather-resistant coatings'
    },
    {
      id: 5,
      src: '/images/5.jpg',
      alt: 'Commercial building industrial coating application by Prisma Coatings specialists',
      title: 'Commercial Coatings',
      description: 'Industrial-grade commercial painting and protective coating services'
    },
    {
      id: 6,
      src: '/images/6.jpg',
      alt: 'Professional cabinet refinishing and furniture painting by Prisma Coatings artisans',
      title: 'Cabinet Refinishing',
      description: 'Custom cabinet painting and furniture refinishing with flawless finishes'
    },
    {
      id: 7,
      src: '/images/7.jpg',
      alt: 'Decorative wall texturing and specialty paint finishes by Prisma Coatings experts',
      title: 'Decorative Finishes',
      description: 'Artistic wall textures and specialty decorative paint techniques'
    },
   
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
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 bg-[#13233A]"
      aria-labelledby="gallery-heading"
      itemScope 
      itemType="https://schema.org/ImageGallery"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-12 bg-red-500 mr-4" aria-hidden="true"></div>
            <span className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
              Our Gallery
            </span>
          </div>
          <h2 
            id="gallery-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            itemProp="name"
          >
            Get <span className="text-red-500 italic font-script">inspired </span> by Our Recent Work.
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-3xl mx-auto" itemProp="description">
            Real projects completed across Sydney — clean finishes,professional service, and results that last.

          </p>
        </header>

        {/* Gallery Slider */}
        <div className="relative" role="region" aria-label="Image carousel" aria-live="polite">
          {/* Main Slider Container */}
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="group"
              aria-label={`Image ${currentIndex + 1} of ${galleryImages.length}`}
            >
              {galleryImages.map((image, index) => (
                <article 
                  key={image.id} 
                  className="w-full flex-shrink-0 relative"
                  itemScope
                  itemType="https://schema.org/ImageObject"
                  aria-hidden={index !== currentIndex}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    itemProp="contentUrl"
                  />
                  <meta itemProp="name" content={image.title} />
                  <meta itemProp="description" content={image.description || image.alt} />
                  <meta itemProp="keywords" content="painting, coating, interior, professional, Prisma Coatings" />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                      <h3 
                        className="text-white text-lg md:text-xl lg:text-2xl font-semibold"
                        itemProp="name"
                      >
                        {image.title}
                      </h3>
                      {image.description && (
                        <p className="text-white/80 text-sm md:text-base mt-1" itemProp="description">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
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
          <nav className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Gallery navigation">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  index === currentIndex
                    ? 'bg-red-500 scale-110'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`View ${image.title} - Image ${index + 1} of ${galleryImages.length}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
                role="tab"
                type="button"
              />
            ))}
          </nav>
        </div>

        {/* Thumbnail Strip for larger screens */}
        <nav className="hidden lg:block mt-8" aria-label="Gallery thumbnails">
          <div className="grid grid-cols-4 gap-4" role="list">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`relative h-24 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  index === currentIndex
                    ? 'ring-2 ring-red-500 scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
                aria-label={`View ${image.title} thumbnail`}
                type="button"
                role="listitem"
              >
                <Image
                  src={image.src}
                  alt={`Thumbnail of ${image.alt}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0vw, 25vw"
                />
              </button>
            ))}
          </div>
        </nav>

        {/* Call to Action */}
        <aside className="text-center mt-12">
          <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Ready to transform your space with professional painting and coating services? 
            Contact us today for a personalized quote tailored to your project needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm md:text-base rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-describedby="gallery-cta-description"
          >
            Request Your Free Quote Today
            <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div id="gallery-cta-description" className="sr-only">
            Contact Prisma Coatings for professional painting and coating services consultation
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Gallery
