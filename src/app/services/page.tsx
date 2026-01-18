import { FaCode, FaSearch, FaMobileAlt, FaServer, FaCloud, FaChartLine, FaShieldAlt, FaDatabase, FaRocket, FaPalette, FaShoppingCart, FaChartBar } from 'react-icons/fa'
import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'

const allServices = [
  {
    title: 'Custom Website Development',
    description: 'We create stunning, high-performance websites tailored to your brand. Using modern frameworks like Next.js, React, and TypeScript, we build responsive websites that work perfectly on all devices.',
    icon: <FaCode className="w-10 h-10" />,
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Progressive Web Apps',
      'API Integration',
      'Performance Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h-800&fit=crop',
    priceRange: '$2,000 - $50,000+',
    duration: '2-12 weeks'
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Boost your online visibility with our comprehensive SEO strategies. We combine technical SEO, content marketing, and link building to improve your search rankings.',
    icon: <FaSearch className="w-10 h-10" />,
    features: [
      'Keyword Research & Strategy',
      'On-page Optimization',
      'Technical SEO Audit',
      'Content Marketing',
      'Link Building',
      'Local SEO'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h-800&fit=crop',
    priceRange: '$500 - $5,000/month',
    duration: 'Ongoing'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We create user-friendly apps with excellent performance and modern design.',
    icon: <FaMobileAlt className="w-10 h-10" />,
    features: [
      'iOS App Development',
      'Android App Development',
      'React Native Apps',
      'Flutter Development',
      'UI/UX Design',
      'App Store Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h-800&fit=crop',
    priceRange: '$10,000 - $100,000+',
    duration: '3-6 months'
  },
  {
    title: 'Server & Cloud Management',
    description: 'Comprehensive server solutions including cloud hosting, deployment, monitoring, and security management for optimal performance.',
    icon: <FaServer className="w-10 h-10" />,
    features: [
      'Cloud Infrastructure Setup',
      'Server Monitoring',
      'Security Hardening',
      'Backup Solutions',
      'Load Balancing',
      '24/7 Support'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h-800&fit=crop',
    priceRange: '$200 - $5,000/month',
    duration: 'Ongoing'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and drive conversions. We create intuitive interfaces that delight users.',
    icon: <FaPalette className="w-10 h-10" />,
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'User Testing',
      'Design Systems',
      'Interaction Design'
    ],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h-800&fit=crop',
    priceRange: '$3,000 - $25,000',
    duration: '2-8 weeks'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with secure payment integration, inventory management, and marketing tools to grow your online store.',
    icon: <FaShoppingCart className="w-10 h-10" />,
    features: [
      'Shopify Development',
      'WooCommerce Solutions',
      'Custom E-commerce',
      'Payment Gateway Integration',
      'Inventory Management',
      'Multi-channel Selling'
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h-800&fit=crop',
    priceRange: '$5,000 - $100,000+',
    duration: '4-16 weeks'
  }
]

const additionalServices = [
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with comprehensive security solutions.',
    icon: <FaShieldAlt className="w-8 h-8" />,
    features: ['Security Audit', 'Penetration Testing', 'Firewall Setup']
  },
  {
    title: 'Database Management',
    description: 'Efficient database design, optimization, and management.',
    icon: <FaDatabase className="w-8 h-8" />,
    features: ['Database Design', 'Performance Tuning', 'Data Migration']
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business processes with digital solutions.',
    icon: <FaRocket className="w-8 h-8" />,
    features: ['Process Automation', 'Cloud Migration', 'Legacy System Upgrade']
  },
  {
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to inform business decisions.',
    icon: <FaChartBar className="w-8 h-8" />,
    features: ['Business Intelligence', 'Custom Dashboards', 'Predictive Analytics']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Comprehensive digital solutions designed to transform your business and drive growth in the digital landscape.
          </p>
          <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Get Free Audit
          </button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Core <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of digital services to meet all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Additional Services */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl mb-20">
            <h3 className="text-3xl font-bold text-center mb-8">Service Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold mb-4">Basic</h4>
                <p className="text-4xl font-bold text-blue-600 mb-6">$2,000+</p>
                <ul className="space-y-3 mb-8">
                  <li>✓ Basic Website</li>
                  <li>✓ SEO Setup</li>
                  <li>✓ 1 Month Support</li>
                  <li>✓ Mobile Responsive</li>
                </ul>
                <button className="btn-primary w-full">Get Started</button>
              </div>
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-xl transform scale-105">
                <div className="text-center mb-4">
                  <span className="bg-yellow-500 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">POPULAR</span>
                </div>
                <h4 className="text-2xl font-bold mb-4">Professional</h4>
                <p className="text-4xl font-bold text-white mb-6">$10,000+</p>
                <ul className="space-y-3 mb-8">
                  <li>✓ Custom Website</li>
                  <li>✓ Full SEO Package</li>
                  <li>✓ 6 Months Support</li>
                  <li>✓ E-commerce Setup</li>
                  <li>✓ Mobile App</li>
                </ul>
                <button className="btn-primary w-full bg-white text-blue-600 hover:bg-gray-100">Get Started</button>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold mb-4">Enterprise</h4>
                <p className="text-4xl font-bold text-purple-600 mb-6">Custom</p>
                <ul className="space-y-3 mb-8">
                  <li>✓ Complete Solution</li>
                  <li>✓ Dedicated Team</li>
                  <li>✓ 24/7 Support</li>
                  <li>✓ Advanced Features</li>
                  <li>✓ Ongoing Maintenance</li>
                </ul>
                <button className="btn-primary w-full">Contact Sales</button>
              </div>
            </div>
          </div>

          <CTA />
        </div>
      </section>
    </div>
  )
}