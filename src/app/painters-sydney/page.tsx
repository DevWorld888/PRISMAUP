import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Phone,
  Home,
  Building2,
  Brush,
  ClipboardList,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Painters Sydney | Prisma Coatings – Free Quotes",
  description:
    "Trusted painters in Sydney for homes and businesses. Interior, exterior and commercial painting. Professional finish, no hidden costs. Call for a free quote.",
  keywords: [
    "painters sydney",
    "painting services sydney",
    "interior painters sydney",
    "exterior painters sydney",
    "residential painters sydney",
    "commercial painters sydney",
    "professional painters sydney",
    "local painters sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-sydney",
  },
  openGraph: {
    title: "Painters Sydney | Prisma Coatings",
    description:
      "Professional painters in Sydney for residential and commercial projects. Free quotes, reliable service, quality finishes.",
    url: "https://www.prismacoatings.com.au/painters-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painters Sydney – Prisma Coatings",
      },
    ],
  },
};

const serviceAreas = [
  "Sydney CBD",
  "Inner West",
  "Eastern Suburbs",
  "North Shore",
  "Western Sydney",
  "Sutherland Shire",
  "Campsie",
  "Marrickville",
];

const benefits = [
  "Experienced painters for homes, apartments and businesses",
  "Thorough surface prep before every single job",
  "No hidden costs — clear pricing from the start",
  "Reliable, on time and easy to communicate with",
  "Free quotes across all Sydney areas",
];

const services = [
  {
    title: "Interior Painting",
    description:
      "Walls, ceilings, trims and doors — refreshed with clean, smooth finishes that make a real difference inside your home or business.",
    icon: Home,
  },
  {
    title: "Exterior Painting",
    description:
      "Durable coatings that improve street appeal and help protect your property from Sydney's sun, rain and humidity.",
    icon: Building2,
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail spaces and business premises painted professionally with flexible scheduling to keep disruption to a minimum.",
    icon: Brush,
  },
];

const steps = [
  {
    number: "01",
    title: "Free Quote",
    description:
      "We visit your property, assess the scope and give you a clear, detailed quote. No obligation.",
  },
  {
    number: "02",
    title: "Job Planning",
    description:
      "We agree on colours, schedule and the right paint system for your surfaces and conditions.",
  },
  {
    number: "03",
    title: "Professional Painting",
    description:
      "Our team preps surfaces properly then applies the paint with care, consistency and attention to detail.",
  },
  {
    number: "04",
    title: "Clean Finish",
    description:
      "We clean up completely before we leave. You get the result you were promised — nothing less.",
  },
];

const faqs = [
  {
    q: "How much do painters cost in Sydney?",
    a: "Pricing depends on the size of the job, surface condition and the type of painting required. Most residential projects start with a free on-site quote so you get an accurate price before committing.",
  },
  {
    q: "How long does painting take?",
    a: "A standard room takes one to two days. A full house interior or exterior repaint can take three to seven days depending on size, prep needed and conditions. We give you a clear timeline upfront.",
  },
  {
    q: "Do you provide free quotes?",
    a: "Yes. All quotes are free with no obligation. Contact us and we will arrange a time to assess your project and provide a detailed written quote.",
  },
  {
    q: "What areas in Sydney do you service?",
    a: "We paint across Sydney including the Inner West, Eastern Suburbs, North Shore, Western Sydney, Sutherland Shire and surrounding suburbs. Contact us to confirm your area.",
  },
  {
    q: "Are you insured?",
    a: "Yes. Prisma Coatings operates with public liability insurance, giving you peace of mind on every project.",
  },
];

export default function PaintersSydneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-sydney#service",
    name: "Painters Sydney",
    serviceType: "Painting Services",
    url: "https://www.prismacoatings.com.au/painters-sydney",
    description:
      "Professional painters in Sydney providing interior, exterior and commercial painting services for homes and businesses.",
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
      description: "Request a free quote for painting services in Sydney.",
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
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Sydney Painting Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters in Sydney You Can Actually Rely On
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings is a Sydney painting company specialising in
              interior, exterior and commercial painting. We deliver quality
              finishes, honest pricing and a process that is straightforward from
              first call to final coat.
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
                className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call 0401 508 036
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
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
              src="/images/1.jpg"
              alt="Professional painters in Sydney working on a residential painting project"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* INTRO + WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/recentWorks/3.jpeg"
            alt="Sydney painters completing an interior painting project"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Why Choose Prisma Coatings
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Professional Painters in Sydney for Homes and Businesses
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We are a Sydney-based painting company focused on doing the job
            properly. That means thorough preparation, the right materials and a
            finish that looks great and lasts. Whether you need a single room
            freshened up or a full commercial repaint, Prisma Coatings keeps
            things simple, honest and on schedule.
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

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Painting Services Across Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From a single room to a full commercial fit-out, we cover the full
              range of painting work Sydney homeowners and businesses need.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/interior-painting-sydney"
              className="inline-flex items-center rounded-full border border-[#13233A] px-5 py-2.5 text-sm font-medium text-[#13233A] hover:bg-[#13233A] hover:text-white transition-colors"
            >
              Interior Painting Sydney
            </Link>
            <Link
              href="/exterior-painting-sydney"
              className="inline-flex items-center rounded-full border border-[#13233A] px-5 py-2.5 text-sm font-medium text-[#13233A] hover:bg-[#13233A] hover:text-white transition-colors"
            >
              Exterior Painting Sydney
            </Link>
            <Link
              href="/commercial-painting-sydney"
              className="inline-flex items-center rounded-full border border-[#13233A] px-5 py-2.5 text-sm font-medium text-[#13233A] hover:bg-[#13233A] hover:text-white transition-colors"
            >
              Commercial Painting Sydney
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            A Simple Process. A Quality Result.
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            We keep things clear and straightforward so there are no surprises
            from start to finish.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
            >
              <span className="text-5xl font-bold text-[#D61C1C]/20">
                {step.number}
              </span>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Where We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Painters Across Sydney and Surrounding Areas
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            We cover a wide range of Sydney suburbs and regions. If you are not
            sure whether we service your area, just call us and we will confirm.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Sydney CBD",
              "Inner West",
              "Campsie",
              "Marrickville",
              "Strathfield",
              "Burwood",
              "Ashfield",
              "Canterbury",
              "Eastern Suburbs",
              "North Shore",
              "Western Sydney",
              "Sutherland Shire",
            ].map((area) => (
              <span
                key={area}
                className="border border-white/20 bg-white/10 text-white px-4 py-2 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            Quality You Can See
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Painting That Lasts — Done Right the First Time
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A fresh coat of paint does more than change a colour. Done properly,
            it protects surfaces, lifts the feel of a space and adds real value
            to a property. Done badly, it peels, fades and needs doing again.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We take prep seriously, use quality products and apply every coat
            with care. That is how Prisma Coatings delivers results Sydney
            homeowners and business owners can be proud of.
          </p>

          <div className="mt-8 flex items-center gap-2 text-[#D61C1C]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-medium">
              Trusted by clients across Sydney
            </span>
          </div>
        </div>

        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/recentWorks/2.jpeg"
            alt="Prisma Coatings painters completing a quality exterior painting job in Sydney"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Painters Sydney – Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold">{faq.q}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <ClipboardList className="w-12 h-12 text-[#D61C1C] mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Get Started? Let's Talk.
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Whether it is a single room or a full repaint, Prisma Coatings makes
          it easy. Contact us today for a free, no-obligation quote and let us
          show you what professional painters in Sydney can do.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:0401508036"
            className="inline-flex items-center justify-center border-2 border-[#13233A] text-[#13233A] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#13233A] hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call 0401 508 036
          </a>
        </div>
      </section>
    </main>
  );
}
