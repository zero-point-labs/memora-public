"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, MapPin, Users, Calendar, Send } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  { icon: CheckCircle, text: "All-Inclusive 3-Day Adventures", color: "text-primary" },
  { icon: Users, text: "Perfect for College Students", color: "text-accent" },
  { icon: MapPin, text: "Exotic Cyprus Destinations", color: "text-primary" },
  { icon: Calendar, text: "Year-Round Trip Schedule", color: "text-accent" }
]

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupSize: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  const inquiryForm = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-white lg:bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border lg:border-white/20 w-full max-w-md"
    >
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 lg:text-white">Join Our Next Adventure</h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-coral/20 backdrop-blur-sm flex items-center justify-center"
        >
          <Send className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-coral" />
        </motion.div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 lg:bg-white/10 backdrop-blur-sm border border-gray-200 lg:border-white/20 text-gray-900 lg:text-white placeholder-gray-500 lg:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 lg:bg-white/10 backdrop-blur-sm border border-gray-200 lg:border-white/20 text-gray-900 lg:text-white placeholder-gray-500 lg:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 lg:bg-white/10 backdrop-blur-sm border border-gray-200 lg:border-white/20 text-gray-900 lg:text-white placeholder-gray-500 lg:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        
        <div>
          <select
            name="groupSize"
            value={formData.groupSize}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 lg:bg-white/10 backdrop-blur-sm border border-gray-200 lg:border-white/20 text-gray-900 lg:text-white placeholder-gray-500 lg:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200 appearance-none"
            required
          >
            <option value="" className="text-gray-500">How many people are coming?</option>
            <option value="1" className="text-gray-900">Just me</option>
            <option value="2" className="text-gray-900">2 people</option>
            <option value="3-5" className="text-gray-900">3-5 people</option>
            <option value="6-10" className="text-gray-900">6-10 people</option>
            <option value="10+" className="text-gray-900">10+ people</option>
          </select>
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Tell us about your ideal trip..."
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 lg:bg-white/10 backdrop-blur-sm border border-gray-200 lg:border-white/20 text-gray-900 lg:text-white placeholder-gray-500 lg:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200 resize-none"
          />
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-coral text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-coral/25 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Send Inquiry</span>
        </motion.button>
      </form>
    </motion.div>
  )

  return (
    <>
      <section className="relative lg:h-screen flex items-center justify-center overflow-hidden">
        {/* Full-width background video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/cleaning.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Improved video overlay with new tints */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Animated light streaks - hidden on mobile for performance */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden opacity-30">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-48 bg-light-blue"
              style={{
                top: `${20 + i * 15}%`,
                left: '-192px',
              }}
              animate={{
                x: [0, typeof window !== 'undefined' ? window.innerWidth + 256 : 1920],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Subtle floating particles - reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 lg:h-2 lg:w-2 bg-light-blue/30 rounded-full"
              initial={{ 
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                opacity: 0
              }}
              animate={{
                y: -50,
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-24 pb-24 sm:pt-28 lg:pt-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6"
              >
                Discover
                <span className="block mt-1 sm:mt-2">
                  <span className="relative inline-block">
                    <span className="text-coral">Cyprus</span>
                  </span>
                  {" "}Like Never
                </span>
                <span className="block">Before</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Join unforgettable 3-day adventures across Cyprus&apos;s most exotic destinations. From hidden beaches to ancient ruins, 
                we handle everything - accommodation, activities, food, and nightlife - so you can focus on making memories.
              </motion.p>

              {/* CTA buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center space-x-2 rounded-full bg-coral px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-coral/25 transform hover:scale-105 transition-all duration-200"
                >
                  <span>Join Next Trip</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#next-trip"
                  className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white hover:bg-white/20 transition-all duration-200"
                >
                  <span>View Next Trip</span>
                </Link>
              </motion.div>

              {/* Benefits grid - redesigned for mobile */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-lg mx-auto lg:max-w-none lg:mx-0"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-2 text-xs sm:text-sm justify-center lg:justify-start"
                  >
                    <benefit.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${benefit.color} flex-shrink-0`} />
                    <span className="text-gray-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Inquiry Form - Only on Desktop */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:flex lg:col-span-5 mt-8 lg:mt-0 justify-center"
            >
              {inquiryForm}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile-only form section */}
      <section className="lg:hidden bg-white py-12">
        <div className="max-w-md mx-auto px-4">
          {inquiryForm}
        </div>
      </section>
    </>
  )
} 