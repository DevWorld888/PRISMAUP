import React from 'react'
import { Metadata } from 'next'

const GOOGLE_FORM_URL = "https://forms.gle/c2H7LP2YdLNTECeS8"

export const metadata: Metadata = {
  title: 'Work With Prisma Coatings - Join Our Professional Painting Team in Sydney',
  description: 'Join Prisma Coatings professional painting team in Sydney. We\'re looking for experienced painters and apprentices for residential, commercial, and strata projects.',
  openGraph: {
    title: 'Work With Prisma Coatings - Join Our Professional Painting Team',
    description: 'Join our professional painting team in Sydney. Ongoing projects, respectful worksites, quality-focused work.',
  },
}

const CareersPage = () => {
  const trustChips = [
    'Sydney Based',
    'Professional Team', 
    'Ongoing Projects'
  ]

  const lookingFor = [
    'Experienced painters & apprentices',
    'Reliable and punctual',
    'Attention to detail',
    'Team-first attitude'
  ]

  const requirements = [
    {
      title: 'Legal Work Rights',
      description: 'Legal right to work in Australia'
    },
    {
      title: 'Experience',
      description: 'Painting experience preferred'
    },
    {
      title: 'Tools',
      description: 'Own tools preferred'
    },
    {
      title: 'Work Status',
      description: 'ABN or willing to work as contractor'
    },
    {
      title: 'Location',
      description: 'Availability in Sydney'
    }
  ]

  const expectations = [
    {
      title: 'Clear Communication',
      description: 'Open, honest communication throughout every project'
    },
    {
      title: 'Respectful Worksites',
      description: 'Professional environment with mutual respect'
    },
    {
      title: 'Quality-Focused Projects',
      description: 'Work on projects that prioritize excellence and craftsmanship'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#13233A] text-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work With Prisma Coatings
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join a professional painting team in Sydney
            </p>
            
            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {trustChips.map((chip, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#13233A] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Prisma Coatings is Sydney's trusted painting specialist, delivering exceptional results across 
              residential, commercial, and strata properties. We pride ourselves on professionalism, 
              quality craftsmanship, and creating environments where skilled tradspeople can thrive and 
              grow their careers with ongoing, quality projects.
            </p>
          </div>
        </section>

        {/* Who We're Looking For Section */}
        <section className="py-16 lg:py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#13233A] mb-12 text-center">
              Who We're Looking For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {lookingFor.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#C53030] rounded-full flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#13233A] mb-12 text-center">
              Requirements
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#13233A] mb-3">
                    {req.title}
                  </h3>
                  <p className="text-gray-600">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Expect Section */}
        <section className="py-16 lg:py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#13233A] mb-12 text-center">
              What You Can Expect
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {expectations.map((expectation, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#13233A] mb-4">
                    {expectation.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {expectation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold text-[#13233A] mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out the form and we'll get back to suitable candidates.
              </p>
              
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D61C1C] hover:bg-[#B91C1C] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 mb-6"
              >
                Apply to Work With Us
              </a>
              
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                We review applications regularly. Only suitable candidates will be contacted.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Spacing */}
      <div className="pb-16"></div>
    </div>
  )
}

export default CareersPage
