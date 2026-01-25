'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const CtaFinal = () => {
  const router = useRouter()

  const handleQuoteClick = () => {
    router.push('/contact')
  }

  return (
    <section className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl sm:text-2xl text-blue-100 mb-10 font-medium">
          Get a Free Quote from Trusted Sydney Painters
        </p>
        
        {/* CTA Button */}
        <div className="mb-12">
          <button 
            onClick={handleQuoteClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 sm:px-12 rounded-lg text-lg sm:text-xl transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
          >
            Get a Free Quote – No Obligation
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white">
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-sm sm:text-base font-medium">Sydney Based</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-sm sm:text-base font-medium">9+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-xl">✔</span>
            <span className="text-sm sm:text-base font-medium">Fully Insured</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaFinal
