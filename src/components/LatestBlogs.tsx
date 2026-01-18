'use client'

import { motion } from 'framer-motion'
import BlogCard from './BlogCard'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const LatestBlogs = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop',
      author: 'John Doe',
      date: 'Jan 15, 2024',
      readTime: '5 min',
      category: 'Web Development',
      slug: 'future-web-development-2024'
    },
    {
      title: 'SEO Strategies for E-commerce Success',
      excerpt: 'Learn proven SEO techniques to boost your e-commerce store visibility and sales.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      author: 'Sarah Wilson',
      date: 'Jan 12, 2024',
      readTime: '7 min',
      category: 'SEO',
      slug: 'seo-strategies-ecommerce'
    },
    {
      title: 'Mobile App Performance Optimization',
      excerpt: 'Tips and techniques to optimize your mobile app for better performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      author: 'Mike Chen',
      date: 'Jan 10, 2024',
      readTime: '6 min',
      category: 'Mobile Apps',
      slug: 'mobile-app-performance'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-blue-600">Insights</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest articles and industry news
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Articles
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest digital insights delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default LatestBlogs