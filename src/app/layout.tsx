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
  title: 'Prisma Coatings | Expert Painting in Sydney',
  description: 'Professional house and commercial painting services in Sydney. Quality, trust and perfect finish.',
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
