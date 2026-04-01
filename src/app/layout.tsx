import "./styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Puedes agregar más si quieres
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Prisma Coatings | Professional Painters in Sydney",
    template: "%s | Prisma Coatings",
  },
  description:
    "Expert house & commercial painting in Sydney with 10+ years experience. Licensed painters offering free quotes.",
  keywords:
    "house painting sydney, commercial painting, strata painting, painters sydney",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Prisma Coatings | Professional Painters in Sydney",
    description:
      "Expert house & commercial painting in Sydney with 10+ years experience.",
    url: "https://www.prismacoatings.com.au",
    type: "website",
    locale: "en_AU",
    siteName: "Prisma Coatings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prisma Coatings | Professional Painters in Sydney",
    description:
      "Expert house & commercial painting in Sydney with 10+ years experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PaintingContractor",
              "@id": "https://www.prismacoatings.com.au/#business",
              name: "Prisma Coatings",
              url: "https://www.prismacoatings.com.au",
              logo: "https://www.prismacoatings.com.au/logo/logo.png",
              image: "https://www.prismacoatings.com.au/logo/logo.png",
              description:
                "Professional house and commercial painting services in Sydney. Interior, exterior, strata and residential painting with over 10 years of experience.",
              telephone: "+61 401 508 036",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "20/25 Marlowe St",
                addressLocality: "Campsie",
                addressRegion: "NSW",
                postalCode: "2193",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.9162866,
                longitude: 151.1026061,
              },
              areaServed: {
                "@type": "City",
                name: "Sydney",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "07:00",
                  closes: "17:00",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+61 401 508 036",
                contactType: "customer service",
                areaServed: "AU",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://instagram.com/prismacoatings",
                "https://www.facebook.com/profile.php?id=61572618991416",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Painting Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Interior Painting Sydney",
                      areaServed: {
                        "@type": "City",
                        name: "Sydney",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Exterior Painting Sydney",
                      areaServed: {
                        "@type": "City",
                        name: "Sydney",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Painting Sydney",
                      areaServed: {
                        "@type": "City",
                        name: "Sydney",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Strata Painting Sydney",
                      areaServed: {
                        "@type": "City",
                        name: "Sydney",
                      },
                    },
                  },
                ],
              },
              // review: {
              //   "@type": "Review",
              //   reviewRating: {
              //     "@type": "Rating",
              //     ratingValue: "5",
              //     bestRating: "5",
              //   },
              //   author: {
              //     "@type": "Person",
              //     name: "Ken Stevens",
              //   },
              //   reviewBody:"Hally, the founder of Prisma Coatings, and his team are truly outstanding painters. I have used them several times on large homes in Mosman and the work is First Class. Courteous and Professional....and importantly 'lots of preparation'.....which ensures an excellent and long lasting finish. I recommend Hally and Prisma Coatings highly. The most important test is simple.....ask yourself would I use them again The answer is YES ! Well priced and reliable. A great team. Ken Stevens"
              // },
              // aggregateRating: {
              //   "@type": "AggregateRating",
              //   ratingValue: "5.0",
              //   reviewCount: "15",
              // },
            }),
          }}
        />
      </head>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-7N3MRT5YT8`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7N3MRT5YT8');
    `}
      </Script>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
