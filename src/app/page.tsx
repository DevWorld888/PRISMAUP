import type { Metadata } from "next";

import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import WhatWeDo from "./components/WhatWeDo";
import ExploreOurServices from "./components/ExploreOurServices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import CtaFinal from "./components/CtaFinal";
import BlogCategoriesClient from "./blog/components/BlogCategoriesClient";
import Blog from "./components/Blog";
import RecentProjects from "./components/recentProjects";



export const metadata: Metadata = {
  title: "House Painters Sydney | Commercial Painting | Prisma Coatings",
  description:
    "Expert residential and commercial painting in Sydney. Over 10 years of experience in strata, repaints, and new builds. Get your free quote today.",
  keywords: [
    "house painter Sydney",
    "interior painting Sydney",
    "commercial painting",
    "strata painting",
    "professional painters Sydney",
    "painting company Sydney",
    "repainting services",
    "residential painting",
  ],
  alternates: {
    canonical: "https://www.prismacoatings.com.au",
  },
  openGraph: {
    title: "Prisma Coatings | Expert Painting in Sydney",
    description: "Transform your home with professional painting. Over 10 years of experience. Free quotes and 5-star reviews.",
    url: "https://www.prismacoatings.com.au",
    siteName: "Prisma Coatings",
    images: [
      {
        url: "https://www.prismacoatings.com.au/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "House painting service in Sydney",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    "@id": "https://www.prismacoatings.com.au/#business",
    name: "Prisma Coatings",
    url: "https://www.prismacoatings.com.au",
    telephone: "+61401508036",
    email: "info@prismacoatings.com.au",
    description:
      "Professional residential and commercial painting services in Sydney. Interior painting, exterior painting, strata and new builds. Over 10 years of experience.",
    image: "https://www.prismacoatings.com.au/og/og-image.png",
    priceRange: "$$",
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
      latitude: -33.9145,
      longitude: 151.1034,
    },
    areaServed: [
      { "@type": "City", name: "Sydney" },
      { "@type": "AdministrativeArea", name: "Eastern Suburbs" },
      { "@type": "AdministrativeArea", name: "Inner West" },
      { "@type": "AdministrativeArea", name: "North West Sydney" },
      { "@type": "AdministrativeArea", name: "Sutherland Shire" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting Sydney" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting Sydney" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Painting Sydney" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strata Painting Sydney" } },
      ],
    },
    sameAs: [
      "https://www.google.com/maps?cid=prismacoatings",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Aboutus />
      <WhatWeDo />
      <ExploreOurServices />
      {/* <Gallery /> */}
      <RecentProjects />
      <Testimonials />
      <CtaFinal/>
      <Blog />
    </>
  );
}
