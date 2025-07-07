"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, Clock, Check, X, ChevronLeft, ChevronRight, Camera, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Trip {
  id: number
  title: string
  location: string
  date: string
  price: number
  spotsLeft: number
  rating: number
  description: string
  longDescription: string
  itinerary: {
    day: number
    title: string
    activities: string[]
  }[]
  included: string[]
  notIncluded: string[]
  images: string[]
}

interface TripDetailsProps {
  trip: Trip
}

export default function TripDetails({ trip }: TripDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % trip.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + trip.images.length) % trip.images.length)
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'included', label: 'What\'s Included' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/trips"
          className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Trips</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Trip Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="text-orange-600 font-medium">Trip Details</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {trip.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{trip.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{trip.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{trip.spotsLeft} spots left</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">{trip.rating} rating</span>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {trip.description}
              </p>

              <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-lg border border-orange-100 mb-8">
                <div>
                  <div className="text-3xl font-bold text-orange-600">€{trip.price}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                  >
                    Book Now
                  </Link>
                  <button className="bg-orange-100 text-orange-600 font-medium py-3 px-6 rounded-xl hover:bg-orange-200 transition-all duration-200">
                    Ask Questions
                  </button>
                </div>
              </div>

              {/* Urgency indicator */}
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-700 font-medium">Limited Spots Available</span>
                </div>
                <p className="text-sm text-orange-600">
                  Only {trip.spotsLeft} spots remaining for this amazing adventure. Book now to secure your place!
                </p>
              </div>
            </motion.div>

            {/* Right side - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Navigation buttons */}
                {trip.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {trip.images.length}
                </div>

                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-white/50" />
                </div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Photo Gallery</h3>
                  <p className="text-sm opacity-90">Swipe to see more photos</p>
                </div>
              </div>

              {/* Image thumbnails */}
              {trip.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {trip.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index
                          ? 'border-orange-500'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <Camera className="h-6 w-6 text-gray-600" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-orange-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'overview' && (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">About This Trip</h3>
                  <div className="prose prose-lg max-w-none">
                    {trip.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'itinerary' && (
              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {trip.itinerary.map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100"
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Day {day.day}</h3>
                          <p className="text-orange-600 font-medium">{day.title}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-3">
                            <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'included' && (
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* What's Included */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                      <Check className="h-6 w-6 text-green-500" />
                      <span>What's Included</span>
                    </h3>
                    <div className="space-y-3">
                      {trip.included.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Not Included */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                      <X className="h-6 w-6 text-red-500" />
                      <span>Not Included</span>
                    </h3>
                    <div className="space-y-3">
                      {trip.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
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
              Ready for This Adventure?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible experience. Book your spot now and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 font-medium py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Book This Trip - €{trip.price}
              </Link>
              <Link
                href="/trips"
                className="bg-orange-600 text-white font-medium py-4 px-8 rounded-xl hover:bg-orange-700 transition-all duration-200"
              >
                View Other Trips
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
