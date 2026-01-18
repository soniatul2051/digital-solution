'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image: string
  delay?: number
}

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  rating, 
  image,
  delay = 0 
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <div className="ml-auto text-yellow-400">
          <FaQuoteLeft className="w-8 h-8 opacity-20" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 italic">"{content}"</p>

      {/* Company Logo/Decoration */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          Verified Client
        </div>
        <div className="text-blue-600 font-bold">
          ★★★★★
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard