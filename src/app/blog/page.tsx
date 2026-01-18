import BlogCard from '@/components/BlogCard'
import { FaSearch, FaCalendar, FaTag } from 'react-icons/fa'

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
    excerpt: 'Tips and techniques to optimize your mobile app for better performance and user experience.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    author: 'Mike Chen',
    date: 'Jan 10, 2024',
    readTime: '6 min',
    category: 'Mobile Apps',
    slug: 'mobile-app-performance'
  },
  {
    title: 'Cloud Migration Best Practices',
    excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop',
    author: 'Emma Davis',
    date: 'Jan 8, 2024',
    readTime: '8 min',
    category: 'Cloud',
    slug: 'cloud-migration-best-practices'
  },
  {
    title: 'UI/UX Design Principles for 2024',
    excerpt: 'Modern design principles to create engaging and user-friendly interfaces.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    author: 'Lisa Brown',
    date: 'Jan 5, 2024',
    readTime: '4 min',
    category: 'Design',
    slug: 'ui-ux-design-principles-2024'
  },
  {
    title: 'Digital Transformation Success Stories',
    excerpt: 'Learn from businesses that successfully transformed their digital presence.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    author: 'David Park',
    date: 'Jan 3, 2024',
    readTime: '10 min',
    category: 'Digital Strategy',
    slug: 'digital-transformation-stories'
  }
]

const categories = ['All', 'Web Development', 'SEO', 'Mobile Apps', 'Cloud', 'Design', 'Digital Strategy']

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="text-yellow-300">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Insights, tips, and industry news to help you succeed in the digital world
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaTag className="mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FaCalendar className="mr-2" />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <a
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="text-sm text-gray-500">{post.date}</div>
                        <div className="font-medium group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                  <p className="text-gray-600 mb-4">
                    Get the latest articles delivered to your inbox
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    {...post}
                    delay={index * 100}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex space-x-2">
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                    1
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                    Next →
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}