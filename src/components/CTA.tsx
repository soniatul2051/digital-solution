'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600')] opacity-10 mix-blend-overlay"></div>
      
      {/* Animated Shapes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have scaled with our digital solutions. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg shadow-2xl"
            >
              Start Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl text-lg"
            >
              View Case Studies
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: '24/7', label: 'Support Available' },
              { value: '30-Day', label: 'Money Back Guarantee' },
              { value: 'Free', label: 'Initial Consultation' },
              { value: 'Flexible', label: 'Payment Plans' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-white/90">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold">Have questions?</p>
              <p>Call us at +1 (555) 123-4567</p>
            </div>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-white underline">
                Contact Sales
              </Link>
              <Link href="/demo" className="hover:text-white underline">
                Request Demo
              </Link>
              <Link href="/quote" className="hover:text-white underline">
                Get Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA