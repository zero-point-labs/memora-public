"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, MapPin, Heart, Download, Share2, Eye, Grid3X3, Filter } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    category: "Beaches",
    title: "Nissi Beach Paradise",
    location: "Ayia Napa",
    likes: 245,
    image: "/gallery/beach1.jpg",
    description: "Crystal clear waters and white sand - the perfect beach day!",
    gradient: "from-primary-green to-primary-teal"
  },
  {
    id: 2,
    category: "Nightlife",
    title: "Rooftop Party Vibes",
    location: "Limassol",
    likes: 189,
    image: "/gallery/nightlife1.jpg",
    description: "Dancing under the stars with the best views in Cyprus",
    gradient: "from-primary-purple to-primary-green"
  },
  {
    id: 3,
    category: "Culture",
    title: "Ancient Amphitheatre",
    location: "Paphos",
    likes: 156,
    image: "/gallery/culture1.jpg",
    description: "Stepping back in time at this incredible historical site",
    gradient: "from-primary-blue to-primary-green"
  },
  {
    id: 4,
    category: "Food",
    title: "Traditional Meze Feast",
    location: "Nicosia",
    likes: 203,
    image: "/gallery/food1.jpg",
    description: "Authentic Cypriot flavors that will blow your mind",
    gradient: "from-primary-orange to-primary-green"
  }
]

const categories = [
  { name: "All", gradient: "from-primary-green to-primary-teal", icon: Grid3X3 },
  { name: "Beaches", gradient: "from-primary-cyan to-primary-green", icon: Camera },
  { name: "Nightlife", gradient: "from-primary-purple to-primary-green", icon: Heart },
  { name: "Culture", gradient: "from-primary-blue to-primary-green", icon: Eye },
  { name: "Food", gradient: "from-primary-orange to-primary-green", icon: MapPin },
  { name: "Adventure", gradient: "from-primary-red to-primary-green", icon: Filter }
]

const stats = [
  { number: "500+", label: "Photos Shared", gradient: "from-primary-green to-primary-teal", icon: Camera },
  { number: "10K+", label: "Total Likes", gradient: "from-primary-cyan to-primary-green", icon: Heart },
  { number: "50+", label: "Destinations", gradient: "from-primary-blue to-primary-green", icon: MapPin },
  { number: "100%", label: "Memories Made", gradient: "from-primary-purple to-primary-green", icon: Eye }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-br from-light-green/5 via-white to-light-teal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-green/10 to-primary-teal/10 rounded-full px-4 py-2 mb-4 border border-primary-green/20">
            <Camera className="h-5 w-5 text-primary-green" />
            <span className="text-primary-green font-medium">Photo Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Memories From Our
            <span className="block text-transparent bg-gradient-to-r from-primary-green via-primary-teal to-primary-cyan bg-clip-text">
              Adventures
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what amazing experiences await you! Browse through photos from our previous trips and get inspired for your next adventure.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 hover:shadow-md border border-gray-200 hover:border-primary-green/30'
              }`}
            >
              <category.icon className={`h-4 w-4 ${
                selectedCategory === category.name ? 'text-white' : 'text-gray-500 group-hover:text-primary-green'
              }`} />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Image placeholder */}
                <div className={`aspect-square bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm opacity-90">Photo Placeholder</p>
                      <p className="text-xs opacity-75">{item.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Eye className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">View Photo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <div className="flex items-center space-x-1 text-white/80">
                        <MapPin className="h-3 w-3 text-primary-green" />
                        <span className="text-xs">{item.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Heart className="h-3 w-3 text-red-400" />
                      <span className="text-xs text-white">{item.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${item.gradient} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-white/20`}>
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-green via-primary-teal to-primary-cyan rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Share Your Adventure
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Tag us in your photos and become part of our gallery! Use #MemoraAdventures to share your Cyprus memories.
              </p>
              <button className="bg-white text-primary-green px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg">
                Share Your Photos
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for displaying selected image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image placeholder in modal */}
              <div className={`aspect-video bg-gradient-to-br ${selectedImage.gradient} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <Camera className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="opacity-90">{selectedImage.description}</p>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                    <div className="flex items-center space-x-2 text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 text-primary-green" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                <p className="text-gray-700 mb-6">{selectedImage.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-green transition-colors">
                      <Heart className="h-5 w-5" />
                      <span className="font-medium">{selectedImage.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-green transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span className="font-medium">Share</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-primary-green to-primary-teal text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                    <Download className="h-5 w-5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 