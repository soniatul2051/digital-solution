'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: 'Transform Your Digital Presence',
      subtitle: 'Professional Solutions for Modern Businesses',
      description: 'We provide comprehensive digital solutions including web development, SEO, mobile apps, and server management to help your business grow.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
      cta: 'Get Started',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-platform Solutions',
      description: 'Build powerful mobile applications for iOS and Android with stunning UX and top-notch performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop',
      cta: 'View Apps',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Server & Cloud Solutions',
      subtitle: 'Scalable Infrastructure',
      description: 'Secure and scalable server management solutions for optimal performance and reliability.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop',
      cta: 'Learn More',
      color: 'from-green-600 to-blue-600'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative min-h-screen">
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${slide.color} transition-opacity duration-1000`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover mix-blend-overlay"
              priority
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-200 mb-6">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                  {slides[currentSlide].cta}
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Team Members' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default HeroSection