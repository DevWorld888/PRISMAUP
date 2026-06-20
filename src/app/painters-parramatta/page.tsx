import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Phone,
  Brush,
  Building2,
  Home,
  Star,
  Shield,
  Clock,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: "Painters Parramatta | Prisma Coatings Sydney",
  description:
    "Professional painters in Parramatta. Prisma Coatings offers residential, commercial and strata painting across Parramatta and Western Sydney. Free quotes.",
  keywords: [
    "painters parramatta",
    "house painters parramatta",
    "residential painters parramatta",
    "commercial painters parramatta",
    "painting services parramatta",
    "interior painters parramatta",
    "exterior painters parramatta",
    "professional painters parramatta",
    "painting contractors parramatta",
    "local painters parramatta",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-parramatta",
  },
  openGraph: {
    title: "Painters Parramatta | Prisma Coatings",
    description:
      "Expert residential, commercial and strata painters in Parramatta. Interior and exterior painting services across Parramatta and Western Sydney.",
    url: "https://www.prismacoatings.com.au/painters-parramatta",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painters Parramatta Sydney – Prisma Coatings",
      },
    ],
  },
};

const serviceAreas = [
  "Parramatta",
  "Westmead",
  "Merrylands",
  "Granville",
  "Harris Park",
  "Rosehill",
  "Woodville",
  "Toongabbie",
  "Wentworthville",
  "Northmead",
  "Pendle Hill",
  "Guildford",
];

const benefits = [
  "Residential, commercial and strata painting in Parramatta",
  "Fully licensed and insured painting contractors in NSW",
  "Thorough surface preparation before every project",
  "Premium paints from Dulux and Haymes for lasting results",
  "On-time delivery and clean, respectful work sites",
  "Free, detailed quotes with no obligation",
];

const processSteps = [
  {
    step: "01",
    title: "Free Quote & Consultation",
    description:
      "We visit your Parramatta property, assess the scope of work, discuss your colour preferences and provide a clear, itemised quote at no cost.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    description:
      "All surfaces are cleaned, sanded, filled and primed before a single brush stroke of topcoat is applied. Preparation is what separates a finish that lasts from one that doesn't.",
  },
  {
    step: "03",
    title: "Professional Painting",
    description:
      "Our experienced painters apply premium coatings with care and precision, working efficiently to minimise disruption to your home or business.",
  },
  {
    step: "04",
    title: "Final Inspection & Clean-Up",
    description:
      "We walk through the completed job with you, address any touch-ups on the spot and leave your property clean and tidy before we go.",
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description:
      "All our painters are licensed in NSW and we carry comprehensive public liability insurance — protecting you and your property throughout every project.",
  },
  {
    icon: Star,
    title: "5-Star Google Reviews",
    description:
      "Our reputation in Western Sydney is built on consistent, quality workmanship. Property owners in Parramatta and surrounding suburbs recommend us by name.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We show up when we say we will, complete work within the agreed timeframe and keep you informed at every stage of the project.",
  },
  {
    icon: Users,
    title: "Local Knowledge",
    description:
      "We know Parramatta's property landscape — from Federation-era homes in Harris Park to modern high-rises in the Parramatta CBD — and tailor our approach accordingly.",
  },
];

const faqs = [
  {
    question: "Do you provide painting services in Parramatta?",
    answer:
      "Yes. Prisma Coatings works throughout Parramatta and the surrounding Western Sydney region, including Westmead, Merrylands, Granville, Harris Park, Toongabbie, Wentworthville and nearby suburbs.",
  },
  {
    question: "What types of painting services do you offer in Parramatta?",
    answer:
      "We offer a full range of painting services in Parramatta including residential house painting, interior painting, exterior painting, commercial painting and strata painting. Whether you need a single room refreshed or an entire building repainted, we can help.",
  },
  {
    question: "How much does house painting cost in Parramatta?",
    answer:
      "The cost depends on the size of your property, the condition of the surfaces, the number of rooms and the scope of work. We provide free, detailed quotes after inspecting your Parramatta property — so you know exactly what you're paying for before any work begins.",
  },
  {
    question: "Do you paint commercial properties in Parramatta?",
    answer:
      "Yes. We paint offices, retail spaces, warehouses and commercial buildings across Parramatta. We can schedule work around your business hours — including weekends and after-hours — to keep disruption to a minimum.",
  },
  {
    question: "Can you paint strata buildings and apartment complexes in Parramatta?",
    answer:
      "Absolutely. We have extensive experience painting strata-titled buildings in Parramatta and Western Sydney. We work closely with strata managers and owners corporations to plan and deliver projects on time and within budget.",
  },
  {
    question: "How long does a house painting job take in Parramatta?",
    answer:
      "A standard interior repaint of a 3-bedroom home typically takes 3–5 days. Exterior repaints vary depending on the property size, accessibility and surface preparation required. We provide an accurate timeframe in every quote.",
  },
  {
    question: "Do you offer colour consultation before painting?",
    answer:
      "Yes. Our team can assist with colour selection to help you choose tones that suit your property, style and lighting conditions. We're happy to discuss options during the quoting stage.",
  },
  {
    question: "Are your painters licensed and insured in NSW?",
    answer:
      "Yes. All work is carried out by licensed painters in NSW and we hold comprehensive public liability insurance. We're happy to provide proof of licensing and insurance on request.",
  },
  {
    question: "Do you provide a warranty on your painting work?",
    answer:
      "Yes. We stand behind the quality of our workmanship and provide a warranty on completed painting projects. We also use premium-grade paints that come with their own manufacturer warranties for long-term protection.",
  },
  {
    question: "How do I get a quote for painting my Parramatta property?",
    answer:
      "Getting a quote is easy. Contact us via our website, give us a call on 0401 508 036 or send us a message and we'll arrange a convenient time to visit your property and provide a free, no-obligation quote.",
  },
];

