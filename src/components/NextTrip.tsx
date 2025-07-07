"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, Clock, Utensils, Camera, Music } from 'lucide-react'
import Link from 'next/link'

const activities = [
  { icon: Camera, name: "Beach Photography", description: "Capture stunning sunset moments" },
  { icon: Utensils, name: "Local Cuisine", description: "Traditional Cyprus food tour" },
  { icon: Music, name: "Nightlife", description: "Experience the best clubs" },
  { icon: MapPin, name: "Ancient Ruins", description: "Explore historical sites" }
]

const highlights = [
  "Luxury beachfront accommodation",
  "All meals and drinks included",
  "Professional tour guide",
  "Transportation included",
  "24/7 support team",
  "Group activities & games"
]

export default function NextTrip() {
  return (
    <section id="next-trip" className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
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
            <span className="text-orange-600 font-medium">Next Adventure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paphos Coastal Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for an unforgettable 3-day journey through Paphos, where ancient history meets stunning beaches and vibrant nightlife.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Trip details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trip info card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-orange-100 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">March 15-17, 2024</h3>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Paphos, Cyprus</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>25 spots left</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600">€150</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9 from previous trips</span>
              </div>

              {/* Activities */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-orange-50 rounded-xl p-4 text-center"
                  >
                    <activity.icon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-900 mb-1">{activity.name}</h4>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Reserve Your Spot</span>
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100">
                <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100">
                <Users className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Max Group</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100">
                <Star className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - What's included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Image placeholder */}
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-8 mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Photo Placeholder</h3>
                <p className="text-sm opacity-90">Add your Paphos trip photos here</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
            </div>

            {/* What's included */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Urgency indicator */}
              <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-700 font-medium">Limited Spots Available</span>
                </div>
                <p className="text-sm text-orange-600">
                  Only 25 spots remaining for this amazing adventure. Book now to secure your place!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 