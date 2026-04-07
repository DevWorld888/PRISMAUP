import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Brush, Building2, Home, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Painters Sutherland Shire Sydney | House Painting | Prisma Coatings",
  description:
    "Professional house painters in the Sutherland Shire. Prisma Coatings provides interior and exterior painting in Cronulla, Miranda, Caringbah, Gymea, Sutherland and surrounding areas.",
  keywords: [
    "painters sutherland shire",
    "house painters sutherland shire",
    "painting services cronulla",
    "painters miranda",
    "painters caringbah",
    "painters gymea",
    "painters sutherland",
    "interior painting sutherland shire",
    "exterior painting sutherland shire",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-sutherland-shire",
  },
  openGraph: {
    title: "Painters Sutherland Shire | Prisma Coatings",
    description:
      "Expert house painters serving the Sutherland Shire. Interior, exterior and residential painting in Cronulla, Miranda, Caringbah, Gymea and more.",
    url: "https://www.prismacoatings.com.au/painters-sutherland-shire",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painters Sutherland Shire Sydney – Prisma Coatings",
      },
    ],
  },
};

const serviceAreas = [
  "Cronulla",
  "Miranda",
  "Caringbah",
  "Gymea",
  "Sutherland",
  "Engadine",
  "Menai",
  "Kirrawee",
  "Woolooware",
  "Sylvania",
  "Loftus",
  "Hurstville",
];

const benefits = [
  "Interior and exterior painting across the Sutherland Shire",
  "Experience with coastal and bushland properties",
  "Durable coatings suited to the Shire's climate and conditions",
  "Residential, apartment and strata painting solutions",
  "Free quotes for Sutherland Shire homeowners",
];

const services = [
  {
    title: "Interior House Painting",
    description:
      "We refresh walls, ceilings, trims and living spaces in Sutherland Shire homes with clean, precise finishes designed to last.",
    icon: Home,
  },
  {
    title: "Exterior House Painting",
    description:
      "Quality exterior coatings for Sutherland Shire homes, with materials chosen to handle coastal air, humidity and sun exposure.",
    icon: Building2,
  },
  {
    title: "Surface Preparation",
    description:
      "All surfaces are properly cleaned, patched and primed before painting — essential in coastal areas where salt and moisture affect adhesion.",
    icon: Brush,
  },
];

const faqs = [
  {
    q: "Do you paint homes in the Sutherland Shire?",
    a: "Yes. Prisma Coatings works throughout the Sutherland Shire including Cronulla, Miranda, Caringbah, Gymea, Sutherland, Menai, Engadine and surrounding suburbs.",
  },
  {
    q: "Do you use paints suited to coastal conditions?",
    a: "Yes. We select appropriate paint systems for coastal and semi-coastal environments to ensure better adhesion and durability in areas exposed to salt air.",
  },
  {
    q: "How much does house painting cost in the Sutherland Shire?",
    a: "Costs vary based on property size, surface condition and scope of work. Contact us for a free, tailored quote.",
  },
  {
    q: "Can I get a free quote for my Sutherland Shire home?",
    a: "Absolutely. Get in touch with Prisma Coatings and we will arrange an inspection and provide a detailed, no-obligation quote.",
  },
];

export default function PaintersSutherlandShirePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-sutherland-shire#service",
    name: "Painters Sutherland Shire Sydney",
    serviceType: "Residential Painting Services",
    url: "https://www.prismacoatings.com.au/painters-sutherland-shire",
    description:
      "Professional house painters serving the Sutherland Shire including Cronulla, Miranda, Caringbah, Gymea and surrounding suburbs.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Sutherland Shire, Sydney",
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
      description: "Request a free quote for painting services in the Sutherland Shire.",
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
              Sutherland Shire Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters in the Sutherland Shire
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings provides professional house painting across the Sutherland Shire,
              delivering quality interior and exterior finishes in Cronulla, Miranda,
              Caringbah, Gymea and surrounding suburbs.
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
              alt="Professional painters working on a home in the Sutherland Shire"
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
            alt="Interior painting service in the Sutherland Shire by Prisma Coatings"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Trusted Painters for Sutherland Shire Homes
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The Sutherland Shire has a unique mix of coastal properties, bushland homes and
            suburban residences. Each environment places different demands on paint systems.
            Prisma Coatings understands these conditions and selects appropriate materials
            and preparation techniques to deliver finishes that perform well over time.
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
              Interior and Exterior Painting in the Sutherland Shire
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From coastal homes in Cronulla to bushland properties in Engadine, we provide
              professional painting services across the entire Sutherland Shire.
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
            Need Painters in the Sutherland Shire?
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Contact Prisma Coatings today and get a free, no-obligation quote for your
            Sutherland Shire painting project.
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
            Sutherland Shire Painters – Frequently Asked Questions
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
