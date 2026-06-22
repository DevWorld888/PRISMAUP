import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const serviceAreas = [
  {
    title: 'Painters Parramatta',
    description:
      'Professional residential and commercial painters servicing Parramatta and surrounding suburbs.',
    href: '/painters-parramatta',
  },
  {
    title: 'Painters Eastern Suburbs',
    description:
      'Premium interior and exterior painting services across Sydney Eastern Suburbs.',
    href: '/painters-eastern-suburbs',
  },
  {
    title: 'Painters Inner West',
    description:
      'Trusted local painters delivering high-quality finishes throughout the Inner West.',
    href: '/painters-inner-west',
  },
  {
    title: 'Painters North West Sydney',
    description:
      'Reliable painting services for homes, strata properties and commercial buildings.',
    href: '/painters-north-west-sydney',
  },
  {
    title: 'Painters Sutherland Shire',
    description:
      'Experienced painters helping homeowners and businesses across Sutherland Shire.',
    href: '/painters-sutherland-shire',
  },
]

const LocalServiceAreas = () => {
  return (
    <section
      className="py-16 px-4 bg-white"
      id="service-areas"
      aria-labelledby="service-areas-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-medium px-4 py-2 rounded-full uppercase tracking-wide">
            Serving Sydney Wide
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2
            id="service-areas-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Local Painting Experts{' '}
            <span className="text-[#D61C1C]">Across Sydney</span>
          </h2>
        </div>

        {/* Description with inline SEO links */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Our team provides residential, commercial and strata painting services across Sydney. We
          proudly serve homeowners, strata managers and businesses throughout{' '}
          <Link
            href="/painters-parramatta"
            className="text-[#125386] font-medium underline underline-offset-2 hover:text-[#D61C1C] transition-colors duration-200"
          >
            Painters Parramatta
          </Link>
          ,{' '}
          <Link
            href="/painters-eastern-suburbs"
            className="text-[#125386] font-medium underline underline-offset-2 hover:text-[#D61C1C] transition-colors duration-200"
          >
            Painters Eastern Suburbs
          </Link>
          ,{' '}
          <Link
            href="/painters-inner-west"
            className="text-[#125386] font-medium underline underline-offset-2 hover:text-[#D61C1C] transition-colors duration-200"
          >
            Painters Inner West
          </Link>
          ,{' '}
          <Link
            href="/painters-north-west-sydney"
            className="text-[#125386] font-medium underline underline-offset-2 hover:text-[#D61C1C] transition-colors duration-200"
          >
            Painters North West Sydney
          </Link>{' '}
          and{' '}
          <Link
            href="/painters-sutherland-shire"
            className="text-[#125386] font-medium underline underline-offset-2 hover:text-[#D61C1C] transition-colors duration-200"
          >
            Painters Sutherland Shire
          </Link>{' '}
          with high-quality workmanship and reliable service.
        </p>

        {/* Service Area Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          role="list"
          aria-label="Sydney painting service areas"
        >
          {serviceAreas.map((area) => (
            <article
              key={area.href}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#D61C1C] transition-all duration-300 flex flex-col"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4" aria-hidden="true">
                <div className="w-14 h-14 bg-[#125386] group-hover:bg-[#D61C1C] text-white rounded-full flex items-center justify-center transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-base font-semibold text-gray-900 text-center mb-3 leading-snug"
                itemProp="name"
              >
                {area.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-gray-600 text-center leading-relaxed mb-5 flex-grow"
                itemProp="description"
              >
                {area.description}
              </p>

              {/* CTA */}
              <div className="text-center mt-auto">
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#125386] group-hover:text-[#D61C1C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:ring-offset-2 rounded"
                  aria-label={`View painting services in ${area.title}`}
                  itemProp="url"
                >
                  View Area
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-[#D61C1C] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#B01616] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base md:text-lg"
          >
            Get a Free Quote for Your Area
          </Link>
        </div>

      </div>
    </section>
  )
}

export default LocalServiceAreas
