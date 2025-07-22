"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our travel experts",
    contact: "+357 99 123 456",
    gradient: "from-primary-blue to-primary-purple",
    bgGradient: "from-primary-blue/10 to-primary-purple/10"
  },
  {
    icon: Mail,
    title: "Email Us", 
    description: "Send us your questions anytime",
    contact: "hello@memora.cy",
    gradient: "from-primary-purple to-primary-pink",
    bgGradient: "from-primary-purple/10 to-primary-pink/10"
  }
]

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
    console.log('Contact form submitted:', formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-white via-light-blue/5 to-light-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-blue/10 to-primary-purple/10 rounded-full px-4 py-2 mb-4 border border-primary-blue/20">
            <Send className="h-5 w-5 text-primary-blue" />
            <span className="text-primary-blue font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready for Your Next
            <span className="block text-transparent bg-gradient-to-r from-primary-purple via-primary-pink to-primary-orange bg-clip-text">
              Adventure?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us to book your spot, ask questions, or create a custom trip experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ways to Reach Us</h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${method.bgGradient} border border-white/60 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center mb-4`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h4>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="font-medium text-gray-900">{method.contact}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-pink focus:border-transparent transition-all duration-200"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your ideal trip or any questions you have..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-blue via-primary-purple to-primary-pink text-white font-medium py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-primary-purple/25 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 