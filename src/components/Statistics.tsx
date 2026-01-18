'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { FaProjectDiagram, FaUsers, FaTrophy, FaClock, FaCode, FaChartLine } from 'react-icons/fa'

const Statistics = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="w-8 h-8" />,
      value: 500,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-blue-600'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: 150,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-purple-600'
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      value: 50,
      suffix: '+',
      label: 'Awards Won',
      color: 'text-yellow-600'
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      value: 24000,
      suffix: '+',
      label: 'Hours Worked',
      color: 'text-green-600'
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      value: 100,
      suffix: '%',
      label: 'Code Quality',
      color: 'text-red-600'
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'text-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that tell our story of dedication, quality, and success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`${stat.color} mb-4 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  separator=","
                />
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Expertise</h3>
          <div className="space-y-6">
            {[
              { skill: 'Web Development', percentage: 95, color: 'bg-blue-600' },
              { skill: 'Mobile App Development', percentage: 90, color: 'bg-purple-600' },
              { skill: 'SEO & Digital Marketing', percentage: 88, color: 'bg-green-600' },
              { skill: 'UI/UX Design', percentage: 92, color: 'bg-pink-600' },
              { skill: 'Cloud Solutions', percentage: 85, color: 'bg-yellow-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.percentage}%` }}
                transition={{ duration: 2, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="font-bold">{item.percentage}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${item.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics