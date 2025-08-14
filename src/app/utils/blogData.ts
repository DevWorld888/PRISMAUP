export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  image: string
  date: string
  category: string
  slug: string
  readTime: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2025 Color Trends: What's Hot in Sydney Home Painting",
    excerpt: "Discover the latest color trends that are transforming Sydney homes this year. From warm earth tones to bold statement walls.",
    content: `
      <p>As we step into 2025, Sydney homeowners are embracing bold new color trends that reflect both global influences and our unique Australian lifestyle. This year's palette is all about creating spaces that feel both sophisticated and welcoming.</p>

      <h2>Warm Earth Tones Take Center Stage</h2>
      <p>The trend toward warm, earthy colors continues to dominate Sydney homes. Think rich terracottas, warm ochres, and deep clay colors that complement our natural landscape. These colors work particularly well in:</p>
      <ul>
        <li>Living rooms and dining areas</li>
        <li>Feature walls in bedrooms</li>
        <li>Exterior accents</li>
      </ul>

      <h2>Bold Statement Walls</h2>
      <p>Gone are the days of playing it safe with neutral walls throughout. 2025 is seeing homeowners embrace dramatic accent walls in deep blues, forest greens, and even sophisticated burgundy tones.</p>

      <h2>Sustainable Paint Choices</h2>
      <p>Environmental consciousness continues to influence color choices, with eco-friendly paints in natural, muted tones becoming increasingly popular. These paints not only look great but also contribute to better indoor air quality.</p>

      <h2>Professional Application Makes the Difference</h2>
      <p>While choosing the right color is important, professional application ensures your chosen palette looks its absolute best. Our team at Prisma Coatings has extensive experience with the latest color trends and can help you achieve the perfect finish.</p>
    `,
    image: "/images/1.jpg",
    date: "2025-01-15",
    category: "Color Trends",
    slug: "2025-color-trends-sydney-home-painting",
    readTime: "5 min read",
    author: "Prisma Coatings Team"
  },
  {
    id: 2,
    title: "How to Prepare Your House for Exterior Painting",
    excerpt: "Essential steps to prepare your home's exterior for painting. Learn about surface preparation, primer selection, and weather considerations.",
    content: `
      <p>Proper preparation is the foundation of any successful exterior painting project. Taking the time to prepare your home's exterior properly will ensure a professional finish that lasts for years to come.</p>

      <h2>Surface Cleaning and Inspection</h2>
      <p>Before any painting begins, a thorough cleaning and inspection is essential:</p>
      <ul>
        <li>Pressure wash all surfaces to remove dirt, mold, and loose paint</li>
        <li>Allow 24-48 hours for complete drying</li>
        <li>Inspect for cracks, holes, or damaged areas</li>
        <li>Check for signs of moisture damage or wood rot</li>
      </ul>

      <h2>Surface Repairs</h2>
      <p>Address all identified issues before painting:</p>
      <ul>
        <li>Fill cracks and holes with appropriate filler</li>
        <li>Replace any damaged timber or weatherboards</li>
        <li>Sand rough areas smooth</li>
        <li>Caulk gaps around windows, doors, and trim</li>
      </ul>

      <h2>Primer Selection</h2>
      <p>Choosing the right primer is crucial for paint adhesion and longevity. Consider:</p>
      <ul>
        <li>Surface material (wood, metal, masonry)</li>
        <li>Previous paint type</li>
        <li>Environmental conditions</li>
        <li>Final paint selection</li>
      </ul>

      <h2>Weather Considerations</h2>
      <p>Sydney's climate requires careful timing for exterior painting projects. Avoid painting during:</p>
      <ul>
        <li>High humidity periods</li>
        <li>Direct strong sunlight</li>
        <li>Windy conditions</li>
        <li>When rain is forecast within 24 hours</li>
      </ul>
    `,
    image: "/images/2.jpg",
    date: "2025-01-10",
    category: "Painting Tips",
    slug: "prepare-house-exterior-painting",
    readTime: "7 min read",
    author: "Prisma Coatings Team"
  },
  {
    id: 3,
    title: "Choosing the Right Paint Finish for Each Room",
    excerpt: "Understanding when to use matte, eggshell, satin, or gloss finishes. A comprehensive guide for interior painting projects.",
    content: `
      <p>Selecting the right paint finish is crucial for achieving the perfect look and durability in each room of your home. Different finishes serve different purposes and understanding their characteristics will help you make the best choice.</p>

      <h2>Matte Finish</h2>
      <p>Matte finishes offer a sophisticated, non-reflective appearance that hides surface imperfections well. They're perfect for:</p>
      <ul>
        <li>Adult bedrooms and low-traffic areas</li>
        <li>Ceilings throughout the home</li>
        <li>Creating a cozy, intimate atmosphere</li>
      </ul>

      <h2>Eggshell Finish</h2>
      <p>With a subtle sheen that's more durable than matte, eggshell is versatile and forgiving:</p>
      <ul>
        <li>Living rooms and dining rooms</li>
        <li>Hallways and entryways</li>
        <li>Areas that need occasional cleaning</li>
      </ul>

      <h2>Satin Finish</h2>
      <p>Satin finishes offer good durability and are easy to clean, making them ideal for:</p>
      <ul>
        <li>Children's bedrooms and playrooms</li>
        <li>Family rooms and kitchens</li>
        <li>Bathrooms and laundries</li>
      </ul>

      <h2>Gloss and Semi-Gloss</h2>
      <p>High-gloss finishes are the most durable and easiest to clean:</p>
      <ul>
        <li>Trim, doors, and window frames</li>
        <li>Kitchen cabinets</li>
        <li>High-moisture areas</li>
      </ul>
    `,
    image: "/images/3.jpg",
    date: "2025-01-05",
    category: "Interior Design",
    slug: "choosing-right-paint-finish-each-room",
    readTime: "6 min read",
    author: "Prisma Coatings Team"
  },
  {
    id: 4,
    title: "Maintenance Tips to Keep Your Paint Looking Fresh",
    excerpt: "Extend the life of your paint job with these professional maintenance tips. Learn when and how to touch up your walls.",
    content: `
      <p>A quality paint job is an investment in your home, and with proper maintenance, you can keep it looking fresh for years to come. Here are our professional tips for maintaining your painted surfaces.</p>

      <h2>Regular Cleaning</h2>
      <p>Keep your walls clean with gentle, regular maintenance:</p>
      <ul>
        <li>Dust walls monthly with a microfiber cloth</li>
        <li>Clean scuff marks immediately with a damp cloth</li>
        <li>Use mild soap solution for stubborn stains</li>
        <li>Always test cleaning products in an inconspicuous area first</li>
      </ul>

      <h2>Touch-Up Techniques</h2>
      <p>Small touch-ups can prevent the need for complete repainting:</p>
      <ul>
        <li>Keep leftover paint properly stored for future use</li>
        <li>Clean the area before touching up</li>
        <li>Use the same application method as the original</li>
        <li>Feather the edges to blend seamlessly</li>
      </ul>

      <h2>Exterior Maintenance</h2>
      <p>Exterior surfaces need special attention:</p>
      <ul>
        <li>Inspect annually for signs of wear</li>
        <li>Clean gutters to prevent water damage</li>
        <li>Trim vegetation away from painted surfaces</li>
        <li>Address any moisture issues immediately</li>
      </ul>
    `,
    image: "/images/4.jpg",
    date: "2024-12-28",
    category: "Maintenance",
    slug: "maintenance-tips-keep-paint-looking-fresh",
    readTime: "4 min read",
    author: "Prisma Coatings Team"
  },
  {
    id: 5,
    title: "Commercial Painting: What Businesses Need to Know",
    excerpt: "Key considerations for commercial painting projects, including timeline planning, minimal disruption strategies, and professional standards.",
    content: `
      <p>Commercial painting projects require careful planning and execution to minimize business disruption while achieving professional results. Here's what every business owner should know.</p>

      <h2>Project Planning</h2>
      <p>Successful commercial painting starts with thorough planning:</p>
      <ul>
        <li>Schedule during off-peak business hours</li>
        <li>Plan for weather delays and contingencies</li>
        <li>Coordinate with other trades and maintenance</li>
        <li>Ensure adequate ventilation and safety measures</li>
      </ul>

      <h2>Professional Standards</h2>
      <p>Commercial spaces require higher standards of finish and durability:</p>
      <ul>
        <li>Use commercial-grade paints and materials</li>
        <li>Follow building codes and safety regulations</li>
        <li>Ensure proper surface preparation</li>
        <li>Implement quality control measures</li>
      </ul>

      <h2>Minimizing Disruption</h2>
      <p>Keep your business running smoothly during painting:</p>
      <ul>
        <li>Work in sections to maintain operations</li>
        <li>Use low-odor, fast-drying paints</li>
        <li>Protect furniture and equipment</li>
        <li>Communicate clearly with staff and customers</li>
      </ul>
    `,
    image: "/images/5.jpg",
    date: "2024-12-20",
    category: "Commercial",
    slug: "commercial-painting-what-businesses-need-know",
    readTime: "8 min read",
    author: "Prisma Coatings Team"
  },
  {
    id: 6,
    title: "The Benefits of Professional vs DIY Painting",
    excerpt: "Compare the pros and cons of hiring professionals versus DIY painting. Understand when it's worth investing in expert services.",
    content: `
      <p>When it comes to painting your home, you have two main options: tackle it yourself or hire professionals. Each approach has its merits, and the best choice depends on various factors.</p>

      <h2>DIY Painting Advantages</h2>
      <p>DIY painting can be rewarding and cost-effective:</p>
      <ul>
        <li>Lower upfront costs (labor savings)</li>
        <li>Complete control over timeline</li>
        <li>Personal satisfaction of completing the project</li>
        <li>Ability to work at your own pace</li>
      </ul>

      <h2>Professional Painting Benefits</h2>
      <p>Professional services offer significant advantages:</p>
      <ul>
        <li>Expert surface preparation and technique</li>
        <li>Access to quality materials and tools</li>
        <li>Warranty on workmanship</li>
        <li>Time savings and convenience</li>
        <li>Professional finish and attention to detail</li>
      </ul>

      <h2>When to Choose Professional Services</h2>
      <p>Consider hiring professionals when:</p>
      <ul>
        <li>Painting exterior surfaces or high areas</li>
        <li>Dealing with lead paint or asbestos</li>
        <li>Working with specialized finishes or techniques</li>
        <li>Time constraints or physical limitations</li>
        <li>Wanting a warranty and guaranteed results</li>
      </ul>

      <h2>Making the Right Choice</h2>
      <p>Consider your budget, timeline, skill level, and the complexity of the project. For most homeowners, professional services provide better value in terms of quality, durability, and peace of mind.</p>
    `,
    image: "/images/6.jpg",
    date: "2024-12-15",
    category: "Professional Services",
    slug: "benefits-professional-vs-diy-painting",
    readTime: "6 min read",
    author: "Prisma Coatings Team"
  }
]

export const categories = ["All", "Color Trends", "Painting Tips", "Interior Design", "Maintenance", "Commercial", "Professional Services"]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getRelatedPosts = (currentPostId: number, category: string, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit)
}

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return blogPosts
  return blogPosts.filter(post => post.category === category)
}
