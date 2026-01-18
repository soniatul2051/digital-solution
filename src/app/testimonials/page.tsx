import TestimonialCard from '@/components/TestimonialCard'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechGrowth Inc.',
    content: 'Working with TechConsult Pro transformed our online presence. Their team delivered exceptional results and exceeded all our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Innovate Solutions',
    content: 'The mobile app they developed for us has been a game-changer. Professional, efficient, and delivered on time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    name: 'Emma Wilson',
    role: 'Marketing Director',
    company: 'Global Brands',
    content: 'Our SEO rankings improved dramatically within 3 months. Highly recommended for digital marketing services.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  },
  {
    name: 'David Park',
    role: 'Operations Manager',
    company: 'Retail Chain',
    content: 'The e-commerce platform they built handles thousands of daily transactions seamlessly. Excellent work!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Founder',
    company: 'Startup Hub',
    content: 'From concept to launch, their team was with us every step of the way. Truly partners in our success.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop'
  },
  {
    name: 'James Miller',
    role: 'IT Director',
    company: 'Finance Corp',
    content: 'Their cloud solutions saved us 40% on infrastructure costs while improving performance. Outstanding!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop'
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Client <span className="text-yellow-300">Testimonials</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Hear from our satisfied clients about their experience working with us
          </p>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-8 h-8 text-yellow-300" />
            ))}
            <span className="ml-4 text-2xl font-bold">4.9/5 Rating</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Overall Client Satisfaction</h3>
              <div className="inline-flex items-center mb-6">
                <div className="text-6xl font-bold text-blue-600 mr-4">4.9</div>
                <div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-600 mt-2">Based on 250+ reviews</div>
                </div>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="max-w-2xl mx-auto mt-8">
              {[
                { stars: 5, percentage: 92, count: 230 },
                { stars: 4, percentage: 6, count: 15 },
                { stars: 3, percentage: 1, count: 3 },
                { stars: 2, percentage: 1, count: 2 },
                { stars: 1, percentage: 0, count: 0 }
              ].map((rating, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div className="w-16 text-gray-600">
                    {rating.stars} stars
                  </div>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <div className="w-16 text-right text-gray-600">
                    {rating.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}