export default function PaintersParramattaPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-parramatta#service",
    name: "Painters Parramatta Sydney",
    serviceType: "Painting Services",
    url: "https://www.prismacoatings.com.au/painters-parramatta",
    description:
      "Professional residential, commercial and strata painting services in Parramatta and Western Sydney.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Parramatta, Sydney NSW",
    },
    provider: {
      "@type": "PaintingContractor",
      name: "Prisma Coatings",
      url: "https://www.prismacoatings.com.au",
      telephone: "+61401508036",
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
      description: "Request a free quote for painting services in Parramatta.",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": "https://www.prismacoatings.com.au/#business",
    name: "Prisma Coatings",
    url: "https://www.prismacoatings.com.au",
    telephone: "+61401508036",
    description:
      "Professional painting contractors serving Parramatta, Western Sydney and surrounding areas. Residential, commercial and strata painting services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20/25 Marlowe St",
      addressLocality: "Campsie",
      addressRegion: "NSW",
      postalCode: "2194",
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "City", name: "Parramatta" },
      { "@type": "City", name: "Westmead" },
      { "@type": "City", name: "Merrylands" },
      { "@type": "City", name: "Granville" },
      { "@type": "AdministrativeArea", name: "Western Sydney" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <main className="bg-white text-[#13233A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <FAQSchema faqs={faqs} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Parramatta Painting Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters in Parramatta, Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional painting services across Parramatta and
              Western Sydney — from family homes and investment properties to commercial
              buildings and strata complexes. Quality workmanship, clear communication and
              a finish that lasts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+61401508036"
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
              src="/images/beforeafter/house-repainting-sydney-after.webp"
              alt="Professional painters working on a property in Parramatta, Sydney"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE PRISMA COATINGS IN PARRAMATTA ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/recentWorks/family-home-painters-sydney.webp"
            alt="Interior painting service in Parramatta by Prisma Coatings"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Choose Prisma Coatings in Parramatta?
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Parramatta is one of Sydney's most dynamic areas — a thriving CBD surrounded by
            established residential neighbourhoods, strata apartment blocks and growing
            commercial precincts. Whether you own a Federation cottage in Harris Park, a
            townhouse in Merrylands or a commercial space in the Parramatta CBD, Prisma
            Coatings has the experience and capability to deliver results you'll be proud of.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We don't cut corners on preparation. Every project starts with thorough surface
            assessment, proper cleaning, patching and priming — because a flawless finish is
            built from the ground up.
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

      {/* ── RESIDENTIAL PAINTING ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Residential Painting
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              House Painters in Parramatta
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Your home is your biggest investment — and the right paint job protects and
              enhances it. Our residential painting team works across Parramatta and Western
              Sydney, handling everything from single-room refreshes to complete whole-house
              repaints inside and out.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We work around your schedule, keep your home clean and tidy throughout the
              project and deliver results that hold up to daily life. From contemporary colour
              palettes to classic finishes, we help Parramatta homeowners achieve the look they
              want without the hassle.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Full interior and exterior repaints",
                "Feature walls and accent colours",
                "Timber and window frame painting",
                "Garage doors, fences and outdoor timber",
                "Colour consultation included",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/house-painters-sydney"
              className="inline-flex items-center gap-2 mt-8 text-[#D61C1C] font-semibold hover:underline"
            >
              View our house painting services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/recentWorks/home-repaint-sydney-prisma-coatings.webp"
              alt="Residential house painting in Parramatta by Prisma Coatings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL PAINTING ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
            <Image
              src="/images/recentWorks/apartment-interior-painting-sydney.webp"
              alt="Commercial painting services in Parramatta by Prisma Coatings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial Painting
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Commercial Painters in Parramatta
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Parramatta's commercial sector is booming — from the government precinct and
              corporate towers to retail strips, medical centres and industrial parks. A
              well-maintained commercial space projects professionalism and builds customer
              confidence. Prisma Coatings delivers commercial painting that stands up to
              heavy use and looks sharp for years.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We understand the operational realities of running a business. Our team works
              flexibly around your hours — including after-hours and weekends — so your
              operations experience minimal disruption.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Offices, showrooms and retail fit-outs",
                "Warehouses and industrial facilities",
                "Medical centres and education facilities",
                "After-hours and weekend scheduling available",
                "Low-VOC paints for occupied commercial spaces",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/commercial-painting-sydney"
              className="inline-flex items-center gap-2 mt-8 text-[#D61C1C] font-semibold hover:underline"
            >
              View our commercial painting services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STRATA PAINTING ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Strata Painting
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Strata Painters in Parramatta
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              With Parramatta's rapid urban growth comes an increasing number of apartment
              buildings, townhouse complexes and mixed-use developments. Strata painting
              requires careful planning, coordination with residents and an understanding of
              the unique requirements of shared property — and that's exactly what we bring
              to every strata project.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Prisma Coatings works directly with strata managers and owners corporations
              across Parramatta to plan painting programs that maintain property values,
              meet compliance obligations and keep residents informed from start to finish.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Apartment building exteriors and common areas",
                "Lobbies, corridors, stairwells and car parks",
                "Detailed scope and colour schedules provided",
                "Minimal disruption to residents",
                "Experience with large-scale strata painting programs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/strata-painting-sydney"
              className="inline-flex items-center gap-2 mt-8 text-[#D61C1C] font-semibold hover:underline"
            >
              View our strata painting services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/strata/strata-painting-sydney-apartment-building.webp"
              alt="Strata building painting in Parramatta by Prisma Coatings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── INTERIOR & EXTERIOR ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Interior & Exterior
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Interior and Exterior Painting in Parramatta
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Every painting project is different. Whether you need a fresh coat on your
              living room walls or a complete exterior repaint to boost your property's
              street appeal, Prisma Coatings has the skills and equipment to deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Interior */}
            <article className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-56">
                <Image
                  src="/images/recentWorks/interior-painting-sydney.webp"
                  alt="Interior painting services in Parramatta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-4">
                  <Home className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Interior Painting Parramatta</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Transform your living spaces with precise, clean interior painting. We
                  paint walls, ceilings, trims, doors and feature walls — applying the right
                  primers and topcoats for each surface type to achieve finishes that look
                  great and are easy to maintain.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  From a single bedroom to an entire home, our interior painters in
                  Parramatta work efficiently and carefully, protecting your floors,
                  furniture and fittings throughout the project.
                </p>
                <Link
                  href="/interior-painting-sydney"
                  className="inline-flex items-center gap-2 mt-6 text-[#D61C1C] font-semibold hover:underline"
                >
                  Learn more about interior painting <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Exterior */}
            <article className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-56">
                <Image
                  src="/images/exteriorpainting/exteriorpaintsydney.jpeg"
                  alt="Exterior painting services in Parramatta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold">Exterior Painting Parramatta</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  A quality exterior paint job does more than improve your home's
                  appearance — it protects your property from Western Sydney's heat, rain
                  and UV exposure. We use premium exterior coatings with proven durability to
                  keep your home looking its best for years to come.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Our exterior painters in Parramatta address all surface issues before
                  painting — filling cracks, treating any mould or chalking and applying
                  the appropriate primers to ensure proper adhesion and longevity.
                </p>
                <Link
                  href="/exterior-painting-sydney"
                  className="inline-flex items-center gap-2 mt-6 text-[#D61C1C] font-semibold hover:underline"
                >
                  Learn more about exterior painting <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-[#D61C1C] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to get started on your Parramatta property?
            </h2>
            <p className="mt-2 text-red-100 text-lg">
              Get a free, detailed quote from our local painting team today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#D61C1C] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+61401508036"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2" />
              0401 508 036
            </a>
          </div>
        </div>
      </section>

      {/* ── PAINTING PROCESS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How Our Parramatta Painting Process Works
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We've refined our process over years of work across Sydney to make every
              project smooth, predictable and stress-free for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
              >
                <span className="text-5xl font-bold text-gray-100 absolute top-6 right-6">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#D61C1C] text-white flex items-center justify-center mb-5">
                  <Brush className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold relative">{step.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed text-sm relative">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Promise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Parramatta Property Owners Trust Prisma Coatings
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We've earned our reputation by doing one thing consistently — delivering what
              we promise. Here's what sets us apart from other painting contractors in
              Parramatta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.title}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#13233A] text-white flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold">{signal.title}</h3>
                  <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                    {signal.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Review strip */}
          <div className="mt-12 bg-[#13233A] rounded-2xl p-8 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Michael T.",
                suburb: "Parramatta",
                text: "Prisma Coatings painted the exterior of our home and the result was outstanding. Neat, professional and on time.",
              },
              {
                name: "Sandra K.",
                suburb: "Merrylands",
                text: "We used Prisma for an interior repaint before selling. The quality of the work genuinely helped us achieve a better sale price.",
              },
              {
                name: "James R.",
                suburb: "Westmead",
                text: "Professional service from quote to clean-up. They painted our strata building common areas with zero hassle for residents.",
              },
            ].map((review) => (
              <div key={review.name} className="bg-white/5 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-4 text-white font-semibold text-sm">
                  {review.name} — {review.suburb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Areas We Service Near Parramatta
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Based in Sydney, our painting teams regularly work throughout Parramatta and
              across the Greater Western Sydney region. If you're nearby, we can help.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              "Parramatta",
              "Westmead",
              "Merrylands",
              "Granville",
              "Harris Park",
              "Rosehill",
              "Woodville",
              "South Granville",
              "Toongabbie",
              "Wentworthville",
              "Northmead",
              "Pendle Hill",
              "Constitution Hill",
              "Guildford",
              "Greystanes",
              "Auburn",
              "Silverwater",
              "Homebush West",
              "Lidcombe",
              "Carlingford",
            ].map((suburb) => (
              <div
                key={suburb}
                className="bg-white rounded-xl px-4 py-3 border border-gray-200 text-center text-sm font-medium text-[#13233A] flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D61C1C] flex-shrink-0" />
                {suburb}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Parramatta Painters — Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Common questions from Parramatta homeowners, strata managers and property owners
            about our painting services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#13233A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Looking for Painters in Parramatta?
          </h2>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Whether you need a single room painted or a full commercial building repainted,
            Prisma Coatings is ready to help. Contact us today for a free, no-obligation
            quote and find out why Parramatta property owners trust us with their painting
            projects.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-semibold transition-colors text-lg"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+61401508036"
              className="inline-flex items-center justify-center bg-white text-[#13233A] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 0401 508 036
            </a>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Free quotes · Licensed & insured · Parramatta and Western Sydney
          </p>
        </div>
      </section>
    </main>
  );
}
