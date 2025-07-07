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
    <section id="gallery" className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Camera className="h-5 w-5 text-orange-600" />
            <span className="text-orange-600 font-medium">Photo Gallery</span>
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
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600 shadow-sm'
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
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Image placeholder */}
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-orange-500 relative overflow-hidden">
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
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Load More Photos
          </button>
        </motion.div>

        {/* Photo Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Image */}
                <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Camera className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                        <p className="text-lg opacity-90">{selectedImage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo info */}
                <div className="bg-white rounded-b-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedImage.title}</h3>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedImage.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Heart className="h-4 w-4" />
                        <span>{selectedImage.likes}</span>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-orange-600 hover:text-orange-700 transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 