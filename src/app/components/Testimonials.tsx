'use client'
import React, { useState } from 'react'
import Image from "next/image";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Highly recommended! Great service and price. Hally was really helpful from start to finish. He made me feel confident with his professionalism. If you are looking for a company that is responsible and delivers please contact them.",
      name: "Mateo Patino",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocKt0X65FUf5E4-wp6qV-ovRocQm53yBbnKZqqenT632qLigwg=w90-h90-p-rp-mo-br100",
      rating: 5
    },
    {
      text: "They painted me even what they didn't have to paint, good service, recommendable, the attention given by Halley was amazing, they met the deadline and what was agreed.",
      name: "Fernando Solano",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUofxOQEbjNny-UKXyctGO-ixZ8bMjm6cUXkTsKnyEPhwq-Gy0=w90-h90-p-rp-mo-br100",
      rating: 5
    },
    {
      text: "Hally just completed a total interior repaint of my townhouse. I'm so happy with Hally's work - there was a lot of prep work to be done and he was so meticulous. I couldn't be happier with the quality of work. Hally is also super professional and communicative.",
      name: "Lara Wilson",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocIjbHCOwAdQlV_q8yEOGxHfO4Z_6OhZ8rdYz6fVqv6AqSU4tg=w90-h90-p-rp-mo-br100",
      rating: 5
    },
    {
      text: "Hally was extremely professional, on time and helpful. His work was of a very high quality.",
      name: "Michelle Galluzzo",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocKJqAxouQLO099FSQmoRiyVh49WXeI6AHXvsmKZd8WekG6xrg=w90-h90-p-rp-mo-br100",
      rating: 5
    },
    {
      text: "Absolutely OUTSTANDING first class job from Hally and the team at Prisma Coatings! Hally's professionalism, attention to detail, care and quality are second to none. Will be recommending him to everyone that asks me about painting.",
      name: "Chris",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVvr3ehQFsCqzcWFhN2qRfpSNbzTV5VyVv_i_KRVUTkBQvrylxzWQ=w90-h90-p-rp-mo-ba3-br100",
      rating: 5
    }
  ]

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  // Auto-rotate testimonials every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [testimonials.length])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Rating and Title */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-[#D61C1C] text-white text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wide">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-[#13233A] leading-tight">
              Feedback from our <br />
              <span className="text-[#D61C1C]">customers</span>
            </h2>

            <div className="border-l-4 border-[#D61C1C] pl-6">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-5xl font-bold text-[#13233A]">5.0</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${i < 4 ? 'text-yellow-400' : i === 4 ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                        viewBox="0 0 20 20"
                      >
                        {/* {i === 4 ? (
                          // Half star for 4.6 rating
                          <defs>
                            <linearGradient id="half-star">
                              <stop offset="60%" stopColor="currentColor"/>
                              <stop offset="60%" stopColor="#D1D5DB"/>
                            </linearGradient>
                          </defs>
                        ) : null} */}
                        <path
                          // fill={i === 4 ? "url(#half-star)" : "currentColor"}
                          fill={"currentColor"}
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-2xl text-gray-600">(5.0/5)</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-lg font-medium text-gray-700">Google Reviews</span>
              </div>

              <p className="text-gray-700 font-medium text-lg">Our clients rate us as excellent.</p>
              {/* <p className="text-gray-600 text-lg">Based on 147 Google reviews.</p> */}
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-10 relative min-h-[400px]">
              {/* Quote Icon - Positioned to not overlap text */}
              <div className="absolute top-8 right-8 z-10">
                <svg className="w-16 h-16 text-[#D61C1C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="space-y-8 relative z-20 pr-20">
                <p className="text-gray-700 text-xl leading-relaxed italic font-light">
                  {testimonials[currentTestimonial].text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt={`Avatar of ${testimonials[currentTestimonial].name}`}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    {/* Star Rating */}
                    <div className="flex space-x-1 mb-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-colors duration-200 ${index === currentTestimonial
                      ? 'bg-[#D61C1C] hover:bg-red-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
