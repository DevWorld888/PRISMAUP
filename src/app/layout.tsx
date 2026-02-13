import "./styles/globals.css";
import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Puedes agregar más si quieres
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Professional Painting Services Sydney | Prisma Coatings - House & Commercial Painters',
  description: 'Expert house & commercial painting in Sydney with 10+ years experience. Licensed painters offering free quotes. Transform your property with Prisma Coatings - trusted by hundreds of customers.',
  keywords: 'house painting sydney, commercial painting, strata painting, painters sydney, painting services, interior painting, exterior painting, residential painting',
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: 'Professional Painting Services Sydney | Prisma Coatings',
    description: 'Expert house & commercial painting in Sydney with 10+ years experience. Licensed painters offering free quotes.',
    url: 'https://prismacoatings.com.au',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Prisma Coatings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Painting Services Sydney | Prisma Coatings',
    description: 'Expert house & commercial painting in Sydney with 10+ years experience.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Prisma Coatings",
              "description": "Professional house and commercial painting services in Sydney with 10+ years of experience",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "NSW",
                "addressCountry": "AU",
                "addressLocality": "Sydney"
              },
              "areaServed": [
                "Sydney",
                "Inner West",
                "Eastern Suburbs",
                "Northern Beaches",
                "North Shore",
                "Western Sydney"
              ],
              "serviceType": [
                "House Painting",
                "Commercial Painting", 
                "Strata Painting",
                "Interior Painting",
                "Exterior Painting",
                "Residential Painting"
              ],
              "priceRange": "$$",
              "yearEstablished": "2015",
              "url": "https://prismacoatings.com.au",
              "telephone": "+61-xxx-xxx-xxx",
              "image": "https://prismacoatings.com.au/logo/logo.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Painting Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "House Painting",
                      "description": "Professional residential painting services"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Painting",
                      "description": "Expert commercial and office painting"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer/>
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
