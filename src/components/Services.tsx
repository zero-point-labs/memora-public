"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Camera, Users, Shield, CheckCircle, ArrowRight, Star, Heart } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: "Adventure Planning",
    description: "Expert curation of hidden gems and must-see destinations across Cyprus, tailored for college students.",
    features: [
      "Hidden beach locations",
      "Ancient ruins exploration", 
      "Local hotspot recommendations",
      "Instagram-worthy spots",
      "Cultural experience planning",
      "Budget-friendly alternatives"
    ],
    gradient: "from-primary-blue to-primary-purple",
    bgGradient: "from-primary-blue/10 to-primary-purple/10",
    iconBg: "bg-gradient-to-r from-primary-blue to-primary-purple",
    accentColor: "text-primary-blue"
  },
  {
    icon: Users,
    title: "Group Experiences",
    description: "Carefully designed group activities that create lasting friendships and unforgettable shared memories.",
    features: [
      "Small group adventures (8-15 people)",
      "Team building activities",
      "Group dining experiences",
      "Nightlife coordination",
      "Social event planning",
      "Community building focus"
    ],
    gradient: "from-primary-purple to-primary-pink",
    bgGradient: "from-primary-purple/10 to-primary-pink/10",
    iconBg: "bg-gradient-to-r from-primary-purple to-primary-pink",
    accentColor: "text-primary-purple"
  },
  {
    icon: Shield,
    title: "Safety & Support",
    description: "Comprehensive safety measures and 24/7 support to ensure worry-free adventures for students and families.",
    features: [
      "24/7 emergency support",
      "Local guide expertise",
      "Safety briefings",
      "Insurance coordination",
      "Emergency contact protocols",
      "Regular check-ins"
    ],
    gradient: "from-primary-green to-primary-teal",
    bgGradient: "from-primary-green/10 to-primary-teal/10",
    iconBg: "bg-gradient-to-r from-primary-green to-primary-teal",
    accentColor: "text-primary-green"
  },
  {
    icon: Camera,
    title: "Memory Capture",
    description: "Professional photography and videography services to document your Cyprus adventures for a lifetime.",
    features: [
      "Professional trip photography",
      "Drone footage capture",
      "Social media content creation",
      "Group photo sessions",
      "Digital gallery delivery",
      "Custom video highlights"
    ],
    gradient: "from-primary-orange to-primary-red",
    bgGradient: "from-primary-orange/10 to-primary-red/10", 
    iconBg: "bg-gradient-to-r from-primary-orange to-primary-red",
    accentColor: "text-primary-orange"
  }
]

const testimonialStats = [
  {
    number: "4.9",
    label: "Average Rating",
    description: "From 500+ student reviews",
    gradient: "from-primary-cyan to-primary-blue"
  },
  {
    number: "98%",
    label: "Would Recommend", 
    description: "Students who'd book again",
    gradient: "from-primary-pink to-primary-purple"
  },
  {
    number: "50+",
    label: "Unique Locations",
    description: "Across beautiful Cyprus",
    gradient: "from-primary-orange to-primary-pink"
  }
]

export default function Services() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="services" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-light-cyan/5 to-light-purple/5 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-blue/10 to-primary-purple/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-orange/10 to-primary-pink/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-cyan/5 to-primary-green/5 rounded-full blur-3xl" />
        
        {/* Beautiful gradient glows */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-blue/20 to-primary-cyan/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-r from-primary-purple/15 to-primary-pink/15 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-primary-orange/25 to-primary-red/25 rounded-full blur-lg" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-primary-green/15 to-primary-teal/15 rounded-full blur-xl" />
        
        {/* Floating glow orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-primary-blue/30' :
                i % 4 === 1 ? 'bg-primary-purple/30' :
                i % 4 === 2 ? 'bg-primary-orange/30' : 'bg-primary-cyan/30'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-full px-4 py-2 mb-4 border border-primary-blue/20">
            <Heart className="h-5 w-5 text-primary-blue" />
            <span className="text-primary-blue font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need for 
            <span className="block text-transparent bg-gradient-to-r from-primary-purple via-primary-pink to-primary-orange bg-clip-text">
              Perfect Adventures
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to memories, we handle every detail so you can focus on experiencing the magic of Cyprus.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} border border-white/60 hover:shadow-2xl transition-all duration-500 hover:scale-105`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className={`h-5 w-5 ${service.accentColor} flex-shrink-0`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Students Across
              <span className="text-transparent bg-gradient-to-r from-primary-cyan to-primary-blue bg-clip-text"> Cyprus</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence shows in every review, every smile, and every unforgettable memory we help create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className={`text-4xl lg:text-5xl font-bold mb-2 text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 