"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogPosts,  type BlogPost } from "../../utils/blogData";
import Link from 'next/link';


interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => (
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

export default function BlogCategoriesClient() {
  
  return (
    <>
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => <BlogCard key={post.id} post={post} />)
          
        ) : (
          <div className="col-span-full text-center text-gray-500 py-12">
            No posts found for this category.
          </div>
        )}
      </div>
    </>
  );
}
