import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Brush, Building2, Home, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Painters Eastern Suburbs Sydney | House Painting | Prisma Coatings",
  description:
    "Professional house painters in Sydney's Eastern Suburbs. Prisma Coatings provides interior and exterior painting in Bondi, Coogee, Randwick, Paddington and surrounding areas.",
  keywords: [
    "painters eastern suburbs sydney",
    "house painters eastern suburbs",
    "painting services bondi",
    "painters randwick",
    "painters paddington sydney",
    "painters coogee",
    "painters woollahra",
    "interior painting eastern suburbs",
    "exterior painting eastern suburbs",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-eastern-suburbs",
  },
  openGraph: {
    title: "Painters Eastern Suburbs Sydney | Prisma Coatings",
    description:
      "Expert house painters serving Sydney's Eastern Suburbs. Interior, exterior and residential painting in Bondi, Randwick, Paddington and more.",
    url: "https://www.prismacoatings.com.au/painters-eastern-suburbs",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
  },
};

const serviceAreas = [
  "Bondi",
  "Bondi Beach",
  "Coogee",
  "Randwick",
  "Paddington",
  "Woollahra",
  "Maroubra",
  "Bronte",
  "Rose Bay",
  "Double Bay",
  "Vaucluse",
  "Clovelly",
];

const benefits = [
  "Interior and exterior painting across the Eastern Suburbs",
  "Thorough surface preparation before every project",
  "Clean, detail-focused workmanship with minimal disruption",
  "Residential, apartment and strata painting solutions",
  "Free quotes for Eastern Suburbs homeowners",
];

const services = [
  {
    title: "Interior House Painting",
    description:
      "We refresh walls, ceilings, trims and living spaces across the Eastern Suburbs with clean, lasting finishes that lift the feel of your home.",
    icon: Home,
  },
  {
    title: "Exterior House Painting",
    description:
      "Our team applies durable exterior coatings that improve street appeal and protect your Eastern Suburbs property from Sydney's coastal conditions.",
    icon: Building2,
  },
  {
    title: "Surface Preparation",
    description:
      "We patch, sand and prepare all surfaces properly before painting — the foundation of a finish that lasts.",
    icon: Brush,
  },
];

const faqs = [
  {
    q: "Do you paint homes in the Eastern Suburbs?",
    a: "Yes. Prisma Coatings works across Sydney's Eastern Suburbs including Bondi, Randwick, Coogee, Paddington, Woollahra and surrounding areas.",
  },
  {
    q: "What painting services do you offer in the Eastern Suburbs?",
    a: "We provide interior painting, exterior painting, full residential repaints and strata painting in the Eastern Suburbs.",
  },
  {
    q: "How much does house painting cost in the Eastern Suburbs?",
    a: "Cost depends on the size of your property, surface condition and scope of work. Contact us for a free, no-obligation quote.",
  },
  {
    q: "Can I get a free quote for my Eastern Suburbs home?",
    a: "Absolutely. Contact Prisma Coatings today and we will arrange a convenient time to inspect and quote your painting project.",
  },
];

export default function PaintersEasternSuburbsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-eastern-suburbs#service",
    name: "Painters Eastern Suburbs Sydney",
    serviceType: "Residential Painting Services",
    url: "https://www.prismacoatings.com.au/painters-eastern-suburbs",
    description:
      "Professional house painters serving Sydney's Eastern Suburbs including Bondi, Randwick, Paddington, Coogee and surrounding areas.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Eastern Suburbs, Sydney",
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
      description: "Request a free quote for painting services in the Eastern Suburbs.",
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
              Eastern Suburbs Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters in Sydney's Eastern Suburbs
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional house painting across the Eastern Suburbs,
              helping homeowners in Bondi, Randwick, Paddington and beyond achieve clean,
              lasting finishes with reliable service from start to finish.
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
              alt="Professional painters working on a home in Sydney's Eastern Suburbs"
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
            alt="Interior painting service in Sydney's Eastern Suburbs by Prisma Coatings"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Trusted Painters for Eastern Suburbs Homes
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Eastern Suburbs homes range from classic Federation-style houses to modern
            apartments and coastal properties. Each has unique surfaces, conditions and
            requirements. Prisma Coatings brings the experience to handle them all, with
            consistent preparation, quality materials and a clean working approach.
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
              Interior and Exterior Painting in the Eastern Suburbs
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From single-room refreshes to complete property repaints, we cover all
              residential painting needs across Sydney's Eastern Suburbs.
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

      {/* CTA SECTION */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Free Quote
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Painters in the Eastern Suburbs?
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Contact Prisma Coatings today and get a free, no-obligation quote for your
            Eastern Suburbs painting project.
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
            Eastern Suburbs Painters – Frequently Asked Questions
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
