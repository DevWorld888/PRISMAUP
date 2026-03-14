"use client";

import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '../utils/blogData';

interface LatestBlogCardProps {
  post: BlogPost;
}

const LatestBlogCard = ({ post }: LatestBlogCardProps) => (
  <article className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <Link
      href={`/blog/${post.slug}`}
      className="block"
      aria-label={`Read article: ${post.title}`}
    >
      <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="bg-red-50 text-[#D61C1C] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {post.category}
          </span>
          <span className="font-medium">{post.readTime}</span>
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#D61C1C] transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <time 
            className="text-sm text-gray-500 font-medium" 
            dateTime={post.date}
          >
            {new Date(post.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="inline-flex items-center text-[#D61C1C] font-semibold text-sm group-hover:text-[#B91C1C] transition-colors duration-200">
            Read Article
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  </article>
);

const Blog = () => {
  // Get the latest 3 blog posts sorted by date (most recent first)
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="blog-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-[#D61C1C] rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </div>
          <h2 
            id="blog-section-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
          >
            Latest from Our{' '}
            <span className="text-[#D61C1C] relative">
              Blog
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-200" viewBox="0 0 100 12" fill="currentColor">
                <path d="M2,9c20-2,40-2,96,0" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with expert painting tips, project showcases, color trends, and professional insights 
            from Sydney&apos;s premier painting specialists.
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <LatestBlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full">
              <div className="text-center py-16 lg:py-24">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We&apos;re working on exciting new content. Check back soon for the latest painting tips and project showcases.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {latestPosts.length > 0 && (
          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-[#D61C1C] hover:bg-[#B91C1C] text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              View All Articles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
