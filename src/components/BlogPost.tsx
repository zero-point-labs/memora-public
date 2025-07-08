"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, Heart, BookOpen } from 'lucide-react'
import Link from 'next/link'

interface BlogPostData {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorBio: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

interface BlogPostProps {
  post: BlogPostData
}

export default function BlogPost({ post }: BlogPostProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
              <Tag className="h-5 w-5 text-orange-600" />
              <span className="text-orange-600 font-medium">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-xl hover:bg-orange-200 transition-colors"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors">
                <Heart className="h-5 w-5" />
                <span>Save</span>
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 md:h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl overflow-hidden mb-12"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Featured Image Placeholder</p>
                <p className="text-sm opacity-75">Add your blog post image here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-orange-100"
          >
            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/^# /gm, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">')
                    .replace(/^## /gm, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">')
                    .replace(/^### /gm, '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
                    .replace(/\n\n/g, '</p><p class="text-gray-700 mb-4 leading-relaxed">')
                    .replace(/^(?!<[h|p])/gm, '<p class="text-gray-700 mb-4 leading-relaxed">')
                    .replace(/(?<!>)$/gm, '</p>')
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Placeholder for related articles */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-4"></div>
                <h3 className="font-bold text-gray-900 mb-2">Related Article 1</h3>
                <p className="text-gray-600 text-sm mb-3">Brief description of related article...</p>
                <Link href="/blog" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-4"></div>
                <h3 className="font-bold text-gray-900 mb-2">Related Article 2</h3>
                <p className="text-gray-600 text-sm mb-3">Brief description of related article...</p>
                <Link href="/blog" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready for Your Cyprus Adventure?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Turn your travel dreams into reality. Join our next Cyprus adventure and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/trips"
                className="bg-white text-orange-600 font-medium py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                View Our Trips
              </Link>
              <Link
                href="/contact"
                className="bg-orange-600 text-white font-medium py-4 px-8 rounded-xl hover:bg-orange-700 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
