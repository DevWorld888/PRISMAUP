import React from 'react'
import type { Metadata } from 'next'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import OurTeam from './components/OurTeam'

export const metadata: Metadata = {
  title: 'About Prisma Coatings | Professional Painting Company Sydney - 9+ Years Experience',
  description: 'Learn about Prisma Coatings, Sydney\'s trusted painting professionals with over 9 years of experience. Expert residential, commercial & strata painting services across Sydney.',
  keywords: [
    'about prisma coatings',
    'painting company sydney',
    'professional painters sydney',
    'experienced painters',
    'licensed painters sydney',
    'residential painting experts',
    'commercial painting specialists',
    'strata painting professionals',
    'house painters sydney',
    'painting contractors sydney'
  ],
  openGraph: {
    title: 'About Prisma Coatings | Sydney\'s Leading Painting Professionals',
    description: 'Discover why Prisma Coatings is Sydney\'s most trusted painting company. 9+ years of excellence in residential, commercial & strata painting services.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Prisma Coatings | Professional Painting Services Sydney',
    description: 'Learn about Sydney\'s leading painting professionals with 9+ years of experience in residential, commercial & strata painting.',
  },
  alternates: {
    canonical: 'https://www.prismacoatings.com.au/about',
  },
}

const page = () => {
  return (
    <>
      <AboutUs />
      <OurServices />
      <OurTeam />
    </>
  )
}

export default page
