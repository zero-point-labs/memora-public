import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

const navigation = {
  trips: [
    { name: 'Next Trip', href: '#next-trip' },
    { name: 'Past Adventures', href: '#gallery' },
    { name: 'Custom Trips', href: '#custom' },
    { name: 'Group Bookings', href: '#groups' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Travel Guide', href: '#guide' },
    { name: 'Safety Info', href: '#safety' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cancellation Policy', href: '#cancellation' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Company info */}
          <div className="space-y-6 lg:space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Memora Logo"
                width={140}
                height={36}
                className="h-9 w-auto brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Creating unforgettable memories for college students across Cyprus since 2021. 
              Adventure, culture, and friendships await on every trip.
            </p>
            
            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Follow Our Adventures</h3>
              <div className="flex space-x-4">
                {socialLinks.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`p-2 -m-2 touch-manipulation transition-colors duration-200 ${
                      index % 3 === 0 ? 'text-gray-400 hover:text-teal-400' :
                      index % 3 === 1 ? 'text-gray-400 hover:text-emerald-400' :
                      'text-gray-400 hover:text-cyan-400'
                    }`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {/* Trips */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Trips</h3>
                <ul className="space-y-3">
                  {navigation.trips.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors duration-200 block py-1 touch-manipulation ${
                          index % 2 === 0 ? 'text-gray-300 hover:text-teal-400' : 'text-gray-300 hover:text-emerald-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  {navigation.company.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors duration-200 block py-1 touch-manipulation ${
                          index % 2 === 0 ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-300 hover:text-teal-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Support</h3>
                <ul className="space-y-3">
                  {navigation.support.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors duration-200 block py-1 touch-manipulation ${
                          index % 2 === 0 ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-300 hover:text-teal-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Contact */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
                <ul className="space-y-3">
                  {navigation.legal.map((item, index) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-sm transition-colors duration-200 block py-1 touch-manipulation ${
                          index % 2 === 0 ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-300 hover:text-cyan-400'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* Contact info */}
                <div className="mt-6 space-y-3">
                  <Link
                    href="tel:+35799123456"
                    className="flex items-start space-x-2 text-sm text-gray-300 hover:text-teal-400 transition-colors py-1 touch-manipulation"
                  >
                    <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>+357 99 123 456</span>
                  </Link>
                  
                  <Link
                    href="mailto:hello@memora.cy"
                    className="flex items-start space-x-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors py-1 touch-manipulation"
                  >
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>hello@memora.cy</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400">
                © 2024 Memora Cyprus. All rights reserved.{' '}
                <Link
                  href="#terms"
                  className="text-xs sm:text-sm text-gray-400 hover:text-teal-400 transition-colors duration-200 touch-manipulation"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
            
            <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400 fill-current" />
              <span>in Cyprus</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 