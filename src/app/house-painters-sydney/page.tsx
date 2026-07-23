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
  Award,
  Zap,
} from "lucide-react";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: "House Painters Sydney | Licensed Painters | Prisma Coatings",
  description:
    "Trusted house painters in Sydney. Licensed, insured & 5.0-rated on Google. Interior, exterior, strata & commercial painting. Free quotes — call 0401 508 036.",
  keywords: [
    "house painters sydney",
    "painters sydney",
    "house painter sydney",
    "interior painting sydney",
    "exterior painting sydney",
    "residential painters sydney",
    "apartment painters sydney",
    "professional painters sydney",
    "home painting services sydney",
    "licensed painters sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/house-painters-sydney",
  },
  openGraph: {
    title: "House Painters Sydney | Prisma Coatings",
    description:
      "Licensed, insured house painters serving all of Sydney. Interior, exterior, strata and commercial painting with a 5.0 Google rating.",
    url: "https://www.prismacoatings.com.au/house-painters-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "House Painters Sydney – Prisma Coatings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Sydney | Prisma Coatings",
    description:
      "Licensed, insured house painters serving all of Sydney. Interior, exterior, strata and commercial painting with a 5.0 Google rating.",
    images: ["https://www.prismacoatings.com.au/og/og-image.png"],
  },
};

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "10+ Years Experience" },
  { icon: Star, label: "5.0 Google Rating" },
  { icon: CheckCircle, label: "Free Written Quotes" },
];

const benefitCards = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description:
      "Every job is carried out by licensed painters, backed by comprehensive public liability insurance. If something needs to be put in writing for your strata manager or your own peace of mind, we can provide it.",
  },
  {
    icon: Award,
    title: "10+ Years Painting Sydney Homes",
    description:
      "Since 2015 we've worked on brick veneer bungalows in the Inner West, coastal homes in the Sutherland Shire and everything in between. That range of experience means we don't guess — we know what a Sydney property needs.",
  },
  {
    icon: CheckCircle,
    title: "Free, Detailed Written Quotes",
    description:
      "We inspect the property in person, assess every surface and give you a clear, itemised quote before any work starts. No call-out fees, no pressure, no vague verbal estimates.",
  },
  {
    icon: Star,
    title: "5.0 Rating from Real Sydney Clients",
    description:
      "Our reviews come from actual homeowners, landlords and builders we've worked with across Sydney — not a purchased rating. You can read them below and verify them on Google.",
  },
  {
    icon: Zap,
    title: "Preparation Comes First",
    description:
      "Cleaning, filling, sanding and priming happen before a single topcoat goes on. This is the difference between paint that lasts eight years and paint that lasts eighteen months.",
  },
  {
    icon: Clock,
    title: "Reliable From Start to Finish",
    description:
      "We turn up when we say we will, work to the timeline in your quote and keep you updated if anything changes. Sydney homeowners come back to us because we don't disappear halfway through a job.",
  },
];

const services = [
  {
    title: "Interior House Painting",
    description:
      "Walls, ceilings, trims, doors and feature walls — refreshed with clean, even finishes that hold up to everyday family life.",
    icon: Home,
    href: "/interior-painting-sydney",
  },
  {
    title: "Exterior House Painting",
    description:
      "Weatherproof coatings chosen for Sydney's UV exposure, humidity and coastal salt air, applied over properly prepared surfaces.",
    icon: Building2,
    href: "/exterior-painting-sydney",
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail spaces and shopfronts painted around your trading hours, with low-VOC options for occupied premises.",
    icon: Brush,
    href: "/commercial-painting-sydney",
  },
  {
    title: "Strata Painting",
    description:
      "Apartment blocks, common areas and townhouse complexes managed directly with strata managers and owners corporations.",
    icon: Users,
    href: "/strata-painting-sydney",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Quote & Site Inspection",
    description:
      "We visit your property, walk through the scope of work with you, measure up and check the condition of every surface. You get a detailed written quote — no obligation.",
  },
  {
    step: "02",
    title: "Colour & Product Selection",
    description:
      "We help you choose colours and finishes that suit your property and can supply physical Dulux and Haymes samples so you're not guessing from a screen.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    description:
      "Every surface is cleaned, sanded, patched and repaired before paint touches it. For exterior work in coastal or humid areas, this step is what determines how long the job lasts.",
  },
  {
    step: "04",
    title: "Priming",
    description:
      "The correct primer goes down for the surface type — bare timber, render, previously painted masonry or plasterboard each need a different approach.",
  },
  {
    step: "05",
    title: "Professional Application",
    description:
      "Two coats of premium paint, applied with care, protecting floors, furniture and fixtures throughout. We work efficiently without cutting corners on finish quality.",
  },
  {
    step: "06",
    title: "Final Walkthrough & Clean-Up",
    description:
      "We inspect the finished work with you, touch up anything on the spot, and leave the property clean and tidy — nothing left behind but a fresh coat of paint.",
  },
];

