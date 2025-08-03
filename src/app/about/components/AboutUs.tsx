import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className="pt-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
            <div className="flex justify-center">
                <Image
                src="/images/about-us.png"
                alt="About Us"
                width={450}
                height={450}
                
                />
            </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <p className="text-orange-500 font-medium text-sm uppercase tracking-wide mb-2">
                About Us
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Are The Best Painting Service Company
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla auctor elit, et mollis 
              massa ullamcorper in. Vestibulum egestas, neque non accumsan mollis, dui lacus dictum 
              nunc, a scelerisque nibh magna auctor tellus.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Aliquam lacinia in tellus et dignissim.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Duis sed eros eget lectus sagittis fringilla.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-800 font-medium">
                  Suspendisse molestie diam ut velit.
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
              ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="pt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
