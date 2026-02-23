'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiStar, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'

const CTA = () => {
  const stats = [
    { icon: <FiStar className="w-6 h-6" />, value: '500+', label: 'Happy Clients' },
    { icon: <FiTrendingUp className="w-6 h-6" />, value: '98%', label: 'Success Rate' },
    { icon: <FiUsers className="w-6 h-6" />, value: '50+', label: 'Expert Team' },
    { icon: <FiClock className="w-6 h-6" />, value: '24/7', label: 'Support' }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Moving Gradient Overlay */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
        />
      </div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600')" }}
        />
      </div>
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <HiOutlineSparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Are You Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              Transform Your Business?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Hundreds of businesses have scaled with us; now it is your chance. 
            Let's create something extraordinary that will set you apart.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['No Hidden Fees', 'Dedicated Support', 'Fast Delivery', 'Quality Guaranteed'].map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm"
              >
                ✓ {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-10 rounded-xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Free Consultation
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-xl text-lg backdrop-blur-sm transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Success Stories
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>

          {/* Stats with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-white/80 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/90">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="text-sm text-white/60">24/7 Support Line</p>
                <p className="font-semibold text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <Link 
                href="/contact" 
                className="group flex items-center gap-1 text-white hover:text-yellow-300 transition-colors"
              >
                Contact Sales
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/demo" 
                className="group flex items-center gap-1 text-white hover:text-yellow-300 transition-colors"
              >
                Request Demo
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/quote" 
                className="group flex items-center gap-1 text-white hover:text-yellow-300 transition-colors"
              >
                Get Quote
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-300">⭐</span>
              <span className="text-sm text-white/80">Trusted by 500+ businesses worldwide</span>
              <span className="text-yellow-300">⭐</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA