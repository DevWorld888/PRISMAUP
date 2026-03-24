import type { Metadata } from "next";
import ContactPageClient from "./components/ContactPage";


export const metadata: Metadata = {
  title: "Contact Painters Sydney",
  description:
    "Contact Prisma Coatings for a free quote on house and commercial painting services in Sydney.",
};

const ContactPage = () => {
  
  return (
    <ContactPageClient />
  );
};

export default ContactPage;
