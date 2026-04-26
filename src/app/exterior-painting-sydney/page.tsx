import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Building2,
  Shield,
  Sun,
  Phone,
  Star,
  Home,
  Paintbrush,
  MessageCircle,
  ClipboardList,
  MapPin,
  TrendingUp,
  Droplets,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Exterior Painting Sydney | House Painters | Prisma Coatings",
  description:
    "Professional exterior house painters in Sydney. Weather-resistant coatings, thorough prep & premium finishes. All suburbs covered. Free quote – call 0401 508 036.",
  keywords: [
    "exterior painting sydney",
    "house painters sydney",
    "exterior house painting sydney",
    "professional painters sydney",
    "residential painting sydney",
    "exterior painters sydney",
    "render painting sydney",
    "roof painting sydney",
    "fence painting sydney",
    "weather resistant paint sydney",
    "outside house painting sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/exterior-painting-sydney",
  },
  openGraph: {
    title: "Exterior Painting Sydney | House Painters | Prisma Coatings",
    description:
      "Professional exterior painting services in Sydney. Weather-resistant coatings, premium finishes and thorough surface preparation for lasting results.",
    url: "https://www.prismacoatings.com.au/exterior-painting-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Exterior Painting Sydney – Prisma Coatings",
      },
    ],
  },
};

const trustFeatures = [
  "Full exterior repaints and targeted touch-up work",
  "Houses, townhouses, duplexes and residential buildings",
  "Thorough surface preparation — pressure washing, scraping, patching",
  "Premium paints: Dulux, Taubmans, Haymes",
  "Weather-resistant coatings suited to Sydney's climate",
  "Free colour consultation included on every job",
  "Clean, respectful workmanship — we protect your property",
  "Free detailed written quotes with no obligation",
];

const services = [
  {
    title: "House Exterior Painting",
    description:
      "We repaint the full exterior of houses and residential properties across Sydney — walls, fascias, trims, eaves and doors. A fresh coat protects your home and transforms its street appeal immediately.",
    icon: Home,
  },
  {
    title: "Roof Painting",
    description:
      "Restore a faded or deteriorating roof with a professional repaint. We work on terracotta, concrete tile and metal roofs — using specialist roof coatings that protect against UV, rain and heat.",
    icon: Building2,
  },
  {
    title: "Fence & Deck Painting",
    description:
      "Timber, colorbond and masonry fences painted to a consistent, durable finish. We also paint and seal decks using the right products for each surface type and sun exposure.",
    icon: Paintbrush,
  },
  {
    title: "Garage Door Painting",
    description:
      "A tired garage door brings down the whole front of a house. We repaint garage doors — steel, timber and panelled — to match or complement your home's new exterior colour scheme.",
    icon: Wrench,
  },
  {
    title: "Weatherproof Coatings",
    description:
      "For rendered surfaces, brick and masonry, we apply specialised weatherproof and elastomeric coatings that flex with the substrate, seal hairline cracks and provide long-term protection.",
    icon: Shield,
  },
  {
    title: "Render & Facade Repaints",
    description:
      "Rendered facades and feature walls require the right product and preparation. We assess the condition of the render, treat any problem areas and apply a consistent, high-quality finish.",
    icon: ClipboardList,
  },
];

const whyImportant = [
  {
    title: "Sydney's Climate is Hard on Exterior Paint",
    description:
      "Sydney properties face intense UV exposure, summer heat, salt air in coastal areas and heavy rain. Without a sound exterior coating, moisture gets into the substrate and causes blistering, mould and structural damage.",
    icon: Sun,
  },
  {
    title: "Protection Against Long-Term Damage",
    description:
      "A quality exterior repaint is a protective barrier, not just a cosmetic upgrade. It seals the surface against water ingress, prevents timber rot, inhibits mould growth and slows the deterioration of render and masonry.",
    icon: Droplets,
  },
  {
    title: "Increases Property Value",
    description:
      "First impressions matter. A well-maintained exterior significantly increases perceived and actual property value. Whether you're preparing to sell or simply maintaining your asset, a professional repaint delivers a strong return.",
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free On-Site Inspection",
    description:
      "We visit your property, assess the condition of all exterior surfaces and identify any areas needing repair or special treatment before painting begins.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    description:
      "We pressure wash the exterior, scrape away loose and flaking paint, fill cracks and holes, sand rough areas and spot-prime any bare or treated patches.",
  },
  {
    step: "03",
    title: "Priming",
    description:
      "Where required, we apply a suitable primer to ensure the topcoat bonds properly — particularly on bare timber, repaired areas, and surfaces with previous adhesion issues.",
  },
  {
    step: "04",
    title: "Painting",
    description:
      "We apply premium-quality exterior paint using the right method for each surface — brush, roller or spray — with the correct number of coats for lasting coverage.",
  },
  {
    step: "05",
    title: "Final Inspection & Clean-Up",
    description:
      "We do a thorough walkthrough with you, touch up anything needed and leave your property clean, tidy and looking sharp.",
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
    q: "How much does exterior painting cost in Sydney?",
    a: "Exterior painting costs in Sydney vary based on property size, number of storeys, surface condition, accessibility and the extent of preparation required. A single-storey home typically starts from $3,000–$5,000, while larger or two-storey properties can range from $6,000–$12,000 or more. We provide free on-site quotes so you get a clear, itemised price before any work begins.",
  },
  {
    q: "How long does exterior painting take?",
    a: "A single-storey house usually takes 3–5 days from start to finish, depending on the amount of preparation needed and the number of surfaces being painted. Two-storey homes or properties with significant prep work may take 5–8 days. We provide a clear timeline in your written quote.",
  },
  {
    q: "How long does exterior paint last in Sydney?",
    a: "With proper preparation and quality materials, exterior paint on a Sydney home should last 8–12 years in sheltered areas, and 5–8 years on surfaces with heavy UV or coastal exposure. Preparation is the biggest factor — a well-prepped surface holds paint significantly longer than one that wasn't.",
  },
  {
    q: "What does exterior surface preparation involve?",
    a: "Proper exterior preparation includes high-pressure washing to remove dirt, mould and loose paint; scraping and sanding flaking areas; filling cracks and holes with appropriate fillers; treating any mould or efflorescence; and applying primer where needed. Skipping these steps is the main reason exterior paint jobs fail early.",
  },
  {
    q: "Do you paint roofs as well as walls?",
    a: "Yes. We paint terracotta, concrete tile and metal roofs using specialist roof coatings. Roof repaints require specific products and preparation — including cleaning, repointing ridge caps where needed and applying a primer/sealer before the topcoat. We assess the condition of your roof during the free quote visit.",
  },
  {
    q: "What paint brands do you use for exterior painting?",
    a: "We use premium Australian paint brands including Dulux Weathershield, Taubmans All Weather and Haymes Solashield. These are formulated specifically for Australian exterior conditions and provide strong UV resistance, water repellency and long-term durability. We can also work with a specific brand or product if you have a preference.",
  },
  {
    q: "Do you provide free quotes for exterior painting in Sydney?",
    a: "Yes. We offer free on-site quotes across Sydney with no obligation. We visit your property, assess all exterior surfaces and provide a clear written quote with a full breakdown. Call 0401 508 036 or submit a request online and we'll arrange a time that suits you.",
  },
];

export default function ExteriorPaintingSydneyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/exterior-painting-sydney#service",
    name: "Exterior Painting Sydney",
    serviceType: "Exterior Residential Painting",
    url: "https://www.prismacoatings.com.au/exterior-painting-sydney",
    description:
      "Professional exterior painting services in Sydney for houses and residential properties. Weather-resistant coatings, roof painting, fence painting and thorough surface preparation.",
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
      description: "Free on-site quote for exterior painting services in Sydney.",
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
              Sydney Exterior Painting
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Exterior Painting Sydney – Professional House Painters
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings provides professional exterior painting services
              across Sydney for houses, townhouses and residential properties.
              We protect and transform your home&apos;s exterior with
              weather-resistant coatings, thorough preparation and premium
              finishes that last.
            </p>

            <div className="mt-4 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D61C1C] text-[#D61C1C]" />
              ))}
              <span className="ml-1 text-gray-200 text-sm font-medium">
                5-star rated exterior painters in Sydney
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
              src="/images/exteriorpainting/exteriropaint.JPG"
              alt="Exterior house painting in Sydney by Prisma Coatings – professional finish"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── WHY EXTERIOR PAINTING MATTERS ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why It Matters
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Exterior Painting is One of the Best Investments for Your Sydney Home
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Exterior paint does more than improve how your home looks. In Sydney&apos;s
            climate — intense UV, coastal salt air, heavy summer rain — a sound
            exterior coating is your first line of defence against serious
            property damage.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {whyImportant.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── WHY CHOOSE PRISMA ── */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/recentWorks/2.jpeg"
              alt="Prisma Coatings exterior painting team at work on a Sydney home"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Why Choose Prisma Coatings
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Reliable Exterior Painters for Sydney Homes
            </h2>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              We&apos;re a local Sydney painting company that focuses on residential
              work. We know the suburbs, the housing stock and the conditions
              that exterior paint faces here — from salt-air exposure in the
              Eastern Suburbs to the heat and dust of Western Sydney.
            </p>

            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              Every job starts with a thorough inspection and proper preparation.
              We use premium Australian coatings and take the time to do it
              right — because a rushed exterior job shows within 12 months.
            </p>

            <div className="mt-8 space-y-3">
              {trustFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200">{feature}</p>
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
                className="inline-flex items-center justify-center bg-white text-[#13233A] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Our Exterior Painting Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Complete Exterior Painting Solutions in Sydney
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            From a full exterior house repaint to a single fence or garage door,
            we cover every exterior surface for Sydney residential properties.
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
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              How We Work
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Our Exterior Painting Process – Step by Step
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We follow a clear, consistent process on every exterior job so you
              know exactly what to expect — from the first call to the final
              inspection.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
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
        </div>
      </section>

      {/* ── PREPARATION QUALITY SIGNAL ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Quality That Lasts
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            The Preparation is What Separates a Good Job from a Great One
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Exterior painting is not just about applying fresh paint over the
            top of old. If the surface underneath isn&apos;t clean, stable and
            properly prepared, the new coat will fail in months — not years.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We pressure wash every surface, scrape back every loose edge, fill
            every crack and prime every bare patch before a roller touches the
            wall. It takes longer and costs slightly more up front — but it&apos;s
            what makes the difference between paint that lasts 3 years and paint
            that lasts 10.
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
              className="inline-flex items-center justify-center border border-[#13233A] text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-[#13233A] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0401 508 036
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/exteriorpainting/exteriorpaintinghouse.JPG"
            alt="Exterior surface preparation and pressure washing before painting in Sydney"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── RECENT WORK / BEFORE & AFTER ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Results
            </span>

            <h2 className="text-3xl md:text-4xl font-bold">
              Recent Exterior Painting Work in Sydney
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              Here&apos;s a sample of recent exterior painting projects we&apos;ve
              completed for homeowners across Sydney. Every project starts with a
              free inspection and ends with a thorough walkthrough.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["exteriorpaintinghouse", "exteriropaint", "exteriropaintigprismasydney", "exteriropaintingsydney"].map((n) => (
              <div
                key={n}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/exteriorpainting/${n}.JPG`}
                  alt={`Exterior painting result – Sydney residential project by Prisma Coatings`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Get a Quote for Your Home
            </Link>
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Service Areas
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Exterior Painters Serving All of Sydney
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Based in Campsie, we paint homes and residential properties across
            greater Sydney — from the Inner West and Eastern Suburbs to the
            North Shore, South Sydney and Western Sydney.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.region}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
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
          Not sure if we cover your suburb?{" "}
          <a
            href="tel:0401508036"
            className="text-[#D61C1C] font-semibold hover:underline"
          >
            Call us on 0401 508 036
          </a>{" "}
          and we&apos;ll confirm straight away.
        </p>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#13233A] rounded-3xl px-8 py-12 md:px-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Transform Your Home&apos;s Exterior?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Get a free, no-obligation quote from Prisma Coatings. We&apos;ll visit
              your property, assess every surface and give you a clear written
              price — no hidden costs, no guesswork.
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
              Exterior Painting Sydney – Frequently Asked Questions
            </h2>

            <p className="mt-4 text-lg text-gray-700">
              Common questions from Sydney homeowners about exterior painting
              costs, process and results.
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
            Get a Free Exterior Painting Quote in Sydney
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Talk to Prisma Coatings about your exterior painting project. We
            service homes and properties across Sydney and offer free, detailed
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
            <Link
              href="/interior-painting-sydney"
              className="text-gray-300 hover:text-white underline"
            >
              Also need interior painting? →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
