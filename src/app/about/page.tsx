"use client"
import Image from 'next/image'
import TeamCard from '@/components/TeamCard'
import Statistics from '@/components/Statistics'
import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaHandshake, FaLightbulb, FaRocket, FaHeart, FaFilm, FaPalette, FaBullseye, FaChartLine } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: '15+ years in creative leadership',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Award-winning designer & storyteller',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Emma Wilson',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
    bio: 'Brand strategy & market positioning expert',
    social: { linkedin: '#', twitter: '#', dribbble: '#' }
  },
  {
    name: 'David Park',
    role: 'Lead Filmmaker',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Visual storytelling & cinematography',
    social: { linkedin: '#', twitter: '#', medium: '#' }
  }
]

const values = [
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: 'Creativity',
    description: 'Pushing boundaries with innovative design and storytelling'
  },
  {
    icon: <FaBullseye className="w-8 h-8" />,
    title: 'Strategy',
    description: 'Data-driven decisions that deliver measurable results'
  },
  {
    icon: <FaFilm className="w-8 h-8" />,
    title: 'Storytelling',
    description: 'Crafting compelling narratives that resonate with audiences'
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Growth',
    description: 'Driving business success through creative excellence'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Dhruva Productions
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Founded with a vision to transform ideas into impactful brand experiences, Dhruva Productions is a full-service creative agency driven by strategy, storytelling, and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of strategists, designers, filmmakers, marketers, and storytellers works collaboratively to craft brands that are not only visually stunning but strategically strong.
              </p>
              
              {/* Key Messages */}
              <div className="space-y-3 mb-8">
                {[
                  "We don't just create campaigns.",
                  "We build identities.",
                  "We create impact.",
                  "We drive growth."
                ].map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                    <p className={`text-lg ${index === 0 ? 'font-medium' : 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'}`}>
                      {message}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Our Story
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 border-2 border-purple-600 font-bold py-4 px-8 rounded-xl hover:bg-purple-50 transition-all"
                >
                  Meet Our Team
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
                alt="Creative Team Collaboration"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl" />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaRocket className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold">500+</p>
                    <p className="text-sm text-gray-600">Projects Delivered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl border border-purple-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="inline-block p-5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <FaRocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                To transform ideas into impactful brand experiences through innovative storytelling, strategic thinking, and creative excellence. We strive to build brands that not only look beautiful but create lasting connections with their audiences.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <span>Creating impact, one brand at a time</span>
                <FaHeart className="w-4 h-4 text-pink-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl border border-orange-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="inline-block p-5 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <FaLightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                To be the most sought-after creative agency globally, recognized for crafting brands that don't just exist, but truly matter. We envision a world where every brand has a powerful story that resonates, inspires, and drives meaningful change.
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <span>Building the future of brand storytelling</span>
                <FaRocket className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Statistics />

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our creative journey and shape every brand we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
                
                {/* Decorative Line */}
                <div className="mt-6 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
              Creative Minds
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of strategists, designers, filmmakers, and storytellers passionate about creating impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          />
        </div>

        <div className="relative container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Our Creative Journey
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {[
              { year: '2015', event: 'The Beginning', description: 'Founded with a vision to transform ideas into impactful brand experiences' },
              { year: '2017', event: 'Creative Expansion', description: 'Grew into a full-service creative agency with strategy, design, and film capabilities' },
              { year: '2019', event: 'Global Reach', description: 'Started working with international brands and expanded our creative network' },
              { year: '2021', event: 'Award-Winning Work', description: 'Recognized for excellence in brand storytelling and creative innovation' },
              { year: '2023', event: '500+ Brands Transformed', description: 'Celebrated helping over 500 businesses build powerful brand identities' }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start mb-12 group"
              >
                <div className="bg-white/10 backdrop-blur-md text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0 border-2 border-white/30 group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <div className="border-l-2 border-white/30 pl-6 group-hover:border-white transition-all">
                  <h4 className="text-2xl font-bold mb-2 text-white">{milestone.event}</h4>
                  <p className="text-white/80 text-lg">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-2xl text-white font-light italic">
              "We don't just create campaigns. We build identities. We create impact. We drive growth."
            </p>
            <p className="text-white/80 mt-4">- The Dhruva Productions Team</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}