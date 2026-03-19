import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle,
  Building2,
  Briefcase,
  Clock3,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Painting Sydney | Professional Painters for Businesses | Prisma Coatings',
  description:
    'Prisma Coatings provides commercial painting services in Sydney for offices, retail spaces, strata properties and business premises. Reliable painters, quality finishes and minimal disruption.',
  keywords: [
    'commercial painting sydney',
    'commercial painters sydney',
    'office painting sydney',
    'retail painting sydney',
    'business painters sydney',
    'professional painters sydney',
    'strata painting sydney',
    'commercial property painting sydney',
  ],
  alternates: {
    canonical: 'https://www.prismacoatings.com.au/commercial-painting-sydney',
  },
  openGraph: {
    title: 'Commercial Painting Sydney | Prisma Coatings',
    description:
      'Professional commercial painting services in Sydney for offices, retail spaces and business properties.',
    url: 'https://www.prismacoatings.com.au/commercial-painting-sydney',
    siteName: 'Prisma Coatings',
    locale: 'en_AU',
    type: 'website',
  },
}

const benefits = [
  'Commercial painting for offices, shops and business premises',
  'Flexible scheduling to reduce disruption to operations',
  'Professional surface preparation and quality finishes',
  'Reliable timelines and clear communication',
  'Suitable for commercial properties, retail and strata projects',
]

const services = [
  {
    title: 'Office Painting',
    description:
      'We deliver clean and professional painting finishes for office environments, workspaces and shared business premises.',
    icon: Briefcase,
  },
  {
    title: 'Retail & Business Spaces',
    description:
      'We help improve the presentation of retail stores, commercial interiors and customer-facing spaces with high-quality finishes.',
    icon: Building2,
  },
  {
    title: 'Minimal Disruption Scheduling',
    description:
      'We plan projects carefully to help reduce disruption and keep your business operations moving as smoothly as possible.',
    icon: Clock3,
  },
]

const faqs = [
  {
    q: 'What types of commercial properties do you paint?',
    a: 'Prisma Coatings works on offices, retail spaces, commercial buildings, strata properties and other business premises across Sydney.',
  },
  {
    q: 'Can commercial painting be scheduled to reduce disruption?',
    a: 'Yes. Commercial projects can be planned around business needs to help reduce operational disruption where possible.',
  },
  {
    q: 'Do you prepare commercial surfaces before painting?',
    a: 'Yes. Surface preparation is an important part of any commercial painting project to ensure a clean, professional and longer-lasting finish.',
  },
  {
    q: 'Can I request a free commercial painting quote?',
    a: 'Yes. Contact Prisma Coatings to discuss your commercial painting project and request a free quote.',
  },
]

export default function CommercialPaintingSydneyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Painting Sydney',
    serviceType: 'Commercial Painting Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Prisma Coatings',
      url: 'https://www.prismacoatings.com.au',
      telephone: '+61 401 508 036',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '20/25 Marlowe St',
        addressLocality: 'Campsie',
        addressRegion: 'NSW',
        postalCode: '2194',
        addressCountry: 'AU',
      },
      areaServed: {
        '@type': 'City',
        name: 'Sydney',
      },
    },
    url: 'https://www.prismacoatings.com.au/commercial-painting-sydney',
    description:
      'Commercial painting services in Sydney for offices, retail spaces, commercial properties and business premises.',
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
              Sydney Commercial Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Commercial Painting Sydney – Professional Painters for Businesses
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings provides commercial painting services in Sydney for offices,
              retail spaces, strata buildings and business properties. We focus on quality,
              professionalism and project planning that helps minimise disruption.
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
          </div>

          <div className="relative min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/4.jpg"
              alt="Commercial painting services in Sydney for offices and business properties"
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
            src="/images/3.jpg"
            alt="Professional commercial painters in Sydney preparing business premises for painting"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Businesses Choose Prisma Coatings
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Reliable Commercial Painting Services with Minimal Disruption
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Commercial painting requires more than just a good finish. Businesses need
            reliable scheduling, professional communication and work that supports the
            presentation of the space without creating unnecessary delays.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Prisma Coatings helps businesses across Sydney improve their premises with
            professional painting services for offices, shops, commercial interiors and
            larger shared properties.
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
              Commercial Services
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Painting Solutions for Sydney Businesses
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We support a range of commercial painting needs, from office interiors to
              business premises and customer-facing retail environments.
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
            Presentation & Protection
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Professional Painting That Supports Your Business Image
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The appearance of your premises affects how clients, staff and visitors
            experience your business. Clean, professional finishes help reinforce trust,
            presentation and attention to detail.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Prisma Coatings combines practical project planning with quality workmanship to
            help commercial properties look sharp, professional and well maintained.
          </p>

          <div className="mt-8 flex items-center gap-2 text-[#D61C1C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              Professional finishes for business and commercial spaces
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/house-painters-sydney"
              className="inline-flex items-center rounded-full border border-[#D61C1C] px-4 py-2 text-sm font-medium text-[#D61C1C] hover:bg-[#D61C1C] hover:text-white transition-colors"
            >
              Explore House Painters Sydney
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#13233A] px-4 py-2 text-sm font-medium text-[#13233A] hover:bg-[#13233A] hover:text-white transition-colors"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/2.jpg"
            alt="Commercial interior painting in Sydney for office and retail spaces"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Free Commercial Quote
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Commercial Painting in Sydney?
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Speak with Prisma Coatings about your business, office or commercial painting
            project and request a free quote today.
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
            Commercial Painting Sydney – Frequently Asked Questions
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