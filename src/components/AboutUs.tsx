"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { MapPin, Award, Users, Heart, Shield, Calendar, Camera } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: "Authentic Experiences",
    description: "We create genuine connections with Cyprus culture and hidden gems.",
    gradient: "from-primary-pink to-primary-red",
    bgGradient: "from-primary-pink/10 to-primary-red/10"
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Building lasting friendships through shared adventures.",
    gradient: "from-primary-blue to-primary-purple",
    bgGradient: "from-primary-blue/10 to-primary-purple/10"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your security and well-being are our top priorities.",
    gradient: "from-primary-green to-primary-teal",
    bgGradient: "from-primary-green/10 to-primary-teal/10"
  },
  {
    icon: Calendar,
    title: "Memorable Moments",
    description: "Every trip is designed to create unforgettable memories.",
    gradient: "from-primary-orange to-primary-pink",
    bgGradient: "from-primary-orange/10 to-primary-pink/10"
  }
]

const stats = [
  {
    number: "500+",
    label: "Happy Travelers",
    description: "Students who've explored with us",
    gradient: "from-primary-blue to-primary-cyan"
  },
  {
    number: "50+",
    label: "Destinations",
    description: "Unique locations across Cyprus",
    gradient: "from-primary-purple to-primary-pink"
  },
  {
    number: "3",
    label: "Years Experience",
    description: "Creating amazing adventures",
    gradient: "from-primary-orange to-primary-red"
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
    description: "Students recommend us",
    gradient: "from-primary-green to-primary-teal"
  }
]

export default function AboutUs() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.3])

  return (
    <section ref={ref} id="about" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-light-orange/10 via-white to-light-purple/10 overflow-hidden">
      {/* Animated background elements */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(y, value => -value * 0.5) }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-primary-orange/10 to-primary-pink/10 rounded-full blur-3xl"
        />
        
        {/* Simplified floating elements for better performance */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary-cyan/30 rounded-full"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-primary-blue/20 rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-primary-purple/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary-pink/20 rounded-full"></div>
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
            className="inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 px-4 py-2 mb-6 border border-primary-blue/20"
          >
            <Award className="h-5 w-5 text-primary-blue" />
            <span className="text-sm font-semibold text-primary-blue">About Memora</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Creating Memories,
            <span className="block mt-2 text-transparent bg-gradient-to-r from-primary-purple via-primary-pink to-primary-orange bg-clip-text">
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
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Your Gateway to 
                <span className="text-transparent bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text"> Cyprus</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded by students, for students. We create authentic Cyprus adventures that fit your lifestyle and budget, building a community of explorers and lifelong friendships.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`p-4 bg-gradient-to-br ${value.bgGradient} rounded-2xl border border-white/60 hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span>Learn More About Us</span>
                <Camera className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right content - Stats and visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`text-3xl lg:text-4xl font-bold mb-2 text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`}>
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>

            {/* Feature highlight */}
            <div className="relative">
              {/* Heart card positioned on top */}
              <div className="absolute -top-6 -left-6 z-20">
                <div className="bg-white rounded-2xl p-4 shadow-2xl border border-gray-200 transform rotate-12 hover:rotate-6 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-primary-orange" />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="relative bg-gradient-to-br from-primary-orange to-primary-red rounded-3xl p-8 mb-6 overflow-hidden text-white"
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3">Why Students Choose Us</h4>
                  <ul className="space-y-2 text-white/90">
                    <li>• All-inclusive pricing with no hidden costs</li>
                    <li>• Small groups for personalized experiences</li>
                    <li>• Student-friendly schedule and budget</li>
                    <li>• Local insights and authentic experiences</li>
                  </ul>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Sponsors Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading
              <span className="text-transparent bg-gradient-to-r from-primary-purple to-primary-pink bg-clip-text"> Partners</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re proud to work with amazing partners who share our vision of creating unforgettable experiences for students.
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Cyprus Airways", logo: "CA", gradient: "from-primary-blue to-primary-cyan" },
              { name: "Atlantica Hotels", logo: "AH", gradient: "from-primary-purple to-primary-pink" },
              { name: "Paphos Tourism", logo: "PT", gradient: "from-primary-orange to-primary-red" },
              { name: "Zenon N. Zenon", logo: "ZNZ", gradient: "from-primary-green to-primary-teal" },
              { name: "Ayia Napa Resort", logo: "ANR", gradient: "from-primary-red to-primary-pink" },
              { name: "Cyprus College", logo: "CC", gradient: "from-primary-cyan to-primary-blue" }
            ].map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="group flex flex-col items-center space-y-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${sponsor.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{sponsor.logo}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{sponsor.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-primary-blue/5 to-primary-purple/5 rounded-2xl p-6 border border-primary-blue/10">
              <div className="flex -space-x-2 justify-center sm:justify-start flex-shrink-0">
                {['primary-blue', 'primary-purple', 'primary-pink', 'primary-orange'].map((color, i) => (
                  <div key={i} className={`w-10 h-10 bg-gradient-to-r from-${color} to-primary-teal rounded-full border-2 border-white flex items-center justify-center`}>
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left flex-1">
                <h4 className="font-semibold text-gray-900">Interested in partnering with us?</h4>
                <p className="text-sm text-gray-600">Join our network of trusted partners</p>
              </div>
              <button className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 flex-shrink-0 w-full sm:w-auto">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 