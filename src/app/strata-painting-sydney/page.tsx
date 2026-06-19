import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Phone,
  Building2,
  Layers,
  Users,
  ShieldCheck,
  ClipboardList,
  HardHat,
  MapPin,
  Briefcase,
  Home,
} from "lucide-react";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: "Strata Painting Sydney | Apartment Complex Painters",
  description:
    "Professional strata painting services in Sydney for apartment complexes and multi-unit buildings. Licensed & insured, OC process managed, after-hours available. Free site inspection.",
  keywords:
    "strata painting sydney, strata painters sydney, apartment complex painting sydney, owners corporation painting, building repaint sydney, strata painter Sydney, strata building painting, common area painting Sydney, apartment repaint Sydney",
  alternates: {
    canonical: "https://www.prismacoatings.com.au/strata-painting-sydney",
  },
  openGraph: {
    title: "Strata Painting Sydney | Apartment Complex Painters – Prisma Coatings",
    description:
      "Professional strata painting services in Sydney for apartment complexes and multi-unit buildings. Licensed & insured, OC process managed, after-hours available. Free site inspection.",
    url: "https://www.prismacoatings.com.au/strata-painting-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strata Painting Sydney – Prisma Coatings",
      },
    ],
  },
};

const trustBadges = [
  "Licensed & Insured",
  "OC-approved processes",
  "SWMS available",
  "After-hours available",
];

const strataServices = [
  {
    icon: Building2,
    title: "Facade Repaints",
    description:
      "Full exterior facade repaints for apartment blocks, unit complexes and multi-storey strata buildings. We manage access staging, weather scheduling and surface preparation so the result is clean, even and long-lasting.",
  },
  {
    icon: Layers,
    title: "Common Area Painting",
    description:
      "Hallways, lift lobbies, entry foyers and shared spaces repainted with minimal disruption to residents. We use low-odour, durable coatings suited to high-traffic environments.",
  },
  {
    icon: Home,
    title: "Car Park Painting",
    description:
      "Car park walls, columns, line marking and surface coatings refreshed to improve presentation and safety. Work is typically completed after hours to avoid impacting residents.",
  },
  {
    icon: ShieldCheck,
    title: "Balcony Painting",
    description:
      "Balcony floors, balustrades, soffits and fascias repainted with appropriate exterior-grade systems. We assess surface condition and specify the right primer and topcoat for durability.",
  },
  {
    icon: HardHat,
    title: "Fire Stairs Painting",
    description:
      "Fire stair walls and ceilings refreshed to comply with building standards and keep common areas looking presentable. We work around building access requirements and stairwell usage.",
  },
  {
    icon: MapPin,
    title: "Pool Area Painting",
    description:
      "Pool surrounds, plant room walls and wet area surfaces coated with moisture-resistant systems. Suited to the damp, chlorine-heavy environments found in apartment complexes.",
  },
  {
    icon: ClipboardList,
    title: "Render, Walls & Trims",
    description:
      "Rendered surfaces, external walls, timber trims, metal doors and window frames refreshed across the full building envelope. We assess adhesion and apply the right surface prep before coating.",
  },
  {
    icon: Briefcase,
    title: "Maintenance Repainting Programs",
    description:
      "Ongoing scheduled maintenance painting for strata managers and building owners. We keep your property looking maintained year-round with a consistent, reliable service program.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Site Inspection",
    description:
      "We visit your building to assess surface conditions, access requirements, scope and any areas of concern. This allows us to provide an accurate, detailed quote rather than an estimate.",
  },
  {
    step: "02",
    title: "Owners Corporation Proposal",
    description:
      "We prepare a clear, itemised proposal suitable for presentation at an OC meeting. This includes scope of works, timeline, access plan, colour options and all costs — no hidden extras.",
  },
  {
    step: "03",
    title: "Scheduling & Resident Communication Support",
    description:
      "Once approved, we work with your strata manager to develop a schedule that minimises disruption. We can assist with resident notice templates and provide progress updates throughout.",
  },
  {
    step: "04",
    title: "Surface Preparation & Protection",
    description:
      "All surfaces are cleaned, repaired, sanded and primed before any paint is applied. Common areas, cars and landscaping are fully protected with drop sheets and masking throughout.",
  },
  {
    step: "05",
    title: "Professional Paint Application",
    description:
      "Our strata painters apply premium, commercial-grade coating systems suited to each surface type — exterior render, metal, concrete or timber — using professional tools and techniques.",
  },
  {
    step: "06",
    title: "Final Inspection & Sign-Off",
    description:
      "We walk the completed building with your strata manager or OC representative. Every section is reviewed and any touch-ups are addressed before we provide formal completion sign-off.",
  },
];

const clientTypes = [
  {
    icon: ClipboardList,
    title: "Strata Managers",
    description:
      "We make your job easier. Prisma Coatings handles the full project from quote through to sign-off, with regular updates, reliable scheduling and documentation that meets your requirements.",
  },
  {
    icon: Users,
    title: "Owners Corporations",
    description:
      "We provide OC-ready proposals with itemised costs, clear timelines and colour recommendations. We understand the approval process and can present or attend OC meetings if needed.",
  },
  {
    icon: Building2,
    title: "Building Managers",
    description:
      "On-site coordination, access management and resident notification support. We work alongside building managers to plan each stage and minimise impact on day-to-day operations.",
  },
  {
    icon: Briefcase,
    title: "Property Investors",
    description:
      "Investors who own units or entire apartment blocks can engage Prisma Coatings directly for repaints that protect asset value and improve tenant satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "Real Estate & Property Managers",
    description:
      "We work with property managers on common area maintenance, pre-sale repaints and unit freshening for rental turnovers across managed residential portfolios.",
  },
  {
    icon: HardHat,
    title: "Apartment Complex Committees",
    description:
      "Committee members can engage us early for a no-obligation site inspection and detailed proposal, giving the OC everything it needs to make a confident, informed decision.",
  },
];

const whyChoose = [
  "Sydney-based strata painting team with hands-on local experience",
  "Experience across residential, commercial and strata painting projects",
  "Reliable communication – you will always know where the project stands",
  "Clean, organised work sites with full protection of resident property",
  "Quality commercial-grade materials specified for long-term performance",
  "Detailed surface preparation that determines how long a finish lasts",
  "Free site inspection with an itemised, fixed-price quote",
  "After-hours and weekend availability to reduce impact on residents",
  "SWMS documentation available for all strata and construction sites",
  "Fully licensed and insured – certificates available on request",
];

const faqs = [
  {
    question: "How much does strata painting cost in Sydney?",
    answer:
      "Strata painting costs depend on the size and height of the building, the scope of work (facade only, common areas, car parks, balconies), current surface condition and access requirements. A small unit block repaint may start from around $8,000, while a large multi-storey strata complex can range from $30,000 to $150,000 or more. Prisma Coatings provides free site inspections and detailed, fixed-price quotes so the OC knows exactly what is included before approving any work.",
  },
  {
    question: "How long does strata painting take?",
    answer:
      "Timeline depends on the scope, building size and access staging required. A small block common area repaint may take 3 to 5 days. A full exterior repaint on a multi-storey building may be staged over 4 to 8 weekends, depending on scaffold access, weather and resident requirements. We provide a clear project schedule before work starts so the strata manager and OC can plan accordingly.",
  },
  {
    question: "Do you work with owners corporations?",
    answer:
      "Yes. Working with owners corporations is a core part of what we do. We provide OC-ready proposals with itemised scopes, timelines, colour options and detailed costs. We understand that painting decisions often need to go through a meeting and approval process, and we structure our documentation accordingly. We are happy to liaise directly with the strata manager or attend OC meetings if requested.",
  },
  {
    question: "Can you paint after hours or around residents?",
    answer:
      "Yes. After-hours and weekend availability is a standard part of our strata service. Many strata painting projects require work to happen outside of peak hours — particularly car parks, fire stairs and common areas. We coordinate access timing with the strata manager and building manager, and provide residents with advance notice before each work session.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Prisma Coatings holds a current NSW painter's licence and carries full public liability insurance. Certificates of currency are available on request and meet the documentation requirements of strata managers, owners corporations and building managers.",
  },
  {
    question: "Can you provide SWMS documentation?",
    answer:
      "Yes. Safe Work Method Statements (SWMS) are available for all strata painting projects. This is particularly important on multi-storey buildings, scaffold-access projects and anywhere that working-at-height or resident safety requirements apply. We provide SWMS as standard on strata jobs and can tailor the documentation to your building's specific requirements.",
  },
  {
    question: "Do you offer a workmanship guarantee?",
    answer:
      "Yes. We stand behind the quality of our work. All Prisma Coatings strata painting projects include a workmanship guarantee. If any issue related to our application or preparation arises after completion, we return to address it at no additional cost. We also recommend premium paint systems that carry manufacturer warranties for exterior applications.",
  },
];

const sydneyAreas = [
  "Chatswood",
  "North Sydney",
  "Parramatta",
  "Sydney CBD",
  "Surry Hills",
  "Newtown",
  "Campsie",
  "Burwood",
  "Strathfield",
  "Hurstville",
  "Kogarah",
  "Randwick",
  "Bondi Junction",
  "Mascot",
  "Alexandria",
  "Pyrmont",
  "Homebush",
  "Olympic Park",
  "Castle Hill",
  "Dee Why",
  "Brookvale",
  "Cronulla",
  "Miranda",
  "Liverpool",
  "Penrith",
];

export default function StrataPaintingSydneyPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/strata-painting-sydney#service",
    name: "Strata Painting Sydney",
    serviceType: "Strata Painting Sydney",
    url: "https://www.prismacoatings.com.au/strata-painting-sydney",
    description:
      "Professional strata painting services in Sydney for apartment complexes, unit blocks and multi-residential buildings. Licensed, insured, OC process managed.",
    areaServed: {
      "@type": "City",
      name: "Sydney NSW",
    },
    provider: {
      "@type": "PaintingContractor",
      name: "Prisma Coatings",
      url: "https://www.prismacoatings.com.au",
      telephone: "0401 508 036",
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
        "Free site inspection and quote for strata painting in Sydney.",
    },
  };

  return (
    <main className="bg-white text-[#13233A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <FAQSchema faqs={faqs} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Strata Painting Sydney
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Strata Painting Sydney | Professional Strata Painters
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-300 font-medium">
              On-time, fully managed strata painting for apartment complexes in Sydney
            </p>

            <p className="mt-6 text-lg text-gray-200 max-w-2xl leading-relaxed">
              Prisma Coatings works directly with strata managers, owners corporation
              secretaries, building managers and committee members to deliver building
              repaints that are planned, managed and completed with minimal disruption.
              We handle preparation, access coordination, resident scheduling and clean
              handover — so you don't have to.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
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
                Get a Free Strata Quote
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
              src="/images/strata/apartment-complex-painting-sydney.webp"
              alt="Professional strata painting services in Sydney for apartment complexes – Prisma Coatings"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Strata Is Different
          </span>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Strata Painting Requires a Different Approach
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Strata painting in Sydney is not the same as painting a house. When
              you are managing an apartment complex, unit block or multi-residential
              building, every decision involves multiple stakeholders — the owners
              corporation, strata manager, building manager, tenants and residents
              all need to be considered.
            </p>
            <p>
              The challenges are real: access to scaffolding and common areas, noise
              restrictions, parking impacts, resident complaints, compliance
              documentation and the need for clear, consistent communication
              throughout the project. A poorly managed strata painting contractor
              creates more problems than it solves.
            </p>
            <p>
              Prisma Coatings specialises in{" "}
              <strong>strata painting across Sydney</strong>. We work with strata
              managers, owners corporations and apartment complex committees to plan
              every aspect of the job — from access staging and resident notification
              through to surface preparation, professional application and a clean
              handover. Our team understands the approval processes, the
              documentation requirements and the importance of getting the job done
              without disrupting the people who live in the building.
            </p>
            <p>
              Whether you are managing a small unit block in the Inner West or a
              large{" "}
              <strong>apartment complex painting project</strong> on the North Shore,
              we bring the same structured, professional approach to every job.
            </p>
          </div>
        </div>
        <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/strata/apartment-lobby-painting-sydney.webp"
            alt="Strata common area painting in Sydney apartment complex – Prisma Coatings"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Strata Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Strata Painting Services We Provide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From full facade repaints to common area touch-ups, we cover the
              complete scope of strata painting for apartment complexes across
              Greater Sydney.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strataServices.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#13233A] text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Strata Painting Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every strata project follows a structured process designed to meet OC
            requirements, manage access and minimise disruption to residents
            from first contact through to final sign-off.
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

      {/* CASE STUDY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Project Spotlight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Strata Painting Case Study: Chatswood Building Repaint
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/strata/strata-painting-sydney-apartment-building.webp"
                alt="Strata building repaint project in Chatswood Sydney – Prisma Coatings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Property Type", value: "Multi-Level Strata Building" },
                  { label: "Location", value: "Chatswood, Sydney" },
                  { label: "Scope", value: "Exterior + Common Areas" },
                  { label: "Scheduling", value: "Staged Weekend Program" },
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
                  A multi-level residential strata complex in Chatswood needed a
                  professional full-building repaint. The facade had faded
                  significantly, balcony balustrades were peeling and the common
                  areas were showing years of wear. With fully occupied units and
                  strict noise requirements, the owners corporation needed a
                  painting contractor that could plan carefully and communicate
                  clearly with residents throughout.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prisma Coatings conducted a detailed site inspection, prepared
                  an OC-ready proposal and worked with the strata manager to
                  develop a staged schedule that minimised disruption. Each phase
                  was communicated to residents in advance. Surface preparation
                  included high-pressure cleaning, crack repairs and priming
                  before premium exterior coatings were applied systematically
                  across each elevation.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">The Outcome</h3>
                <div className="space-y-2">
                  {[
                    "Significantly improved building presentation and street presence",
                    "Better long-term surface protection for facade and balconies",
                    "Smooth, staged scheduling with advance resident notice each phase",
                    "Professional finish signed off by the strata manager at completion",
                    "Minimal disruption to occupants throughout the entire project",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Who We Work With
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Who We Work With
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We work with the full range of strata and property professionals across
            Sydney. If you are responsible for the presentation and maintenance of
            a multi-residential building, we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client) => {
            const Icon = client.icon;
            return (
              <article
                key={client.title}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100"
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
      </section>

      {/* WHY CHOOSE PRISMA */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/6.jpg"
              alt="Prisma Coatings strata painters working on Sydney apartment complex"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Why Choose Prisma
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Why Strata Managers Choose Prisma Coatings
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              A strata painting project is only as good as the contractor managing
              it. Strata managers and owners corporations trust Prisma Coatings
              because we reduce friction at every stage — from quote through to
              handover.
            </p>

            <div className="mt-8 space-y-3">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-200 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
              >
                Request a Free Strata Quote
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
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-[#D61C1C] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need a Strata Painter in Sydney?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            We provide free site inspections and OC-ready proposals for apartment
            complexes, unit blocks and strata buildings across Greater Sydney.
            No obligation, no hidden costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#D61C1C] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              Get a Free Strata Quote
            </Link>
            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0401 508 036
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Service Area
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Strata Painters Across Greater Sydney
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We service strata buildings and apartment complexes across the Sydney
            metropolitan area — from the CBD and North Shore to the Western
            Suburbs, Inner West, Eastern Suburbs and Sutherland Shire.
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
          — we cover most of Greater Sydney and surrounding areas.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Strata Painting Sydney – Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold text-center mb-8">
          Explore More Painting Services
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            {
              href: "/commercial-painting-sydney",
              label: "Commercial Painting Sydney",
            },
            {
              href: "/house-painters-sydney",
              label: "House Painters Sydney",
            },
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
            {
              href: "/painters-inner-west",
              label: "Painters Inner West",
            },
            {
              href: "/painters-sutherland-shire",
              label: "Painters Sutherland Shire",
            },
            {
              href: "/painters-north-west-sydney",
              label: "Painters North West Sydney",
            },
            {
              href: "/contact",
              label: "Get a Free Quote",
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
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Book a Free Inspection
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Book a Free Strata Painting Site Inspection
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            No obligation. Get a professional quote for your apartment complex,
            unit block or strata building in Sydney.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-bold transition-colors"
            >
              Get Your Strata Painting Quote
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
