import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Building2,
  Briefcase,
  Clock3,
  Phone,
  ShieldCheck,
  Warehouse,
  Users,
  HardHat,
  MapPin,
  ClipboardList,
  Calendar,
  Factory,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Painting Sydney | Prisma Coatings",
  description:
    "Trusted commercial painters in Sydney. Offices, strata, retail & warehouses. Licensed & insured, after-hours available. Get a free site quote today.",
  keywords: [
    "commercial painting sydney",
    "commercial painters sydney",
    "industrial painting sydney",
    "office painting sydney",
    "strata painting sydney",
    "retail painting sydney",
    "commercial property painting sydney",
    "business painters sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/commercial-painting-sydney",
  },
  openGraph: {
    title: "Commercial Painting Sydney | Prisma Coatings",
    description:
      "Professional commercial painting in Sydney. Offices, strata, retail & industrial. Insured, after-hours available. Free quote.",
    url: "https://www.prismacoatings.com.au/commercial-painting-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commercial Painting Sydney – Prisma Coatings",
      },
    ],
  },
};

const clientTypes = [
  {
    icon: Briefcase,
    title: "Offices & Corporate Buildings",
    description:
      "From single-floor tenancies to multi-level towers. We schedule around your team to avoid downtime and deliver sharp, professional finishes.",
  },
  {
    icon: Building2,
    title: "Retail & Hospitality Spaces",
    description:
      "Shopfronts, restaurants and retail interiors that need to look the part. We work after hours so you never lose a trading day.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Industrial Facilities",
    description:
      "Heavy-duty coatings for factory floors, warehouse walls and industrial structures. Built to withstand the demands of working environments.",
  },
  {
    icon: Layers,
    title: "Strata Buildings",
    description:
      "Common areas, facades, car parks and balconies for owners corporations and strata managers. We handle compliance and resident communication.",
  },
  {
    icon: HardHat,
    title: "Builders & Developers",
    description:
      "Reliable painting subcontracting for new builds, fit-outs and property developments. We meet your program, every time.",
  },
  {
    icon: Users,
    title: "Property Managers",
    description:
      "Scheduled maintenance painting across managed portfolios. One point of contact, consistent quality across multiple sites.",
  },
];

const whyUs = [
  "Fully licensed and insured – public liability certificates available on request",
  "After-hours and weekend painting to protect your business operations",
  "Fixed, itemised quotes – no hidden costs or scope creep",
  "Dedicated project manager from quote through to final sign-off",
  "Thorough surface preparation for finishes that last",
  "SWMS documentation available for construction and strata sites",
  "We meet builder and developer deadlines, consistently",
  "Portfolio painting programs for property managers with multiple sites",
];

const services = [
  {
    icon: Briefcase,
    title: "Office Painting",
    description:
      "Interior and exterior painting for offices, corporate suites and coworking spaces. We schedule around your team – evenings, weekends and staged room-by-room if needed.",
  },
  {
    icon: Building2,
    title: "Retail Fit-Outs",
    description:
      "Durable, high-quality finishes for retail environments that see heavy foot traffic. We use commercial-grade coatings designed for frequent cleaning and daily wear.",
  },
  {
    icon: Layers,
    title: "Strata Repainting",
    description:
      "Full strata painting services: facades, common areas, hallways, car parks, balconies and fire stairs. We manage body corporate requirements from start to completion.",
  },
  {
    icon: Factory,
    title: "Industrial Coatings",
    description:
      "Epoxy floor systems, anti-corrosion coatings and high-build finishes for warehouses, factories and industrial facilities across Greater Sydney.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Painting Programs",
    description:
      "Scheduled repainting and ongoing touch-up programs for property managers. We keep your properties looking sharp and well-maintained year-round.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Site Inspection",
    description:
      "We visit your property, assess surface conditions, access requirements and project scope before providing any quote.",
  },
  {
    step: "02",
    title: "Detailed, Fixed Quote",
    description:
      "You receive a clear, itemised quote within 48 hours. No hidden costs. We explain what is included, the timeline and how we will manage access.",
  },
  {
    step: "03",
    title: "Scheduling Around Your Operations",
    description:
      "We plan work around your business hours – evenings, weekends or a staged approach – to keep disruption to an absolute minimum.",
  },
  {
    step: "04",
    title: "Surface Preparation",
    description:
      "Proper prep is non-negotiable. We clean, sand, fill and prime before any paint goes on. This is what determines how long a commercial finish actually lasts.",
  },
  {
    step: "05",
    title: "Professional Application",
    description:
      "Our commercial painters apply the right coating system for your surface type, environment and usage requirements using professional-grade equipment.",
  },
  {
    step: "06",
    title: "Final Inspection & Sign-Off",
    description:
      "We walk the completed site with you. Every detail is checked and addressed before we hand the space back to your team.",
  },
];

const sydneyAreas = [
  "Sydney CBD",
  "North Sydney",
  "Parramatta",
  "Chatswood",
  "Macquarie Park",
  "Olympic Park",
  "Homebush",
  "Surry Hills",
  "Pyrmont",
  "Alexandria",
  "Mascot",
  "Botany",
  "Newtown",
  "Campsie",
  "Burwood",
  "Strathfield",
  "Hurstville",
  "Kogarah",
  "Bondi Junction",
  "Randwick",
  "Castle Hill",
  "Bella Vista",
  "Norwest",
  "Blacktown",
  "Penrith",
  "Liverpool",
  "Cronulla",
  "Miranda",
  "Brookvale",
  "Dee Why",
];

const faqs = [
  {
    q: "How much does commercial painting cost in Sydney?",
    a: "Commercial painting costs depend on the size of the property, surface condition, number of coats required and access arrangements. A small office repaint typically starts from around $3,000, while larger strata or industrial projects can range from $15,000 to $100,000+. Prisma Coatings provides free, itemised quotes so you know exactly what you are paying for before work starts.",
  },
  {
    q: "Can you paint outside of normal business hours?",
    a: "Yes. After-hours and weekend painting is one of our most requested services. We regularly work evenings and Saturdays for offices, retail spaces and strata buildings where daytime access would disrupt operations or residents.",
  },
  {
    q: "Are you licensed and insured for commercial painting in NSW?",
    a: "Yes. Prisma Coatings holds a current NSW painter's licence and carries full public liability insurance. Certificates of currency are available on request, and we meet the documentation requirements of builders, strata managers and property managers.",
  },
  {
    q: "How long does a commercial painting project take?",
    a: "Timelines depend on the scope. A single-floor office can typically be completed over 2 to 4 evenings. A full strata exterior repaint may take 4 to 8 weeks depending on access staging and weather conditions. We provide a clear project schedule before work starts so you can plan accordingly.",
  },
  {
    q: "Do you work with strata managers and owners corporations?",
    a: "Yes. We regularly work with strata managers on common area repaints, facade restoration and car park projects across Sydney. We understand OC approval processes and can provide detailed scopes, colour recommendations and completion reports as required.",
  },
  {
    q: "What is included in a commercial painting quote?",
    a: "All our quotes include surface preparation (cleaning, sanding, filling and priming), premium paint application, a final inspection and site cleanup. We also provide SWMS (Safe Work Method Statements) for construction and strata environments on request.",
  },
  {
    q: "Do you handle industrial coatings and epoxy floor systems?",
    a: "Yes. We provide industrial-grade coating systems including epoxy floors, anti-corrosion treatments and high-build finishes for warehouses, factories and industrial facilities across Greater Sydney.",
  },
];

export default function CommercialPaintingSydneyPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.prismacoatings.com.au/commercial-painting-sydney#service",
    name: "Commercial Painting Sydney",
    serviceType: "Commercial Painting Services",
    url: "https://www.prismacoatings.com.au/commercial-painting-sydney",
    description:
      "Commercial and industrial painting services in Sydney for offices, retail spaces, strata buildings, warehouses and business properties.",
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
        "Free site inspection and quote for commercial painting projects in Sydney.",
    },
  };

  const faqJsonLd = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial & Industrial Painting Sydney
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Commercial Painting Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional commercial painting across
              Sydney for offices, strata buildings, retail spaces and industrial
              facilities. We work around your operations – after hours and on
              weekends – so your business keeps moving.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Licensed & Insured",
                "After-Hours Available",
                "Free Site Inspection",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <CheckCircle className="w-4 h-4 text-[#D61C1C]" />
                  {badge}
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
                href="tel:0401508036"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0401 508 036
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] md:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/4.jpg"
              alt="Commercial painting services in Sydney for offices and business properties – Prisma Coatings"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Who We Work With
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Clients We Serve Across Sydney
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We work exclusively with business clients. Our experience spans
              offices, strata buildings, retail, industrial facilities and
              everything in between.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((client) => {
              const Icon = client.icon;
              return (
                <article
                  key={client.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#13233A] text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{client.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {client.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PRISMA */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/3.jpg"
            alt="Professional commercial painters in Sydney preparing business premises"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Businesses Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why Sydney Businesses Choose Prisma Coatings
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Commercial painting is not just about colour. Businesses need a
            contractor who shows up on time, communicates clearly, works without
            disrupting operations and delivers a finish that reflects the
            standard of their premises.
          </p>

          <div className="mt-8 space-y-3">
            {whyUs.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
            >
              Request a Free Site Quote
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Commercial Painting Services in Sydney
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From office interiors to industrial coatings, we handle the full
              scope of commercial painting across Greater Sydney.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            How We Manage Your Commercial Painting Project
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every job follows a structured process so you know exactly what to
            expect – from first contact through to final sign-off.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative bg-gray-50 rounded-2xl p-7 border border-gray-100"
            >
              <span className="text-5xl font-black text-[#D61C1C]/10 absolute top-4 right-6 leading-none select-none">
                {step.step}
              </span>
              <span className="inline-block text-[#D61C1C] font-bold text-sm mb-3">
                Step {step.step}
              </span>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FLEXIBLE SCHEDULING */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Flexible Scheduling
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              We Work Around Your Business Hours
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Downtime costs money. We understand that painting a live business
              environment means working when your staff and customers are not
              there. Flexible scheduling is standard on every commercial project
              we take on.
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Clock3,
                  text: "After-hours painting from 6pm on weeknights",
                },
                {
                  icon: Calendar,
                  text: "Saturday and Sunday availability for urgent projects",
                },
                {
                  icon: ClipboardList,
                  text: "Staged room-by-room approach to keep your team operational",
                },
                {
                  icon: ShieldCheck,
                  text: "Pre-session coordination with building management and tenants",
                },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D61C1C] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-200">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
              >
                Discuss Your Project
              </Link>
              <a
                href="tel:0401508036"
                className="inline-flex items-center justify-center bg-white text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0401 508 036
              </a>
            </div>
          </div>
          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/2.jpg"
              alt="Commercial interior painting in Sydney – flexible after-hours scheduling available"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* AREAS WE SERVICE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Commercial Painters Across Greater Sydney
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We service commercial clients across the Sydney metropolitan area –
            from the CBD to the Western Suburbs, North Shore and Sutherland
            Shire.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {sydneyAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D61C1C] flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Not sure if we cover your area?{" "}
          <a
            href="tel:0401508036"
            className="text-[#D61C1C] font-semibold hover:underline"
          >
            Call us on 0401 508 036
          </a>{" "}
          – we service most of Greater Sydney and surrounding areas.
        </p>
      </section>

      {/* PROJECT SPOTLIGHT */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Project Spotlight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Strata Complex Repaint – Chatswood, Sydney
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/4.jpg"
                alt="Strata building repaint project in Chatswood Sydney – Prisma Coatings"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Property Type", value: "8-Storey Strata Building" },
                  { label: "Location", value: "Chatswood, Sydney" },
                  { label: "Scope", value: "Exterior + Common Areas" },
                  { label: "Duration", value: "6 Weekends" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-white rounded-xl p-4 border border-gray-100"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                      {label}
                    </p>
                    <p className="font-bold text-[#13233A]">{value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  An 8-storey residential strata complex in Chatswood needed a
                  full exterior repaint. Faded facade paint, peeling balcony
                  balustrades and worn common areas were impacting property value
                  and resident satisfaction. With 64 fully occupied units and
                  strict noise restrictions, daytime scaffold work was not an
                  option.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">The Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We proposed a staged weekend program, moving systematically
                  across each building elevation over 6 weekends. The strata
                  manager received weekly progress updates and residents were
                  notified before each access session. Preparation included
                  high-pressure washing, crack repairs and full priming before
                  premium exterior coatings were applied.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">The Result</h3>
                <p className="text-gray-600 leading-relaxed">
                  Project completed on schedule with zero resident complaints.
                  The owners corporation signed off at final inspection and noted
                  the transformation had meaningfully improved the building's
                  street presence. The building manager has since engaged Prisma
                  Coatings for ongoing annual maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-[#D61C1C] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need a Commercial Painter in Sydney?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            We provide free site inspections and fixed quotes for offices,
            strata, retail and industrial projects. No obligation. No hidden
            costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#D61C1C] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              0401 508 036
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Commercial Painting Sydney – Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="text-lg font-bold">{faq.q}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-center mb-8">
            Explore More Painting Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/house-painters-sydney", label: "House Painters Sydney" },
              {
                href: "/interior-painting-sydney",
                label: "Interior Painting Sydney",
              },
              {
                href: "/exterior-painting-sydney",
                label: "Exterior Painting Sydney",
              },
              {
                href: "/painters-eastern-suburbs",
                label: "Painters Eastern Suburbs",
              },
              { href: "/painters-inner-west", label: "Painters Inner West" },
              {
                href: "/painters-sutherland-shire",
                label: "Painters Sutherland Shire",
              },
              {
                href: "/painters-north-west-sydney",
                label: "Painters North West Sydney",
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center rounded-full border border-[#13233A] px-4 py-2 text-sm font-medium text-[#13233A] hover:bg-[#13233A] hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Commercial Property?
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            Contact Prisma Coatings for a free site inspection and fixed quote.
            We work with offices, strata buildings, retail spaces and industrial
            facilities across Sydney.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-bold transition-colors"
            >
              Request a Free Quote
            </Link>

            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center bg-white text-[#13233A] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0401 508 036
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
