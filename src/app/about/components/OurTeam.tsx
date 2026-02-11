"use client";
import React from "react";
import Image from "next/image";
import ProfileCard from "./Profilecard";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Hally",
      position: "Master Painter & Founder",
      experience: "12+ years",
      specialty: "Residential & Commercial Painting",
      id: 8,
    },
    // {
    //   name: "Hally",
    //   position: "Master Painter & Founder",
    //   experience: "12+ years",
    //   specialty: "Residential & Commercial Painting",
    //   id: 8,
    // },
  ];

  // Structured data for SEO
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prisma Coatings",
    url: "https://www.prismacoatings.com.au",
    logo: "https://www.prismacoatings.com.au/logo/logo.png",
    description:
      "Professional painting services in Sydney with over 10 years of experience",
    areaServed: "Sydney, Australia",
    serviceType: [
      "Residential Painting",
      "Commercial Painting",
      "Strata Painting",
    ],
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.position,
      worksFor: {
        "@type": "Organization",
        name: "Prisma Coatings",
      },
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />

      <section
        className="py-16 px-4 bg-white"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-[#D61C1C] mb-2 uppercase tracking-wide">
              Our Expert Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Painters You Can Trust
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
              Meet our skilled team of professional painters with decades of
              combined experience across residential, commercial, and strata
              projects in Sydney.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="text-center" itemScope itemType="https://schema.org/Person">
              <ProfileCard
                imageUrl={`/images/${member.id}.jpg`}
                name={member.name}
                isVerified={true}
                title={member.position}
                followers={10}
                projects={73}
                onFollowClick={() => alert(`Followed ${member.name}!`)}
                isFollowing={false}
              />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-base text-gray-700">
              Want to work with our team?{" "}
              <a
                href="/contact"
                className="text-[#13233A] font-normal hover:text-[#C53030] hover:underline transition-all duration-200"
              >
                Get a free quote today →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
