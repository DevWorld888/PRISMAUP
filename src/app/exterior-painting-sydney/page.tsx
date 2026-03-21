import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Building2, Shield, Sun, Phone, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Painting Sydney | House Painters | Prisma Coatings",
  description:
    "Professional exterior painting in Sydney. Prisma Coatings provides durable, weather-resistant finishes for houses and residential properties. Get a free quote today.",
  keywords: [
    "exterior painting sydney",
    "house painters sydney",
    "exterior painters sydney",
    "residential painting sydney",
    "render painting sydney",
    "weather resistant paint sydney",
    "outside house painting sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/exterior-painting-sydney",
  },
  openGraph: {
    title: "Exterior Painting Sydney | Prisma Coatings",
    description:
      "Durable exterior painting services in Sydney designed to protect and enhance your property.",
    url: "https://www.prismacoatings.com.au/exterior-painting-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
  },
};

const features = [
  "Weather-resistant coatings for Australian conditions",
  "Exterior walls, render, facades and trims",
  "Pressure cleaning and surface preparation",
  "Long-lasting finishes with quality materials",
  "Residential homes, apartments and buildings",
];

const services = [
  {
    title: "Exterior Walls & Facades",
    description:
      "We repaint exterior walls and facades to improve appearance and protect your property from weather damage.",
    icon: Building2,
  },
  {
    title: "Protection & Durability",
    description:
      "We use high-quality coatings designed to handle sun exposure, rain and temperature changes in Sydney.",
    icon: Shield,
  },
  {
    title: "Weather Preparation",
    description:
      "Proper cleaning and preparation ensures better adhesion and longer-lasting results for exterior surfaces.",
    icon: Sun,
  },
];

const faqs = [
  {
    q: "How much does exterior painting cost in Sydney?",
    a: "Costs vary depending on property size, surface condition, accessibility and preparation required. The best option is to request a site inspection and tailored quote.",
  },
  {
    q: "How long does exterior paint last?",
    a: "With proper preparation and quality materials, exterior paint can last several years depending on weather exposure and maintenance.",
  },
  {
    q: "Do you prepare surfaces before painting?",
    a: "Yes. Exterior painting includes pressure cleaning, surface repairs and preparation to ensure a durable and professional finish.",
  },
  {
    q: "Can I get a free quote?",
    a: "Yes. Contact Prisma Coatings to discuss your exterior painting project and receive a free quote.",
  },
];

export default function ExteriorPaintingSydneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/exterior-painting-sydney#service",
    name: "Exterior Painting Sydney",
    serviceType: "Exterior Residential Painting",
    url: "https://www.prismacoatings.com.au/exterior-painting-sydney",
    description:
      "Exterior painting services in Sydney with weather-resistant coatings for long-lasting protection and improved street appeal.",
    areaServed: {
      "@type": "City",
      name: "Sydney",
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
      description:
        "Request a free quote for exterior painting services in Sydney.",
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
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Sydney Exterior Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Exterior Painting Sydney – Durable & Weather-Resistant Finishes
            </h1>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl">
              Prisma Coatings provides professional exterior painting services
              in Sydney designed to protect your property and improve its street
              appeal. We use high-quality materials and proper preparation for
              long-lasting results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#D61C1C] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#b71c1c]"
              >
                Get a Free Quote
              </Link>

              <a
                href="tel:0401508036"
                className="border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A]"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                0401 508 036
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="/images/recentWorks/1.jpeg"
              alt="Exterior house painting in Sydney with weather resistant coating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/images/recentWorks/2.jpeg"
            alt="Exterior surface preparation and pressure cleaning before painting"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Exterior Painting That Protects and Lasts
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Exterior painting is not just about looks. It protects your property
            from sun, rain and environmental damage. That is why proper
            preparation and the right materials are essential.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((f) => (
              <div key={f} className="flex gap-3">
                <CheckCircle className="text-[#D61C1C]" />
                <p>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Exterior Painting Services in Sydney
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white p-8 rounded-2xl">
                  <Icon className="mb-4 text-[#13233A]" />
                  <h3 className="font-bold text-xl">{s.title}</h3>
                  <p className="mt-4 text-gray-600">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#13233A] py-16 text-center">
        <h2 className="text-3xl text-white font-bold">
          Need Exterior Painting in Sydney?
        </h2>

        <p className="text-gray-200 mt-4">
          Contact Prisma Coatings today and get a free quote for your project.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[#D61C1C] text-white px-6 py-4 rounded-md font-semibold"
          >
            Request Quote
          </Link>

          <Link
            href="/interior-painting-sydney"
            className="border border-white text-white px-6 py-4 rounded-md"
          >
            View Interior Painting
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">
          Exterior Painting Sydney – FAQs
        </h2>

        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-bold">{faq.q}</h3>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
