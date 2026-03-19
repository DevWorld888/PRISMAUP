import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Home, Paintbrush, Palette, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Interior Painting Sydney | Professional House Painters | Prisma Coatings',
  description:
    'Prisma Coatings provides professional interior painting services in Sydney for homes, apartments and residential spaces. Get a free quote for walls, ceilings, trims and full interior repaints.',
  keywords: [
    'interior painting sydney',
    'interior painters sydney',
    'house painters sydney',
    'home interior painting sydney',
    'apartment painters sydney',
    'ceiling painting sydney',
    'wall painting sydney',
    'trim painting sydney',
  ],
  alternates: {
    canonical: 'https://www.prismacoatings.com.au/interior-painting-sydney',
  },
  openGraph: {
    title: 'Interior Painting Sydney | Prisma Coatings',
    description:
      'Professional interior painting services in Sydney for homes, apartments and living spaces.',
    url: 'https://www.prismacoatings.com.au/interior-painting-sydney',
    siteName: 'Prisma Coatings',
    locale: 'en_AU',
    type: 'website',
  },
}

const features = [
  'Walls, ceilings, trims and doors',
  'Full interior repaints and room refreshes',
  'Apartment and residential painting',
  'Careful surface preparation before painting',
  'Clean workmanship and attention to detail',
]

const services = [
  {
    title: 'Walls & Ceilings',
    description:
      'We repaint interior walls and ceilings to give your home a cleaner, brighter and more modern look.',
    icon: Home,
  },
  {
    title: 'Trims, Doors & Details',
    description:
      'From trims and skirting boards to doors and detailed finishes, we focus on the elements that lift the whole space.',
    icon: Paintbrush,
  },
  {
    title: 'Colour Guidance',
    description:
      'We help clients choose paint colours and finish types that suit the light, mood and style of each room.',
    icon: Palette,
  },
]

const faqs = [
  {
    q: 'How much does interior painting cost in Sydney?',
    a: 'The cost depends on the size of the area, the number of rooms, surface condition, ceiling height and how much preparation is required. The best option is to request a tailored quote.',
  },
  {
    q: 'Do you paint apartments as well as houses?',
    a: 'Yes. Prisma Coatings provides interior painting for houses, apartments, units and other residential properties across Sydney.',
  },
  {
    q: 'Do you prepare the surfaces before painting?',
    a: 'Yes. Surface preparation is a key part of a quality finish. This can include patching, sanding, cleaning and preparing surfaces before paint is applied.',
  },
  {
    q: 'Can I get a free quote for interior painting?',
    a: 'Yes. You can contact Prisma Coatings to discuss your project and request a free quote.',
  },
]

export default function InteriorPaintingSydneyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Interior Painting Sydney',
    serviceType: 'Interior Residential Painting',
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
    url: 'https://www.prismacoatings.com.au/interior-painting-sydney',
    description:
      'Professional interior painting services in Sydney for homes, apartments and residential spaces including walls, ceilings, trims and doors.',
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
              Sydney Interior Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Interior Painting Sydney – Professional Home Painters
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings provides professional interior painting services in Sydney
              for homes, apartments and residential spaces. We help transform walls,
              ceilings, trims and living areas with clean finishes and careful workmanship.
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
              src="/images/2.jpg"
              alt="Interior painting service in Sydney by Prisma Coatings for walls and ceilings"
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
            src="/images/1.jpg"
            alt="Professional interior house painters in Sydney working inside a residential property"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Prisma Coatings
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Reliable Interior Painters for Homes and Apartments in Sydney
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Looking for professional interior painting in Sydney? Prisma Coatings helps
            homeowners refresh and modernise their spaces with high-quality finishes,
            practical advice and a strong focus on preparation.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Whether you need a full repaint or selected rooms updated, our team works with
            care and attention to detail so the final result feels clean, polished and
            long-lasting.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-1 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Interior Painting Services
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Complete Interior Painting Solutions in Sydney
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We help improve the look and feel of your home with interior painting services
              designed for everyday living spaces, bedrooms, hallways, kitchens and more.
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
            Surface Preparation Matters
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Better Preparation. Better Finish. Better Interior Result.
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Interior painting is not just about applying paint. Good preparation is what
            separates an average result from a finish that looks premium and lasts longer.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Prisma Coatings takes the time to prepare surfaces properly before painting.
            That means a smoother final appearance, more consistent coverage and a cleaner
            overall result for your home.
          </p>

          <div className="mt-8 flex items-center gap-2 text-[#D61C1C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              Quality finishes for Sydney homes and apartments
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
            src="/images/3.jpg"
            alt="Interior wall preparation and painting process in a Sydney home"
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
            Need Interior Painting in Sydney?
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Talk to Prisma Coatings about your project and get a free quote for interior
            painting services in Sydney.
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
            Interior Painting Sydney – Frequently Asked Questions
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