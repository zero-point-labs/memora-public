"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, MapPin, Heart, Download, Share2 } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    category: "Beaches",
    title: "Nissi Beach Paradise",
    location: "Ayia Napa",
    likes: 245,
    image: "/gallery/beach1.jpg",
    description: "Crystal clear waters and white sand - the perfect beach day!"
  },
  {
    id: 2,
    category: "Nightlife",
    title: "Rooftop Party Vibes",
    location: "Limassol",
    likes: 189,
    image: "/gallery/nightlife1.jpg",
    description: "Dancing under the stars with the best views in Cyprus"
  },
  {
    id: 3,
    category: "Culture",
    title: "Ancient Amphitheatre",
    location: "Paphos",
    likes: 156,
    image: "/gallery/culture1.jpg",
    description: "Stepping back in time at this incredible historical site"
  },
  {
    id: 4,
    category: "Food",
    title: "Traditional Meze Feast",
    location: "Nicosia",
    likes: 203,
    image: "/gallery/food1.jpg",
    description: "Authentic Cypriot flavors that will blow your mind"
  },
  {
    id: 5,
    category: "Adventure",
    title: "Cliff Jumping Thrills",
    location: "Cape Greco",
    likes: 278,
    image: "/gallery/adventure1.jpg",
    description: "Adrenaline rush with the most amazing views"
  },
  {
    id: 6,
    category: "Beaches",
    title: "Hidden Cove Discovery",
    location: "Protaras",
    likes: 167,
    image: "/gallery/beach2.jpg",
    description: "Our secret spot that only locals know about"
  },
  {
    id: 7,
    category: "Nightlife",
    title: "Beach Club Sunset",
    location: "Ayia Napa",
    likes: 234,
    image: "/gallery/nightlife2.jpg",
    description: "Golden hour vibes at the hottest beach club"
  },
  {
    id: 8,
    category: "Culture",
    title: "Monastery Serenity",
    location: "Troodos",
    likes: 98,
    image: "/gallery/culture2.jpg",
    description: "Peaceful moments in the mountains"
  },
  {
    id: 9,
    category: "Adventure",
    title: "Jeep Safari Adventure",
    location: "Akamas Peninsula",
    likes: 312,
    image: "/gallery/adventure2.jpg",
    description: "Off-road excitement through Cyprus wilderness"
  }
]

const categories = ["All", "Beaches", "Nightlife", "Culture", "Food", "Adventure"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green/20 rounded-full px-4 py-2 mb-4">
            <Camera className="h-5 w-5 text-green" />
            <span className="text-green font-medium">Photo Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Memories From Our Adventures
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
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-green text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green/10 hover:text-green shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative bg-green rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Image placeholder */}
                <div className="aspect-square bg-green relative overflow-hidden">
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
                        <Camera className="h-8 w-8 mx-auto mb-2" />
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
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{item.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-white/80">
                      <Heart className="h-3 w-3" />
                      <span className="text-xs">{item.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-green text-white px-8 py-3 rounded-full font-medium hover:bg-green/90 transition-colors">
            Load More Photos
          </button>
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
              <div className="aspect-video bg-green flex items-center justify-center">
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
                      <MapPin className="h-4 w-4" />
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
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green transition-colors">
                      <Heart className="h-5 w-5" />
                      <span className="font-medium">{selectedImage.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span className="font-medium">Share</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 bg-green text-white px-4 py-2 rounded-full font-medium hover:bg-green/90 transition-colors">
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