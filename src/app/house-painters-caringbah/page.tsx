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
  Award,
  Zap,
} from "lucide-react";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: "House Painters Caringbah | Prisma Coatings",
  description:
    "Professional house painters in Caringbah. Prisma Coatings provides interior, exterior, residential, commercial and strata painting in Caringbah NSW. Licensed & insured. Free quotes — call 0401 508 036.",
  keywords: [
    "house painters caringbah",
    "painters caringbah",
    "house painter caringbah",
    "interior house painting caringbah",
    "exterior house painting caringbah",
    "residential painting caringbah",
    "commercial painting caringbah",
    "strata painting caringbah",
    "painting services caringbah",
    "painters in caringbah nsw",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/house-painters-caringbah",
  },
  openGraph: {
    title: "House Painters Caringbah | Prisma Coatings",
    description:
      "Expert house painters in Caringbah NSW. Interior & exterior painting, residential, commercial and strata services. Licensed & insured. Free no-obligation quotes.",
    url: "https://www.prismacoatings.com.au/house-painters-caringbah",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "House Painters Caringbah NSW – Prisma Coatings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Caringbah | Prisma Coatings",
    description:
      "Professional house painters in Caringbah NSW. Interior, exterior, residential & strata painting. Licensed, insured and free quotes available.",
    images: ["https://www.prismacoatings.com.au/og/og-image.png"],
  },
};

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "9+ Years Experience" },
  { icon: CheckCircle, label: "Free Quotes" },
  { icon: Star, label: "Premium Paint Brands" },
];

const benefitCards = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description:
      "All our painters hold current NSW contractor licences and we carry comprehensive public liability insurance. You're fully protected throughout every project — no exceptions.",
  },
  {
    icon: Award,
    title: "9+ Years of Local Experience",
    description:
      "Nearly a decade working across the Sutherland Shire means we understand Caringbah's property types, coastal conditions and what paint systems perform best here.",
  },
  {
    icon: CheckCircle,
    title: "Free, Detailed Written Quotes",
    description:
      "We inspect your property, assess every surface and provide a clear, itemised written quote at no cost. No guesswork, no surprise invoices — just transparent pricing from the start.",
  },
  {
    icon: Star,
    title: "Premium Dulux & Haymes Paints",
    description:
      "We use quality Dulux and Haymes paint systems chosen specifically for the conditions at your property — whether that's UV-resistant exterior coatings or low-sheen interior finishes.",
  },
  {
    icon: Zap,
    title: "Thorough Surface Preparation",
    description:
      "Every job begins with proper surface preparation — cleaning, filling, sanding and priming. This is what separates a paint job that lasts a decade from one that peels in eighteen months.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We show up when we say we will, work within agreed timeframes and keep you informed at every stage. Caringbah homeowners trust us because we respect their time and their property.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Quote & Site Inspection",
    description:
      "We visit your Caringbah property, assess the full scope of work, take measurements, identify any surface issues and discuss your colour preferences. You receive a detailed written quote at no cost and with no obligation.",
  },
  {
    step: "02",
    title: "Colour Selection & Planning",
    description:
      "Our team helps you choose colours that suit your property style, natural light and surroundings. We can provide physical Dulux and Haymes samples and discuss finish options before a single brush touches your walls.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    description:
      "All surfaces are thoroughly cleaned, sanded, filled and repaired. For coastal Caringbah properties this is critical — salt air and moisture can compromise adhesion if prep work is skipped or rushed.",
  },
  {
    step: "04",
    title: "Priming",
    description:
      "The right primer is applied to every surface before topcoats go on. Primers seal porous surfaces, improve adhesion and ensure the topcoat performs as the manufacturer intends — longer-lasting colour and protection.",
  },
  {
    step: "05",
    title: "Professional Painting",
    description:
      "Our experienced painters apply premium coatings with precision and care, working efficiently to minimise disruption to your home or business while delivering the quality finish you're paying for.",
  },
  {
    step: "06",
    title: "Final Inspection & Clean-Up",
    description:
      "We walk through every room and surface with you, address any touch-ups on the spot, remove all materials and leave your Caringbah property clean, tidy and exactly as we found it — just with a fresh coat of paint.",
  },
];

const faqs = [
  {
    question: "Do you provide house painting services in Caringbah?",
    answer:
      "Yes. Prisma Coatings works throughout Caringbah and the surrounding Sutherland Shire, including Miranda, Cronulla, Gymea, Sylvania, Engadine and Menai. Whether you need a full interior repaint, an exterior coat or a single feature wall, we service Caringbah and can arrange a free site inspection at a time that suits you.",
  },
  {
    question: "What painting services do you offer in Caringbah?",
    answer:
      "We offer a comprehensive range of painting services in Caringbah — interior house painting, exterior house painting, residential repaints, commercial painting and strata painting for apartment complexes and townhouse developments. We handle everything from a single bedroom to large multi-stage building programmes.",
  },
  {
    question: "How much does house painting cost in Caringbah?",
    answer:
      "Costs depend on property size, the number of rooms or surfaces, current surface condition and the scope of work. As a general guide, interior repaints for a 3-bedroom Caringbah home typically start from $4,500–$9,500 depending on room count and condition. Exterior repaints for a standard single-storey home start from $5,000–$12,000. We provide free, detailed written quotes after inspecting your property — so you get an accurate number before committing to anything.",
  },
  {
    question: "Do you use paints suited to Caringbah's coastal conditions?",
    answer:
      "Absolutely. Caringbah sits in the heart of the Sutherland Shire and is exposed to salt-laden air from the nearby Cronulla coastline and Port Hacking. We select paint systems specifically formulated for coastal and semi-coastal environments — products with strong adhesion, resistance to moisture and UV-stable pigments that don't fade prematurely in the southern Sydney sun.",
  },
  {
    question: "How long does an exterior repaint take in Caringbah?",
    answer:
      "A standard single-storey exterior repaint in Caringbah typically takes 3–5 days, depending on the size of the home, the condition of existing surfaces and the amount of preparation required. Double-storey homes or properties with significant prep work may take longer. We provide a clear project timeline in every written quote.",
  },
  {
    question: "Can you help me choose colours for my Caringbah home?",
    answer:
      "Yes. We're happy to discuss colour options during the quoting stage and can provide physical Dulux and Haymes paint samples for you to compare in your own lighting. Many Caringbah homes have a character that suits particular colour directions — neutral tones that complement brick, coastal palettes or contemporary schemes — and we can help you find what works best for your specific property.",
  },
  {
    question: "Are your painters licensed and insured in NSW?",
    answer:
      "Yes. All painting work is carried out by licensed painters in NSW and Prisma Coatings holds comprehensive public liability insurance. We're happy to provide copies of our licence and insurance documentation on request — and we strongly encourage all Caringbah homeowners to ask any painter they're considering for these details before committing to a job.",
  },
  {
    question: "Do you paint strata buildings and apartment complexes in Caringbah?",
    answer:
      "Yes. We have extensive experience with strata painting across the Sutherland Shire, including apartment buildings, townhouse complexes and low-rise developments in and around Caringbah. We work directly with strata managers and owners corporations to plan and deliver painting programmes with minimal disruption to residents. Our strata painting page has more detail on how we manage these projects.",
  },
];

const suburb = "Caringbah";

const nearbyAreas = [
  { name: "Miranda", link: null },
  { name: "Cronulla", link: null },
  { name: "Gymea", link: null },
  { name: "Sylvania", link: null },
  { name: "Engadine", link: null },
  { name: "Menai", link: null },
  { name: "Kirrawee", link: null },
  { name: "Woolooware", link: null },
  { name: "Sutherland", link: null },
  { name: "Loftus", link: null },
  { name: "Jannali", link: null },
  { name: "Oyster Bay", link: null },
];

