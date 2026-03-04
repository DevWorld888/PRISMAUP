'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface BeforeAfterItem {
  id: number
  before: string
  after: string
  title: string
  beforeAlt: string
  afterAlt: string
  beforeTitle?: string
  afterTitle?: string
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
      before: "/images/beforeafter/staircase-painting-sydney-before.webp",
      after: "/images/beforeafter/staircase-painting-sydney-after.webp",
      title: "Interior Staircase Painting Sydney – Before & After",
      beforeAlt:
        "Interior staircase before painting renovation in Sydney showing unfinished walls and surface preparation`",
      afterAlt:
        "Interior staircase after professional painting in Sydney with smooth walls and premium finish",
      beforeTitle: "Interior Staircase Painting Sydney - Before",
      afterTitle: "Interior Staircase Painting Sydney - After",
      description:
        "Interior staircase painting transformation in a Sydney home. Professional wall preparation and premium paint application delivering a modern and clean finish.",
      category: "interior",
    },
    {
      id: 2,
      before: "/images/beforeafter/interior-room-painting-sydney-before.webp",
      after: "/images/beforeafter/interior-room-painting-sydney-after.webp",
      title: "Interior Room Painting Sydney - Wall Restoration Before & After",
      beforeAlt:
        "Interior room before painting renovation in Sydney showing damaged walls and old paint",
      afterAlt:
        "Interior room after professional painting in Sydney with smooth white walls and restored window frames",
      beforeTitle: "Interior Room Painting Sydney - Before",
      afterTitle: "Interior Room Painting Sydney - After",
      description:
        "Interior house painting transformation in Sydney including wall repair, surface preparation and premium paint application for a clean modern finish.",
      category: "interior",
    },
    {
      id: 3,
      before: "/images/beforeafter/roof-painting-sydney-before.webp",
      after: "/images/beforeafter/roof-painting-sydney-after.webp",
      title: "Roof Painting Sydney - Complete Roof Restoration Before & After",
      beforeAlt:
        "House roof before restoration in Sydney showing faded roof tiles and weathered surface",
      afterAlt:
        "House roof after professional roof painting in Sydney with clean dark tiles and restored finish",
      beforeTitle: "Roof Painting Sydney - Before",
      afterTitle: "Roof Painting Sydney - After",
      description:
        "Professional roof painting and restoration in Sydney including roof cleaning, tile preparation and protective coating for long lasting durability.",
      category: "exterior",
    },
    {
      id: 4,
      before: "/images/beforeafter/7.jpeg",
      after: "/images/beforeafter/8.jpeg",
      title:
        "Residential Exterior Painting Sydney - Full Makeover Before & After",
      beforeAlt:
        "Home exterior before painting in Sydney showing peeling paint and surface wear",
      afterAlt:
        "Home exterior after professional painting in Sydney with clean finish and multi coat application",
      beforeTitle: "Residential Exterior Painting Sydney - Before",
      afterTitle: "Residential Exterior Painting Sydney - After",
      description:
        "Complete home exterior makeover in Sydney with professional surface preparation and multi-coat application for lasting results.",
      category: "residential",
    },
    {
      id: 5,
      before: "/images/beforeafter/9.jpeg",
      after: "/images/beforeafter/10.jpeg",
      title: "Exterior Colour Change Sydney - House Repaint Before & After",
      beforeAlt:
        "House exterior before colour change repaint in Sydney with old faded colour",
      afterAlt:
        "House exterior after colour change repaint in Sydney with fresh modern exterior finish",
      beforeTitle: "Exterior Colour Change Sydney - Before",
      afterTitle: "Exterior Colour Change Sydney - After",
      description:
        "Dramatic exterior colour change repaint in Sydney with expert preparation and high-quality finishes by professional house painters.",
      category: "residential",
    },
    {
      id: 6,
      before: "/images/beforeafter/11.jpeg",
      after: "/images/beforeafter/12.jpeg",
      title: "Heritage House Painting Sydney - Restoration Before & After",
      beforeAlt:
        "Heritage home interior before restoration painting in Sydney showing aged walls and original details",
      afterAlt:
        "Heritage home interior after restoration painting in Sydney preserving character with a clean premium finish",
      beforeTitle: "Heritage House Painting Sydney - Before",
      afterTitle: "Heritage House Painting Sydney - After",
      description:
        "Heritage house painting in Sydney preserving architectural character. Careful preparation and premium paint systems for a respectful restoration.",
      category: "residential",
    },
    {
      id: 7,
      before: "/images/beforeafter/17.jpeg",
      after: "/images/beforeafter/18.jpeg",
      title: "Modern Interior Painting Sydney - Feature Wall Before & After",
      beforeAlt:
        "Modern living area before interior painting in Sydney with unfinished walls and neutral base",
      afterAlt:
        "Modern living area after interior painting in Sydney with contemporary colour palette and feature wall finish",
      beforeTitle: "Modern Interior Painting Sydney - Before",
      afterTitle: "Modern Interior Painting Sydney - After",
      description:
        "Contemporary interior painting in Sydney using modern colour palettes. Professional wall finishing and clean lines for a high-end result.",
      category: "interior",
    },
    {
      id: 8,
      before: "/images/beforeafter/19.jpeg",
      after: "/images/beforeafter/20.jpeg",
      title: "Living Room Painting Sydney - Transformation Before & After",
      beforeAlt:
        "Living room before interior painting in Sydney showing old wall colour and uneven finish",
      afterAlt:
        "Living room after professional interior painting in Sydney with smooth finish and refreshed colour",
      beforeTitle: "Living Room Painting Sydney - Before",
      afterTitle: "Living Room Painting Sydney - After",
      description:
        "Living room transformation in Sydney with professional interior painting and premium application for a clean, bright finish.",
      category: "interior",
    },
    {
      id: 9,
      before: "/images/beforeafter/21.JPG",
      after: "/images/beforeafter/22.JPG",
      title: "Bedroom Painting Sydney - Calming Makeover Before & After",
      beforeAlt:
        "Bedroom before painting in Sydney with old colour and worn interior walls",
      afterAlt:
        "Bedroom after professional painting in Sydney with calming colour scheme and smooth finish",
      beforeTitle: "Bedroom Painting Sydney - Before",
      afterTitle: "Bedroom Painting Sydney - After",
      description:
        "Bedroom repaint in Sydney with calming colour schemes. Professional interior painting including ceilings and trim for a complete refresh.",
      category: "interior",
    },
    {
      id: 10,
      before: "/images/beforeafter/23.JPG",
      after: "/images/beforeafter/24.JPG",
      title: "Kitchen Painting Sydney - Cabinets & Walls Before & After",
      beforeAlt:
        "Kitchen before painting in Sydney showing outdated cabinets and wall finish",
      afterAlt:
        "Kitchen after cabinet and wall painting in Sydney with durable finish suitable for kitchen areas",
      beforeTitle: "Kitchen Painting Sydney - Before",
      afterTitle: "Kitchen Painting Sydney - After",
      description:
        "Kitchen cabinet and wall painting in Sydney using durable coatings suited for kitchens. Clean preparation and long-lasting finish.",
      category: "interior",
    },
  ];
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
              alt={item.beforeAlt}
              title={item.beforeTitle || `Before - ${item.title}`}
              fill
              className="object-cover"
              loading='lazy'
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Before
            </div>
          </div>
          
          {/* After Image */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={item.after}
              alt={item.afterAlt}
              title={item.afterTitle || `After - ${item.title}`}
              fill
              className="object-cover"
              loading='lazy'
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
        <div className="p-3 md:p-3">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600  text-sm md:text-base line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>
    )
  }


  const BeforeAftercard1 = ({ item }: { item: BeforeAfterItem }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [showAfter, setShowAfter] = useState(false)
    return (
      <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5"
       onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden m-1.5 rounded-[5px] cursor-pointer"
             onClick={() => setSelectedImage(item)}>
          <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
            <Image
                src={item.before}
                alt={item.beforeAlt}
                title={item.beforeTitle || `Before - ${item.title}`}
                fill
                className="object-cover rounded-[5px]"
                loading='lazy'
              />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
            <Image
                src={item.after}
                alt={item.afterAlt}
                title={item.afterTitle || `After - ${item.title}`}
                fill
                className="object-cover rounded-[5px]"
                loading='lazy'
              />
          </div>
          
          {/* Hover Overlay with Eye Icon */}
          <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 rounded-[5px] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-white text-center">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <p className="text-sm font-medium">View Details</p>
            </div>
          </div>
        </div>
        
        {/* Image Caption */}
        <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-700 text-center">
            {showAfter ? (
              <span className="flex items-center justify-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {item.afterTitle || `${item.title} - Completed`}
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {item.beforeTitle || `${item.title} - Original Condition`}
              </span>
            )}
          </p>
        </div>
        
        <div className="h-max w-full rounded px-3 py-2"> 
          <p className="my-1 font-sans text-base text-slate-600 antialiased">
            {item.description}
          </p>
        </div>
        <div className="w-full rounded px-3 pb-3 pt-1.5">
          <button 
          onClick={(e) => {
              e.stopPropagation()
              setShowAfter(!showAfter)
            }}
          className="inline-flex rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none cursor-pointer">
            {showAfter ? 'Show Before' : 'Show After'}
          </button>
        </div>
      </div>
    );
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
            Recent <span className="text-red-500 italic">Painting Projects </span>in Sydney
            
          </h2>
          <p className="text-gray-600  text-lg md:text-xl max-w-3xl mx-auto">
            Discover the complete transformation of our projects. Each job
            reflects our commitment to quality and excellence.
          </p>
        </div>

        {/* Category Filter */}
        {/*<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
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
        </div>*/}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 place-items-center md:place-items-stretch">
          {filteredData.map((item) => (
            <BeforeAftercard1 key={item.id} item={item} />
          ))}
          
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291.94-5.709 2.291M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0L12 3 4 7"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No projects in this category
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Select another category to view more work.
            </p>
          </div>
        )}

        {/* Modal for detailed view */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Images - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image
                    src={selectedImage.before}
                    alt={`Before - ${selectedImage.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image
                    src={selectedImage.after}
                    alt={`After - ${selectedImage.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BeforeAfterGallery
