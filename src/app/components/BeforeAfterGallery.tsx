'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface BeforeAfterItem {
  id: number
  before: string
  after: string
  title: string
  description: string
  category: string
}

const BeforeAfterGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<BeforeAfterItem | null>(null)

  // Sample data - replace with your actual images
  const beforeAfterData: BeforeAfterItem[] = [
    {
      id: 1,
      before: '/images/1.jpg', // Replace with actual before image
      after: '/images/2.jpg',  // Replace with actual after image
      title: 'Interior Painting Transformation',
      description: 'Complete interior makeover with premium paint and professional finish',
      category: 'interior'
    },
    {
      id: 2,
      before: '/images/3.jpg',
      after: '/images/4.jpg',
      title: 'Exterior Wall Coating',
      description: 'Weather-resistant coating application for long-lasting protection',
      category: 'exterior'
    },
    {
      id: 3,
      before: '/images/1.jpg',
      after: '/images/3.jpg',
      title: 'Commercial Space Renovation',
      description: 'Professional commercial painting with modern color schemes',
      category: 'commercial'
    },
    {
      id: 4,
      before: '/images/2.jpg',
      after: '/images/4.jpg',
      title: 'Residential Exterior Painting',
      description: 'Complete exterior transformation with high-quality materials',
      category: 'residential'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' }
  ]

  const filteredData = selectedCategory === 'all' 
    ? beforeAfterData 
    : beforeAfterData.filter(item => item.category === selectedCategory)

  const BeforeAfterCard = ({ item }: { item: BeforeAfterItem }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [showAfter, setShowAfter] = useState(false)

    return (
      <div 
        className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setSelectedImage(item)}
      >
        {/* Image Container */}
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
          {/* Before Image */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={item.before}
              alt={`Before - ${item.title}`}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Before
            </div>
          </div>
          
          {/* After Image */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={item.after}
              alt={`After - ${item.title}`}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              After
            </div>
          </div>

          {/* Toggle Button */}
          <button
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation()
              setShowAfter(!showAfter)
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m0-4l4-4" />
            </svg>
          </button>

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-white text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <p className="text-sm font-medium">View details</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600  text-sm md:text-base line-clamp-2">
            {item.description}
          </p>
          <div className="mt-3">
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
              {item.category}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white ">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-1 h-12 bg-red-500 mr-4"></div>
            <span className="text-sm md:text-base font-medium text-gray-600  uppercase tracking-wider">
              Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Before & <span className="text-red-500 italic">After</span>
          </h2>
          <p className="text-gray-600  text-lg md:text-xl max-w-3xl mx-auto">
            Discover the complete transformation of our projects. Each job reflects our commitment to quality and excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredData.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291.94-5.709 2.291M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0L12 3 4 7" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects in this category</h3>
            <p className="text-gray-600 dark:text-gray-400">Select another category to view more work.</p>
          </div>
        )}

        {/* Modal for detailed view */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedImage.title}</h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Images */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Before</h4>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={selectedImage.before}
                        alt={`Before - ${selectedImage.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">After</h4>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={selectedImage.after}
                        alt={`After - ${selectedImage.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Modal Description */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Category:</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full capitalize">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default BeforeAfterGallery
