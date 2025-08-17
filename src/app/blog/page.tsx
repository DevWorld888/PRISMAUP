import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, categories, type BlogPost } from '../utils/blogData'
import BlogCategoriesClient from './components/BlogCategoriesClient'

export const metadata: Metadata = {
  title: 'Painting Tips & Industry Insights Blog | Prisma Coatings Sydney',
  description: 'Expert painting tips, color trends, maintenance advice, and industry insights from Sydney\'s professional painters. Get the latest updates from Prisma Coatings.',
  keywords: 'painting tips, color trends, house painting advice, painting maintenance, exterior painting tips, interior design, painting blog sydney',
  openGraph: {
    title: 'Painting Tips & Industry Insights Blog | Prisma Coatings',
    description: 'Expert painting tips, color trends, and maintenance advice from Sydney\'s professional painters.',
    url: 'https://prismacoatings.com.au/blog',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Prisma Coatings',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painting Tips & Industry Insights Blog | Prisma Coatings',
    description: 'Expert painting tips, color trends, and maintenance advice from Sydney\'s professional painters.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="blog-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48 w-full">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span className="bg-blue-100 text-[#13233A] px-2 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
        <Link 
          href={`/blog/${post.slug}`} 
          className="hover:text-[#13233A] transition-colors duration-200"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <time className="text-sm text-gray-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <Link 
          href={`/blog/${post.slug}`}
          className="text-[#D61C1C] hover:text-[#EF4444] font-medium text-sm transition-colors duration-200"
        >
          Read More →
        </Link>
      </div>
    </div>
  </article>
)

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Painting Tips & <span className="text-[#EF4444]">Industry Insights</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Expert advice, color trends, and professional tips from Sydney&apos;s trusted painting professionals. 
              Stay updated with the latest in residential and commercial painting.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogCategoriesClient />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#13233A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Painting Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest painting tips, color trends, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white border border-gray-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#13233A] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white text-sm mt-3">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Prisma Coatings Blog",
            "description": "Expert painting tips, color trends, and industry insights from Sydney's professional painters",
            "url": "https://prismacoatings.com.au/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Prisma Coatings",
              "url": "https://prismacoatings.com.au"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://prismacoatings.com.au/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Organization",
                "name": "Prisma Coatings"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Prisma Coatings"
              }
            }))
          })
        }}
      />
    </div>
  )
}

export default page
