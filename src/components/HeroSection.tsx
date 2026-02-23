'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: 'Transform Your Digital Presence',
      subtitle: 'Innovative Solutions for Modern Enterprises',
      description: 'Leverage cutting-edge technology to accelerate your business growth with our comprehensive digital solutions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
      cta: 'Start Your Journey',
      gradient: 'from-indigo-900/90 via-purple-900/80 to-pink-900/90',
      accent: 'indigo'
    },
    {
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-platform Excellence',
      description: 'Create stunning mobile experiences that engage users and drive business results across iOS and Android platforms.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop',
      cta: 'Explore Apps',
      gradient: 'from-purple-900/90 via-pink-900/80 to-rose-900/90',
      accent: 'purple'
    },
    {
      title: 'Cloud & Infrastructure',
      subtitle: 'Scalable, Secure, Reliable',
      description: 'Future-proof your business with enterprise-grade cloud solutions and 24/7 managed infrastructure services.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop',
      cta: 'Scale Up',
      gradient: 'from-teal-900/90 via-cyan-900/80 to-blue-900/90',
      accent: 'teal'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const getAccentColor = (accent: string) => {
    const colors = {
      indigo: 'bg-indigo-500 hover:bg-indigo-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      teal: 'bg-teal-500 hover:bg-teal-600'
    }
    return colors[accent as keyof typeof colors] || colors.indigo
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel with better transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Gradient Overlay - More sophisticated */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} mix-blend-multiply`} />
              
              {/* Animated Pattern Overlay */}
              {/* <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dynamic overlay that changes with slide */}
      <motion.div 
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block mb-6"
                >
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md bg-white/10 text-white border border-white/20 shadow-xl`}>
                    ✦ Trusted by 500+ Companies
                  </span>
                </motion.div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  {slides[currentSlide].title.split(' ').map((word, i, arr) => (
                    i === arr.length - 1 ? (
                      <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                        {word}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  ))}
                </h1>

                {/* Subtitle with better styling */}
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 font-light tracking-wide"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* CTA Buttons - Dynamic colors based on slide */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className={`group relative px-8 py-4 rounded-xl text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden ${
                    slides[currentSlide].accent === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' :
                    slides[currentSlide].accent === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-teal-600 hover:bg-teal-700'
                  }`}>
                    <span className="relative z-10 flex items-center gap-2">
                      {slides[currentSlide].cta}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                  
                  <button className="group backdrop-blur-md bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2">
                    <span>Watch Demo</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </motion.div>

                {/* Stats with better design */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
                >
                  {[
                    { value: '500+', label: 'Projects Delivered', icon: '🚀' },
                    { value: '98%', label: 'Client Success', icon: '⭐' },
                    { value: '50+', label: 'Expert Team', icon: '👥' },
                    { value: '24/7', label: 'Premium Support', icon: '⚡' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/70">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide Indicators - More elegant */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 bg-white' 
                : 'w-4 bg-white/40 group-hover:bg-white/60 group-hover:w-6'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator - More stylish */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 z-20 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/60 uppercase tracking-wider rotate-90 mb-8">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
    </section>
  )
}

export default HeroSection