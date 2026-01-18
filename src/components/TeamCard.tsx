'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
    dribbble?: string
  }
  delay?: number
}

const TeamCard = ({
  name,
  role,
  image,
  bio,
  social,
  delay = 0
}: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Social Links */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-400 p-2 rounded-lg hover:bg-blue-50 transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={`${name}'s GitHub`}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {social.dribbble && (
            <a
              href={social.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-500 p-2 rounded-lg hover:bg-pink-50 transition-colors"
              aria-label={`${name}'s Dribbble`}
            >
              <FaDribbble className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        
        {/* Skills/Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {['Leadership', 'Strategy', 'Innovation'].map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default TeamCard