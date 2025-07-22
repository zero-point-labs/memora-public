"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, MapPin } from 'lucide-react'
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
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100">
        <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8" aria-label="Top">
          {/* Mobile Layout */}
          <div className="flex lg:hidden w-full items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Memora Logo"
                  width={110}
                  height={32}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Menu button */}
            <div className="flex-1 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all duration-200 touch-manipulation"
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
          <div className="hidden lg:flex w-full items-center justify-between py-5">
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
                  className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-teal-600/25 transform hover:scale-105 transition-all duration-200"
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
                className="lg:hidden bg-white/95 backdrop-blur-xl rounded-b-2xl border-t border-gray-100 shadow-xl absolute left-0 right-0 top-full"
              >
                <div className="px-5 pt-6 pb-8">
                  {/* Navigation links */}
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-all duration-200 touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Contact info and CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-4 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-teal-600/25 transition-all duration-200 touch-manipulation"
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
