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
  GraduationCap,
  Heart,
  ShoppingBag,
  FileText,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Painting Sydney | Commercial Painters & Contractors",
  description:
    "Professional commercial painting services in Sydney for offices, retail stores, warehouses, schools, healthcare facilities and strata buildings. Licensed commercial painting contractors. Free site quote.",
  keywords: [
    "commercial painting sydney",
    "commercial painters sydney",
    "commercial painting contractors sydney",
    "commercial painting services sydney",
    "office painting sydney",
    "industrial painting sydney",
    "retail painting sydney",
    "warehouse painting sydney",
    "school painting sydney",
    "healthcare painting sydney",
    "commercial property painting sydney",
    "strata painting sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/commercial-painting-sydney",
  },
  openGraph: {
    title: "Commercial Painting Sydney | Prisma Coatings",
    description:
      "Professional commercial painting contractors in Sydney for offices, retail, industrial, warehouses, schools and healthcare. Licensed & insured. Free site quote.",
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
  {
    q: "What types of commercial properties do you paint in Sydney?",
    a: "We paint a wide range of commercial properties across Sydney including offices, retail stores, restaurants, warehouses, factories, schools, hospitals, medical centres, aged care facilities and strata buildings. No commercial project is too large or complex – our team is experienced across all commercial property types.",
  },
  {
    q: "Do you provide commercial exterior painting services in Sydney?",
    a: "Yes. Exterior commercial painting is a core part of our service offering. We paint building facades, shopfronts, industrial exteriors and strata common areas using premium exterior-grade coatings designed for Sydney's climate. Our exterior painting team is experienced with high-reach access including elevated work platforms and scaffolding.",
  },
  {
    q: "Can you paint commercial properties in Parramatta?",
    a: "Absolutely. Parramatta is one of our most active commercial painting service areas. We work with offices in Parramatta CBD, retail stores across the Parramatta LGA and strata buildings throughout the Western Sydney region. Contact our Parramatta team for a free site inspection.",
  },
  {
    q: "What safety documentation can you provide for commercial projects?",
    a: "We provide Safe Work Method Statements (SWMS) for all commercial, construction and strata environments. We also carry current public liability insurance, hold a NSW painter's licence and can meet site induction requirements for builder and developer projects. WHS compliance documentation is available on request.",
  },
  {
    q: "Do you offer ongoing commercial painting maintenance programs?",
    a: "Yes. We offer scheduled maintenance painting programs for property managers and owners corporations managing multiple sites. We keep properties looking well-maintained year-round with programmed inspections, touch-up visits and full repaints scheduled to suit your budget and property condition cycles.",
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
      "Commercial and industrial painting services in Sydney for offices, retail spaces, strata buildings, warehouses, schools, healthcare facilities and business properties.",
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

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#13233A]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial &amp; Industrial Painting Sydney
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Commercial Painting Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings delivers professional commercial painting services
              across Sydney for offices, strata buildings, retail spaces,
              warehouses, schools and industrial facilities. We work around your
              operations – after hours and on weekends – so your business keeps
              moving.
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
              src="/images/4.jpg"
              alt="Commercial painting services in Sydney for offices and business properties – Prisma Coatings"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ─────────────────────────────────────────── */}
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

      {/* ── COMMERCIAL PAINTING SERVICES SYDNEY (overview) ───────────── */}
      <section className="py-16" id="commercial-painting-services-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Commercial Painting Services Sydney
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Complete Commercial Painting Services in Sydney
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Prisma Coatings is a trusted commercial painting contractor
              servicing businesses across the Greater Sydney metropolitan area.
              Whether you manage an office block in the CBD, a retail precinct in
              the Inner West, a warehouse in Western Sydney or a healthcare
              facility on the North Shore, our commercial painters deliver
              professional results that protect and enhance your property.
            </p>
            <p>
              Our commercial painting services in Sydney cover every property
              type and every industry. We specialise in{" "}
              <Link
                href="/interior-painting-sydney"
                className="text-[#D61C1C] font-semibold hover:underline"
              >
                interior painting Sydney
              </Link>{" "}
              and{" "}
              <Link
                href="/exterior-painting-sydney"
                className="text-[#D61C1C] font-semibold hover:underline"
              >
                exterior painting Sydney
              </Link>{" "}
              for commercial and mixed-use properties, applying the right coating
              systems for each surface type, environment and usage requirement.
              We also handle full{" "}
              <Link
                href="/strata-painting-sydney"
                className="text-[#D61C1C] font-semibold hover:underline"
              >
                strata painting Sydney
              </Link>{" "}
              for owners corporations, strata managers and body corporate
              committees.
            </p>
            <p>
              What sets our commercial painting services apart is our commitment
              to operating without disrupting your business. We schedule work
              after hours, on weekends and in staged sequences so your team can
              keep working while we paint around them. Every job starts with a
              free site inspection and ends with a final walkthrough to ensure
              you are completely satisfied before we leave.
            </p>
            <p>
              From single-room office touch-ups to large-scale industrial
              repaints, our commercial painting contractors in Sydney bring the
              same level of professionalism and attention to detail to every
              project. We are fully licensed, insured and equipped to meet the
              safety, documentation and access requirements of any commercial
              site in New South Wales.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "10+", label: "Years Commercial Experience" },
              { value: "500+", label: "Commercial Projects Completed" },
              { value: "$20M", label: "Public Liability Cover" },
              { value: "100%", label: "Fixed Quotes, No Surprises" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="text-center bg-gray-50 rounded-2xl py-8 px-4 border border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-black text-[#D61C1C]">
                  {value}
                </p>
                <p className="mt-2 text-sm text-gray-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICE PAINTING SYDNEY ───────────────────────────────────── */}
      <section className="bg-gray-50 py-16" id="office-painting-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                Office Painting Sydney
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Office Painting Sydney
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Your office environment directly affects how clients perceive
                your business and how productive your team feels at work. Faded
                walls, scuffed skirting boards and tired colour schemes send the
                wrong message. Our office painting Sydney service delivers sharp,
                professional interiors that reflect the standards you hold your
                business to.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We understand that office painting in Sydney needs to happen
                without disrupting your staff or your clients. That is why we
                schedule commercial office painting after hours – from 6pm
                weeknights – and on weekends. For larger tenancies, we work in
                staged sections so different teams can continue operating while
                painting progresses in adjacent areas. When the job is done,
                your space is left clean, furniture protected and ready for
                business the next morning.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We paint everything from small single-tenancy offices in
                suburban Sydney to multi-floor corporate suites in the CBD. Our
                office painters are experienced with open-plan environments,
                glass-partitioned meeting rooms, reception areas, breakout
                spaces and executive suites. We use premium commercial-grade
                low-sheen and low-VOC finishes to keep indoor air quality
                comfortable while achieving a durable, professional result.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#D61C1C] hover:underline"
                aria-label="Get a free office painting quote in Sydney"
              >
                Get a Free Office Painting Quote →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#13233A] text-white flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">What&apos;s Included</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "After-hours and weekend scheduling to minimise disruption",
                  "Interior office painting for reception, meeting rooms and open-plan floors",
                  "Premium commercial-grade low-sheen and low-VOC finishes",
                  "Feature wall painting and accent colour work",
                  "Furniture protection and full clean-up included",
                  "Staged area-by-area approach for occupied offices",
                  "Colour scheme advice for corporate branding alignment",
                  "Final walkthrough and sign-off before handback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETAIL STORE PAINTING SYDNEY ─────────────────────────────── */}
      <section className="py-16" id="retail-painting-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#13233A] text-white flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">What&apos;s Included</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Overnight and after-hours painting to protect trading hours",
                  "Durable commercial-grade coatings for high-foot-traffic surfaces",
                  "Shopfront and external retail facade painting",
                  "Brand colour matching and full colour change capability",
                  "Interior fit-out painting for new and refurbished stores",
                  "High-traffic wall finishes designed for frequent cleaning",
                  "Shopping centre, high-street and standalone retail locations",
                  "Sydney CBD and suburban retail service coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                Retail Painting Sydney
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Retail Store Painting Sydney
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Retail environments live and die by their visual appeal. Whether
                you are refreshing an existing store or preparing a new tenancy
                for fit-out, the quality of your paintwork sets the tone for
                everything else. Our retail store painting Sydney service
                delivers clean, brand-consistent finishes that handle the daily
                demands of high-traffic retail environments.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We work overnight and on weekends so your retail premises can be
                painted and ready to trade without losing a single business day.
                This is particularly important for food and beverage businesses,
                fashion retailers and hospitality venues where daytime closure
                directly impacts revenue. Our retail painting contractors carry
                out all preparation, painting and clean-up after hours, and hand
                back a clean, fully operational space by opening time.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We use commercial-grade coatings designed for surfaces that face
                regular cleaning with commercial products. Whether your walls
                need a fresh coat in your existing brand colour, a complete brand
                refresh or a new interior direction as part of a larger fit-out,
                our retail painting team in Sydney can match colours precisely
                and deliver consistent results across single and multi-site
                locations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#D61C1C] hover:underline"
              >
                Get a Free Retail Painting Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAL PAINTING SYDNEY ───────────────────────────────── */}
      <section className="bg-gray-50 py-16" id="industrial-painting-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                Industrial Painting Sydney
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Industrial Painting Sydney
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Industrial painting demands a different skill set and a different
                product approach to standard commercial work. Surfaces face
                constant exposure to mechanical impact, chemical spills, extreme
                temperatures and high humidity. A standard interior paint simply
                will not hold up. Our industrial painting Sydney team specifies
                and applies the right heavy-duty coating systems for each
                industrial environment – systems that are built to last under
                real operating conditions.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We provide industrial painting services across Greater Sydney for
                manufacturing plants, processing facilities, food production
                environments, plant rooms, engineering workshops and large-scale
                industrial buildings. Our industrial painters are experienced
                with high-reach surfaces, confined spaces and environments where
                strict safety protocols apply. We provide Safe Work Method
                Statements as standard and meet the WHS requirements of
                industrial sites across New South Wales.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We work with leading industrial coating systems including epoxy,
                polyurethane and high-build alkyd products, selected based on
                your specific substrate, environment and performance
                requirements. Surface preparation is thorough – we clean,
                degrease and prime industrial surfaces to manufacturer
                specifications to ensure the coating system bonds properly and
                delivers its full expected service life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#D61C1C] hover:underline"
              >
                Get an Industrial Painting Quote →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#13233A] text-white flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Industrial Coating Systems</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Epoxy floor coatings and concrete sealers",
                  "Anti-corrosion metal coatings and rust treatments",
                  "High-build industrial paint systems",
                  "Chemical-resistant and solvent-resistant finishes",
                  "Polyurethane and two-pack coating applications",
                  "SWMS documentation provided as standard",
                  "Elevated work platform operators for high-reach surfaces",
                  "Experience with factories, plant rooms and processing areas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAREHOUSE PAINTING SYDNEY ────────────────────────────────── */}
      <section className="py-16" id="warehouse-painting-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#13233A] text-white flex items-center justify-center">
                  <Warehouse className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Warehouse Painting Services</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Floor line marking and bay identification",
                  "High-bay wall and rafter painting using elevated work platforms",
                  "Safety colour coding to AS/NZS 1318 standards",
                  "Anti-slip floor coatings and epoxy floor systems",
                  "Dock door, roller door and metal structure painting",
                  "Emergency exit and safety signage area marking",
                  "Exterior warehouse facade and roof flashings",
                  "Weekend and night-shift scheduling for operational warehouses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                Warehouse Painting Sydney
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Warehouse Painting Sydney
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Warehouses present unique painting challenges. High ceilings,
                wide spans, operational equipment that cannot be moved and the
                need to maintain workflow throughout the project all require a
                specialist approach. Our warehouse painting Sydney team has the
                equipment, experience and scheduling flexibility to paint
                operational warehouses with minimal impact on your logistics and
                distribution operations.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We handle everything from internal wall and ceiling painting to
                floor line marking, safety colour coding and epoxy floor
                systems. Our warehouse painters use elevated work platforms
                (EWPs) for high-bay access and are ticketed operators – no
                scaffold delays or subcontracting. For operating warehouses, we
                work in sections during off-peak hours or weekends so picking,
                packing and dispatch operations continue without disruption.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Warehouse painting is not just cosmetic – it directly affects
                workplace safety, staff morale and compliance. Safety colour
                coding, forklift aisle markings and pedestrian zone identification
                all depend on clear, maintained paintwork. We apply these to
                Australian standards and document the work for your WHS records.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#D61C1C] hover:underline"
              >
                Get a Warehouse Painting Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHOOL PAINTING SYDNEY ───────────────────────────────────── */}
      <section className="bg-gray-50 py-16" id="school-painting-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                School Painting Sydney
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                School Painting Sydney
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Schools require a painting contractor who understands the unique
                constraints of educational environments: strict timetables,
                occupancy restrictions, child safety requirements and the need
                for paints that are safe, durable and easy to maintain. Our
                school painting Sydney service is built around these
                requirements. We have completed painting projects for government
                schools, private colleges and early learning centres across
                Greater Sydney.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                All school painting is scheduled during school holidays, weekends
                or after hours to ensure zero disruption to students and
                teachers. For heritage school buildings, we identify and manage
                lead paint safely in compliance with NSW Work Health and Safety
                regulations. We use low-VOC and low-odour paint products as a
                priority in classroom, library and administrative environments to
                protect air quality when spaces are reoccupied quickly after
                holidays.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                From interior classroom walls and corridors to exterior building
                facades, playground structures and sports facilities, our school
                painters in Sydney deliver durable finishes that stand up to
                daily use by students. We can provide all compliance
                documentation required for Department of Education sites,
                Catholic Education and independent school networks.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#D61C1C] hover:underline"
              >
                Get a School Painting Quote →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#13233A] text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">School Painting Services</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Holiday and weekend-only scheduling for zero disruption",
                  "Lead-safe painting practices for heritage school buildings",
                  "Low-VOC, child-safe paint product selection",
                  "Interior classroom, corridor and common area painting",
                  "Exterior facade, canteen and sports facility painting",
                  "Playground structure painting and line marking",
                  "Compliance documentation for Department of Education sites",
                  "SWMS and WHS documentation available on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALTHCARE PAINTING SYDNEY ───────────────────────────────── */}
      <section className="py-16" id="healthcare-painting-sydney">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#13233A] text-white flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">Healthcare Painting Services</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Low-VOC and low-odour paint systems for sensitive environments",
                  "Antimicrobial and washable finish options available",
                  "Staged ward-by-ward or room-by-room approach",
                  "Infection control awareness and protocol compliance",
                  "Colour coding compliance for healthcare wayfinding",
                  "After-hours and weekend scheduling only",
                  "Medical centres, aged care, dental and allied health",
                  "Minimum disruption to patients, residents and clinical staff",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                Healthcare Painting Sydney
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Healthcare Facility Painting Sydney
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Healthcare facilities present the most demanding environment for
                commercial painters. Patients, residents and clinical staff
                cannot be disrupted, air quality must be carefully managed and
                the finishes applied need to be highly durable and easy to
                sanitise. Our healthcare painting Sydney service is designed
                specifically for these environments – from small medical
                practices to large aged care facilities.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We use low-VOC and low-odour paint systems as standard in all
                healthcare environments to protect the wellbeing of patients and
                staff. Where specified, we apply antimicrobial and high-washable
                finish products that meet the hygiene requirements of clinical
                settings. All healthcare painting is conducted after hours or
                in staged sections with full awareness of infection control
                protocols.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our painters have experience working across hospitals, medical
                centres, general practices, dental surgeries, specialist
                consulting suites, aged care residences and disability support
                accommodation across Sydney. We understand the operational
                sensitivity of these environments and take our responsibility to
                minimise disruption seriously. Colour consistency, wayfinding
                colour coding and a clean, professional finish are the standard
                on every healthcare painting project we undertake.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#D61C1C] hover:underline"
              >
                Get a Healthcare Facility Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATA AND COMMERCIAL BUILDING PAINTING ──────────────────── */}
      <section className="bg-[#13233A] py-16" id="strata-commercial-building-painting">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
                Strata &amp; Commercial Buildings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Strata and Commercial Building Painting Sydney
              </h2>
              <p className="mt-6 text-gray-200 leading-relaxed">
                Strata and mixed-use commercial buildings require a painting
                contractor who can manage complexity: multiple stakeholders,
                occupied residential units, body corporate approval processes,
                access staging across car parks, fire stairs, corridors and
                facade elevations. Prisma Coatings is experienced with all of
                it. Our{" "}
                <Link
                  href="/strata-painting-sydney"
                  className="text-white underline underline-offset-2 hover:text-[#D61C1C] transition-colors font-semibold"
                >
                  strata painting Sydney
                </Link>{" "}
                team works directly with strata managers, owners corporations
                and building managers to deliver exterior and interior repaints
                with minimal disruption to residents and tenants.
              </p>
              <p className="mt-4 text-gray-200 leading-relaxed">
                We handle the full scope: external facades and render, balconies
                and balustrades, common lobbies and corridors, basement car
                parks, fire stairs, plant rooms and roof areas. We provide
                detailed scopes of work for OC approval, weekly progress
                reporting during construction and a final inspection report at
                completion. All strata painting work includes SWMS documentation
                and public liability certificates.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/strata-painting-sydney"
                  className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
                >
                  View Strata Painting Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request a Site Inspection
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Layers, title: "Facade & Exterior", desc: "Full exterior repaint programs for multi-storey commercial and strata buildings" },
                { icon: Building2, title: "Common Areas", desc: "Lobbies, corridors, lifts and car parks painted to a consistent, professional standard" },
                { icon: ShieldCheck, title: "OC Documentation", desc: "Detailed scopes, progress reports and completion certificates for owners corporations" },
                { icon: Calendar, title: "Staged Programs", desc: "Weekend and staged weeknight programs that respect residents and building operations" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white/10 rounded-xl p-5 border border-white/10">
                  <Icon className="w-6 h-6 text-[#D61C1C] mb-3" />
                  <p className="font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE PRISMA ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[380px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/3.jpg"
            alt="Professional commercial painters in Sydney preparing business premises"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
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
            standard of their premises. Our commercial painting contractors in
            Sydney are chosen by property managers, strata managers, facility
            managers and business owners who want reliable results without the
            project management headaches.
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

      {/* ── OUR PROCESS ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
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
                className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
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
        </div>
      </section>

      {/* ── SAFETY AND COMPLIANCE ────────────────────────────────────── */}
      <section className="py-16" id="safety-compliance">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Safety &amp; Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Safety and Compliance for Commercial Painting in Sydney
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every commercial painting project we undertake meets or exceeds
              NSW Work Health and Safety requirements. We provide the
              documentation your site, builder or strata manager requires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "SWMS Documentation",
                desc: "Safe Work Method Statements provided as standard for all commercial, construction and strata painting projects.",
              },
              {
                icon: ShieldCheck,
                title: "Public Liability Insurance",
                desc: "We carry public liability insurance up to $20M. Certificates of currency are available on request for any project.",
              },
              {
                icon: Award,
                title: "NSW Painter's Licence",
                desc: "Prisma Coatings holds a current NSW painter's licence. We comply with all licensing requirements under the Home Building Act.",
              },
              {
                icon: HardHat,
                title: "Site Induction Ready",
                desc: "Our painters hold relevant White Cards and can complete site-specific inductions for builder, developer and strata managed sites.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#13233A] text-white flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#13233A] rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                Additional Safety Capabilities
              </h3>
              <ul className="space-y-2">
                {[
                  "Elevated Work Platform (EWP) ticketed operators for high-reach access",
                  "Lead paint identification and safe removal procedures",
                  "Hazardous material handling protocols",
                  "Confined space awareness for plant rooms and basement environments",
                  "JSA (Job Safety Analysis) documentation available on request",
                  "Pre-start safety briefings on all commercial sites",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#D61C1C] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-200 leading-relaxed mb-6">
                Need specific documentation for your site, tender submission or
                owners corporation approval? Contact us and we will prepare the
                paperwork you need before work begins.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
              >
                Request Safety Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLEXIBLE SCHEDULING ──────────────────────────────────────── */}
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
                href="tel:+61401508036"
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
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVICE ─────────────────────────────────────────── */}
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
            Shire. Our{" "}
            <Link
              href="/painters-parramatta"
              className="text-[#D61C1C] font-semibold hover:underline"
            >
              commercial painters in Parramatta
            </Link>{" "}
            are particularly active, covering offices, strata and retail
            throughout the Parramatta LGA and surrounding Western Sydney
            suburbs.
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
            href="tel:+61401508036"
            className="text-[#D61C1C] font-semibold hover:underline"
          >
            Call us on 0401 508 036
          </a>{" "}
          – we service most of Greater Sydney and surrounding areas.
        </p>
      </section>

      {/* ── PROJECT SPOTLIGHT ────────────────────────────────────────── */}
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
                sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* ── MID-PAGE CTA ─────────────────────────────────────────────── */}
      <section className="bg-[#D61C1C] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need a Commercial Painter in Sydney?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            We provide free site inspections and fixed quotes for offices,
            strata, retail, industrial and all commercial properties across
            Sydney. No obligation. No hidden costs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-[#D61C1C] px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href="tel:+61401508036"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              0401 508 036
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
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

      {/* ── INTERNAL LINKS ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-center mb-8">
            Explore More Painting Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/house-painters-sydney", label: "House Painters Sydney" },
              { href: "/strata-painting-sydney", label: "Strata Painting Sydney" },
              { href: "/interior-painting-sydney", label: "Interior Painting Sydney" },
              { href: "/exterior-painting-sydney", label: "Exterior Painting Sydney" },
              { href: "/painters-parramatta", label: "Painters Parramatta" },
              { href: "/painters-eastern-suburbs", label: "Painters Eastern Suburbs" },
              { href: "/painters-inner-west", label: "Painters Inner West" },
              { href: "/painters-sutherland-shire", label: "Painters Sutherland Shire" },
              { href: "/painters-north-west-sydney", label: "Painters North West Sydney" },
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

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Request a Commercial Painting Quote
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Commercial Property?
          </h2>

          <p className="mt-4 text-lg text-gray-200">
            Contact Prisma Coatings for a free site inspection and fixed quote.
            We work with offices, strata buildings, retail spaces, warehouses,
            schools, healthcare facilities and all commercial properties across
            Sydney. Licensed, insured and ready to start.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-bold transition-colors"
            >
              Request a Free Quote
            </Link>

            <a
              href="tel:+61401508036"
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
