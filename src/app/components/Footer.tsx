'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { trackPhoneClick } from '../utils/analytics'

const services = [
  { label: 'Residential Painting Sydney', href: '/painters-sydney' },
  { label: 'Commercial Painting Sydney', href: '/commercial-painting-sydney' },
  { label: 'Strata Painting Sydney', href: '/strata-painting-sydney' },
  { label: 'Interior Painting Sydney', href: '/interior-painting-sydney' },
  { label: 'Exterior Painting Sydney', href: '/exterior-painting-sydney' },
]

const serviceAreas = [
  { label: 'Painters Parramatta', href: '/painters-parramatta' },
  { label: 'Painters Eastern Suburbs', href: '/painters-eastern-suburbs' },
  { label: 'Painters Inner West', href: '/painters-inner-west' },
  { label: 'Painters North West Sydney', href: '/painters-north-west-sydney' },
  { label: 'Painters Sutherland Shire', href: '/painters-sutherland-shire' },
]

const resources = [
  {
    label: 'How Much Does House Painting Cost in Parramatta?',
    href: '/blog/how-much-does-house-painting-cost-in-parramatta',
  },

]

const Footer = () => {
  const handlePhoneClick = () => trackPhoneClick("Footer Phone Click");
  
  return (
    <footer className="bg-[#13233A] text-white" role="contentinfo">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Company info */}
          <div>
            <Link href="/" aria-label="Prisma Coatings home">
              <Image
                src="/logo/logoDark.webp"
                alt="Prisma Coatings – Professional Painters Sydney"
                width={300}
                height={250}
                className="h-20 w-auto mb-5"
              />
            </Link>
            <h2 className="sr-only">Prisma Coatings</h2>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-xs">
              Professional residential, commercial and strata painting services across Sydney.
              Delivering premium finishes, reliable service and long-lasting results.
            </p>

            <address className="not-italic space-y-3 mb-6">
              <a
                href="tel:+61401508036"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
                aria-label="Call Prisma Coatings on 0401 508 036"
              >
                <Phone className="w-4 h-4 text-[#D61C1C] flex-shrink-0" aria-hidden="true" />
                0401 508 036
              </a>
              <a
                onClick={handlePhoneClick}
                href="mailto:info@prismacoatings.com.au"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Email Prisma Coatings"
              >
                <Mail className="w-4 h-4 text-[#D61C1C] flex-shrink-0" aria-hidden="true" />
                info@prismacoatings.com.au
              </a>
              <span className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-[#D61C1C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                20/25 Marlowe St, Campsie NSW 2194
              </span>
            </address>

            <Link
              href="/contact"
              className="inline-block bg-[#D61C1C] hover:bg-[#B01616] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#D61C1C] focus:ring-offset-2 focus:ring-offset-[#13233A]"
              aria-label="Get a free painting quote from Prisma Coatings"
            >
              Get a Free Quote
            </Link>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6" aria-label="Follow Prisma Coatings on social media">
              <a
                href="https://www.facebook.com/profile.php?id=61572618991416"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Follow Prisma Coatings on Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/prismacoatings"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Follow Prisma Coatings on Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.42.333 4.844.63c-.611.318-1.13.74-1.65 1.26C2.674 2.41 2.252 2.929 1.934 3.54c-.297.576-.499 1.25-.558 2.197C1.317 6.686 1.304 7.093 1.304 10.714s.013 4.028.072 4.976c.059.947.261 1.621.558 2.197.318.611.74 1.13 1.26 1.65.52.52 1.039.942 1.65 1.26.576.297 1.25.499 2.197.558.948.059 1.355.072 4.976.072s4.028-.013 4.976-.072c.947-.059 1.621-.261 2.197-.558.611-.318 1.13-.74 1.65-1.26.52-.52.942-1.039 1.26-1.65.297-.576.499-1.25.558-2.197.059-.948.072-1.355.072-4.976s-.013-4.028-.072-4.976c-.059-.947-.261-1.621-.558-2.197C21.253 4.154 20.831 3.635 20.311 3.115c-.52-.52-1.039-.942-1.65-1.26C18.085.333 17.411.131 16.464.072 15.516.013 15.109 0 11.488 0h.529zm-.481 2.168c3.518 0 3.934.014 5.324.072.89.041 1.374.191 1.696.318.427.166.732.364 1.052.684.32.32.518.625.684 1.052.127.322.277.806.318 1.696.058 1.39.072 1.806.072 5.324s-.014 3.934-.072 5.324c-.041.89-.191 1.374-.318 1.696-.166.427-.364.732-.684 1.052-.32.32-.625.518-1.052.684-.322.127-.806.277-1.696.318-1.39.058-1.806.072-5.324.072s-3.934-.014-5.324-.072c-.89-.041-1.374-.191-1.696-.318-.427-.166-.732-.364-1.052-.684-.32-.32-.518-.625-.684-1.052-.127-.322-.277-.806-.318-1.696-.058-1.39-.072-1.806-.072-5.324s.014-3.934.072-5.324c.041-.89.191-1.374.318-1.696.166-.427.364-.732.684-1.052.32-.32.625-.518 1.052-.684.322-.127.806-.277 1.696-.318 1.39-.058 1.806-.072 5.324-.072zm0 3.69c-3.67 0-6.642 2.973-6.642 6.642s2.973 6.642 6.642 6.642 6.642-2.973 6.642-6.642-2.973-6.642-6.642-6.642zm0 10.954c-2.38 0-4.312-1.932-4.312-4.312s1.932-4.312 4.312-4.312 4.312 1.932 4.312 4.312-1.932 4.312-4.312 4.312zm8.458-11.206c0 .858-.694 1.552-1.552 1.552s-1.552-.694-1.552-1.552.694-1.552 1.552-1.552 1.552.694 1.552 1.552z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-1">
              Services
            </h3>
            <div className="w-8 h-0.5 bg-[#D61C1C] mb-5" aria-hidden="true" />
            <nav aria-label="Painting services">
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 focus:outline-none focus:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-1">
              Service Areas
            </h3>
            <div className="w-8 h-0.5 bg-[#D61C1C] mb-5" aria-hidden="true" />
            <nav aria-label="Painting service areas in Sydney">
              <ul className="space-y-3">
                {serviceAreas.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-200 focus:outline-none focus:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4 — Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-1">
              Resources
            </h3>
            <div className="w-8 h-0.5 bg-[#D61C1C] mb-5" aria-hidden="true" />
            <nav aria-label="Painting guides and resources">
              <ul className="space-y-4">
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 leading-snug block focus:outline-none focus:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">License & Insurance</p>
              <p className="text-xs text-gray-300">ABN: 50 643 858 557</p>
              <p className="text-xs text-gray-300 mt-0.5">Fully Licensed & Insured</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <nav aria-label="Secondary footer navigation">
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2 text-xs text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors duration-200">
                  Work With Us
                </Link>
              </li>
            </ul>
          </nav>

          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Prisma Coatings. Designed by{' '}
            <a
              href="https://www.iaugustodev.com/"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev888
            </a>
          </p>

        </div>
      </div>

    </footer>
  )
}

export default Footer
