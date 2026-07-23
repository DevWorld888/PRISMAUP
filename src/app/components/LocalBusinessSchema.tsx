export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.prismacoatings.com.au/#business',
    name: 'Prisma Coatings',
    description: 'Professional residential and commercial painting services in Sydney. Over 10 years of experience in strata, repaints, and new builds.',
    url: 'https://www.prismacoatings.com.au',
    telephone: '+61401508036',
    email: 'info@prismacoatings.com.au',
    foundingDate: '2015',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '20/25 Marlowe St',
      addressLocality: 'Campsie',
      addressRegion: 'NSW',
      postalCode: '2194',

      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.9108,
      longitude: 151.1027,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00', closes: '14:00' },
    ],
    priceRange: '$$',
    areaServed: [
      'Sydney', 'Eastern Suburbs', 'Inner West', 'North Shore',
      'Northern Beaches', 'Parramatta', 'Western Sydney', 'Sutherland Shire',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Painting Sydney' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Painting Sydney' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strata Painting Sydney' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Painting Sydney' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Painting Sydney' } },
      ],
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61572618991416',
      'https://www.instagram.com/prismacoatings',
    ],
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}

    />
  );
}