const pricingTiers = [
  {
    type: "Single Room",
    icon: Home,
    range: "From $650",
    note: "Per standard bedroom or living room",
    details: [
      "Surface preparation included",
      "Primer where required",
      "Two premium finish coats",
      "Licensed & fully insured",
    ],
  },
  {
    type: "Full Interior",
    icon: Home,
    range: "$4,500 – $9,500",
    note: "3–4 bedroom home",
    details: [
      "All rooms, ceilings & trims",
      "Premium Dulux products",
      "Detailed written quote",
      "Licensed & fully insured",
    ],
  },
  {
    type: "Exterior — Single Storey",
    icon: Building2,
    range: "$5,000 – $12,000",
    note: "Standard single-storey home",
    details: [
      "Pressure wash & prep included",
      "Weatherproof coating system",
      "Fascias, gutters & doors",
      "Licensed & fully insured",
    ],
  },
  {
    type: "Commercial & Strata",
    icon: Brush,
    range: "Custom Quote",
    note: "Tailored to your building and scope",
    details: [
      "Free on-site inspection",
      "Staged scheduling available",
      "Low-VOC options",
      "Licensed & fully insured",
    ],
  },
];

const beforeAfterShowcase = [
  {
    id: "living-room",
    before: "/images/beforeafter/living-room-painting-sydney-before.webp",
    after: "/images/beforeafter/living-room-painting-sydney-after.webp",
    beforeAlt: "Sydney living room with tired, marked walls before repainting",
    afterAlt: "Same Sydney living room after a fresh, even wall repaint",
    label: "Living Room Repaint",
  },
  {
    id: "kitchen",
    before: "/images/beforeafter/kitchen-painting-sydney-before.webp",
    after: "/images/beforeafter/kitchen-painting-sydney-after.webp",
    beforeAlt: "Sydney kitchen mid-preparation before professional painting",
    afterAlt: "Sydney kitchen with a bright, modern finish after painting",
    label: "Kitchen Refresh",
  },
  {
    id: "exterior",
    before: "/images/beforeafter/exterior-house-painting-sydney-before.webp",
    after: "/images/beforeafter/exterior-house-painting-sydney-after.webp",
    beforeAlt: "Sydney home exterior before painting, unfinished render visible",
    afterAlt: "Sydney home exterior after a clean, weatherproof repaint",
    label: "Exterior Repaint",
  },
  {
    id: "staircase",
    before: "/images/beforeafter/staircase-painting-sydney-before.webp",
    after: "/images/beforeafter/staircase-painting-sydney-after.webp",
    beforeAlt: "Interior staircase in a Sydney home before painting",
    afterAlt: "Interior staircase in a Sydney home with a smooth new finish",
    label: "Staircase & Hallway",
  },
];

const testimonials = [
  {
    text: "We have engaged Hally and his team from Prisma Coatings to paint our house. Hally spends the time to understand the job and offers great advice. The work is of exceptional quality and we were very happy with the results. I would highly recommend Prisma Coatings",
    name: "Kevin McEwen",
  },
  {
    text: "Hally just completed a total interior repaint of my townhouse. I'm so happy with Hally's work - there was a lot of prep work to be done and he was so meticulous. I couldn't be happier with the quality of work. Hally is also super professional and communicative.",
    name: "Lara Wilson",
  },
  {
    text: "I use Hally on all jobs I do, he gets it done in time to a premium quality for a great price! Highly recommend using Prisma coatings for all painting needs!",
    name: "Matt Schaudin",
  },
  {
    text: "Hally was extremely professional, on time and helpful. His work was of a very high quality.",
    name: "Michelle Galluzzo",
  },
];

const propertyTypes = [
  {
    icon: Home,
    title: "Federation & Californian Bungalows",
    text: "Common across the Inner West and North Shore. Original timber trims and older render often need careful preparation before repainting.",
  },
  {
    icon: Building2,
    title: "Brick Veneer Family Homes",
    text: "The most common home type across suburban Sydney, typically built from the 1960s–1980s, often with painted masonry that's been coated multiple times.",
  },
  {
    icon: Shield,
    title: "Coastal & Semi-Coastal Properties",
    text: "Homes near the coastline in the Eastern Suburbs and Sutherland Shire face salt air that can compromise paint adhesion if surfaces aren't prepared correctly.",
  },
  {
    icon: Users,
    title: "Apartments, Units & Strata Buildings",
    text: "From single units to full building exteriors, we work with owners and strata managers to schedule painting around occupied buildings.",
  },
];

