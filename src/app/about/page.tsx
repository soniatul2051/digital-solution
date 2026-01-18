import Image from 'next/image'
import TeamCard from '@/components/TeamCard'
import Statistics from '@/components/Statistics'
import { FaTrophy, FaUsers, FaHandshake, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: '15+ years in tech leadership',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Expert in cloud architecture',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Emma Wilson',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
    bio: 'Award-winning UI/UX designer',
    social: { linkedin: '#', twitter: '#', dribbble: '#' }
  },
  {
    name: 'David Park',
    role: 'SEO Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Digital marketing strategist',
    social: { linkedin: '#', twitter: '#', medium: '#' }
  }
]

const values = [
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We constantly explore new technologies and approaches'
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Partnership',
    description: 'We work as an extension of your team'
  },
  {
    icon: <FaTrophy className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We deliver nothing but the highest quality work'
  },
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: 'Passion',
    description: 'We love what we do and it shows in our work'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                About <span className="text-blue-600">Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Founded in 2015, TechConsult Pro has grown from a small startup to a leading digital consultancy firm. Our journey has been fueled by passion, innovation, and an unwavering commitment to client success.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary">Our Story</button>
                <button className="btn-secondary">Meet Our Team</button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
                alt="Our Team"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="inline-block p-4 bg-blue-100 rounded-xl mb-6">
                <FaRocket className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg mb-4">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create lasting impact in an increasingly digital world.
              </p>
              <p className="text-gray-600">
                We believe technology should be an enabler, not a barrier. Our mission is to make advanced digital solutions accessible and beneficial for businesses of all sizes.
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl">
              <div className="inline-block p-4 bg-purple-100 rounded-xl mb-6">
                <FaLightbulb className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg mb-4">
                To be the most trusted digital transformation partner for businesses worldwide, recognized for our innovation, integrity, and exceptional results.
              </p>
              <p className="text-gray-600">
                We envision a future where every business, regardless of size or industry, can leverage technology to achieve its full potential and make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <Statistics />

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-6">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { year: '2015', event: 'Founded with 3 team members', description: 'Started as a small web development agency' },
              { year: '2017', event: 'Expanded to full-service digital agency', description: 'Added SEO and mobile app development' },
              { year: '2019', event: 'Opened international offices', description: 'Expanded to Europe and Asia markets' },
              { year: '2021', event: 'Reached 100+ team members', description: 'Grew to become industry leader' },
              { year: '2023', event: 'Served 500+ clients worldwide', description: 'Delivered projects across 30+ countries' }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start mb-12">
                <div className="bg-white text-blue-600 rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  {milestone.year}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{milestone.event}</h4>
                  <p className="text-blue-100">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}