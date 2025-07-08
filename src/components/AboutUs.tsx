"use client"

import React from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Award, Users, MapPin, ArrowUpRight, Star } from 'lucide-react'

const values = [
  {
    title: "All-Inclusive Experience",
    description: "We handle everything so you can focus on making memories.",
    icon: "🏨"
  },
  {
    title: "Local Expertise",
    description: "Our team knows Cyprus inside out, taking you to hidden gems.",
    icon: "🗺️"
  },
  {
    title: "Student-Focused",
    description: "Designed for college students with budget-friendly prices.",
    icon: "🎓"
  },
  {
    title: "Safety First",
    description: "Your safety is our priority with 24/7 support.",
    icon: "🛡️"
  }
]

export default function AboutUs() {
  const ref = React.useRef(null)
  const imageRef = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="about" className="relative py-20 sm:py-24 lg:py-32 bg-yellow/20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-green/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(y, value => -value * 0.5) }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-green/10 rounded-full blur-3xl"
        />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <MapPin className={`h-6 w-6 text-green/20`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center space-x-2 rounded-full bg-green/10 px-4 py-2 mb-6"
          >
            <Award className="h-5 w-5 text-green" />
            <span className="text-sm font-semibold text-green/80">About Memora</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Creating Memories,
            <span className="block mt-2 text-green">
              One Adventure at a Time
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re passionate about showing college students the hidden gems of Cyprus through carefully crafted adventures.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story of 
              <span className="text-green"> Adventure</span>
            </h3>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                Memora was born from a simple belief: that college years should be filled with incredible experiences. 
                Founded by Cyprus locals who love showing students the island&apos;s hidden treasures.
              </p>
              <p className="text-lg leading-relaxed">
                Our deep knowledge of Cyprus allows us to craft the perfect balance of adventure, relaxation, 
                culture, and nightlife.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-4 bg-white rounded-2xl border border-gray-100 hover:border-green/20 hover:shadow-lg transition-all"
                >
                  <div className="text-2xl mb-2">{value.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{value.title}</h4>
                  <p className="text-xs text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-green text-white rounded-full font-medium shadow-xl hover:shadow-2xl transition-all"
            >
              <span>Meet Our Team</span>
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative bg-green rounded-3xl p-8 mb-6 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Team Photo Placeholder</h3>
                <p className="text-sm opacity-90">Add your team photos here</p>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-lg border border-green/10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-green" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-lg border border-coral/10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-coral" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Students</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 