const faqs = [
  {
    question: "How much does house painting cost in Sydney?",
    answer:
      "Pricing depends on the size of the property, surface condition, access and scope of work. As a rough guide, a single room starts from $650, a full 3–4 bedroom interior typically runs $4,500–$9,500, and a standard single-storey exterior repaint runs $5,000–$12,000. The only way to get an accurate figure is a free, on-site inspection and a written quote — which is what we provide before any work begins.",
  },
  {
    question: "Are your house painters licensed and insured?",
    answer:
      "Yes. All work is carried out by licensed painters and Prisma Coatings holds comprehensive public liability insurance. We're happy to provide copies of our licence and insurance on request — and we'd encourage you to ask any painter for this before committing to a job.",
  },
  {
    question: "What areas of Sydney do you service?",
    answer:
      "We paint across greater Sydney, including the Inner West, Eastern Suburbs, North West Sydney, the Sutherland Shire and Parramatta. If you're not sure whether we cover your suburb, call us and we'll confirm straight away.",
  },
  {
    question: "Do you handle both interior and exterior painting?",
    answer:
      "Yes. We provide full interior painting (walls, ceilings, trims, doors, feature walls) and exterior painting (weatherboard, render, brick, fascias and gutters), so you can use one team for the whole property rather than coordinating separate contractors.",
  },
  {
    question: "Do you paint apartments, strata buildings and commercial properties?",
    answer:
      "Yes. Alongside standalone houses, we regularly work on apartments, townhouse complexes and commercial premises, including full strata building exteriors and common areas. We liaise directly with strata managers and owners corporations to plan work with minimal disruption to residents.",
  },
  {
    question: "What paint brands and products do you use?",
    answer:
      "We work primarily with Dulux and Haymes paint systems, selecting the specific product — such as UV-stable exterior coatings or low-sheen interior finishes — based on the surface and conditions rather than using a single product for everything.",
  },
  {
    question: "How long does a house painting project take?",
    answer:
      "A single room typically takes one to two days. A full interior repaint usually takes three to five days, and a single-storey exterior repaint takes three to five days depending on preparation needs. We confirm a clear timeline in every written quote so there are no surprises.",
  },
  {
    question: "Do you offer low-VOC or eco-friendly paint options?",
    answer:
      "Yes. Low-VOC paint options are available and are particularly useful for occupied homes, nurseries, and commercial spaces where fumes need to be minimised during and after painting.",
  },
  {
    question: "Can I get a free, no-obligation quote?",
    answer:
      "Absolutely. Contact us and we'll arrange a time to inspect your property and provide a free, detailed written quote — no pressure and no obligation to proceed.",
  },
];

const serviceRegions = [
  { name: "Inner West Sydney", href: "/painters-inner-west-sydney" },
  { name: "Eastern Suburbs", href: "/painters-eastern-suburbs" },
  { name: "North West Sydney", href: "/painters-north-west-sydney" },
  { name: "Sutherland Shire", href: "/painters-sutherland-shire" },
  { name: "Parramatta", href: "/painters-parramatta" },
  { name: "Caringbah", href: "/house-painters-caringbah" },
];

