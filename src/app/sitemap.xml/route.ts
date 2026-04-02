interface SitemapRoute {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
  lastmod?: string;
}

export async function GET() {
  const baseUrl = 'https://www.prismacoatings.com.au';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes: SitemapRoute[] = [
    // HOME
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },

    // MAIN
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/gallery',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/projects',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },

    // 🔥 SERVICES (CLAVE SEO)
    {
      url: '/interior-painting-sydney',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/exterior-painting-sydney',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/commercial-painting-sydney',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },

    // 🚀 LOCATION PAGES
    {
      url: '/house-painters-sydney',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/painters-eastern-suburbs',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/painters-inner-west',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/painters-north-west-sydney',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/painters-sutherland-shire',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },

    // BLOG
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: currentDate
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}