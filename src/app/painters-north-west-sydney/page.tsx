import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Brush, Building2, Home, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Painters North West Sydney | House Painting | Prisma Coatings",
  description:
    "Professional house painters in Sydney's North West. Prisma Coatings provides interior and exterior painting in Castle Hill, Kellyville, Parramatta, Baulkham Hills and surrounding areas.",
  keywords: [
    "painters north west sydney",
    "house painters north west sydney",
    "painting services castle hill",
    "painters kellyville",
    "painters parramatta",
    "painters baulkham hills",
    "painters norwest",
    "interior painting north west sydney",
    "exterior painting north west sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-north-west-sydney",
  },
  openGraph: {
    title: "Painters North West Sydney | Prisma Coatings",
    description:
      "Expert house painters serving Sydney's North West. Interior, exterior and residential painting in Castle Hill, Kellyville, Parramatta, Baulkham Hills and more.",
    url: "https://www.prismacoatings.com.au/painters-north-west-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painters North West Sydney – Prisma Coatings",
      },
    ],
  },
};

const serviceAreas = [
  "Castle Hill",
  "Kellyville",
  "Baulkham Hills",
  "Norwest",
  "Parramatta",
  "Rouse Hill",
  "Winston Hills",
  "Seven Hills",
  "Bella Vista",
  "Pennant Hills",
  "Cherrybrook",
  "Carlingford",
];

const benefits = [
  "Interior and exterior painting across Sydney's North West",
  "Experience with new builds, knockdown-rebuilds and established homes",
  "Thorough preparation for long-lasting, quality finishes",
  "Residential and commercial painting solutions",
  "Free quotes for North West Sydney homeowners",
];

const services = [
  {
    title: "Interior House Painting",
    description:
      "We paint walls, ceilings, trims and living spaces across North West Sydney with clean, precise finishes suited to new builds and established homes alike.",
    icon: Home,
  },
  {
    title: "Exterior House Painting",
    description:
      "Durable exterior coatings that protect and refresh your North West Sydney home, improving curb appeal and standing up to Australian conditions.",
    icon: Building2,
  },
  {
    title: "Surface Preparation",
    description:
      "Proper prep guarantees a lasting finish. We clean, sand, patch and prime surfaces before every painting project.",
    icon: Brush,
  },
];

const faqs = [
  {
    q: "Do you paint homes in North West Sydney?",
    a: "Yes. Prisma Coatings works across Sydney's North West including Castle Hill, Kellyville, Parramatta, Baulkham Hills, Norwest, Rouse Hill and surrounding suburbs.",
  },
  {
    q: "Do you paint new builds in the Hills District?",
    a: "Yes. We regularly work on new residential builds in the Hills District and surrounding North West suburbs.",
  },
  {
    q: "How much does house painting cost in North West Sydney?",
    a: "Costs depend on the size of your home, surface condition, paint system and scope of work. Get in touch for a free quote.",
  },
  {
    q: "Can I get a free quote for my North West Sydney home?",
    a: "Yes. Contact Prisma Coatings and we will organise a convenient inspection and provide a detailed, obligation-free quote.",
  },
];

export default function PaintersNorthWestSydneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-north-west-sydney#service",
    name: "Painters North West Sydney",
    serviceType: "Residential Painting Services",
    url: "https://www.prismacoatings.com.au/painters-north-west-sydney",
    description:
      "Professional house painters serving Sydney's North West including Castle Hill, Kellyville, Parramatta, Baulkham Hills and surrounding suburbs.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "North West Sydney",
    },
    provider: {
      "@type": "PaintingContractor",
      name: "Prisma Coatings",
      url: "https://www.prismacoatings.com.au",
      telephone: "+61 401 508 036",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20/25 Marlowe St",
        addressLocality: "Campsie",
        addressRegion: "NSW",
        postalCode: "2194",
        addressCountry: "AU",
      },
    },
    offers: {
      "@type": "Offer",
      url: "https://www.prismacoatings.com.au/contact",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      description: "Request a free quote for painting services in North West Sydney.",
    },
  };

  return (
    <main className="bg-white text-[#13233A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              North West Sydney Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters in North West Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional house painting throughout Sydney's North West,
              working on new builds and established homes in Castle Hill, Kellyville,
              Parramatta, Baulkham Hills and surrounding suburbs.
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
              alt="Professional painters working on a home in North West Sydney"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/recentWorks/3.jpeg"
            alt="Interior painting service in North West Sydney by Prisma Coatings"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Trusted Painters for North West Sydney Homes
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            North West Sydney is one of the fastest-growing regions in NSW, with a mix of
            brand-new estates and established neighbourhoods. Prisma Coatings has the
            experience to handle both — from fresh new-build painting to full repaints on
            older homes — delivering consistent quality across every project.
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

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Interior and Exterior Painting in North West Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From new-build interior packages to complete exterior repaints, we cover all
              residential painting needs across Sydney's North West.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Free Quote
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Painters in North West Sydney?
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Contact Prisma Coatings today and get a free, no-obligation quote for your
            North West Sydney painting project.
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

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            North West Sydney Painters – Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold">{faq.q}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