export default function HousePaintersSydneyPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/house-painters-sydney#service",
    name: "House Painters Sydney — Professional Painting Services",
    serviceType: [
      "Interior House Painting",
      "Exterior House Painting",
      "Residential Painting",
      "Commercial Painting",
      "Strata Painting",
    ],
    url: "https://www.prismacoatings.com.au/house-painters-sydney",
    description:
      "Professional house painters serving Sydney, offering interior, exterior, commercial and strata painting for homes, apartments and residential properties across the city.",
    areaServed: [
      { "@type": "City", name: "Sydney" },
      { "@type": "AdministrativeArea", name: "Inner West Sydney" },
      { "@type": "AdministrativeArea", name: "Eastern Suburbs" },
      { "@type": "AdministrativeArea", name: "North West Sydney" },
      { "@type": "AdministrativeArea", name: "Sutherland Shire" },
      { "@type": "AdministrativeArea", name: "Parramatta" },
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "11",
        bestRating: "5",
        worstRating: "1",
      },
      review: testimonials.map((t) => ({
        "@type": "Review",
        reviewBody: t.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        author: { "@type": "Person", name: t.name },
      })),
    },
    offers: {
      "@type": "Offer",
      url: "https://www.prismacoatings.com.au/contact",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
      description: "Request a free quote for house painting services in Sydney.",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.prismacoatings.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "House Painters Sydney",
        item: "https://www.prismacoatings.com.au/house-painters-sydney",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FAQSchema faqs={faqs} />

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Sydney Residential Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Trusted House Painters in Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional interior and exterior
              house painting across Sydney — from Inner West bungalows to
              coastal homes in the Sutherland Shire. Licensed painters,
              careful preparation and a finish that holds up.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-200">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-[#D61C1C]" />
                  {label}
                </span>
              ))}
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
          </div>

          <div className="relative min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/exploreourservices/painting-team-sydney-professional-painters.webp"
              alt="Prisma Coatings professional painting team working on a house painting project in Sydney"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE US ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Sydney Homeowners Choose Prisma Coatings
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              There&apos;s no shortage of painters advertising across Sydney. Here&apos;s
              what actually separates a job that lasts from one that doesn&apos;t
              — and why our clients keep coming back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-gray-700 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES OVERVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Professional Painting Services for Sydney Properties
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re refreshing a single room before a sale, repainting
              an entire home, or planning a strata building programme, Prisma
              Coatings brings the same standard of preparation, materials and
              finish to every job — regardless of size.
            </p>
          </div>

          <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/aboutus/exterior-house-painting-sydney1.webp"
              alt="Professional exterior house painting completed by Prisma Coatings in Sydney"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 mt-4 text-[#D61C1C] font-semibold text-sm hover:underline"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 4. INTERIOR DEEP DIVE ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Interior Painting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Interior House Painting Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Your home&apos;s interior gets seen and touched every day, so the
              standard of the painting matters more than it would in a
              warehouse or storeroom. Our interior painters protect your
              floors, furniture and fittings throughout, and apply the right
              primers and topcoats for each surface — plasterboard, previously
              painted walls, cornices, skirtings and cabinetry — to get a
              clean, consistent finish.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We handle everything from a full interior repaint before a sale
              to a single feature wall. Low-VOC paint is available for
              occupied homes, nurseries and families who&apos;d rather not deal
              with strong fumes.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Walls, ceilings, cornices and skirtings",
                "Interior doors, frames and window reveals",
                "Feature walls and two-tone colour schemes",
                "Kitchen cabinetry and bathroom surfaces",
                "Low-VOC paint options for occupied homes",
                "Pre-sale interior repaints to maximise value",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/interior-painting-sydney"
              className="inline-flex items-center gap-2 mt-8 text-[#D61C1C] font-semibold hover:underline"
            >
              View our interior painting services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/recentWorks/interior-painting-sydney.webp"
              alt="Interior house painting project completed by Prisma Coatings in Sydney"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 5. EXTERIOR DEEP DIVE ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
            <Image
              src="/images/aboutus/exterior-house-painting-sydney.webp"
              alt="Exterior house painting project completed by Prisma Coatings in Sydney"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Exterior Painting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Exterior House Painting Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Sydney&apos;s climate is harder on exterior paint than most people
              realise — strong UV through summer, humidity, seasonal storms,
              and salt-laden air for anything near the coast. These conditions
              break down paint that isn&apos;t the right product for the job, or
              that&apos;s been applied over poorly prepared surfaces.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Every exterior job starts with a pressure wash to remove dirt,
              mould, salt and chalking paint. Cracks and damaged render are
              filled and feathered, bare timber is primed, and only then do
              premium weatherproof coatings — Dulux Weathershield and similar
              systems — go on.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Pressure washing and full surface preparation",
                "Crack filling, render repairs and timber treatment",
                "UV-stable, weatherproof exterior coatings",
                "Salt-resistant systems for coastal properties",
                "Fascias, gutters, eaves, soffits and exterior doors",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/exterior-painting-sydney"
              className="inline-flex items-center gap-2 mt-8 text-[#D61C1C] font-semibold hover:underline"
            >
              View our exterior painting services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. COMMERCIAL & STRATA ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial & Strata
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Commercial & Strata Painting Across Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Beyond standalone homes, we work with strata managers, owners
              corporations and business owners across Sydney. Strata painting
              requires more than a painting crew — it takes planning, resident
              communication and a documented scope of works. We manage all of
              that directly.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              For commercial premises, we understand that downtime has a real
              cost, which is why we schedule around your trading hours and can
              work evenings or weekends. Low-VOC products keep fumes to a
              minimum in occupied spaces.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Apartment building exteriors and common areas",
                "Retail shops, offices and hospitality venues",
                "Direct liaison with strata managers",
                "After-hours and weekend scheduling available",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="/commercial-painting-sydney"
                className="inline-flex items-center gap-2 text-[#D61C1C] font-semibold hover:underline"
              >
                Commercial painting services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/strata-painting-sydney"
                className="inline-flex items-center gap-2 text-[#D61C1C] font-semibold hover:underline"
              >
                Strata painting services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/strata/apartment-complex-painting-sydney.webp"
              alt="Apartment complex strata painting project completed by Prisma Coatings in Sydney"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-[#D61C1C] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to get a quote for your Sydney property?
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

      {/* ── 7. BEFORE & AFTER ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Sydney Painting Transformations
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              A few real before-and-after results from recent projects across
              Sydney — see the full project gallery for more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterShowcase.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
              >
                <div className="grid grid-cols-2">
                  <div className="relative h-32 sm:h-40">
                    <Image
                      src={item.before}
                      alt={item.beforeAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      Before
                    </span>
                  </div>
                  <div className="relative h-32 sm:h-40">
                    <Image
                      src={item.after}
                      alt={item.afterAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      After
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-center py-3 text-[#13233A]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[#D61C1C] font-semibold hover:underline"
            >
              See our full project gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. OUR PROCESS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How Our Sydney Painting Process Works
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Every project follows the same six-step process, from the first
              phone call to the final walkthrough.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ── 9. SYDNEY PROPERTIES WE WORK WITH ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Local Knowledge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Every Sydney Property Type, Understood
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Sydney&apos;s housing stock is genuinely varied, and each type has its
            own painting requirements. We adjust our approach to the property
            in front of us, not the other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {propertyTypes.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-[#13233A] text-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 10. PRICING ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Pricing Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              House Painting Costs in Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Every property is different, so the ranges below are a starting
              point, not a quote. The only accurate figure comes from a free
              on-site inspection — which we offer to every Sydney homeowner
              before any work begins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.type}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D61C1C] text-white flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{tier.type}</h3>
                  <p className="mt-2 text-2xl font-bold text-[#D61C1C]">
                    {tier.range}
                  </p>
                  <p className="text-sm text-gray-500 mb-5">{tier.note}</p>
                  <div className="space-y-2 mt-auto">
                    {tier.details.map((d) => (
                      <div key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-200 max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              Prices shown are indicative only and vary with property size,
              surface condition, accessibility and paint specification. Every
              project gets a free on-site inspection and a detailed written
              quotation before work begins.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-3.5 rounded-md font-semibold transition-colors text-sm"
              >
                Book a Free On-Site Inspection
              </Link>
              <a
                href="tel:+61401508036"
                className="inline-flex items-center justify-center border border-[#13233A] text-[#13233A] px-6 py-3.5 rounded-md font-semibold hover:bg-[#13233A] hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 0401 508 036
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Sydney Clients Say About Prisma Coatings
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2 text-[#D61C1C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-semibold text-lg">
              5.0 on Google — real reviews from real clients
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-1 text-[#D61C1C] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-[#13233A]">{t.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 12. FINAL CTA ── */}
      <section className="bg-[#13233A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need Reliable House Painters in Sydney?
          </h2>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Whether it&apos;s a single room, a full interior and exterior repaint,
            or a strata building programme, Prisma Coatings is ready to help.
            Contact us today for a free, written, no-obligation quote.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-300">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 text-[#D61C1C]" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-5 h-5 text-[#D61C1C]" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Star className="w-5 h-5 text-[#D61C1C]" />
              <span>5.0 Google Rating</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CheckCircle className="w-5 h-5 text-[#D61C1C]" />
              <span>Free Written Quotes</span>
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
        </div>
      </section>

      {/* ── 13. FAQs ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            House Painters Sydney — Frequently Asked Questions
          </h2>
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

      {/* ── 14. AREAS WE SERVICE ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Painting Services Across Greater Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We service homes and businesses across the following regions. If
              you&apos;re looking for painters in a specific area, see our local
              pages below.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {serviceRegions.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="bg-white rounded-xl px-4 py-3 border border-gray-200 text-center text-sm font-medium text-[#13233A] flex items-center justify-center gap-2 hover:border-[#D61C1C] hover:text-[#D61C1C] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D61C1C] flex-shrink-0" />
                {area.name}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/about"
              className="text-[#D61C1C] hover:underline font-medium flex items-center gap-1"
            >
              About Prisma Coatings <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/gallery"
              className="text-[#D61C1C] hover:underline font-medium flex items-center gap-1"
            >
              View our project gallery <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/blog"
              className="text-[#D61C1C] hover:underline font-medium flex items-center gap-1"
            >
              Read our painting blog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
