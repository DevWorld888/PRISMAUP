'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

const GalleryProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)

  const projectImages: ProjectImage[] = [
    {
      id: 1,
      src: '/images/1.jpg',
      alt: 'Professional interior painting service by Prisma Coatings - living room transformation with premium wall coatings',
      title: 'Modern Interior Transformation',
      category: 'interior',
      description: 'Complete interior painting project featuring premium wall coatings and professional color consultation for a contemporary living space.'
    },
    {
      id: 2,
      src: '/images/2.jpg',
      alt: 'Expert spray coating application by Prisma Coatings using professional equipment for smooth finishes',
      title: 'Professional Spray Coating',
      category: 'commercial',
      description: 'Advanced spray coating application using state-of-the-art equipment for achieving smooth, durable finishes on commercial surfaces.'
    },
    {
      id: 3,
      src: '/images/3.jpg',
      alt: 'Professional surface preparation and wall treatment process by Prisma Coatings specialists',
      title: 'Surface Preparation Excellence',
      category: 'preparation',
      description: 'Meticulous surface preparation and treatment process ensuring optimal paint adhesion and long-lasting results.'
    },
    {
      id: 4,
      src: '/images/4.jpg',
      alt: 'Exterior house painting with weather-resistant coating by Prisma Coatings professionals',
      title: 'Exterior House Makeover',
      category: 'exterior',
      description: 'Complete exterior house painting using premium weather-resistant coatings designed to protect and beautify your home.'
    },
    {
      id: 5,
      src: '/images/5.jpg',
      alt: 'Industrial commercial building coating application by Prisma Coatings specialists',
      title: 'Industrial Coating Solutions',
      category: 'commercial',
      description: 'Large-scale industrial coating application providing protective and aesthetic solutions for commercial buildings.'
    },
    {
      id: 6,
      src: '/images/6.jpg',
      alt: 'Custom cabinet refinishing and furniture painting by Prisma Coatings artisans',
      title: 'Cabinet Refinishing Project',
      category: 'interior',
      description: 'Professional cabinet refinishing and custom furniture painting with precision craftsmanship and attention to detail.'
    },
    {
      id: 7,
      src: '/images/7.jpg',
      alt: 'Decorative wall texturing and specialty finishes by Prisma Coatings experts',
      title: 'Decorative Wall Textures',
      category: 'specialty',
      description: 'Artistic wall texturing and specialty decorative finishes showcasing advanced painting techniques and creative design.'
    },
    {
      id: 8,
      src: '/images/8.jpg',
      alt: 'Professional painting team from Prisma Coatings working on residential project',
      title: 'Professional Team at Work',
      category: 'team',
      description: 'Our skilled painting professionals demonstrating expertise and professionalism on a residential painting project.'
    },
    {
      id: 9,
      src: '/images/9.jpg',
      alt: 'High-quality paint finish demonstration showing Prisma Coatings superior craftsmanship',
      title: 'Premium Paint Finishes',
      category: 'specialty',
      description: 'Demonstration of premium paint finishes and superior craftsmanship that defines Prisma Coatings quality standards.'
    },
    {
      id: 10,
      src: '/images/10.jpg',
      alt: 'Prisma Coatings professional painting services showcase and company expertise overview',
      title: 'Company Expertise Showcase',
      category: 'company',
      description: 'Overview of Prisma Coatings comprehensive painting services and professional expertise across various project types.'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projectImages.length },
    { id: 'interior', name: 'Interior', count: projectImages.filter(img => img.category === 'interior').length },
    { id: 'exterior', name: 'Exterior', count: projectImages.filter(img => img.category === 'exterior').length },
    { id: 'commercial', name: 'Commercial', count: projectImages.filter(img => img.category === 'commercial').length },
    { id: 'specialty', name: 'Specialty', count: projectImages.filter(img => img.category === 'specialty').length }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? projectImages 
    : projectImages.filter(img => img.category === selectedCategory)

  const openModal = (image: ProjectImage) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#13233A] to-[#1a2f4a]"
      aria-labelledby="projects-gallery-heading"
      itemScope 
      itemType="https://schema.org/ImageGallery"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-12 bg-red-500 mr-4" aria-hidden="true"></div>
            <span className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-wider">
              Project Gallery
            </span>
          </div>
          <h1 
            id="projects-gallery-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            itemProp="name"
          >
            Our <span className="text-red-500 italic font-script">Projects</span> Gallery
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto" itemProp="description">
            Explore our comprehensive portfolio of professional painting and coating projects. From residential transformations to commercial applications, discover the quality craftsmanship and attention to detail that makes Prisma Coatings the preferred choice for discerning clients.
          </p>
        </header>

        {/* Category Filter */}
        <nav className="mb-12" aria-label="Project categories filter">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#13233A] ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
                aria-pressed={selectedCategory === category.id}
                type="button"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </nav>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          role="grid"
          aria-label="Project images gallery"
        >
          {filteredImages.map((image, index) => (
            <article
              key={image.id}
              className="group cursor-pointer"
              itemScope
              itemType="https://schema.org/ImageObject"
              role="gridcell"
              tabIndex={0}
              onClick={() => openModal(image)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openModal(image)
                }
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    priority={index < 4}
                    itemProp="contentUrl"
                  />
                  <meta itemProp="name" content={image.title} />
                  <meta itemProp="description" content={image.description} />
                  <meta itemProp="keywords" content={`painting, coating, ${image.category}, professional, Prisma Coatings`} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full mb-2 capitalize">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg leading-tight" itemProp="name">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                    
                    {/* View Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-2/3">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-96 object-cover"
                    priority
                  />
                </div>
                <div className="p-6 md:w-1/3">
                  <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full mb-3 capitalize">
                    {selectedImage.category}
                  </span>
                  <h3 id="modal-title" className="text-xl font-bold text-gray-900 mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <aside className="text-center mt-16 bg-white/5 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Let our experienced team transform your space with professional painting and coating services. 
            Contact us today for a personalized consultation and free project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm md:text-base rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#13233A] transform hover:scale-105"
            >
              Get Free Quote
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold text-sm md:text-base rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#13233A] hover:bg-white/10"
            >
              Learn More About Us
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default GalleryProjects
