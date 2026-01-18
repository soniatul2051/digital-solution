import PortfolioCard from '@/components/PortfolioCard'
import { FaFilter } from 'react-icons/fa'

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with advanced inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'E-commerce'
  },
  {
    title: 'Healthcare Mobile App',
    description: 'Telemedicine app connecting patients with doctors for virtual consultations.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop',
    tags: ['React Native', 'Firebase', 'Node.js', 'WebRTC'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile App'
  },
  {
    title: 'Corporate Website Redesign',
    description: 'Complete website overhaul for a Fortune 500 company with improved UX and performance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    tags: ['React', 'GraphQL', 'Contentful', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web Development'
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours and AI-powered recommendations.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'Django'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Web App'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Mobile app for workout tracking, nutrition planning, and progress monitoring.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
    tags: ['Flutter', 'MongoDB', 'Express', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Mobile App'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard for SaaS businesses with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    tags: ['React', 'D3.js', 'Node.js', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Dashboard'
  }
]

const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Web App', 'Dashboard']

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-yellow-300">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Explore our successful projects that showcase our expertise and commitment to excellence
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="flex items-center text-gray-600">
                <FaFilter className="mr-2" />
                <span>Filter by:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={index}
                {...item}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '150+', label: 'Happy Clients' },
                { value: '50+', label: 'Awards Won' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}