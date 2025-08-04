import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* ERROR PAGE text */}
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">
          ERROR PAGE
        </p>
        
        {/* Large 404 */}
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-gray-900 dark:text-white mb-8 leading-none">
          404
        </h1>
        
        {/* Main heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          OOPS, PAGE NOT FOUND!
        </h2>
        
        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-md mx-auto">
          It looks like you&apos;re lost! The page you&apos;re looking for doesn&apos;t exist. 
          Don&apos;t worry, let&apos;s get you back home safely.
        </p>
        
        {/* Back Home Button */}
        <Link 
          href="/"
          className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors duration-200 group"
        >
          BACK HOME
          <svg 
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
