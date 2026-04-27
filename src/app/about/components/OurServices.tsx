import React from "react";
import Link from "next/link";
import { Home, Building2, Layers, Wrench, Check, ArrowRight, Phone, MessageCircle } from "lucide-react";

type ServiceCard = {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  servicePath: string;
  hasServicePage: boolean;
};

const PHONE = "+610401508036";
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi, I need a painting quote for my property in Sydney. Can you help me?"
)}`;

const services: ServiceCard[] = [
  {
    id: 1,
    Icon: Home,
    eyebrow: "Residential",
    title: "House Painting Sydney",
    subtitle: "Interior & Exterior Specialists",
    description:
      "Professional house painting that protects your investment and transforms your home. Clean preparation, premium paints, and finishes built to last — delivered on time and on budget.",
    bullets: [
      "Interior & exterior painting, prep & sealing included",
      "Premium paints — 5 to 10 year workmanship guarantee",
      "Full cleanup on completion, zero mess left behind",
    ],
    servicePath: "/house-painters-sydney",
    hasServicePage: true,
  },
  {
    id: 2,
    Icon: Building2,
    eyebrow: "Commercial",
    title: "Commercial Painting Sydney",
    subtitle: "Offices, Retail & Industrial Buildings",
    description:
      "Durable commercial finishes that protect your building and reinforce your brand. We work around your schedule — after hours and weekends available — with zero disruption to your operations.",
    bullets: [
      "Strata, office, retail & industrial specialists",
      "After-hours and weekend scheduling available",
      "Full compliance & project management included",
    ],
    servicePath: "/commercial-painting-sydney",
    hasServicePage: true,
  },
  {
    id: 3,
    Icon: Layers,
    eyebrow: "Wallpapering",
    title: "Wallpapering Sydney",
    subtitle: "Feature Walls & Full Room Installations",
    description:
      "Expert installation and removal of all wallpaper types. From bold feature walls to complete room transformations, we deliver seamless, long-lasting results for homes and commercial spaces.",
    bullets: [
      "All types: vinyl, fabric, textured & peel-and-stick",
      "Seamless joins and perfect alignment every time",
      "Removal, surface repair & new installation",
    ],
    servicePath: "/contact",
    hasServicePage: false,
  },
  {
    id: 4,
    Icon: Wrench,
    eyebrow: "Restoration",
    title: "Surface Restoration Sydney",
    subtitle: "Repair, Protect & Refinish",
    description:
      "Flaking paint, water damage, cracked render — we restore surfaces to a lasting standard. Specialists in heritage buildings, strata properties, and weathered exteriors across Sydney.",
    bullets: [
      "Crack filling, rendering & thorough surface prep",
      "Heritage building & strata restoration specialists",
      "Advanced protective coating systems applied",
    ],
    servicePath: "/contact",
    hasServicePage: false,
  },
];

const trustSignals = [
  "10+ Years in Sydney",
  "Fully Licensed & Insured",
  "500+ Projects Completed",
  "Free Quotes — No Obligation",
];

const OurServices = () => {
  return (
    <section
      className="py-20 px-4 bg-[#1F2937]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-[#D61C1C] font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5 leading-tight"
          >
            Professional Painting Services in Sydney
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Trusted by Sydney homeowners and businesses since 2012. Fully
            licensed, insured, and committed to quality finishes that last.
          </p>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14">
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <Check className="w-4 h-4 text-[#D61C1C] flex-shrink-0" />
              {signal}
            </span>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const { Icon } = service;
            return (
              <div
                key={service.id}
                className="group flex flex-col bg-[#374151] border border-gray-600 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-[#D61C1C]/40"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#D61C1C]/10 mb-5 transition-colors duration-300 group-hover:bg-[#D61C1C]/20">
                  <Icon className="w-6 h-6 text-[#D61C1C]" />
                </div>

                {/* Eyebrow */}
                <span className="text-xs text-[#D61C1C] font-semibold uppercase tracking-wider mb-1">
                  {service.eyebrow}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-400 mb-4">{service.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-300"
                    >
                      <Check className="w-4 h-4 text-[#D61C1C] flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="border-t border-gray-600 pt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 text-center py-2.5 px-5 bg-[#D61C1C] hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href={service.servicePath}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-5 border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    {service.hasServicePage ? "View Service" : "Ask Us Anything"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-base mb-6">
            Not sure which service you need?{" "}
            <Link
              href="/contact"
              className="text-white hover:text-[#D61C1C] font-medium underline underline-offset-4 transition-colors duration-200"
            >
              Talk to our team
            </Link>{" "}
            — we&apos;ll recommend the best solution for your property.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now for Fast Service
            </Link>
            <Link
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us Instantly
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
