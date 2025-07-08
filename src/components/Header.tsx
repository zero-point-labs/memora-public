"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Trips', href: '/trips' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-coral/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          {/* Mobile Layout */}
          <div className="flex lg:hidden w-full items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Memora Logo"
                  width={100}
                  height={28}
                  className="h-7 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Menu button */}
            <div className="flex-1 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl p-2 bg-coral/10 text-coral hover:bg-coral/20 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all duration-200 touch-manipulation"
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
                  className="text-base font-medium text-gray-700 hover:text-coral transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="tel:+35799123456"
                className="flex items-center space-x-2 text-gray-600 hover:text-coral transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+357 99 123 456</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 rounded-full bg-coral px-6 py-2.5 text-sm font-medium text-white shadow-lg hover:shadow-xl hover:shadow-coral/25 transform hover:scale-105 transition-all duration-200"
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
                className="lg:hidden bg-white/90 backdrop-blur-lg rounded-b-3xl border-t border-coral/10 shadow-2xl"
              >
                <div className="px-4 pt-4 pb-6">
                  {/* Navigation links */}
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-coral/5 hover:text-coral transition-all duration-200 touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Contact info and CTA */}
                  <div className="mt-6 pt-5 border-t border-coral/10 space-y-3">
                    <Link
                      href="tel:+35799123456"
                      className="flex items-center justify-center space-x-2 rounded-xl px-4 py-3 bg-coral/5 text-coral hover:bg-coral/10 transition-all duration-200 touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">+357 99 123 456</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 rounded-xl bg-coral px-4 py-3 text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-coral/25 transition-all duration-200 touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MapPin className="h-5 w-5" />
                      <span>Join a Trip</span>
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
