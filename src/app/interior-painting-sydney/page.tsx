import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Home,
  Paintbrush,
  Palette,
  Phone,
  Star,
  Building2,
  MessageCircle,
  ClipboardList,
  Sparkles,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Interior Painters Sydney | Free Quote | Prisma Coatings",
  description:
    "Professional interior painting in Sydney for homes & apartments. Walls, ceilings, trims & full repaints. Local painters, premium finish. Call for a free quote.",
  keywords: [
    "interior painting sydney",
    "interior painters sydney",
    "house painters sydney",
    "home interior painting sydney",
    "apartment painters sydney",
    "ceiling painting sydney",
    "wall painting sydney",
    "interior house painting services sydney",
    "professional painters sydney",
    "residential painters sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/interior-painting-sydney",
  },
  openGraph: {
    title: "Interior Painters Sydney | Prisma Coatings",
    description:
      "Professional interior painting services in Sydney for homes and apartments. Walls, ceilings, trims and full repaints. Free quotes.",
    url: "https://www.prismacoatings.com.au/interior-painting-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Interior Painting Sydney – Prisma Coatings",
      },
    ],
  },
};

const trustFeatures = [
  "Walls, ceilings, trims, doors and skirting boards",
  "Full interior repaints and single room refreshes",
  "Houses, apartments, units and strata properties",
  "Thorough surface preparation — patching, sanding, sealing",
  "Premium paints: Dulux, Taubmans, Haymes",
  "Free colour consultation included on every job",
  "Clean, tidy workmanship — we respect your home",
  "Free detailed quotes with no obligation",
];

const services = [
  {
    title: "Walls & Ceilings",
    description:
      "Fresh paint on walls and ceilings makes the single biggest visual difference in any home. We apply smooth, consistent coats that brighten every room and hide years of wear.",
    icon: Home,
  },
  {
    title: "Trims, Doors & Skirting Boards",
    description:
      "The details matter. We paint trims, architraves, skirting boards and doors to a sharp, clean finish that ties the whole interior together.",
    icon: Paintbrush,
  },
  {
    title: "Feature Walls",
    description:
      "Add depth and personality to a living room, bedroom or hallway with a well-chosen feature wall. We help you pick the right colour and sheen level for the space.",
    icon: Sparkles,
  },
  {
    title: "Full Home Repaints",
    description:
      "Refreshing the whole home? We coordinate the complete interior repaint — every room, wall, ceiling and trim — with a clear schedule and minimal disruption to your daily life.",
    icon: ClipboardList,
  },
  {
    title: "Apartment & Unit Painting",
    description:
      "We paint apartments and units across Sydney including strata-managed buildings. We work efficiently in compact spaces and understand body corporate requirements.",
    icon: Building2,
  },
  {
    title: "Colour Consultation",
    description:
      "Not sure what colour to go with? We bring samples, discuss your style and lighting, and recommend colours and finishes that work for the specific conditions of each room.",
    icon: Palette,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free On-Site Quote",
    description:
      "We visit your property, assess every room and provide a clear written quote with no surprises and no obligation.",
  },
  {
    step: "02",
    title: "Colour & Finish Selection",
    description:
      "We guide you through colour and sheen choices for each surface. We bring samples and help you decide — no pressure.",
  },
  {
    step: "03",
    title: "Surface Preparation",
    description:
      "Before any paint goes on, we patch holes, fill cracks, sand surfaces and seal any problem areas. This step is what separates a lasting finish from a temporary one.",
  },
  {
    step: "04",
    title: "Professional Painting",
    description:
      "We apply premium-quality paint with the right technique for each surface — consistent coverage, clean edges and the correct number of coats.",
  },
  {
    step: "05",
    title: "Final Walkthrough & Clean-Up",
    description:
      "We inspect the completed work with you, touch up anything needed and leave your home clean, tidy and ready to enjoy.",
  },
];

const propertyTypes = [
  {
    title: "Houses & Family Homes",
    description:
      "Full interior repaints or targeted room refreshes for detached homes across Sydney — from single rooms to whole-of-home transformations.",
    icon: Home,
  },
  {
    title: "Apartments & Units",
    description:
      "Efficient interior painting for apartments, units and flats across Sydney. We work in high-rise buildings, handle tight access and keep disruption minimal.",
    icon: Building2,
  },
  {
    title: "Townhouses & Terraces",
    description:
      "Interior painting for terrace houses and townhouses, including multi-level stairs, hallways, high ceilings and heritage-style trim work.",
    icon: Home,
  },
  {
    title: "Strata & Body Corporate",
    description:
      "We work with strata managers and owners corporations for common area and individual unit painting across Sydney's apartment complexes.",
    icon: Building2,
  },
  {
    title: "Investment Properties",
    description:
      "Refresh a rental property between tenants or prepare your investment for sale. A clean interior repaint is one of the highest-ROI improvements you can make.",
    icon: ClipboardList,
  },
];

