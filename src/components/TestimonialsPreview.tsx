'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechGrowth Inc.',
      content: 'Working with TechConsult Pro transformed our online presence. Their team delivered exceptional results and exceeded all our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Innovate Solutions',
      content: 'The mobile app they developed for us has been a game-changer. Professional, efficient, and delivered on time.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      role: 'Marketing Director',
      content: 'Our SEO rankings improved dramatically within 3 months. Highly recommended for digital marketing services.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-yellow-400 mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <FaQuoteLeft className="w-8 h-8 text-blue-100 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl font-bold mb-2">4.9/5</div>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-xl mb-6">Based on 250+ client reviews</p>
            <Link
              href="/testimonials"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Read All Testimonials
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsPreview