import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Header from "./components/Heder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Painting Services in Sydney | Prisma Coatings",
  description:
    "Expert residential and commercial painting in Sydney. Over 9 years of experience in strata, repaints, and new builds. Get your free quote today.",
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
    description: "Transform your home with professional painting. Free quotes and 5-star reviews.",
    url: "https://www.prismacoatings.com.au",
    siteName: "Prisma Coatings",
    images: [
      {
        url: "og/og-image.png", // ✅ be sure to replace with your actual image path
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
  return (
    <html lang="en">
      <Header />
      <main>
        {/* <Hero />
        <Services />
        <Gallery />
        <Testimonials/>
        <ContactForm/> */}
      </main>
    </html>
  );
}
