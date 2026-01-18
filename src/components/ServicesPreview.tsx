'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCode, FaSearch, FaMobileAlt, FaArrowRight } from 'react-icons/fa'

const ServicesPreview = () => {
  const services = [
    {
      icon: <FaCode className="w-10 h-10" />,
      title: 'Website Development',
      description: 'Custom websites built with modern technologies like Next.js, React, and TypeScript.',
      features: ['Responsive Design', 'SEO Ready', 'Fast Performance', 'CMS Integration'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <FaSearch className="w-10 h-10" />,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
      features: ['Keyword Research', 'Technical SEO', 'Content Strategy', 'Link Building'],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: <FaMobileAlt className="w-10 h-10" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'UI/UX Design', 'App Store Optimization'],
      color: 'bg-green-50 border-green-200'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions tailored to your business needs
          </p>
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Services
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${service.color} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn More
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-6">
                Every business is unique. We create tailored solutions that perfectly match your specific requirements and goals.
              </p>
              <button className="btn-primary">
                Get Custom Quote
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'E-commerce', value: '95%' },
                { label: 'Web Apps', value: '90%' },
                { label: 'Mobile Apps', value: '88%' },
                { label: 'SEO Projects', value: '92%' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{item.value}</div>
                  <div className="text-gray-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview