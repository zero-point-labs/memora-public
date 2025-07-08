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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/trips"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors mb-8"
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
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Trip Details</span>
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

              <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-lg border border-primary/10 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary">€{trip.price}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-primary to-accent text-white font-medium py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
                  >
                    Book Now
                  </Link>
                  <button className="bg-primary/10 text-primary font-medium py-3 px-6 rounded-xl hover:bg-primary/20 transition-all duration-200">
                    Ask Questions
                  </button>
                </div>
              </div>

              {/* Urgency indicator */}
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium">Limited Spots Available</span>
                </div>
                <p className="text-sm text-primary/80">
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
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-primary to-accent rounded-2xl overflow-hidden">
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
                          ? 'border-primary'
                          : 'border-gray-200 hover:border-primary/50'
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

      {/* Tabs and Content Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-12">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose max-w-none prose-lg text-gray-600"
              >
                <p>{trip.longDescription}</p>
              </motion.div>
            )}
            
            {activeTab === 'itinerary' && (
              <motion.div
                key="itinerary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-12">
                  {trip.itinerary.map((day) => (
                    <div key={day.day} className="flex space-x-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {day.day}
                        </div>
                        <div className="w-px h-full bg-gray-200"></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Day {day.day}: {day.title}</h3>
                        <ul className="space-y-2">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <Check className="h-5 w-5 text-green-500" />
                              <span className="text-gray-600">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'included' && (
              <motion.div
                key="included"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
                  <ul className="space-y-2">
                    {trip.included.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Not Included</h3>
                  <ul className="space-y-2">
                    {trip.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for This Adventure?
            </h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Don't miss out on this incredible experience. Book your spot now and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary font-medium py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg"
              >
                Book This Trip - €{trip.price}
              </Link>
              <Link
                href="/trips"
                className="bg-primary text-white font-medium py-4 px-8 rounded-xl hover:bg-primary/80 transition-all duration-200"
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
