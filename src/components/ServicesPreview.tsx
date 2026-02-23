'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  FaSearch, 
  FaShoppingCart, 
  FaArrowRight, 
  FaChartLine, 
  FaTags, 
  FaGlobe, 
  FaFileAlt, 
  FaLink, 
  FaMapMarkerAlt,
  FaWordpress,
  FaCreditCard,
  FaBoxes,
  FaStore
} from 'react-icons/fa'

const ServicesPreview = () => {
  const services = [
    {
      icon: <FaSearch className="w-10 h-10" />,
      title: 'SEO & Digital Marketing',
      description: 'We believe in result-driven SEO techniques which helps to strengthen your business\'s digital presence and improve search results.',
      longDescription: 'We work on combining technical expertise, high-quality content and strategies to increase your visibility, drive organic traffic and boost conversion rates. Our method is more than rankings but we focus on long-term growth and notable impact on your business.',
      features: [
        { icon: <FaChartLine />, text: 'Advanced Keyword Research & Strategy – Identifying high-intent keywords that bring qualified traffic' },
        { icon: <FaTags />, text: 'On-Page Optimization – Optimizing content, meta tags, structure, and user experience for better performance' },
        { icon: <FaGlobe />, text: 'Comprehensive Technical SEO Audits – Fixing backend issues to improve site health and crawlability' },
        { icon: <FaFileAlt />, text: 'Strategic Content Marketing – Creating valuable, SEO-driven content that builds authority' },
        { icon: <FaLink />, text: 'High-Quality Link Building – Strengthening domain credibility with ethical backlink strategies' },
        { icon: <FaMapMarkerAlt />, text: 'Local SEO Optimization – Helping your business rank higher in local searches and Google Maps' }
      ],
      gradient: 'from-orange-500 to-red-500',
      lightBg: 'bg-orange-50',
      border: 'border-orange-200',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: <FaShoppingCart className="w-10 h-10" />,
      title: 'E-commerce Solutions',
      description: 'To help you expand your online business, we offer complete e-commerce systems with secure payment integration, inventory management, and marketing tools.',
      longDescription: 'We create powerful online stores that drive sales and provide seamless shopping experiences across all devices.',
      features: [
        { icon: <FaWordpress />, text: 'Development for Shopify – Custom Shopify stores with optimized performance' },
        { icon: <FaWordpress />, text: 'Solutions for WooCommerce – Powerful WordPress e-commerce solutions' },
        { icon: <FaStore />, text: 'E-commerce Customisation – Tailored features to match your business needs' },
        { icon: <FaCreditCard />, text: 'Integration of Payment Gateways – Secure and multiple payment options' },
        { icon: <FaBoxes />, text: 'Inventory Management – Real-time stock tracking and management' },
        { icon: <FaGlobe />, text: 'Selling across several channels – Multi-channel selling integration' }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Provide{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
            <br />
            to Grow Your Brand Rapidly!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business growth and maximize your online presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`${service.lightBg} rounded-3xl p-8 lg:p-10 border-2 ${service.border} hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-1">
                    <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`${service.iconColor} text-3xl`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-500 italic border-l-4 border-gray-300 pl-4">
                      {service.longDescription}
                    </p>

                    <div className="mt-6">
                      <Link
                        href="/services"
                        className={`inline-flex items-center gap-2 font-semibold ${
                          index === 0 ? 'text-orange-600 hover:text-orange-700' : 'text-blue-600 hover:text-blue-700'
                        } transition-colors group/link`}
                      >
                        Learn More About {service.title}
                        <FaArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - Key Offerings/Features */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className={`w-1 h-6 ${
                        index === 0 ? 'bg-orange-500' : 'bg-blue-500'
                      } rounded-full`} />
                      Key Offerings:
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          className="flex gap-3 p-4 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
                        >
                          <div className={`flex-shrink-0 w-8 h-8 ${
                            index === 0 ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                          } rounded-lg flex items-center justify-center text-sm`}>
                            {feature.icon}
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {feature.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient Decoration Line */}
                <div className={`mt-8 h-1 w-0 group-hover:w-full transition-all duration-700 rounded-full bg-gradient-to-r ${
                  index === 0 ? 'from-orange-500 to-red-500' : 'from-blue-500 to-cyan-500'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 lg:p-16"
        >
          {/* Background Pattern */}
          {/* <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
          </div> */}

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Grow Your Brand?
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl">
                Let's discuss how our digital solutions can help you achieve your business goals
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview