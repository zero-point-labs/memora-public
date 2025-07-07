"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, MapPin, User, Eye } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Beaches in Cyprus Every Student Should Visit",
    excerpt: "Discover the most Instagram-worthy beaches that locals keep secret. From crystal clear waters to stunning sunsets, these spots will make your trip unforgettable.",
    image: "/blog/beaches.jpg",
    category: "Destinations",
    author: "Maria K.",
    date: "March 5, 2024",
    readTime: "5 min read",
    views: "1.2K",
    featured: true
  },
  {
    id: 2,
    title: "Nightlife Guide: Best Clubs and Bars in Ayia Napa",
    excerpt: "Your ultimate guide to partying in Cyprus&apos;s nightlife capital. From beach clubs to rooftop bars, we&apos;ve got you covered.",
    image: "/blog/nightlife.jpg",
    category: "Nightlife",
    author: "Alex M.",
    date: "March 1, 2024",
    readTime: "7 min read",
    views: "2.1K",
    featured: false
  },
  {
    id: 3,
    title: "Budget Travel Tips: How to Explore Cyprus on €50/Day",
    excerpt: "Maximize your adventure without breaking the bank. Learn insider tips for affordable food, transport, and activities across the island.",
    image: "/blog/budget.jpg",
    category: "Travel Tips",
    author: "Sophie L.",
    date: "February 28, 2024",
    readTime: "6 min read",
    views: "3.5K",
    featured: false
  },
  {
    id: 4,
    title: "Ancient Cyprus: Must-Visit Historical Sites",
    excerpt: "Step back in time and explore Cyprus&apos;s rich history. From ancient ruins to medieval castles, culture meets adventure.",
    image: "/blog/history.jpg",
    category: "Culture",
    author: "David P.",
    date: "February 25, 2024",
    readTime: "8 min read",
    views: "890",
    featured: false
  },
  {
    id: 5,
    title: "Foodie Adventures: Traditional Cypriot Dishes You Must Try",
    excerpt: "Embark on a culinary journey through Cyprus. From halloumi to souvlaki, discover flavors that will make your taste buds dance.",
    image: "/blog/food.jpg",
    category: "Food",
    author: "Elena R.",
    date: "February 22, 2024",
    readTime: "5 min read",
    views: "1.8K",
    featured: false
  },
  {
    id: 6,
    title: "Photography Guide: Best Instagram Spots in Cyprus",
    excerpt: "Capture the perfect shot with our guide to the most photogenic locations. Make your friends jealous with these stunning backdrops.",
    image: "/blog/photography.jpg",
    category: "Photography",
    author: "Chris T.",
    date: "February 20, 2024",
    readTime: "4 min read",
    views: "2.7K",
    featured: false
  }
]

const categories = ["All", "Destinations", "Nightlife", "Travel Tips", "Culture", "Food", "Photography"]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Calendar className="h-5 w-5 text-orange-600" />
            <span className="text-orange-600 font-medium">Travel Blog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Cyprus Adventures & Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired with our latest travel guides, hidden gems, and insider tips for the ultimate Cyprus experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-orange-100">{featuredPost.category}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 right-12 w-8 h-8 bg-white/10 rounded-full"></div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all"
            >
              {/* Image placeholder */}
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm opacity-90">Image Placeholder</p>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta info */}
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
                    <Eye className="h-4 w-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
                
                {/* Read more */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
} 