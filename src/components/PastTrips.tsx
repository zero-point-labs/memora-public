"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, Star, Heart, Camera, Quote } from 'lucide-react'

const pastTrips = [
  {
    id: 1,
    title: "Limassol Beach Getaway",
    location: "Limassol, Cyprus",
    date: "February 10-12, 2024",
    participants: 15,
    rating: 4.9,
    image: "/limassol-past.jpg",
    testimonial: "Best weekend ever! The beach parties were incredible and we made lifelong friends.",
    author: "Sarah M.",
    highlights: ["Beach volleyball tournament", "Sunset yacht party", "Traditional taverna dinner", "Water sports activities"]
  },
  {
    id: 2,
    title: "Nicosia Cultural Tour",
    location: "Nicosia, Cyprus",
    date: "January 20-22, 2024",
    participants: 12,
    rating: 4.8,
    image: "/nicosia-past.jpg",
    testimonial: "Amazing cultural experience! Learned so much about Cyprus history and culture.",
    author: "Alex K.",
    highlights: ["Old town walking tour", "Traditional craft workshops", "Local music performances", "Historical museum visits"]
  },
  {
    id: 3,
    title: "Larnaca Adventure",
    location: "Larnaca, Cyprus",
    date: "December 15-17, 2023",
    participants: 18,
    rating: 4.7,
    image: "/larnaca-past.jpg",
    testimonial: "Perfect mix of relaxation and adventure. The salt lake flamingos were breathtaking!",
    author: "Maria P.",
    highlights: ["Flamingo watching", "Scuba diving lessons", "Beach camping", "Local food festival"]
  },
  {
    id: 4,
    title: "Kyrenia Mountain Trek",
    location: "Kyrenia, Cyprus",
    date: "November 25-27, 2023",
    participants: 10,
    rating: 4.9,
    image: "/kyrenia-past.jpg",
    testimonial: "Challenging but rewarding! The mountain views were absolutely stunning.",
    author: "David L.",
    highlights: ["Mountain hiking", "Castle exploration", "Traditional village visit", "Stargazing session"]
  },
  {
    id: 5,
    title: "Famagusta History Tour",
    location: "Famagusta, Cyprus",
    date: "October 14-16, 2023",
    participants: 14,
    rating: 4.8,
    image: "/famagusta-past.jpg",
    testimonial: "Incredible historical journey! The ancient ruins were mind-blowing.",
    author: "Emma R.",
    highlights: ["Ancient ruins exploration", "Archaeological workshops", "Traditional pottery class", "Ghost town tour"]
  },
  {
    id: 6,
    title: "Protaras Beach Festival",
    location: "Protaras, Cyprus",
    date: "September 22-24, 2023",
    participants: 20,
    rating: 4.9,
    image: "/protaras-past.jpg",
    testimonial: "Epic beach festival! Non-stop fun with amazing people and great music.",
    author: "Jake T.",
    highlights: ["Beach music festival", "Water sports competition", "Beach volleyball", "Bonfire parties"]
  }
]

export default function PastTrips() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Past Adventures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Amazing Memories Created
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our previous adventurers experienced and read their stories from unforgettable Cyprus trips.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-gray-600">Trips Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Past Trips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastTrips.map((trip, index) => (
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
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{trip.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{trip.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{trip.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{trip.participants}</span>
                    </div>
                  </div>
                </div>
                {/* Photo placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-white/50" />
                </div>
              </div>

              {/* Trip Details */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{trip.date}</span>
                </div>

                {/* Testimonial */}
                <div className="mb-4">
                  <Quote className="h-5 w-5 text-primary mb-2" />
                  <p className="text-gray-700 text-sm italic mb-2">"{trip.testimonial}"</p>
                  <p className="text-primary font-medium text-sm">- {trip.author}</p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">Trip Highlights:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {trip.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Own Memories?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Join our next adventure and experience the magic of Cyprus for yourself.
          </p>
          <a
            href="/trips"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white font-medium py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
          >
            Explore Upcoming Trips
          </a>
        </motion.div>
      </div>
    </section>
  )
}
