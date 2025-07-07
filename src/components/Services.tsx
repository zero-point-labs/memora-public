"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Bug, Home, Building2, Shield, CheckCircle, ArrowRight, Star, Zap } from 'lucide-react'

const services = [
  {
    icon: Bug,
    title: "General Pest Control",
    description: "Comprehensive pest elimination and prevention for ants, roaches, spiders, and other common household invaders.",
    features: [
      "Interior and exterior treatment",
      "Ant and roach elimination",
      "Spider and crawling insect control",
      "Preventive barrier protection",
      "Monthly maintenance programs",
      "Eco-friendly treatment options"
    ],
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    accentColor: "text-green-600"
  },
  {
    icon: Building2,
    title: "Commercial Pest Management",
    description: "Professional pest control solutions for businesses, ensuring compliance with health regulations and maintaining your reputation.",
    features: [
      "Restaurant and food service",
      "Office building treatment",
      "Retail establishment protection",
      "Warehouse pest management",
      "Healthcare facility compliance",
      "Customized service schedules"
    ],
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    accentColor: "text-emerald-600"
  },
  {
    icon: Shield,
    title: "Termite Protection",
    description: "Advanced termite detection, elimination, and prevention services to protect your property's structural integrity.",
    features: [
      "Comprehensive termite inspection",
      "Liquid barrier treatments",
      "Baiting system installation",
      "Wood-destroying organism reports",
      "Annual monitoring programs",
      "Damage repair coordination"
    ],
    color: "from-lime-500 to-green-500",
    bgGradient: "from-lime-50 to-green-50",
    iconBg: "bg-lime-100",
    accentColor: "text-lime-600"
  },
  {
    icon: Home,
    title: "Rodent Control",
    description: "Effective mice and rat elimination with humane removal methods and comprehensive exclusion services.",
    features: [
      "Mouse and rat elimination",
      "Entry point sealing",
      "Humane removal methods",
      "Attic and crawl space cleaning",
      "Exclusion barrier installation",
      "Ongoing monitoring systems"
    ],
    color: "from-green-600 to-lime-500",
    bgGradient: "from-green-50 to-lime-50",
    iconBg: "bg-green-100",
    accentColor: "text-green-600"
  }
]

export default function Services() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="services" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-100/40 to-green-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl" />
        
        {/* Beautiful greenish glows */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-green-200/60 to-emerald-200/60 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-200/50 to-teal-300/50 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-lime-200/70 to-green-200/70 rounded-full blur-lg" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-emerald-200/40 to-green-200/40 rounded-full blur-xl" />
        
        {/* Floating glow orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full blur-lg ${
                i % 3 === 0 ? 'bg-gradient-to-r from-green-200/30 to-emerald-200/30' :
                i % 3 === 1 ? 'bg-gradient-to-r from-emerald-200/25 to-teal-200/25' :
                'bg-gradient-to-r from-lime-200/35 to-green-300/35'
              }`}
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-50/20 to-transparent" />
      </div>

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
            className="inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 mb-6"
          >
            <Zap className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">Professional Pest Control Services</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete Protection
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              For Every Pest Problem
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From routine pest prevention to specialized treatments, we provide comprehensive solutions 
            that keep your property pest-free and your family safe.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Card content */}
                <div className="relative p-8 lg:p-10">
                  {/* Header with icon */}
                  <div className="flex items-start space-x-5 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`flex-shrink-0 w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center`}
                    >
                      <service.icon className={`h-8 w-8 ${service.accentColor}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className={`h-5 w-5 ${service.accentColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section with trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-8 flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Safe & Effective Treatments</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Licensed & Certified</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10"
          >
            <p className="text-lg text-gray-600 mb-6">
              Ready to protect your property? Let us eliminate your pest problems today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-xl"
            >
              <span>Schedule a Free Inspection</span>
              <Bug className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 