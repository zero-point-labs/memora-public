"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Tag, Search, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    slug: "hidden-gems-cyprus-students",
    title: "10 Hidden Gems in Cyprus Every Student Should Visit",
    excerpt: "Discover the secret spots that locals love but tourists rarely find. From hidden beaches to mountain villages, these places will make your Cyprus adventure unforgettable.",
    author: "Maria Constantinou",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Travel Tips",
    image: "/blog-hidden-gems.jpg",
    featured: true
  },
  {
    id: 2,
    slug: "budget-friendly-cyprus-guide",
    title: "Budget-Friendly Cyprus: How to Experience More for Less",
    excerpt: "Cyprus doesn't have to break the bank. Learn insider tips on how to enjoy amazing experiences while keeping your student budget intact.",
    author: "Alex Petrou",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Budget Travel",
    image: "/blog-budget-tips.jpg",
    featured: false
  },
  {
    id: 3,
    slug: "cyprus-food-guide-adventurous-eaters",
    title: "The Ultimate Cyprus Food Guide for Adventurous Eaters",
    excerpt: "From traditional meze to modern fusion, explore the incredible culinary landscape of Cyprus and discover dishes you never knew existed.",
    author: "Sophia Andreou",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Food & Culture",
    image: "/blog-food-guide.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Paphos Trip Report: 3 Days of Pure Adventure",
    excerpt: "Join us as we recap our latest Paphos adventure. From ancient ruins to beach parties, here's everything that made this trip unforgettable.",
    author: "David Loizou",
    date: "February 15, 2024",
    readTime: "4 min read",
    category: "Trip Reports",
    image: "/blog-paphos-report.jpg",
    featured: false
  },
  {
    id: 5,
    title: "Cyprus Nightlife: Where Students Go to Party",
    excerpt: "The complete guide to Cyprus nightlife scene. Discover the best clubs, bars, and beach parties that cater to the student crowd.",
    author: "Elena Georgiou",
    date: "February 10, 2024",
    readTime: "5 min read",
    category: "Nightlife",
    image: "/blog-nightlife.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Making Friends While Traveling: A Student's Guide",
    excerpt: "Traveling solo or with a small group? Learn how to connect with fellow travelers and locals to make your Cyprus experience even more memorable.",
    author: "Chris Pavlou",
    date: "February 5, 2024",
    readTime: "6 min read",
    category: "Travel Tips",
    image: "/blog-making-friends.jpg",
    featured: false
  }
]

const categories = ["All", "Travel Tips", "Trip Reports", "Food & Culture", "Budget Travel", "Nightlife"]

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Tag className="h-5 w-5 text-orange-600" />
            <span className="text-orange-600 font-medium">Travel Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cyprus Travel Stories & Tips
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired by travel stories, discover hidden gems, and learn insider tips for your next Cyprus adventure.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-orange-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Featured Image */}
                  <div className="relative h-64 bg-gradient-to-br from-orange-400 to-orange-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-white line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug || post.id}`}
                      className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-500">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.slug || post.id}`}
                      className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 lg:p-12 text-center text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Never Miss an Adventure Story
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest travel tips, trip reports, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-orange-600 font-medium px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
