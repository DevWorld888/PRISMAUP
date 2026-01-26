import React from 'react'

import BeforeAfterGallery from '../components/BeforeAfterGallery'
import GalleryProjects from './components/GalleryProjects'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#13233A] to-[#1a2c42] py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project <span className="text-red-500 italic">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of completed projects and discover the quality 
            that distinguishes us in every painting and coating job.
          </p>
        </div>
      </div>

      {/* Before & After Gallery */}
      <BeforeAfterGallery />
      
      {/* Traditional Gallery Slider */}
      <GalleryProjects />
    </div>
  )
}

export default page
