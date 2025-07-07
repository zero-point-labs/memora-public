'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Shield, Globe, TrendingUp } from 'lucide-react';

const ClientLogos = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Popular company logos data with updated styling
  const logos = [
    {
      name: 'Microsoft',
      width: 120,
      height: 40,
      svg: (
        <svg viewBox="0 0 120 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.8 0H0v22.8h22.8V0z" fill="currentColor"/>
          <path d="M47.4 0H24.6v22.8h22.8V0z" fill="currentColor"/>
          <path d="M22.8 24.6H0V47.4h22.8V24.6z" fill="currentColor"/>
          <path d="M47.4 24.6H24.6V47.4h22.8V24.6z" fill="currentColor"/>
          <text x="55" y="17" fontSize="14" fontWeight="600" fill="currentColor" fontFamily="Segoe UI, Arial, sans-serif">Microsoft</text>
        </svg>
      )
    },
    {
      name: 'Google',
      width: 120,
      height: 40,
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="20" fontWeight="400" fill="currentColor" fontFamily="Product Sans, Arial, sans-serif">Google</text>
        </svg>
      )
    },
    {
      name: 'Apple',
      width: 100,
      height: 40,
      svg: (
        <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="400" fill="currentColor" fontFamily="SF Pro Display, Arial, sans-serif">Apple</text>
        </svg>
      )
    },
    {
      name: 'Amazon',
      width: 120,
      height: 40,
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="Amazon Ember, Arial, sans-serif">amazon</text>
        </svg>
      )
    },
    {
      name: 'Netflix',
      width: 110,
      height: 40,
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="Netflix Sans, Arial, sans-serif">NETFLIX</text>
        </svg>
      )
    },
    {
      name: 'Spotify',
      width: 120,
      height: 40,
      svg: (
        <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="14" fontWeight="700" fill="currentColor" fontFamily="Circular, Arial, sans-serif">Spotify</text>
        </svg>
      )
    },
    {
      name: 'Tesla',
      width: 100,
      height: 40,
      svg: (
        <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="500" fill="currentColor" fontFamily="Tesla, Arial, sans-serif">TESLA</text>
        </svg>
      )
    },
    {
      name: 'Meta',
      width: 100,
      height: 40,
      svg: (
        <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="Optimistic Display, Arial, sans-serif">Meta</text>
        </svg>
      )
    },
    {
      name: 'Adobe',
      width: 110,
      height: 40,
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="14" fontWeight="700" fill="currentColor" fontFamily="Adobe Clean, Arial, sans-serif">Adobe</text>
        </svg>
      )
    },
    {
      name: 'Slack',
      width: 100,
      height: 40,
      svg: (
        <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="Slack-Lato, Arial, sans-serif">Slack</text>
        </svg>
      )
    },
    {
      name: 'Airbnb',
      width: 110,
      height: 40,
      svg: (
        <svg viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="600" fill="currentColor" fontFamily="Cereal, Arial, sans-serif">Airbnb</text>
        </svg>
      )
    },
    {
      name: 'Uber',
      width: 90,
      height: 40,
      svg: (
        <svg viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="10" y="25" fontSize="16" fontWeight="700" fill="currentColor" fontFamily="UberMove, Arial, sans-serif">Uber</text>
        </svg>
      )
    }
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section ref={ref} className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background elements matching Services section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-lime-100/30 rounded-full blur-3xl" />
        
        {/* Beautiful greenish glows */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-200/30 to-lime-300/30 rounded-full blur-xl" />
        
        {/* Floating glow orbs */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-lg bg-gradient-to-r from-green-200/20 to-emerald-200/20"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 mb-6"
          >
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">Trusted Protection</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted by
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies worldwide who trust us to keep their properties pest-free. 
            From local businesses to Fortune 500 companies, we&apos;ve earned the confidence of the best.
          </p>
        </motion.div>

        {/* Logo carousel sections */}
        <div className="space-y-12 mb-20">
          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="flex animate-scroll-left space-x-16 items-center">
              {duplicatedLogos.slice(0, 16).map((logo, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 text-gray-400 hover:text-green-600 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  style={{ minWidth: `${logo.width}px` }}
                >
                  <div className="flex items-center justify-center h-16">
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="flex animate-scroll-right space-x-16 items-center">
              {duplicatedLogos.slice(8, 24).map((logo, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 text-gray-400 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  style={{ minWidth: `${logo.width}px` }}
                >
                  <div className="flex items-center justify-center h-16">
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row - Left to Right (slower) */}
          <div className="relative">
            <div className="flex animate-scroll-left-slow space-x-16 items-center">
              {duplicatedLogos.slice(4, 20).map((logo, index) => (
                <div
                  key={`slow-${index}`}
                  className="flex-shrink-0 text-gray-400 hover:text-green-600 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  style={{ minWidth: `${logo.width}px` }}
                >
                  <div className="flex items-center justify-center h-16">
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section with Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {[
            { icon: TrendingUp, number: "500+", label: "Properties Protected", color: "text-green-600", bg: "bg-green-100" },
            { icon: Star, number: "98%", label: "Success Rate", color: "text-emerald-600", bg: "bg-emerald-100" },
            { icon: Globe, number: "50+", label: "Service Areas", color: "text-green-600", bg: "bg-green-100" },
            { icon: Shield, number: "24/7", label: "Emergency Service", color: "text-emerald-600", bg: "bg-emerald-100" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-xl mb-4`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </motion.div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our family of protected properties?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all"
          >
            <span>Get Started Today</span>
            <Star className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left-slow {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos; 