export default function HousePaintersCaringbahPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": "https://www.prismacoatings.com.au/#business",
    name: "Prisma Coatings",
    url: "https://www.prismacoatings.com.au",
    telephone: "+61401508036",
    email: "info@prismacoatings.com.au",
    description:
      "Professional house painters in Caringbah NSW. Prisma Coatings provides interior, exterior, residential, commercial and strata painting across Caringbah and the Sutherland Shire. Licensed and insured.",
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
      latitude: -34.0385,
      longitude: 151.1227,
    },
    areaServed: [
      { "@type": "City", name: "Caringbah" },
      { "@type": "City", name: "Miranda" },
      { "@type": "City", name: "Cronulla" },
      { "@type": "City", name: "Gymea" },
      { "@type": "City", name: "Sylvania" },
      { "@type": "City", name: "Engadine" },
      { "@type": "City", name: "Menai" },
      { "@type": "AdministrativeArea", name: "Sutherland Shire NSW" },
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
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.prismacoatings.com.au/house-painters-caringbah#service",
    name: "House Painters Caringbah — Professional Painting Services",
    serviceType: [
      "Interior House Painting",
      "Exterior House Painting",
      "Residential Painting",
      "Commercial Painting",
      "Strata Painting",
    ],
    url: "https://www.prismacoatings.com.au/house-painters-caringbah",
    description:
      "Professional interior and exterior house painting in Caringbah NSW. Prisma Coatings provides residential, commercial and strata painting services across Caringbah and the Sutherland Shire.",
    areaServed: [
      { "@type": "City", name: "Caringbah" },
      { "@type": "AdministrativeArea", name: "Sutherland Shire NSW" },
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
        "Free no-obligation quote for house painting in Caringbah NSW.",
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
        name: "Painting Services Sydney",
        item: "https://www.prismacoatings.com.au/house-painters-sydney",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Painters Sutherland Shire",
        item: "https://www.prismacoatings.com.au/painters-sutherland-shire",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "House Painters Caringbah",
        item: "https://www.prismacoatings.com.au/house-painters-caringbah",
      },
    ],
  };

  return (
    <main className="bg-white text-[#13233A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
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
              Caringbah Painting Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              House Painters in Caringbah, NSW
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional house painting across
              Caringbah and the Sutherland Shire — from detailed interior
              repaints and durable exterior coatings to commercial and strata
              projects. Licensed painters, premium products and a finish you can
              rely on.
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
              src="/images/caringbah/exterior-house-painting-caringbah-premium-finish.webp"
              alt="Professional house painters in Caringbah completing an exterior repaint"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE PRISMA COATINGS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Caringbah Homeowners Choose Prisma Coatings
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              There are plenty of painting companies operating in the Sutherland
              Shire. Here's what separates the ones that deliver from the ones
              that disappoint — and why Caringbah property owners keep coming
              back to us.
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

      {/* ── 3. PROFESSIONAL HOUSE PAINTING SERVICES INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/caringbah/residential-painting-caringbah-prisma-coatings.webp"
            alt="Residential painters completing a full home repaint in Caringbah"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Painting Services Caringbah
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Professional House Painting Services in Caringbah
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Caringbah is a well-established suburb at the centre of the
            Sutherland Shire — a community of family homes, investment
            properties, small businesses and strata complexes, all with their
            own painting requirements. Whether you're refreshing the interiors
            of a family home before a sale, protecting an exterior from the
            elements or planning a full strata repaint, Prisma Coatings has the
            experience, equipment and products to get it done properly.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            We work across all property types in Caringbah — brick veneer
            family homes, fibrous cement weatherboard cottages, rendered
            townhouses, apartment complexes and commercial premises. Every job,
            regardless of size, gets the same thorough preparation, the same
            premium materials and the same standard of finish.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Interior house painting — walls, ceilings, trims and feature walls",
              "Exterior house painting — walls, fascias, gutters and doors",
              "Residential repaints before sale or after renovation",
              "Commercial painting for offices, retail and hospitality",
              "Strata painting for apartment buildings and complexes",
              "Colour consultation with every quote at no extra cost",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INTERIOR HOUSE PAINTING ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Interior Painting
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Interior House Painting Caringbah
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Your home's interior is where you live — which means the quality
              of the painting matters more than it might in a warehouse or
              storeroom. Our interior painters in Caringbah work with care and
              precision, protecting your floors, furniture and fittings
              throughout and applying the right primers and topcoats for each
              surface to achieve a clean, consistent finish that holds up to
              everyday life.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We handle everything from full interior repaints — all walls,
              ceilings, skirtings, cornices and doors — to targeted refreshes of
              individual rooms. Whether you're updating a Caringbah family home
              before listing it for sale, refreshing worn rental properties
              between tenants, or simply want a change of tone in your living
              room, our team delivers results that are worth the investment. We
              work around your schedule and keep disruption to an absolute
              minimum throughout.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Walls, ceilings, cornices and skirtings",
                "Interior doors, frames and window reveals",
                "Feature walls, accent colours and two-tone schemes",
                "Kitchen cabinetry and bathroom surfaces",
                "Low-VOC paint options for family homes",
                "Pre-sale interior repaints to maximise property value",
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
              View our interior painting services{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/caringbah/house-painting-project-caringbah.webp"
              alt="Interior house painting in Caringbah — clean walls and ceiling finish by Prisma Coatings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 5. EXTERIOR HOUSE PAINTING ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
            <Image
              src="/images/caringbah/professional-house-painting-caringbah-2.webp"
              alt="Exterior house painting in Caringbah — durable coating on a brick veneer home"
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
              Exterior House Painting Caringbah
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Caringbah's location in the southern Sutherland Shire means
              exterior surfaces face a demanding combination of conditions: high
              UV intensity from the southern Sydney sun, salt-laden air drifting
              in from Cronulla Beach and Port Hacking, seasonal rain and the
              occasional strong southerly buster. These aren't theoretical
              threats — they actively degrade paint that isn't the right product
              for the job or hasn't been applied over properly prepared surfaces.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Our exterior painters in Caringbah take a rigorous approach to
              preparation. Every exterior job begins with a thorough pressure
              wash to remove dirt, salt, mould and chalking paint. Cracks,
              holes and damaged render are filled and feathered. Bare timber is
              primed before topcoats are applied. Only then do premium
              weatherproof coatings go on — Dulux Weathershield and similar
              high-performance systems that are engineered to handle UV
              degradation, moisture infiltration and thermal expansion across
              Sydney's climate range.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              A quality exterior paint job on a Caringbah home isn't just
              cosmetic — it's your primary line of defence against water
              ingress, timber rot and accelerated weathering. Done properly, it
              can add real value to your property and protect it for a decade or
              more.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Pressure washing and thorough surface preparation",
                "Crack filling, render repairs and timber treatment",
                "UV-stable, weatherproof exterior coating systems",
                "Salt-resistant coatings for Caringbah's coastal conditions",
                "Fascias, gutters, eaves, soffits and exterior doors",
                "Fences, retaining walls and outdoor timber structures",
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
              View our exterior painting services{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. COMMERCIAL PAINTING ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial Painting
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Commercial Painting Caringbah
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Caringbah's commercial precinct — centred around Caringbah Road
              and the surrounding retail and industrial areas — is home to a
              diverse range of businesses, from retail shops and medical
              practices to warehouses, offices and service industries. A
              well-maintained commercial space conveys professionalism and
              attention to detail. A tired, peeling or dated one can quietly
              undermine customer confidence before a single conversation has
              taken place.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Prisma Coatings delivers commercial painting in Caringbah that
              stands up to heavy foot traffic, regular cleaning and the demands
              of a working environment. We understand that downtime has a
              direct cost — which is why we schedule painting work around your
              business hours and can work evenings or weekends when required.
              Low-VOC products are available for occupied spaces where fumes
              need to be kept to a minimum.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Retail shops, showrooms and reception areas",
                "Offices, meeting rooms and workspaces",
                "Medical centres, dental practices and allied health",
                "Warehouses, factories and industrial premises",
                "Cafes, restaurants and hospitality venues",
                "After-hours and weekend scheduling available",
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
              View our commercial painting services{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/caringbah/comercial-paint-caringbah.webp"
              alt="Commercial painting services in Caringbah by Prisma Coatings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 7. STRATA PAINTING ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
            <Image
              src="/images/strata/strata-painting-sydney-apartment-building.webp"
              alt="Strata painting in Caringbah — apartment building repaint by Prisma Coatings"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Strata Painting
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Strata Painting Caringbah
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Caringbah has a growing number of strata-titled properties —
              apartment blocks, townhouse complexes and mixed-use buildings that
              need periodic repainting to maintain their condition, protect their
              structure and preserve the value of individual lots. Strata
              painting is a specialist area that requires more than just
              a painting crew — it requires planning, resident communication,
              a documented scope of works and experience managing projects in
              occupied buildings.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Prisma Coatings works directly with strata managers and owners
              corporations in Caringbah to plan and deliver painting programmes
              that meet compliance obligations, respect resident schedules and
              come in on budget. We cover full building exteriors, common areas,
              lobbies, corridors, stairwells, car parks and basement areas — and
              provide detailed written colour schedules and progress reporting
              throughout.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Apartment building exteriors and rendered facades",
                "Common area corridors, lobbies and stairwells",
                "Car parks, basement areas and utility spaces",
                "Detailed colour schedules and scope of works documentation",
                "Minimal disruption to residents throughout the programme",
                "Direct liaison with strata managers and owners corporations",
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
              Learn more about our strata painting services{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-[#D61C1C] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to get a quote for your Caringbah property?
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

      {/* ── 8. OUR PAINTING PROCESS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How Our Caringbah Painting Process Works
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Every Prisma Coatings project follows a proven six-step process
              designed to deliver consistent quality, clear communication and a
              result you'll be proud of — from the first phone call to the
              final walkthrough.
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

      {/* ── 9. WHY CARINGBAH HOMEOWNERS CHOOSE PRISMA ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Local Knowledge
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Why Caringbah Homeowners Trust Prisma Coatings
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Caringbah is a suburb with genuine character. The housing stock is
              a mix of well-established brick veneer family homes — many built
              in the 1960s and 1970s — alongside more recent townhouse
              developments, renovated cottages and modern infill builds. Each
              property type comes with its own painting requirements, surface
              challenges and finish expectations.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Older brick veneer homes in Caringbah often have painted masonry
              that has been coated multiple times over the decades. Proper
              assessment is essential before repainting — understanding what's
              already on the surface, whether there are adhesion issues, and
              which products will bond correctly and provide lasting protection.
              We do this assessment properly, every time.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              For homeowners renovating before sale, we understand the
              Caringbah property market and know what buyers expect — clean,
              contemporary colour choices, precise finish work and exterior
              presentation that photographs well. A quality paint job completed
              before listing genuinely impacts perceived value and, often, the
              final sale price. Many Caringbah vendors have told us it was one
              of the best pre-sale investments they made.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              For investment property owners in Caringbah, we also understand
              the priorities of landlords — durable finishes in neutral tones
              that are easy to touch up between tenancies, completed on schedule
              so vacancy periods are kept short, and pricing that makes sense
              for an investment context.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#D61C1C] font-semibold hover:underline"
              >
                Learn more about Prisma Coatings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Home,
                title: "Family Homes & Renovations",
                text: "We work with Caringbah families renovating their homes and homeowners preparing for sale, delivering interior and exterior finishes that are both beautiful and built to last.",
              },
              {
                icon: Shield,
                title: "Coastal Weather Conditions",
                text: "Salt air from nearby Cronulla and Port Hacking, high UV and seasonal storms require paint systems specifically chosen for durability in coastal and semi-coastal conditions.",
              },
              {
                icon: DollarSign,
                title: "Property Value",
                text: "A quality paint job — inside and out — is consistently one of the highest-return investments a Caringbah homeowner can make before going to market.",
              },
              {
                icon: Building2,
                title: "Local Architecture",
                text: "From 1960s brick veneer homes to contemporary renders and fibrous cement cladding, we understand the surfaces, products and techniques each building type requires.",
              },
            ].map((card) => {
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
        </div>
      </section>

      {/* ── 10. HOUSE PAINTING COSTS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Pricing Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              House Painting Costs in {suburb}
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Every property is different — its size, age, surface condition,
              accessibility and the scope of work all influence the final cost of
              a painting project. Rather than give you a number that means
              nothing without context, we provide the ranges below as a
              transparent starting point. The only accurate figure comes from a
              free on-site inspection and a detailed written quotation — which is
              exactly what we offer every {suburb} homeowner before any work
              begins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: "Single Room",
                icon: Home,
                range: "From $650",
                note: "Per standard bedroom or living room",
                details: [
                  "Premium surface preparation",
                  "Primer where required",
                  "Two premium finish coats",
                  "Premium Dulux products",
                  "Licensed & fully insured",
                  "Detailed final inspection",
                ],
              },
              {
                type: "Full Interior",
                icon: Home,
                range: "$4,500 – $9,500",
                note: "3–4 bedroom home",
                details: [
                  "Premium surface preparation",
                  "Primer where required",
                  "Two premium finish coats",
                  "Premium Dulux products",
                  "Licensed & fully insured",
                  "Detailed final inspection",
                ],
              },
              {
                type: "Exterior — Single Storey",
                icon: Building2,
                range: "$5,000 – $12,000",
                note: "Standard single-storey home",
                details: [
                  "Premium surface preparation",
                  "Primer where required",
                  "Two premium finish coats",
                  "Premium Dulux products",
                  "Licensed & fully insured",
                  "Detailed final inspection",
                ],
              },
              {
                type: "Commercial & Strata",
                icon: Brush,
                range: "Custom Quote",
                note: "Tailored to your building and scope",
                details: [
                  "Free on-site inspection",
                  "Detailed written scope of works",
                  "Staged scheduling available",
                  "Premium Dulux products",
                  "Licensed & fully insured",
                  "Detailed final inspection",
                ],
              },
            ].map((tier) => {
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
              The prices shown are indicative only and may vary depending on the
              property&apos;s size, condition, preparation required, accessibility
              and paint specification. Every project is unique, which is why we
              provide a free on-site inspection and a detailed written quotation
              before any work begins.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              For a more detailed guide, see our upcoming blog post:{" "}
              <span className="text-[#D61C1C] font-medium">
                House Painting Costs in {suburb}
              </span>
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

      {/* ── 11. FAQs ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            House Painters Caringbah — Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Questions we regularly receive from Caringbah homeowners, property
            investors and strata managers.
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

      {/* ── 12. NEARBY AREAS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Nearby Areas We Also Service
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Prisma Coatings services Caringbah and the surrounding Sutherland
              Shire. If you're in any of the suburbs below, we service your area
              and can arrange a free site inspection at a time that suits you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {nearbyAreas.map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-xl px-4 py-3 border border-gray-200 text-center text-sm font-medium text-[#13233A] flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D61C1C] flex-shrink-0" />
                {area.name}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-500 text-sm">
            Servicing all of the Sutherland Shire and broader Sydney.{" "}
            <Link
              href="/painters-sutherland-shire"
              className="text-[#D61C1C] hover:underline font-medium"
            >
              View our Sutherland Shire painting page
            </Link>{" "}
            or{" "}
            <Link
              href="/house-painters-sydney"
              className="text-[#D61C1C] hover:underline font-medium"
            >
              see all Sydney locations
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── 13. FINAL CTA ── */}
      <section className="bg-[#13233A] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Looking for House Painters in Caringbah?
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Whether you need a single room freshened up, a complete home repaint
            inside and out, a commercial space refurbished or a strata programme
            planned and delivered — Prisma Coatings is ready to help. Contact us
            today for a free, written, no-obligation quote and see why Caringbah
            property owners keep choosing us for their painting projects.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-300">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 text-[#D61C1C]" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-5 h-5 text-[#D61C1C]" />
              <span>9+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Star className="w-5 h-5 text-[#D61C1C]" />
              <span>Premium Paints</span>
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

          <p className="mt-8 text-gray-400 text-sm">
            Free quotes · Licensed &amp; insured · Caringbah and the Sutherland
            Shire
          </p>
        </div>
      </section>
    </main>
  );
}
