import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./styles/globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Puedes agregar más si quieres
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Prisma Coatings | Expert Painting in Sydney',
  description: 'Professional house and commercial painting services in Sydney. Quality, trust and perfect finish.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
