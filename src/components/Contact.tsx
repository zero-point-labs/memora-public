"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Contact form submitted:', formData)
    // You can add your form submission logic here
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+357 99 123 456",
      subtext: "Available 9 AM - 9 PM",
      href: "tel:+35799123456"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@memora.cy",
      subtext: "We&apos;ll respond within 24 hours",
      href: "mailto:hello@memora.cy"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Adventure Street",
      subtext: "Nicosia, Cyprus 1234",
      href: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Sun: 9 AM - 9 PM",
      subtext: "Always here to help plan your trip",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-coral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-coral/20 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="h-5 w-5 text-coral" />
            <span className="text-coral font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our trips or want to book your spot? We&apos;re here to help make your Cyprus adventure unforgettable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-coral/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a topic</option>
                      <option value="booking">Trip Booking</option>
                      <option value="information">Trip Information</option>
                      <option value="custom">Custom Trip Request</option>
                      <option value="group">Group Booking</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your ideal trip or any questions you have..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-coral text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-coral/25 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a href={item.href} className="block group">
                    <div className="p-5 rounded-2xl border border-gray-100 group-hover:bg-coral/5 group-hover:border-coral/10 group-hover:shadow-lg group-hover:shadow-coral/5 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-coral/10 flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-coral" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-700">{item.details}</p>
                          <p className="text-sm text-gray-500">{item.subtext}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Our Adventures</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'TikTok'].map(social => (
                  <a key={social} href="#" className="text-gray-500 hover:text-coral transition-colors duration-200">
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 