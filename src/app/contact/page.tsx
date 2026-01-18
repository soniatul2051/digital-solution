import ContactForm from '@/components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    action: 'Call Now'
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: 'Email',
    details: ['hello@techconsultpro.com', 'support@techconsultpro.com'],
    action: 'Send Email'
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: 'Office',
    details: ['123 Tech Street', 'San Francisco, CA 94107', 'United States'],
    action: 'Get Directions'
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: 'Hours',
    details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm', 'Sunday: Closed'],
    action: 'Book Appointment'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Contact <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Get in touch with our team. We're here to help you transform your digital presence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <div className="text-blue-600">{info.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold">{info.title}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    {info.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map & Social Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
              <div className="relative h-96 bg-gray-200 rounded-xl overflow-hidden">
                {/* This would be a real map integration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="w-12 h-12 text-red-500 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-600">Interactive map would be here</p>
                    <button className="mt-4 btn-primary">Open in Maps</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <p className="text-gray-600 mb-8">
                Follow us on social media for updates, tips, and industry insights.
              </p>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <FaLinkedin className="w-6 h-6 text-blue-700 mr-4" />
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <p className="text-sm text-gray-600">Follow for professional updates</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <FaWhatsapp className="w-6 h-6 text-green-600 mr-4" />
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <p className="text-sm text-gray-600">Chat with our support team</p>
                  </div>
                </a>
              </div>

              {/* Newsletter */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Subscribe to Newsletter</h4>
                <p className="text-gray-600 mb-4">Get digital tips and industry insights delivered to your inbox.</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="btn-primary rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What is your typical response time?',
                answer: 'We respond to all inquiries within 2 business hours during working days.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we offer various support packages ranging from basic maintenance to full managed services.'
              },
              {
                question: 'Can you work with my existing team?',
                answer: 'Absolutely! We often work as an extension of existing teams, providing specialized expertise.'
              },
              {
                question: 'What are your payment terms?',
                answer: 'We offer flexible payment options including milestone-based payments, monthly retainers, and project-based pricing.'
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}