const areas = [
  {
    region: "Inner West",
    suburbs:
      "Campsie, Marrickville, Ashfield, Leichhardt, Newtown, Burwood, Strathfield, Dulwich Hill, Hurlstone Park",
  },
  {
    region: "Eastern Suburbs",
    suburbs:
      "Bondi, Randwick, Maroubra, Coogee, Surry Hills, Paddington, Woollahra, Kensington, Bronte",
  },
  {
    region: "South Sydney",
    suburbs:
      "Rockdale, Kogarah, Hurstville, Sutherland, Cronulla, Banksia, Bexley, Penshurst, Oatley",
  },
  {
    region: "Inner Sydney & CBD",
    suburbs:
      "Sydney CBD, Pyrmont, Glebe, Redfern, Zetland, Alexandria, Waterloo, Erskineville, Ultimo",
  },
  {
    region: "North Shore",
    suburbs:
      "Chatswood, Lane Cove, North Sydney, Mosman, Neutral Bay, St Leonards, Willoughby, Artarmon",
  },
  {
    region: "Western Sydney",
    suburbs:
      "Parramatta, Homebush, Auburn, Lidcombe, Berala, Merrylands, Granville, Fairfield, Liverpool",
  },
];

const faqs = [
  {
    q: "How much does interior painting cost in Sydney?",
    a: "Interior painting costs in Sydney vary based on the number of rooms, room size, ceiling height, surface condition and preparation required. As a rough guide, a single bedroom typically costs between $300–$600, while a full 3-bedroom home repaint can range from $3,000–$6,000 or more. We provide free detailed quotes so you know the exact cost before any work starts.",
  },
  {
    q: "How long does interior painting take?",
    a: "A single room can usually be completed in one day. A full interior repaint of a 3-bedroom home typically takes 3–5 days depending on the scope, number of coats required and surface preparation needed. We provide a clear timeline in your written quote.",
  },
  {
    q: "Do you provide free quotes for interior painting in Sydney?",
    a: "Yes. We offer free on-site quotes across Sydney with no obligation. We visit your property, assess the work and provide a written quote. Call 0401 508 036 or submit a request online and we'll be in touch quickly.",
  },
  {
    q: "What paint brands do you use for interior painting?",
    a: "We use premium Australian paint brands including Dulux, Taubmans and Haymes. These are low-VOC, durable paints that perform well in Australian homes and provide a long-lasting finish. We can also work with a specific brand or colour range if you have a preference.",
  },
  {
    q: "Do you paint apartments as well as houses in Sydney?",
    a: "Yes. We regularly paint apartments, units and strata properties across Sydney. We're experienced working in apartment buildings — including managing access, protecting common areas and coordinating with body corporate requirements when needed.",
  },
  {
    q: "Do you fix cracks and holes before painting?",
    a: "Yes. Surface preparation is a core part of every job we do. We patch holes, fill cracks, sand rough areas and seal surfaces before applying any paint. This preparation is what produces a smooth, professional finish that stands the test of time.",
  },
  {
    q: "Do I need to move furniture before you start?",
    a: "We ask that you move smaller items and clear the immediate area around walls where possible. For larger furniture, we can move and cover items on-site. We always use drop sheets and protective coverings to keep your floors, furniture and belongings safe throughout the job.",
  },
];

export default function InteriorPaintingSydneyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/interior-painting-sydney#service",
    name: "Interior Painting Sydney",
    serviceType: "Interior Residential Painting",
    url: "https://www.prismacoatings.com.au/interior-painting-sydney",
    description:
      "Professional interior painting services in Sydney for homes, apartments and residential properties. Walls, ceilings, trims, doors and full home repaints.",
    areaServed: [
      { "@type": "City", name: "Sydney" },
      { "@type": "State", name: "New South Wales" },
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
      description: "Free on-site quote for interior painting services in Sydney.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="bg-white text-[#13233A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Sydney Interior Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Interior Painting Sydney – Professional House Painters
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings provides professional interior painting services
              across Sydney for houses, apartments and units. We transform walls,
              ceilings, trims and living spaces with premium finishes, careful
              preparation and workmanship you can actually see the difference in.
            </p>

            <div className="mt-4 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D61C1C] text-[#D61C1C]" />
              ))}
              <span className="ml-1 text-gray-200 text-sm font-medium">
                5-star rated interior painters in Sydney
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
                href="tel:0401508036"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 0401 508 036
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/recentWorks/14.jpeg"
              alt="Interior painting service in Sydney by Prisma Coatings – walls and ceilings"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE PRISMA ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/1.jpg"
            alt="Professional interior house painters in Sydney – Prisma Coatings team at work"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Prisma Coatings
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Reliable Interior Painters for Sydney Homes and Apartments
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We're a local Sydney painting company that focuses on residential
            interior work. That means we know the types of homes and apartments
            in this city — from terrace houses in the Inner West to high-rise
            units in the Eastern Suburbs — and we understand what homeowners
            here actually need from their painters.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Every job starts with proper preparation and ends with a thorough
            walkthrough. We use premium Australian paints and take the time to
            do the job right the first time.
          </p>

          <div className="mt-8 space-y-3">
            {trustFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="https://wa.me/61401508036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#13233A] text-[#13233A] px-6 py-3 rounded-md font-semibold hover:bg-[#13233A] hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Interior Painting Services
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Complete Interior Painting Solutions in Sydney
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              From a single feature wall to a complete whole-of-home repaint, we
              cover every aspect of interior painting for Sydney homes and
              apartments.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Get a Free Quote for Any of These Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            How We Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Our Interior Painting Process – Step by Step
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            We follow a clear process on every job so you always know what to
            expect — from the first call to the final clean-up.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-start bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <span className="text-4xl font-black text-[#D61C1C] leading-none mb-4">
                {step.step}
              </span>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PREPARATION SECTION (quality signal) ── */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Quality That Lasts
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Better Preparation. Better Finish. Better Result.
            </h2>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Interior painting is not just about applying paint. A great finish
              starts with what happens before the brush or roller touches the
              wall. That means filling every hole, sanding every rough patch,
              cleaning surfaces and sealing anything that could bleed through.
            </p>

            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              Skipping preparation is the reason so many interior paint jobs look
              average after 12 months. We don't skip it — and the difference
              shows in how long your finish looks sharp and stays clean.
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
                className="inline-flex items-center justify-center bg-white text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 0401 508 036
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/recentWorks/11.jpeg"
              alt="Interior wall preparation and sanding before painting in a Sydney home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── PROPERTY TYPES ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Properties We Paint
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Interior Painting for All Types of Sydney Properties
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Whether you own a family home, a strata apartment or an investment
            property, we have the experience to deliver the right result.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title}
                className="flex gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-[#D61C1C] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Service Areas
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Interior Painters Serving All of Sydney
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              Based in Campsie, we service homes and apartments across the
              greater Sydney area — from the Inner West and Eastern Suburbs to
              the North Shore, South Sydney and Western Sydney.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div
                key={area.region}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#D61C1C] flex-shrink-0" />
                  <h3 className="text-lg font-bold">{area.region}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.suburbs}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-600">
            Not sure if we cover your area?{" "}
            <a href="tel:0401508036" className="text-[#D61C1C] font-semibold hover:underline">
              Call us on 0401 508 036
            </a>{" "}
            and we'll let you know straight away.
          </p>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-[#13233A] rounded-3xl px-8 py-12 md:px-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Transform Your Home's Interior?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Get a free, no-obligation quote from Prisma Coatings. We'll visit
              your property, assess the work and give you a clear price — no
              hidden costs.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors text-center"
            >
              Request a Free Quote Online
            </Link>
            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center bg-white text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0401 508 036
            </a>
            <a
              href="https://wa.me/61401508036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              FAQs
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Interior Painting Sydney – Frequently Asked Questions
            </h2>

            <p className="mt-4 text-lg text-gray-700">
              Common questions from Sydney homeowners about our interior painting
              services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get a Free Interior Painting Quote in Sydney
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Talk to Prisma Coatings about your interior painting project. We
            service homes and apartments across Sydney and offer free, detailed
            quotes with no obligation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center bg-white text-[#13233A] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0401 508 036
            </a>
            <a
              href="https://wa.me/61401508036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Based in Campsie, Sydney NSW. Servicing all Sydney suburbs.{" "}
            <Link href="/house-painters-sydney" className="text-gray-300 hover:text-white underline">
              See all painting services →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
