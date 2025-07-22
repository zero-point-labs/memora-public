"use client"

import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote, ThumbsUp, MapPin, Calendar, User, ChevronLeft, ChevronRight, Heart, Camera, TrendingUp } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Sophia Martinez",
    location: "Madrid, Spain",
    avatar: "/avatars/sophia.jpg",
    rating: 5,
    date: "March 2024",
    trip: "Paphos Coastal Adventure",
    review: "Absolutely incredible experience! The hidden beaches were breathtaking and the group was so much fun. Maria, our guide, knew all the best spots that aren't in any tourist guide. The sunset at Coral Bay was magical!",
    images: ["/reviews/paphos1.jpg", "/reviews/paphos2.jpg"],
    likes: 24,
    verified: true,
    category: "Adventure",
    gradient: "from-primary-red to-primary-pink"
  },
  {
    id: 2,
    name: "Alex Thompson",
    location: "London, UK",
    avatar: "/avatars/alex.jpg",
    rating: 5,
    date: "February 2024",
    trip: "Troodos Mountain Escape",
    review: "Perfect weekend getaway! The mountain villages were charming and the hiking trails offered stunning views. Great value for money and the accommodation was top-notch. Already planning my next trip with Memora!",
    images: ["/reviews/troodos1.jpg"],
    likes: 18,
    verified: true,
    category: "Nature",
    gradient: "from-primary-orange to-primary-red"
  },
  {
    id: 3,
    name: "Elena Rossi",
    location: "Rome, Italy",
    avatar: "/avatars/elena.jpg",
    rating: 5,
    date: "February 2024",
    trip: "Nicosia Cultural Tour",
    review: "As a history student, this tour exceeded all my expectations. The blend of ancient sites and modern culture was fascinating. The local food recommendations were spot on, and I made friends for life!",
    images: ["/reviews/nicosia1.jpg", "/reviews/nicosia2.jpg", "/reviews/nicosia3.jpg"],
    likes: 31,
    verified: true,
    category: "Culture",
    gradient: "from-primary-purple to-primary-red"
  },
  {
    id: 4,
    name: "Marcus Johnson",
    location: "Berlin, Germany",
    avatar: "/avatars/marcus.jpg",
    rating: 5,
    date: "January 2024",
    trip: "Ayia Napa Nightlife Experience",
    review: "Epic nightlife tour! The club selection was perfect and the VIP access made the night unforgettable. Great mix of beach parties and rooftop bars. The group energy was amazing and the guides knew how to have fun safely.",
    images: ["/reviews/ayianapa1.jpg"],
    likes: 27,
    verified: true,
    category: "Nightlife",
    gradient: "from-primary-blue to-primary-red"
  },
  {
    id: 5,
    name: "Zara Ahmed",
    location: "Dubai, UAE",
    avatar: "/avatars/zara.jpg",
    rating: 4,
    date: "January 2024",
    trip: "Larnaca Food & Wine Tour",
    review: "Incredible culinary journey! Every restaurant was carefully selected and the wine pairings were perfect. Learned so much about Cypriot cuisine and culture. The cooking class was the highlight of my trip!",
    images: ["/reviews/larnaca1.jpg", "/reviews/larnaca2.jpg"],
    likes: 22,
    verified: true,
    category: "Food",
    gradient: "from-primary-green to-primary-red"
  },
  {
    id: 6,
    name: "James Wilson",
    location: "Sydney, Australia",
    avatar: "/avatars/james.jpg",
    rating: 5,
    date: "December 2023",
    trip: "Photography Workshop Tour",
    review: "As an aspiring photographer, this tour was a dream come true. The golden hour spots were incredible and the professional tips I received were invaluable. Got some shots that will be in my portfolio forever!",
    images: ["/reviews/photo1.jpg"],
    likes: 19,
    verified: true,
    category: "Photography",
    gradient: "from-primary-cyan to-primary-red"
  }
]

const categories = [
  { name: "All", gradient: "from-primary-red to-primary-pink", icon: Heart },
  { name: "Adventure", gradient: "from-primary-orange to-primary-red", icon: MapPin },
  { name: "Culture", gradient: "from-primary-purple to-primary-red", icon: Camera },
  { name: "Nature", gradient: "from-primary-green to-primary-red", icon: TrendingUp },
  { name: "Nightlife", gradient: "from-primary-blue to-primary-red", icon: Star },
  { name: "Food", gradient: "from-primary-teal to-primary-red", icon: ThumbsUp }
]

const stats = [
  { number: "4.9", label: "Average Rating", gradient: "from-primary-red to-primary-pink", icon: Star },
  { number: "500+", label: "Happy Travelers", gradient: "from-primary-orange to-primary-red", icon: User },
  { number: "50+", label: "Destinations", gradient: "from-primary-purple to-primary-red", icon: MapPin },
  { number: "98%", label: "Recommend Us", gradient: "from-primary-blue to-primary-red", icon: ThumbsUp }
]

export default function Reviews() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentReview, setCurrentReview] = useState(0)
  
  const filteredReviews = selectedCategory === "All" 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % filteredReviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-gradient-to-br from-light-red/5 via-white to-light-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-red/10 to-primary-pink/10 rounded-full px-4 py-2 mb-4 border border-primary-red/20">
            <Heart className="h-5 w-5 text-primary-red" />
            <span className="text-primary-red font-medium">Traveler Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Travelers
            <span className="block text-transparent bg-gradient-to-r from-primary-red via-primary-pink to-primary-purple bg-clip-text">
              Are Saying
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers. Discover why students across Europe choose Memora for their Cyprus adventures.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`text-2xl font-bold text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text mb-1`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.name)
                setCurrentReview(0)
              }}
              className={`group flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 hover:shadow-md border border-gray-200 hover:border-primary-red/30'
              }`}
            >
              <category.icon className={`h-4 w-4 ${
                selectedCategory === category.name ? 'text-white' : 'text-gray-500 group-hover:text-primary-red'
              }`} />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mb-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-red/10 to-primary-pink/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-orange/10 to-primary-red/10 rounded-full blur-2xl"></div>
            
            {filteredReviews.length > 0 && (
              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Review Content */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className={`w-2 h-2 bg-gradient-to-r ${filteredReviews[currentReview].gradient} rounded-full`}></div>
                      <span className={`text-sm font-medium text-transparent bg-gradient-to-r ${filteredReviews[currentReview].gradient} bg-clip-text`}>
                        {filteredReviews[currentReview].category}
                      </span>
                      {filteredReviews[currentReview].verified && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          Verified
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{filteredReviews[currentReview].name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4 text-primary-red" />
                          <span>{filteredReviews[currentReview].location}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          {renderStars(filteredReviews[currentReview].rating)}
                        </div>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-red/20" />
                      <p className="text-gray-700 leading-relaxed pl-6">
                        {filteredReviews[currentReview].review}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-primary-red" />
                          <span>{filteredReviews[currentReview].date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="h-4 w-4 text-primary-red" />
                          <span>{filteredReviews[currentReview].likes}</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {filteredReviews[currentReview].trip}
                      </span>
                    </div>
                  </div>

                  {/* Images/Visual */}
                  <div className="relative">
                    <div className={`h-80 bg-gradient-to-br ${filteredReviews[currentReview].gradient} rounded-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="h-16 w-16 text-white/60" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                          <div className="flex items-center space-x-2 text-white">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{filteredReviews[currentReview].rating}/5</span>
                            <span className="text-white/80">• Amazing Experience</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevReview}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-red transition-colors"
                    disabled={filteredReviews.length <= 1}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span>Previous</span>
                  </button>

                  <div className="flex space-x-2">
                    {filteredReviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentReview(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentReview ? 'bg-primary-red w-8' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextReview}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-red transition-colors"
                    disabled={filteredReviews.length <= 1}
                  >
                    <span>Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-red via-primary-pink to-primary-purple rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Create Your Own Story?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied travelers and discover why Memora is the top choice for Cyprus adventures.
              </p>
                             <button className="bg-white text-primary-red px-8 py-4 rounded-full font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-lg border border-white/20">
                 Book Your Adventure
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 