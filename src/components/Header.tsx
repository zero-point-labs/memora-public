"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Next Trip', href: '#next-trip' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-orange-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          {/* Mobile Layout */}
          <div className="flex lg:hidden w-full items-center justify-between py-4">
            {/* Left side - Empty space for balance */}
            <div className="w-10"></div>
            
            {/* Center - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Memora Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Right side - Menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 bg-orange-100 text-orange-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex w-full items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Memora Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="tel:+35799123456"
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+357 99 123 456</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-200"
              >
                <MapPin className="h-4 w-4" />
                <span>Join Trip</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white/95 backdrop-blur-xl rounded-b-3xl border-t border-orange-100 shadow-2xl"
              >
                <div className="px-4 py-6">
                  {/* Navigation links */}
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Contact info and CTA */}
                  <div className="mt-8 pt-6 border-t border-orange-100 space-y-4">
                    <Link
                      href="tel:+35799123456"
                      className="flex items-center justify-center space-x-2 rounded-xl px-4 py-3 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-all duration-200 touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">+357 99 123 456</span>
                    </Link>
                    <Link
                      href="#contact"
                      className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-200 touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MapPin className="h-5 w-5" />
                      <span>Join Trip</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
} 