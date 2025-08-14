import React from 'react'
import Image from 'next/image'

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Hally",
      position: "Master Painter & Founder",
      experience: "12+ years",
      specialty: "Residential & Commercial Painting",
      id: 8
    },
    {
      name: "Hally ", 
      position: "Project Manager",
      experience: "8+ years",
      specialty: "Strata & Large Scale Projects",
      id: 2
    },
    {
      name: "David Rodriguez",
      position: "Lead Painter", 
      experience: "10+ years",
      specialty: "Interior Design & Color Consultation",
      id: 3
    }
  ]

  // Structured data for SEO
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prisma Coatings",
    "url": "https://www.prismacoatings.com.au",
    "logo": "https://www.prismacoatings.com.au/logo/logo.png",
    "description": "Professional painting services in Sydney with over 9 years of experience",
    "areaServed": "Sydney, Australia",
    "serviceType": ["Residential Painting", "Commercial Painting", "Strata Painting"],
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.position,
      "worksFor": {
        "@type": "Organization",
        "name": "Prisma Coatings"
      }
    }))
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      
      <section className="py-16 px-4 bg-white" itemScope itemType="https://schema.org/Organization">
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
              Meet our skilled team of professional painters with over 30 years of combined experience in residential painting, commercial projects, and strata maintenance across Sydney. Our certified painters deliver exceptional results using premium quality paints and proven techniques.
            </p>
          </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center" itemScope itemType="https://schema.org/Person">
              {/* Card with team member photo */}
              <div className="relative rounded-lg overflow-hidden mb-6 min-h-[300px] bg-gray-200">
                <Image 
                  src={`/images/${member.id}.jpg`}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Member Info */}
              <h3 className="text-xl font-bold text-[#D61C1C] mb-2" itemProp="name">
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium mb-2" itemProp="jobTitle">
                {member.position}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Experience:</strong> {member.experience}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Specialty:</strong> {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default OurTeam
