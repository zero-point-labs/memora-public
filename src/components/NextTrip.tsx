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
  "Transportation included",
  "Group activities & games"
]

export default function NextTrip() {
  return (
    <section id="next-trip" className="py-16 lg:py-24 bg-gradient-to-br from-light-blue/5 via-white to-light-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-full px-4 py-2 mb-4 border border-primary-blue/20">
            <Calendar className="h-5 w-5 text-primary-blue" />
            <span className="text-primary-blue font-medium">Next Adventure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paphos Coastal Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for an unforgettable 3-day journey through Paphos, where ancient history meets stunning beaches and vibrant nightlife.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 lg:mb-12"
        >
          <div className="relative bg-gradient-to-br from-primary-blue via-primary-cyan to-primary-purple rounded-2xl p-8 overflow-hidden h-80 sm:h-96 flex flex-col justify-center items-center shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center text-white">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-2">Paphos Trip Highlights</h3>
              <p className="text-sm opacity-90">A glimpse of what awaits you</p>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Trip details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex"
          >
            {/* Trip info card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-primary-blue/10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">March 15-17, 2024</h3>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4 text-primary-blue" />
                      <span>Paphos, Cyprus</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-primary-purple" />
                      <span>25 spots left</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-primary-blue to-primary-cyan bg-clip-text">€150</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
              </div>

              {/* Activities */}
              <div className="grid grid-cols-2 gap-4 flex-grow mb-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`${
                      index === 0 ? 'bg-gradient-to-br from-primary-blue/5 to-primary-cyan/10' :
                      index === 1 ? 'bg-gradient-to-br from-primary-purple/5 to-primary-pink/10' :
                      index === 2 ? 'bg-gradient-to-br from-primary-orange/5 to-primary-red/10' :
                      'bg-gradient-to-br from-primary-green/5 to-primary-teal/10'
                    } rounded-xl p-4 text-center border ${
                      index === 0 ? 'border-primary-blue/20' :
                      index === 1 ? 'border-primary-purple/20' :
                      index === 2 ? 'border-primary-orange/20' :
                      'border-primary-green/20'
                    } flex flex-col justify-center`}
                  >
                    <activity.icon className={`h-6 w-6 mx-auto mb-2 ${
                      index === 0 ? 'text-primary-blue' :
                      index === 1 ? 'text-primary-purple' :
                      index === 2 ? 'text-primary-orange' :
                      'text-primary-green'
                    }`} />
                    <h4 className="font-medium text-gray-900 mb-1">{activity.name}</h4>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="w-full bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-purple text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-primary-blue/25 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                <span>Reserve Your Spot</span>
              </Link>
            </div>
          </motion.div>

          {/* Right side - What's included */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            {/* What's included */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-primary-blue/10 flex-1">
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
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index % 4 === 0 ? 'bg-gradient-to-br from-primary-blue/10 to-primary-cyan/20' :
                      index % 4 === 1 ? 'bg-gradient-to-br from-primary-purple/10 to-primary-pink/20' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-primary-orange/10 to-primary-red/20' :
                      'bg-gradient-to-br from-primary-green/10 to-primary-teal/20'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        index % 4 === 0 ? 'bg-primary-blue' :
                        index % 4 === 1 ? 'bg-primary-purple' :
                        index % 4 === 2 ? 'bg-primary-orange' :
                        'bg-primary-green'
                      }`}></div>
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Urgency indicator */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary-blue/5 via-primary-cyan/5 to-primary-purple/5 rounded-xl border border-primary-blue/20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                  <span className="text-primary-blue font-medium">Limited Spots Available</span>
                </div>
                <p className="text-sm text-gray-600">
                  Only 25 spots remaining for this amazing adventure. Book now to secure your place!
                </p>
              </div>

              {/* Additional highlight section */}
              <div className="mt-6 p-6 bg-gradient-to-br from-primary-orange/10 to-primary-pink/10 rounded-xl border border-primary-orange/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-primary-pink rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Special Location Access</h4>
                    <p className="text-sm text-gray-600">Exclusive spots not on typical tours</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                    <span className="text-gray-700">Hidden beaches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-pink rounded-full"></div>
                    <span className="text-gray-700">Local hotspots</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                    <span className="text-gray-700">Photo opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-purple rounded-full"></div>
                    <span className="text-gray-700">Cultural sites</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 