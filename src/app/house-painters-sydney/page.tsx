import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Phone, Brush, Building2, Home, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'House Painters Sydney | Interior & Exterior Painting | Prisma Coatings',
  description:
    'Looking for trusted house painters in Sydney? Prisma Coatings provides professional interior and exterior painting services for homes, apartments and strata properties across Sydney.',
  keywords: [
    'house painters sydney',
    'painters sydney',
    'interior painting sydney',
    'exterior painting sydney',
    'residential painters sydney',
    'apartment painters sydney',
    'professional painters sydney',
    'home painting services sydney',
  ],
  alternates: {
    canonical: 'https://www.prismacoatings.com.au/house-painters-sydney',
  },
  openGraph: {
    title: 'House Painters Sydney | Prisma Coatings',
    description:
      'Professional house painters in Sydney for interior, exterior and residential painting projects.',
    url: 'https://www.prismacoatings.com.au/house-painters-sydney',
    siteName: 'Prisma Coatings',
    locale: 'en_AU',
    type: 'website',
  },
}

const serviceAreas = [
  'Sydney',
  'Inner West',
  'Campsie',
  'Canterbury',
  'Burwood',
  'Marrickville',
  'Ashfield',
  'Strathfield',
]

const benefits = [
  'Professional interior and exterior painting',
  'Careful surface preparation before every project',
  'Clean, reliable and detail-focused workmanship',
  'Residential, apartment and strata painting solutions',
  'Free quotes for Sydney homeowners and property managers',
]

const services = [
  {
    title: 'Interior House Painting',
    description:
      'We refresh walls, ceilings, trims, doors and living spaces with clean finishes that lift the look of your home.',
    icon: Home,
  },
  {
    title: 'Exterior House Painting',
    description:
      'Our team applies durable exterior coatings designed to improve street appeal and help protect your property from Sydney weather.',
    icon: Building2,
  },
  {
    title: 'Surface Preparation',
    description:
      'Proper prep is everything. We patch, sand, clean and prepare surfaces to achieve a longer-lasting result.',
    icon: Brush,
  },
]

const faqs = [
  {
    q: 'How much does house painting cost in Sydney?',
    a: 'Pricing depends on the size of the property, surface condition, access, paint system and scope of work. The best move is a site inspection and a tailored quote.',
  },
  {
    q: 'Do you handle both interior and exterior painting?',
    a: 'Yes. Prisma Coatings provides both interior and exterior house painting services across Sydney.',
  },
  {
    q: 'Do you offer painting for apartments and strata properties?',
    a: 'Yes. We work on houses, apartments, units and strata painting projects depending on the scope.',
  },
  {
    q: 'Can I request a free quote?',
    a: 'Yes. You can contact Prisma Coatings for a free quote and discuss your painting project with the team.',
  },
]

export default function HousePaintersSydneyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'House Painters Sydney',
    serviceType: 'Residential Painting Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Prisma Coatings',
      url: 'https://www.prismacoatings.com.au',
      telephone: '+61 401 508 036',
      areaServed: {
        '@type': 'City',
        name: 'Sydney',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '20/25 Marlowe St',
        addressLocality: 'Campsie',
        addressRegion: 'NSW',
        postalCode: '2194',
        addressCountry: 'AU',
      },
    },
    url: 'https://www.prismacoatings.com.au/house-painters-sydney',
    areaServed: serviceAreas,
    description:
      'Professional house painters in Sydney offering interior and exterior painting for homes, apartments and residential properties.',
  }

  return (
    <main className="bg-white text-[#13233A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Sydney Residential Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Trusted House Painters in Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional house painting services in Sydney,
              helping homeowners transform interiors and exteriors with clean finishes,
              careful preparation and reliable service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>

              <a
                href="tel:0401508036"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0401 508 036
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-200">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="border border-white/20 bg-white/10 px-3 py-2 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/1.jpg"
              alt="Professional house painters in Sydney working on a residential painting project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/recentWorks/3.jpeg"
            alt="Interior house painting service in Sydney by Prisma Coatings"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Professional Painting Services for Sydney Homes
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            If you are searching for experienced house painters in Sydney, Prisma Coatings
            offers a practical mix of workmanship, communication and attention to detail.
            We work on homes, apartments and residential properties with a focus on
            preparation, finish quality and a smooth client experience.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Interior and Exterior House Painting in Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We help homeowners improve the look and feel of their property with painting
              solutions tailored to interior spaces, exterior surfaces and full residential
              repaints.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Sydney Painting Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            House Painting That Improves Appearance and Adds Protection
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A quality paint job does more than change colour. It refreshes tired spaces,
            improves presentation and helps protect surfaces from daily wear and weather
            exposure. That is why proper preparation, premium materials and careful
            application matter.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Whether you need a full repaint, a smaller residential update or support for a
            property preparation project, Prisma Coatings can help with practical advice and
            professional execution.
          </p>

          <div className="mt-8 flex items-center gap-2 text-[#D61C1C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              Trusted by satisfied clients across Sydney
            </span>
          </div>
        </div>

        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/4.jpg"
            alt="Exterior house painting project in Sydney completed by Prisma Coatings"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Free Quote
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Reliable House Painters in Sydney?
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Speak with Prisma Coatings about your residential painting project and request
            a free quote today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center bg-white text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call 0401 508 036
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            House Painters Sydney – Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <article key={faq.q} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold">{faq.q}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
