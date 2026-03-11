export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  focusKeywords: string[];
  content?: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      "January 2026 Painting Projects in Sydney – Real Residential Transformations",
    metaTitle: "January Painting Projects Sydney | Apartment & House Repaints",
    metaDescription:
      "See our January 2026 residential painting projects across Sydney. Apartment repaints, exterior render restoration and renovation painting by professional painters.",
    focusKeywords: [
      "house painters Sydney",
      "apartment repaint Sydney",
      "residential painting Sydney",
      "exterior house painting Sydney",
    ],
    excerpt:
      "Take a look at our January 2026 residential painting projects completed across Sydney including full apartment repaints and exterior render restoration.",
    content: `
    <p>In January 2026, Prisma Coatings completed several residential painting projects across Sydney. From full apartment repaints to exterior render restoration, our team delivered premium interior and exterior finishes.</p>

    <h2>Full Apartment Repaint – 57 Ralph Street</h2>
    <p>This apartment underwent a complete repaint transformation including walls, ceilings and trims. Proper surface preparation ensured a flawless and durable finish.</p>

    <ul>
      <li>Full interior repaint</li>
      <li>Surface patching and preparation</li>
      <li>Premium low-VOC paint</li>
      <li>Modern neutral finish</li>
    </ul>

    <h2>Interior & Exterior Repaint – 14 Reservoir Circuit</h2>
    <p>This residential home required both interior refresh and exterior upgrades to improve curb appeal.</p>

    <ul>
      <li>Hallway, kitchen, living & dining repaint</li>
      <li>Front render walls repaint</li>
      <li>Front door & garage door repaint</li>
      <li>Side gates finishing</li>
    </ul>

    <h2>Ground Floor Renovation – 67 Alma Road</h2>
    <p>This project combined renovation works with professional repainting services.</p>

    <ul>
      <li>Kitchen, bathroom and laundry repaint</li>
      <li>New flooring integration</li>
      <li>Bedroom extension painting</li>
      <li>Main entrance door replacement</li>
    </ul>

    <h2>Looking for Professional House Painters in Sydney?</h2>
    <p>Whether you need a full apartment repaint or exterior house painting, Prisma Coatings delivers high-quality finishes backed by 9+ years of experience.</p>

    <p>👉 <a href="/contact">Contact us for a free quote today.</a></p>
  `,
    image: "/images/blog/january-projects-cover.webp",
    date: "2026-01-31",
    category: "Recent Projects",
    slug: "january-2026-painting-projects-sydney",
    readTime: "6 min read",
    author: "Prisma Coatings Team",
  },
];

export const categories = [
  "All",
  "Color Trends",
  "Painting Tips",
  "Interior Design",
  "Maintenance",
  "Commercial",
  "Professional Services",
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (
  currentPostId: number,
  category: string,
  limit: number = 3,
): BlogPost[] => {
  return blogPosts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};
