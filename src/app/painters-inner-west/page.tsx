import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Brush, Building2, Home, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Painters Inner West Sydney | House Painting | Prisma Coatings",
  description:
    "Professional house painters in Sydney's Inner West. Prisma Coatings provides interior and exterior painting in Newtown, Marrickville, Leichhardt, Balmain, Campsie and surrounding areas.",
  keywords: [
    "painters inner west sydney",
    "house painters inner west",
    "painting services newtown",
    "painters marrickville",
    "painters leichhardt",
    "painters balmain",
    "painters campsie",
    "interior painting inner west",
    "exterior painting inner west",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-inner-west",
  },
  openGraph: {
    title: "Painters Inner West Sydney | Prisma Coatings",
    description:
      "Expert house painters serving Sydney's Inner West. Interior, exterior and residential painting in Newtown, Marrickville, Leichhardt, Balmain and more.",
    url: "https://www.prismacoatings.com.au/painters-inner-west",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painters Inner West Sydney – Prisma Coatings",
      },
    ],
  },
};

const serviceAreas = [
  "Newtown",
  "Marrickville",
  "Leichhardt",
  "Balmain",
  "Campsie",
  "Annandale",
  "Glebe",
  "Ashfield",
  "Burwood",
  "Strathfield",
  "Petersham",
  "Stanmore",
];

const benefits = [
  "Interior and exterior painting across the Inner West",
  "Experience with terrace houses, semis and Federation-era homes",
  "Thorough surface preparation for long-lasting results",
  "Residential, apartment and strata painting solutions",
  "Free quotes for Inner West homeowners and property managers",
];

const services = [
  {
    title: "Interior House Painting",
    description:
      "We refresh walls, ceilings, trims and living spaces in Inner West homes with clean, lasting finishes tailored to your style.",
    icon: Home,
  },
  {
    title: "Exterior House Painting",
    description:
      "Durable exterior coatings that protect and enhance your Inner West property, whether it's a terrace, semi or freestanding house.",
    icon: Building2,
  },
  {
    title: "Surface Preparation",
    description:
      "Older Inner West homes often need careful patching, sanding and priming. We handle all prep work properly before any painting begins.",
    icon: Brush,
  },
];

const faqs = [
  {
    q: "Do you paint homes across the Inner West?",
    a: "Yes. Prisma Coatings works throughout Sydney's Inner West including Newtown, Marrickville, Leichhardt, Balmain, Campsie, Ashfield, Burwood, Strathfield and surrounding suburbs.",
  },
  {
    q: "Do you paint older terrace and Federation homes?",
    a: "Yes. We regularly work on older Inner West properties, including terraces, semis and Federation-style homes that require more detailed preparation and care.",
  },
  {
    q: "How much does house painting cost in the Inner West?",
    a: "Pricing varies based on property size, surface condition and scope. Contact us for a free inspection and tailored quote.",
  },
  {
    q: "Can I get a free quote for my Inner West property?",
    a: "Absolutely. Get in touch with Prisma Coatings and we will arrange a time to assess and quote your painting project at no obligation.",
  },
];

export default function PaintersInnerWestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-inner-west#service",
    name: "Painters Inner West Sydney",
    serviceType: "Residential Painting Services",
    url: "https://www.prismacoatings.com.au/painters-inner-west",
    description:
      "Professional house painters serving Sydney's Inner West including Newtown, Marrickville, Leichhardt, Balmain, Campsie and surrounding suburbs.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Inner West, Sydney",
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
      description: "Request a free quote for painting services in Sydney's Inner West.",
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
              Inner West Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters in Sydney's Inner West
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings provides professional house painting throughout Sydney's Inner West,
              delivering quality interior and exterior finishes in Newtown, Marrickville,
              Leichhardt, Balmain and surrounding suburbs.
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
              alt="Professional painters working on a home in Sydney's Inner West"
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
            alt="Interior painting service in Sydney's Inner West by Prisma Coatings"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Trusted Painters for Inner West Homes
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The Inner West is home to some of Sydney's most character-filled properties —
            Federation terraces, heritage semis and modern apartments. Prisma Coatings brings
            the experience to work with all of them, applying the right preparation techniques
            and quality finishes that suit each property type.
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
              Interior and Exterior Painting in the Inner West
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Whether you need a single room repainted or a full exterior refresh, we cover
              all residential painting needs across Sydney's Inner West.
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
            Need Painters in the Inner West?
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Contact Prisma Coatings today and get a free, no-obligation quote for your
            Inner West painting project.
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
            Inner West Painters – Frequently Asked Questions
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
