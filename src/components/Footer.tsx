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
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
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
                className="h-9 w-auto"
                priority
              />
            </Link>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Creating unforgettable memories for college students across Cyprus since 2021. 
              Adventure, culture, and friendships await on every trip.
            </p>
            
            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Follow Our Adventures</h3>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200 p-2 -m-2 touch-manipulation"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation links - Mobile optimized */}
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
              {/* Trips */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Trips</h3>
                <ul role="list" className="space-y-3">
                  {navigation.trips.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 block py-1 touch-manipulation"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                <ul role="list" className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 block py-1 touch-manipulation"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
                <ul role="list" className="space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 block py-1 touch-manipulation"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
                <ul role="list" className="space-y-3">
                  <li>
                    <Link 
                      href="tel:+35799123456"
                      className="flex items-start space-x-2 text-sm text-gray-600 hover:text-orange-600 transition-colors py-1 touch-manipulation"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>+357 99 123 456</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="mailto:hello@memora.cy"
                      className="flex items-start space-x-2 text-sm text-gray-600 hover:text-orange-600 transition-colors py-1 touch-manipulation"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span className="break-all">hello@memora.cy</span>
                    </Link>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      123 Adventure Street<br />
                      Nicosia, Cyprus 1234
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Memora. All rights reserved. Making memories across Cyprus.
            </p>
            
            {/* Legal links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
              {navigation.legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 touch-manipulation"
                  >
                    {item.name}
                  </Link>
                  {index < navigation.legal.length - 1 && (
                    <span className="text-gray-400 hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Made with love */}
          <div className="mt-4 flex items-center justify-center sm:justify-start space-x-1 text-gray-600">
            <span className="text-xs sm:text-sm">Made with</span>
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 fill-current" />
            <span className="text-xs sm:text-sm">by the Memora Team</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 