'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaLightbulb, FaCode, FaFlask, FaRocket, FaChartLine } from 'react-icons/fa'


const ProcessSteps = () => {
  const steps = [
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: 'Discovery',
      description: 'We analyze your business needs, goals, and target audience to create a comprehensive strategy.',
      color: 'from-blue-500 to-blue-400'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Planning',
      description: 'Our team designs wireframes and prototypes, creating a roadmap for your project.',
      color: 'from-purple-500 to-purple-400'
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Development',
      description: 'We build your solution using modern technologies with regular progress updates.',
      color: 'from-green-500 to-green-400'
    },
    {
      icon: <FaFlask className="w-8 h-8" />,
      title: 'Testing',
      description: 'Rigorous testing ensures your solution is bug-free and performs optimally.',
      color: 'from-yellow-500 to-yellow-400'
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Launch',
      description: 'We deploy your solution and ensure everything runs smoothly from day one.',
      color: 'from-red-500 to-red-400'
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and support to keep your solution running perfectly.',
      color: 'from-pink-500 to-pink-400'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures quality, efficiency, and successful project delivery
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-pink-500"></div>
          
          {/* Steps */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-blue-600">
                    Step {index + 1}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full"></div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white mr-6`}>
                  {step.icon}
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h3>
          <button className="btn-primary text-lg px-8 py-4">
            Begin Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSteps