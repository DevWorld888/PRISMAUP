import type { Metadata } from "next";
import Script from "next/script";
import ContactPageClient from "./components/ContactPage";


export const metadata: Metadata = {
  title: "Contact Painters Sydney",
  description:
    "Contact Prisma Coatings for a free quote on house and commercial painting services in Sydney.",
};

const ContactPage = () => {
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <ContactPageClient />
    </>
  );
};

export default ContactPage;
