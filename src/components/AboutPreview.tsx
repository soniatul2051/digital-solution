'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaUsers, FaTrophy, FaHandshake, FaArrowRight } from 'react-icons/fa'

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold text-blue-600">8+ Years</div>
              <div className="text-gray-600">Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Founded in 2015, TechConsult Pro has grown from a small startup to a leading digital consultancy firm. Our journey has been fueled by passion, innovation, and an unwavering commitment to client success.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <FaUsers className="w-6 h-6" />,
                  title: 'Expert Team',
                  description: '50+ certified professionals with diverse expertise'
                },
                {
                  icon: <FaTrophy className="w-6 h-6" />,
                  title: 'Proven Results',
                  description: '500+ successful projects delivered on time'
                },
                {
                  icon: <FaHandshake className="w-6 h-6" />,
                  title: 'Client Focus',
                  description: '98% client retention rate and satisfaction'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center btn-primary"
            >
              Learn More About Us
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
                color: 'border-l-4 border-blue-500'
              },
              {
                title: 'Integrity',
                description: 'Honesty and transparency guide every decision we make and every project we undertake.',
                color: 'border-l-4 border-green-500'
              },
              {
                title: 'Excellence',
                description: 'We strive for perfection in everything we do, delivering nothing but the highest quality.',
                color: 'border-l-4 border-purple-500'
              }
            ].map((value, index) => (
              <div key={index} className={`pl-6 ${value.color}`}>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview