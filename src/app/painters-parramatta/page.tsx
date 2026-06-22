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
  DollarSign,
} from "lucide-react";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: "Painters Parramatta | House, Commercial & Strata Painting ",
  description:
    "Top-rated painters in Parramatta. Prisma Coatings provides professional house painting, commercial painting and strata painting across Parramatta and Western Sydney. Free quotes — call 0401 508 036.",
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
    "strata painters parramatta",
    "painting company parramatta",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-parramatta",
  },
  openGraph: {
    title: "Painters Parramatta | House, Commercial & Strata Painting | Prisma Coatings",
    description:
      "Expert residential, commercial and strata painters in Parramatta. Interior and exterior painting services across Parramatta and Western Sydney. Call for a free quote.",
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

const heroAreas = [
  "Parramatta",
  "Westmead",
  "Merrylands",
  "Granville",
  "Harris Park",
  "Rosehill",
  "Toongabbie",
  "Wentworthville",
  "Northmead",
  "Guildford",
];

const benefits = [
  "Residential, commercial and strata painting across Parramatta",
  "Fully licensed and insured painting contractors in NSW",
  "Thorough surface preparation — clean, sand, fill and prime before every coat",
  "Premium Dulux and Haymes paints for long-lasting, durable finishes",
  "On-time delivery and tidy, respectful work sites throughout",
  "Free, detailed written quotes with no hidden costs",
  "Flexible scheduling including after-hours and weekends",
  "Workmanship warranty on every completed project",
];

const processSteps = [
  {
    step: "01",
    title: "Free Quote & Consultation",
    description:
      "We visit your Parramatta property, assess the scope of work, take measurements, discuss your colour preferences and provide a clear, itemised written quote at no cost. No pressure, no obligation.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    description:
      "All surfaces are cleaned, sanded, filled and primed before a single brush stroke of topcoat is applied. Meticulous preparation is what separates a paint job that lasts a decade from one that fails in two years.",
  },
  {
    step: "03",
    title: "Professional Painting",
    description:
      "Our experienced Parramatta painters apply premium coatings with care and precision, using the right products for each surface type and working efficiently to minimise disruption to your home or business.",
  },
  {
    step: "04",
    title: "Final Inspection & Clean-Up",
    description:
      "We walk through the completed job with you, address any touch-ups on the spot, remove all materials and leave your property clean and tidy. Your sign-off matters — we don't leave until you're happy.",
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description:
      "All our painters hold current NSW contractor licences and we carry comprehensive public liability insurance — protecting you, your property and everyone on site throughout every project.",
  },
  {
    icon: Star,
    title: "5-Star Rated in Western Sydney",
    description:
      "Our reputation across Parramatta and Western Sydney is built on consistent, quality workmanship. Homeowners, strata managers and commercial clients rate us five stars — and recommend us by name.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description:
      "We show up when we say we will, complete work within the agreed timeframe, keep you informed at every stage and never leave a project unfinished. Your time is valuable — we respect that.",
  },
  {
    icon: Users,
    title: "Local Parramatta Knowledge",
    description:
      "We know Parramatta's property landscape intimately — from Federation-era cottages in Harris Park to modern high-rises in the CBD and brick veneer homes in Merrylands — and tailor every approach accordingly.",
  },
];

const faqs = [
  {
    question: "Do you provide painting services in Parramatta?",
    answer:
      "Yes. Prisma Coatings works throughout Parramatta and the surrounding Western Sydney region, including Westmead, Merrylands, Granville, Harris Park, Rosehill, Toongabbie, Wentworthville, Northmead, Guildford and nearby suburbs.",
  },
  {
    question: "What types of painting services do you offer in Parramatta?",
    answer:
      "We offer a full range of painting services in Parramatta including residential house painting, interior painting, exterior painting, commercial painting and strata painting for apartment buildings and townhouse complexes. Whether you need a single room refreshed or an entire building repainted, we have the team to deliver.",
  },
  {
    question: "How much does house painting cost in Parramatta?",
    answer:
      "Costs vary depending on the size of your property, surface condition, number of rooms and scope of work. As a general guide, a full interior repaint of a 3-bedroom home in Parramatta typically starts from around $3,500–$6,000 depending on specifics. Exterior repaints vary more significantly based on height, cladding type and prep required. We provide free, detailed written quotes so you know exactly what you're paying for before any work begins.",
  },
  {
    question: "Do you paint commercial properties in Parramatta?",
    answer:
      "Yes. We paint offices, retail spaces, showrooms, warehouses, medical centres and commercial buildings across Parramatta and the CBD. We can schedule work around your business hours — including weekends and after-hours — to keep disruption to an absolute minimum.",
  },
  {
    question: "Can you paint strata buildings and apartment complexes in Parramatta?",
    answer:
      "Absolutely. We have extensive experience painting strata-titled buildings in Parramatta and Western Sydney, covering building exteriors, common areas, lobbies, corridors, stairwells and car parks. We work directly with strata managers and owners corporations to plan and deliver projects on time and within budget.",
  },
  {
    question: "How long does a house painting job take in Parramatta?",
    answer:
      "A standard interior repaint of a 3-bedroom home typically takes 3–5 days. Exterior repaints vary depending on property size, accessibility and the amount of surface preparation required. We provide an accurate timeframe in every written quote so you can plan around the work.",
  },
  {
    question: "Do you offer interior painting services in Parramatta?",
    answer:
      "Yes. Our interior painters in Parramatta handle walls, ceilings, trims, doors, skirtings and feature walls across all property types. We protect your floors and furniture throughout and apply the right primers and topcoats for each surface to achieve a clean, lasting finish.",
  },
  {
    question: "Do you offer exterior painting services in Parramatta?",
    answer:
      "Yes. Our exterior painters in Parramatta address all surface issues — filling cracks, treating mould or chalking, and priming — before applying durable exterior coatings that stand up to Western Sydney's heat, UV and rainfall. A quality exterior paint job protects your property and improves its street appeal.",
  },
  {
    question: "Do you offer colour consultation before painting?",
    answer:
      "Yes. Our team can assist with colour selection to help you choose tones that suit your property style, lighting and surroundings. We're happy to discuss options during the quoting stage and can provide physical paint samples where needed.",
  },
  {
    question: "Are your painters licensed and insured in NSW?",
    answer:
      "Yes. All work is carried out by licensed painters in NSW and we hold comprehensive public liability insurance. We're happy to provide proof of licensing and insurance on request — and we encourage you to ask. Unfortunately, unlicensed operators are common in the painting industry.",
  },
  {
    question: "Do you provide a warranty on your painting work?",
    answer:
      "Yes. We stand behind the quality of our workmanship and provide a written warranty on completed painting projects. We also use premium-grade Dulux and Haymes paints, which carry their own manufacturer warranties for long-term protection.",
  },
  {
    question: "What areas near Parramatta do you service?",
    answer:
      "We service Parramatta and all surrounding suburbs including Westmead, Merrylands, Granville, Harris Park, Rosehill, Woodville, South Granville, Toongabbie, Wentworthville, Northmead, Pendle Hill, Constitution Hill, Guildford, Greystanes, Auburn, Silverwater, Homebush West, Lidcombe and Carlingford.",
  },
  {
    question: "How do I get a quote for painting my Parramatta property?",
    answer:
      "Getting a quote is simple. Contact us via our website, call us on 0401 508 036 or send an enquiry and we'll arrange a convenient time to inspect your property and provide a free, no-obligation written quote — usually within 24–48 hours.",
  },
];

export default function PaintersParramattaPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-parramatta#service",
    name: "Painters Parramatta — Professional Painting Services",
    serviceType: [
      "Residential House Painting",
      "Commercial Painting",
      "Strata Painting",
      "Interior Painting",
      "Exterior Painting",
    ],
    url: "https://www.prismacoatings.com.au/painters-parramatta",
    description:
      "Professional residential, commercial and strata painting services in Parramatta and Western Sydney. Interior and exterior painting by licensed, insured painters.",
    areaServed: [
      { "@type": "City", name: "Parramatta" },
      { "@type": "City", name: "Westmead" },
      { "@type": "City", name: "Merrylands" },
      { "@type": "City", name: "Granville" },
      { "@type": "AdministrativeArea", name: "Western Sydney NSW" },
    ],
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
      description:
        "Free no-obligation quote for painting services in Parramatta and Western Sydney.",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": "https://www.prismacoatings.com.au/#business",
    name: "Prisma Coatings",
    url: "https://www.prismacoatings.com.au",
    telephone: "+61401508036",
    email: "info@prismacoatings.com.au",
    description:
      "Professional painting contractors in Sydney providing residential, commercial and strata painting services across Parramatta and Western Sydney. Licensed, insured and 5-star rated.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20/25 Marlowe St",
      addressLocality: "Campsie",
      addressRegion: "NSW",
      postalCode: "2194",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9137,
      longitude: 151.1028,
    },
    areaServed: [
      { "@type": "City", name: "Parramatta" },
      { "@type": "City", name: "Westmead" },
      { "@type": "City", name: "Merrylands" },
      { "@type": "City", name: "Granville" },
      { "@type": "City", name: "Harris Park" },
      { "@type": "City", name: "Toongabbie" },
      { "@type": "City", name: "Wentworthville" },
      { "@type": "AdministrativeArea", name: "Western Sydney" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
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
    hasMap: "https://maps.google.com/?q=Prisma+Coatings+Campsie+NSW",
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
              buildings and strata complexes. Licensed painters. Premium products. A finish
              that protects and lasts.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D61C1C]" /> Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D61C1C]" /> Free Written Quotes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D61C1C]" /> 5-Star Rated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D61C1C]" /> Workmanship Warranty
              </span>
            </div>

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

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              {heroAreas.map((area) => (
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
              src="/images/parramata/house-paint-parramata.webp"
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
            Why Parramatta Property Owners Choose Prisma Coatings
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Parramatta is one of Sydney's most dynamic property markets — a thriving CBD
            surrounded by established residential neighbourhoods, growing strata precincts
            and major commercial developments. Whether you own a Federation cottage in Harris
            Park, a brick veneer home in Merrylands, a townhouse in Wentworthville or a
            commercial space in the Parramatta CBD, the right painting contractor makes all
            the difference.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Prisma Coatings has built its reputation across Western Sydney by delivering
            exactly what we promise — thorough preparation, quality coatings and a finish
            that holds up long after the last painter has packed up and left. We don't cut
            corners on prep work, we don't use budget products and we don't disappear once
            the invoice is paid. That's why property owners across Parramatta keep coming
            back — and referring us to their neighbours.
          </p>

          <div className="mt-8 space-y-3">
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
              Your home is your biggest investment — and the right paint job both protects
              and enhances it. Our residential painting team works across Parramatta and
              Western Sydney, handling everything from single-room refreshes to complete
              whole-house repaints inside and out. We treat every home as if it were our own.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Parramatta's housing stock is diverse — from older Federation and Californian
              Bungalow properties in Harris Park and Granville that require careful timber
              preparation, to modern brick veneer homes in Northmead and contemporary
              townhouses across the wider LGA. Our team has the experience to handle all
              property types and surface conditions. We work around your schedule, keep your
              home clean and tidy throughout, and deliver results that look great and hold
              up to daily life for years to come.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Full interior and exterior house repaints",
                "Feature walls, accent colours and feature ceilings",
                "Timber, window frame and door painting",
                "Garage doors, fences and outdoor timber structures",
                "Pressure washing and surface preparation included",
                "Colour consultation with every project",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/house-painting-sydney"
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
              src="/images/parramata/Commercial-Paintersin-Parramatta.webp"
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
              Parramatta's commercial sector continues to expand rapidly — from the Civic
              Place government precinct and corporate towers in the CBD, to retail strips in
              Church Street, medical centres in Westmead and industrial parks in Granville
              and Rosehill. A well-maintained commercial space projects professionalism,
              builds customer confidence and reflects your brand. Prisma Coatings delivers
              commercial painting that stands up to heavy use and looks sharp for years.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We understand the operational realities of running a business. Downtime costs
              money, which is why our commercial painting team works flexibly around your
              hours — including after-hours, weekends and public holidays — so your
              operations experience minimal disruption. We use low-VOC paints for occupied
              spaces where required, and provide clear scheduling and progress updates so you
              know exactly what to expect at every stage of the project.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Offices, showrooms and retail fit-outs",
                "Warehouses, factories and industrial facilities",
                "Medical centres, aged care and education facilities",
                "Restaurants, cafes and hospitality venues",
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
              Parramatta's rapid urban growth has produced one of Greater Sydney's largest
              concentrations of strata-titled residential buildings — apartment towers, low-
              rise complexes, townhouse developments and mixed-use buildings that all require
              periodic repainting to maintain their condition, protect their structure and
              preserve their market value. Strata painting is a specialist discipline that
              demands careful planning, resident communication and an understanding of the
              obligations facing owners corporations and strata managers.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Prisma Coatings works directly with strata managers and owners corporations
              across Parramatta and Western Sydney to design and deliver painting programmes
              that meet compliance obligations, respect resident schedules and come in on
              budget. We provide detailed colour schedules, written scope of works and
              regular progress reporting — everything you need for transparent, accountable
              project delivery.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Apartment building exteriors and facades",
                "Common area corridors, lobbies and stairwells",
                "Car parks, basement areas and utility spaces",
                "Detailed written colour schedules and scope of works",
                "Minimal disruption to residents throughout",
                "Experience managing large multi-stage strata programmes",
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
              Interior &amp; Exterior
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Interior and Exterior Painters Parramatta
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Whether you need crisp, clean walls inside your home or a durable,
              weather-resistant coat on your exterior surfaces, our Parramatta painting
              team has the skills, products and equipment to deliver exceptional results.
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
                <h3 className="text-2xl font-bold">Interior Painters Parramatta</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Transform your living spaces with precise, clean interior painting. Our
                  interior painters in Parramatta paint walls, ceilings, trims, doors,
                  skirtings and feature walls — applying the right primers and topcoats for
                  each surface type to achieve finishes that look great and are easy to
                  maintain long term.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We protect your floors, furniture and fittings throughout the project and
                  work with care to avoid damage or mess. From a single bedroom refresh to
                  a full interior repaint before selling, our Parramatta interior painting
                  team delivers results you'll notice the moment we're done.
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
                <h3 className="text-2xl font-bold">Exterior Painters Parramatta</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  A quality exterior paint job does far more than improve your home's street
                  appeal — it protects your property from Western Sydney's intense UV,
                  summer heat and seasonal rainfall. Our exterior painters in Parramatta use
                  premium Dulux and Haymes weatherproof coatings with proven durability to
                  keep your property looking its best for years.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Before applying a single coat, we address every surface issue — cleaning,
                  filling cracks, treating mould or efflorescence, and priming with the
                  right products for the substrate. Proper preparation is what ensures
                  adhesion, longevity and a paint job that genuinely protects your asset.
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
              Free, detailed written quotes — no obligation, no pressure.
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

      {/* ── COST GUIDE ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Pricing Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              What Does Painting Cost in Parramatta?
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Pricing is always tailored to your specific property and scope of work — but
              here's a general guide to help you understand what to expect before requesting
              a quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                type: "House Interior",
                icon: Home,
                range: "$3,500 – $8,500+",
                note: "Per standard 3–4 bedroom home",
                details: [
                  "Walls, ceilings and trims",
                  "Surface prep and spot filling",
                  "2 coats premium paint",
                  "Varies by room count and condition",
                ],
              },
              {
                type: "House Exterior",
                icon: Building2,
                range: "$4,000 – $12,000+",
                note: "Per standard single-storey home",
                details: [
                  "All external walls and trims",
                  "Pressure wash and prep",
                  "Crack filling and priming",
                  "Varies by size and access",
                ],
              },
              {
                type: "Commercial & Strata",
                icon: Brush,
                range: "Custom Quote",
                note: "Tailored to your building and scope",
                details: [
                  "Detailed scope of works provided",
                  "Staged scheduling available",
                  "Competitive tendering welcome",
                  "Contact us for a site inspection",
                ],
              },
            ].map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.type}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D61C1C] text-white flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{tier.type}</h3>
                  <p className="mt-2 text-2xl font-bold text-[#D61C1C]">{tier.range}</p>
                  <p className="text-sm text-gray-500 mb-5">{tier.note}</p>
                  <div className="space-y-2">
                    {tier.details.map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <DollarSign className="w-4 h-4 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm max-w-2xl mx-auto">
            All prices are indicative only and depend on property size, surface condition
            and scope of work. We provide free, no-obligation written quotes after
            inspecting your Parramatta property — so you get an accurate number before
            committing to anything.
          </p>
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
              Every Prisma Coatings project follows a proven four-step process designed to
              deliver consistent quality, clear communication and a result you'll be proud
              of — from the first call to the final inspection.
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
              we promise, on time and on budget. Here's what sets us apart from other
              painting contractors in Parramatta.
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
                text: "Prisma Coatings painted the exterior of our home and the result was outstanding. Neat, professional and exactly on time. Highly recommend.",
              },
              {
                name: "Sandra K.",
                suburb: "Merrylands",
                text: "We used Prisma for a full interior repaint before selling. The quality genuinely helped us achieve a better sale price. Worth every cent.",
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
              Our painting teams service Parramatta and the broader Western Sydney region.
              If you're in or near any of the suburbs below, we can help — contact us to
              confirm coverage and arrange a free site inspection.
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

          <p className="mt-8 text-center text-gray-500 text-sm">
            Servicing all of Western Sydney.{" "}
            <Link href="/house-painting-sydney" className="text-[#D61C1C] hover:underline font-medium">
              View all Sydney painting services
            </Link>
          </p>
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
            Common questions from Parramatta homeowners, strata managers and commercial
            property owners about our painting services.
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
            Whether you need a single room painted, a whole house refreshed, a commercial
            space repainted or a strata programme planned, Prisma Coatings is ready to help.
            Contact us today for a free, written, no-obligation quote and find out why
            Parramatta property owners trust us with their painting projects.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-300">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 text-[#D61C1C]" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Star className="w-5 h-5 text-[#D61C1C]" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Clock className="w-5 h-5 text-[#D61C1C]" />
              <span>On-Time Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CheckCircle className="w-5 h-5 text-[#D61C1C]" />
              <span>Workmanship Warranty</span>
            </div>
          </div>

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
            Free quotes · Licensed &amp; insured · Parramatta and Western Sydney
          </p>
        </div>
      </section>
    </main>
  );
}
