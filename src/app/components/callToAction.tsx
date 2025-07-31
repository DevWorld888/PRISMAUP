import React from 'react'
// import Image from 'next/image'

const CallToAction = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-6">Get in touch with us for a free quote and consultation.</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Contact Us
          </a>
        </div>
        {/* <div className="mt-8">
          <Image src="/images/cta-image.jpg" alt="Call to Action Image" width={600} height={400} className="rounded-lg shadow-lg" />
        </div> */}
      </div>
    </section>
  )
}

export default CallToAction
