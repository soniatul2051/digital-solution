'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  image: string
  delay?: number
  priceRange?: string
  duration?: string
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  image, 
  delay = 0,
  priceRange,
  duration 
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
          <div className="text-blue-600">
            {icon}
          </div>
        </div>
        {priceRange && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="font-bold text-blue-600">{priceRange}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Key Features:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {duration && (
            <div className="text-sm text-gray-500">
              <span className="font-medium">Duration:</span> {duration}
            </div>
          )}
          <button className="btn-primary py-2 px-6 text-sm">
            Learn More →
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard