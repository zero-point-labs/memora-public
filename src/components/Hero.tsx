"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, MapPin, Users, Calendar, Send, Sparkles } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  { icon: CheckCircle, text: "All-Inclusive 3-Day Adventures", color: "text-teal-500" },
  { icon: Users, text: "Perfect for College Students", color: "text-emerald-500" },
  { icon: MapPin, text: "Exotic Cyprus Destinations", color: "text-cyan-500" },
  { icon: Calendar, text: "Year-Round Trip Schedule", color: "text-blue-500" }
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
      className="bg-white lg:bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-8 shadow-2xl border border-gray-100 lg:border-white/20 w-full max-w-md"
    >
      <div className="flex items-center justify-between mb-6 sm:mb-6">
        <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">Start Your Adventure</h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="h-12 w-12 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 backdrop-blur-sm flex items-center justify-center shadow-lg"
        >
          <Sparkles className="h-6 w-6 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
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
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 lg:bg-white/90 backdrop-blur-sm border border-gray-200 lg:border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-base"
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
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 lg:bg-white/90 backdrop-blur-sm border border-gray-200 lg:border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-base"
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
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 lg:bg-white/90 backdrop-blur-sm border border-gray-200 lg:border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-base"
            required
          />
        </div>
        
        <div>
          <select
            name="groupSize"
            value={formData.groupSize}
            onChange={handleInputChange}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 lg:bg-white/90 backdrop-blur-sm border border-gray-200 lg:border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 appearance-none text-base"
            required
          >
            <option value="" className="text-gray-500">How many people?</option>
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
            className="w-full px-4 py-3.5 rounded-xl bg-gray-50 lg:bg-white/90 backdrop-blur-sm border border-gray-200 lg:border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none text-base"
          />
        </div>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-xl hover:shadow-teal-600/25 transition-all duration-200 flex items-center justify-center space-x-2 text-base"
        >
          <Send className="h-5 w-5" />
          <span>Send Inquiry</span>
        </motion.button>
      </form>
    </motion.div>
  )

  return (
    <>
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden">
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
          {/* Enhanced overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Animated light streaks - hidden on mobile for performance */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-48 bg-gradient-to-r from-teal-400 to-emerald-400"
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

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              {/* Decorative element - only on mobile */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:hidden flex justify-center mb-6 mt-2"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white font-medium">
                  🏝️ Your Cyprus Adventure Awaits
                </div>
              </motion.div>

              {/* Improved mobile typography */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8"
              >
                <span className="block lg:inline">Discover </span>
                <span className="lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-teal-400 lg:to-emerald-400 text-teal-400">
                  Cyprus
                </span>
                <span className="block">Like Never Before</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-xl text-gray-100 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Join unforgettable 3-day adventures across Cyprus&apos;s most exotic destinations. 
                We handle everything so you can focus on making memories.
              </motion.p>

              {/* CTA buttons with improved styling */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10 sm:mb-12 justify-center lg:justify-start"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-teal-600/30 transform hover:scale-105 transition-all duration-200"
                >
                  <span>Join Next Trip</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#next-trip"
                  className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                >
                  <span>View Next Trip</span>
                </Link>
              </motion.div>

              {/* Benefits grid - Enhanced for mobile */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-lg mx-auto lg:max-w-none lg:mx-0"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <benefit.icon className={`h-5 w-5 ${benefit.color} flex-shrink-0`} />
                    <span className="text-sm sm:text-base text-gray-100">{benefit.text}</span>
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

      {/* Mobile-only form section - Enhanced */}
      <section className="lg:hidden bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-md mx-auto px-5">
          {inquiryForm}
        </div>
      </section>
    </>
  )
} 