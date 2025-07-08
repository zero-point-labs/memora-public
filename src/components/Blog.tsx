"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Eye } from 'lucide-react'
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
    <section id="blog" className="py-16 lg:py-24 bg-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple/20 rounded-full px-4 py-2 mb-4">
            <Calendar className="h-5 w-5 text-purple" />
            <span className="text-purple font-medium">Travel Blog</span>
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
                  ? 'bg-purple text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-purple/10 hover:text-purple'
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
            <div className="bg-purple rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-purple/80">{featuredPost.category}</span>
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
                  className="inline-flex items-center space-x-2 bg-white text-purple px-6 py-3 rounded-full font-medium hover:bg-purple/5 transition-colors"
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple/20 transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 h-14 group-hover:text-purple transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-4 h-20 overflow-hidden">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-purple text-white rounded-full font-medium shadow-xl hover:shadow-2xl transition-all"
          >
            <span>View All Posts</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
