"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, Clock, Utensils, Camera, Music, Filter } from 'lucide-react'
import Link from 'next/link'

const upcomingTrips = [
  {
    id: 1,
    title: "Paphos Coastal Adventure",
    location: "Paphos, Cyprus",
    date: "March 15-17, 2024",
    price: 150,
    spotsLeft: 25,
    rating: 4.9,
    image: "/paphos-trip.jpg",
    activities: [
      { icon: Camera, name: "Beach Photography", description: "Capture stunning sunset moments" },
      { icon: Utensils, name: "Local Cuisine", description: "Traditional Cyprus food tour" },
      { icon: Music, name: "Nightlife", description: "Experience the best clubs" },
      { icon: MapPin, name: "Ancient Ruins", description: "Explore historical sites" }
    ],
    highlights: [
      "Luxury beachfront accommodation",
      "All meals and drinks included",
      "Professional tour guide",
      "Transportation included",
      "24/7 support team",
      "Group activities & games"
    ]
  },
  {
    id: 2,
    title: "Troodos Mountain Escape",
    location: "Troodos, Cyprus",
    date: "April 5-7, 2024",
    price: 135,
    spotsLeft: 18,
    rating: 4.8,
    image: "/troodos-trip.jpg",
    activities: [
      { icon: Camera, name: "Mountain Hiking", description: "Scenic trails and waterfalls" },
      { icon: Utensils, name: "Wine Tasting", description: "Local vineyard experiences" },
      { icon: Music, name: "Traditional Music", description: "Folk performances" },
      { icon: MapPin, name: "Byzantine Churches", description: "UNESCO World Heritage sites" }
    ],
    highlights: [
      "Mountain lodge accommodation",
      "All meals included",
      "Hiking equipment provided",
      "Wine tasting sessions",
      "Cultural experiences",
      "Small group setting"
    ]
  },
  {
    id: 3,
    title: "Ayia Napa Beach Party",
    location: "Ayia Napa, Cyprus",
    date: "May 10-12, 2024",
    price: 180,
    spotsLeft: 8,
    rating: 4.9,
    image: "/ayia-napa-trip.jpg",
    activities: [
      { icon: Camera, name: "Beach Activities", description: "Water sports and games" },
      { icon: Utensils, name: "Seafood Dining", description: "Fresh Mediterranean cuisine" },
      { icon: Music, name: "Club Scene", description: "Famous nightlife spots" },
      { icon: MapPin, name: "Sea Caves", description: "Natural wonder exploration" }
    ],
    highlights: [
      "Beachfront hotel",
      "Pool parties included",
      "VIP club access",
      "Water sports equipment",
      "Professional photography",
      "Late checkout"
    ]
  }
]

export default function UpcomingTrips() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Upcoming Adventures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Next Cyprus Adventure Awaits
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated 3-day trips across Cyprus. Each adventure is designed for college students seeking unforgettable experiences.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-primary/10">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-primary" />
              <span className="text-gray-700 font-medium">Filter by:</span>
              <select className="bg-transparent border-none text-gray-700 focus:outline-none">
                <option>All Locations</option>
                <option>Paphos</option>
                <option>Troodos</option>
                <option>Ayia Napa</option>
              </select>
              <select className="bg-transparent border-none text-gray-700 focus:outline-none">
                <option>All Prices</option>
                <option>Under €150</option>
                <option>€150-€200</option>
                <option>Over €200</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Trips Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {upcomingTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300"
            >
              {/* Trip Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-primary">{trip.spotsLeft} spots left</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{trip.title}</h3>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{trip.location}</span>
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="p-6">
                {/* Date and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{trip.date}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">€{trip.price}</div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{trip.rating} rating</span>
                </div>

                {/* Activities Preview */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {trip.activities.slice(0, 4).map((activity, actIndex) => (
                    <div key={actIndex} className="bg-primary/5 rounded-lg p-3 text-center">
                      <activity.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                      <span className="text-xs font-medium text-gray-700">{activity.name}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href={`/trips/${trip.id}`}
                    className="w-full bg-primary/10 text-primary font-medium py-3 px-6 rounded-xl hover:bg-primary/20 transition-all duration-200 flex items-center justify-center"
                  >
                    View Details
                  </Link>
                  <Link
                    href="#contact"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 flex items-center justify-center"
                  >
                    Reserve Spot
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-white text-primary font-medium py-3 px-8 rounded-xl border-2 border-primary/20 hover:bg-primary/5 transition-all duration-200">
            Load More Trips
          </button>
        </motion.div>
      </div>
    </section>
  )
}
