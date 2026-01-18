'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
  delay?: number
}

const BlogCard = ({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
  slug,
  delay = 0
}: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <FaUser className="w-4 h-4 mr-2" />
            {author}
          </div>
          <div className="flex items-center mr-4">
            <FaCalendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <div>
            {readTime} read
          </div>
        </div>

        {/* Title and Excerpt */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
        >
          Read More
          <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard