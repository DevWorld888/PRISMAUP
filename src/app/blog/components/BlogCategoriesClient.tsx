'use client';

import React, { useState } from 'react';
import { blogPosts, categories, type BlogPost } from '../../utils/blogData';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => (
  <article className="blog-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48 w-full">
      <img
        src={post.image}
        alt={post.title}
        className="object-cover w-full h-full"
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
        <a 
          href={`/blog/${post.slug}`} 
          className="hover:text-[#13233A] transition-colors duration-200"
        >
          {post.title}
        </a>
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
        <a 
          href={`/blog/${post.slug}`}
          className="text-[#D61C1C] hover:text-[#EF4444] font-medium text-sm transition-colors duration-200"
        >
          Read More →
        </a>
      </div>
    </div>
  </article>
);

export default function BlogCategoriesClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                selectedCategory === category
                  ? "bg-[#D61C1C] text-white border-[#D61C1C]"
                  : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-12">No posts found for this category.</div>
        )}
      </div>
    </>
  );
}
