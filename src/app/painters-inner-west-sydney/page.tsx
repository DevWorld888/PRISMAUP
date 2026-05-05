import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Phone, Brush, Building2, Home, Star, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Painters Inner West Sydney | Prisma Coatings",
  description:
    "Looking for painters in Inner West Sydney? Prisma Coatings delivers quality residential and commercial painting in Marrickville, Newtown, Leichhardt, Ashfield and more.",
  keywords: [
    "painters inner west sydney",
    "inner west painters",
    "house painters inner west sydney",
    "painting services marrickville",
    "painters newtown sydney",
    "painters leichhardt sydney",
    "painters ashfield sydney",
    "residential painting inner west",
    "commercial painting inner west sydney",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au/painters-inner-west-sydney",
  },
  openGraph: {
    title: "Painters Inner West Sydney | Prisma Coatings",
    description:
      "Trusted painters in Inner West Sydney. Residential and commercial painting in Marrickville, Newtown, Leichhardt, Ashfield and surrounding suburbs.",
    url: "https://www.prismacoatings.com.au/painters-inner-west-sydney",
    siteName: "Prisma Coatings",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Painters Inner West Sydney – Prisma Coatings",
      },
    ],
  },
};

const serviceAreas = [
  "Marrickville",
  "Newtown",
  "Leichhardt",
  "Ashfield",
  "Balmain",
  "Annandale",
  "Glebe",
  "Petersham",
  "Stanmore",
  "Dulwich Hill",
  "Summer Hill",
  "Campsie",
];

const benefits = [
  "Residential and commercial painting across Inner West Sydney",
  "Experience with Federation terraces, semis and period homes",
  "Thorough surface preparation for finishes that actually last",
  "On-time delivery and clean, professional site conduct",
  "Transparent, fixed pricing — no surprises on the final invoice",
  "Free quotes with no pressure and no obligation",
];

const services = [
  {
    title: "Interior Painting",
    description:
      "From a single feature wall to a full home repaint, our inner west painters refresh every room with clean, consistent finishes. We protect your furniture, work tidily and leave zero mess.",
    icon: Home,
  },
  {
    title: "Exterior Painting",
    description:
      "Inner West Sydney homes face everything from summer heat to winter rain. Our exterior coatings are chosen for durability and applied with proper prep — so the result looks good and holds up.",
    icon: Brush,
  },
  {
    title: "Commercial Painting",
    description:
      "Offices, retail spaces, strata buildings and body corporates across Inner West Sydney. We work around your schedule to minimise downtime and deliver a finish that reflects your brand.",
    icon: Building2,
  },
];

const testimonials = [
  {
    name: "Sandra K.",
    suburb: "SYDNEY",
    rating: 5,
    text: "Hally did a patch repair to our ceiling a few months ago and recently painted rooms in our home. We couldn’t be happier with the outcomes. We highly recommend Prisma Coatings — there is no one we trust more than Hally. His attention to detail and professionalism is unmatched.",
  },
  {
    name: "Matt Schaudin",
    suburb: "SYDNEY",
    rating: 5,
    text: "I use Hally on all jobs I do. He gets it done on time with premium quality for a great price. Highly recommend using Prisma Coatings for all painting needs.",
  },
  {
    name: "Jim Miliotis.",
    suburb: "SYDNEY",
    rating: 5,
    text: "We use Prisma Coatings for all our building projects. We do a lot of high-end work which requires attention to detail, quality workmanship and efficiency. Hally and his team are very professional and get the job done."
  },
];

const faqs = [
  {
    q: "How much does painting cost in Inner West Sydney?",
    a: "Pricing depends on the size of your property, the condition of existing surfaces and the scope of work. A standard three-bedroom house interior in Inner West Sydney typically starts from around $3,000–$5,000, though older homes with more prep needs will vary. Contact us for a free site inspection and accurate quote.",
  },
  {
    q: "How long does a painting job take in Inner West?",
    a: "A standard interior repaint for a three-bedroom home generally takes 3–5 days. Exterior jobs can take 3–7 days depending on surface area and preparation required. We will give you a clear timeline before work begins so you can plan accordingly.",
  },
  {
    q: "Do you offer free quotes for Inner West Sydney?",
    a: "Yes. We provide free, no-obligation quotes for all residential and commercial painting jobs across Inner West Sydney. We visit the property, assess the surfaces and provide a detailed written quote — no guesswork.",
  },
  {
    q: "Do you paint older period homes in the Inner West?",
    a: "Absolutely. We regularly work on Federation terraces, Californian bungalows and Victorian semis throughout the Inner West. These homes require careful prep, the right primers and attention to detail — that is exactly the kind of work we do.",
  },
  {
    q: "Do you offer commercial painting in Inner West Sydney?",
    a: "Yes. Prisma Coatings works with businesses, strata committees and property managers across Inner West Sydney. We schedule work to suit your operating hours and minimise disruption to your tenants or customers.",
  },
  {
    q: "Which suburbs in the Inner West do you cover?",
    a: "We cover all of Inner West Sydney including Marrickville, Newtown, Leichhardt, Ashfield, Balmain, Annandale, Glebe, Petersham, Stanmore, Dulwich Hill, Summer Hill, Campsie and surrounding areas.",
  },
];

export default function PaintersInnerWestSydneyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.prismacoatings.com.au/painters-inner-west-sydney#service",
    name: "Painters Inner West Sydney",
    serviceType: "Residential and Commercial Painting",
    url: "https://www.prismacoatings.com.au/painters-inner-west-sydney",
    description:
      "Professional painters in Inner West Sydney providing residential and commercial painting services in Marrickville, Newtown, Leichhardt, Ashfield and surrounding suburbs.",
    areaServed: [
      { "@type": "City", name: "Marrickville" },
      { "@type": "City", name: "Newtown" },
      { "@type": "City", name: "Leichhardt" },
      { "@type": "City", name: "Ashfield" },
      { "@type": "City", name: "Balmain" },
      { "@type": "City", name: "Glebe" },
    ],
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
      description: "Free quote for painting services in Inner West Sydney.",
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
              Inner West Sydney Painters
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Painters Inner West Sydney
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Prisma Coatings are trusted painters in Inner West Sydney — delivering quality
              residential and commercial painting in Marrickville, Newtown, Leichhardt, Ashfield
              and across the surrounding suburbs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#D61C1C] hover:bg-[#b71c1c] text-white px-6 py-4 rounded-md font-semibold transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/61401508036"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#13233A] transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
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
              alt="Prisma Coatings painters working on a home in Inner West Sydney"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Your Local House Painters in Inner West Sydney
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Prisma Coatings is a Sydney-based painting company that has been transforming homes and
          commercial spaces across Inner West Sydney for years. We understand the character and
          quirks of the area — the period homes in Newtown, the tight terraces in Marrickville,
          the mixed-use buildings in Leichhardt. That local knowledge shapes how we approach
          every job: the right preparation, the right products and the right level of care for
          each property type.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Whether you are a homeowner looking to refresh a tired interior, a property manager
          maintaining a rental portfolio, or a business owner who wants a commercial space that
          looks the part — our inner west painters are here to help. We are easy to deal with,
          transparent about pricing and fully committed to delivering results you are proud of.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-lg order-last lg:order-first">
            <Image
              src="/images/recentWorks/3.jpeg"
              alt="Interior painting by Prisma Coatings in Inner West Sydney"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Inner West Painters You Can Actually Rely On
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              There is no shortage of painters in Inner West Sydney — but finding ones who show
              up on time, communicate clearly and finish to a standard you are proud of is harder
              than it should be. That is the gap Prisma Coatings fills. We treat every job,
              large or small, with the same level of professionalism.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D61C1C] mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
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
                className="inline-flex items-center justify-center border border-[#13233A] text-[#13233A] px-6 py-4 rounded-md font-semibold hover:bg-[#13233A] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0401 508 036
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Residential and Commercial Painting in Inner West Sydney
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              From single rooms to full buildings, our inner west painters handle it all —
              always with proper prep, quality products and a tidy finish.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-full bg-[#13233A] text-white flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              Local Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              We Know Inner West Sydney Homes
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              The Inner West has some of Sydney's most distinctive housing stock. You will find
              Edwardian terraces in <strong className="text-white">Marrickville</strong>, timber
              cottages in <strong className="text-white">Newtown</strong>, Federation bungalows
              in <strong className="text-white">Ashfield</strong> and Victorian semis in{" "}
              <strong className="text-white">Leichhardt</strong>. Each of these property types
              comes with its own surface conditions, substrate challenges and preparation needs.
            </p>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              Our team has painted extensively throughout the area and understands what these
              homes need — from lead-safe practices on older surfaces to the right exterior
              coatings that hold up to Inner West Sydney's climate. We do not cut corners on
              prep, because that is where lasting results are built.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="bg-white/10 border border-white/20 text-gray-200 text-sm px-3 py-2 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/recentWorks/2.jpeg"
              alt="Exterior house painting in Inner West Sydney by Prisma Coatings"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
              What Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Inner West Sydney Homeowners
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Do not just take our word for it. Here is what some of our recent clients in
              Inner West Sydney have to say.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D61C1C] text-[#D61C1C]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="font-bold text-[#13233A]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.suburb}, Inner West Sydney</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D61C1C] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Started? Request a Free Quote Today
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Spots fill up quickly — especially during the warmer months. Get in touch now and
            lock in a free site visit from our Inner West Sydney painting team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/61401508036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#D61C1C] px-6 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Us on WhatsApp
            </a>
            <a
              href="tel:0401508036"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-4 rounded-md font-semibold hover:bg-white hover:text-[#D61C1C] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0401 508 036
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#13233A] text-white px-6 py-4 rounded-md font-semibold hover:bg-black/80 transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center">
          <span className="inline-block bg-[#D61C1C] text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Painters Inner West Sydney – Common Questions
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Everything you need to know before booking house painters in Inner West Sydney.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold">{faq.q}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Have a question that is not covered here?{" "}
            <a
              href="https://wa.me/61401508036"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D61C1C] font-semibold hover:underline"
            >
              Message us on WhatsApp
            </a>{" "}
            or{" "}
            <Link href="/contact" className="text-[#D61C1C] font-semibold hover:underline">
              send us a message
            </Link>{" "}
            and we will get back to you promptly.
          </p>
        </div>
      </section>
    </main>
  );
}
