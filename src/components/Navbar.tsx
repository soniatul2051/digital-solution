'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Web Development', href: '/services/web-development', description: 'Custom websites & web apps' },
        { name: 'Mobile Apps', href: '/services/mobile-apps', description: 'iOS & Android solutions' },
        { name: 'Cloud Solutions', href: '/services/cloud', description: 'Scalable infrastructure' },
        { name: 'AI & ML', href: '/services/ai', description: 'Intelligent automation' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div 
                className="flex items-center gap-2.5"
                whileHover="hover"
                variants={{
                  hover: { scale: 1.02 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                    <HiOutlineSparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    TechConsult
                  </span>
                  <span className="text-[10px] font-medium text-gray-500 tracking-wider -mt-1">
                    INNOVATION LABS
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 bg-white/70 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-gray-200/50 shadow-sm">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown ? (
                      <button
                        className={`relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          pathname.includes(item.href)
                            ? 'text-indigo-600 bg-indigo-50'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <FiChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                        
                        {pathname.includes(item.href) && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-indigo-600 bg-indigo-50'
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        {pathname === item.href && (
                          <motion.div
                            layoutId="navbar-indicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 py-3 z-50"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block group/dropdown"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="px-4 py-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="text-sm font-semibold text-gray-900 group-hover/dropdown:text-indigo-600 transition-colors">
                                        {dropdownItem.name}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-0.5">
                                        {dropdownItem.description}
                                      </p>
                                    </div>
                                    <FiArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/dropdown:opacity-100 group-hover/dropdown:translate-x-1 transition-all duration-300" />
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <FiArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-5 h-5 text-gray-700" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      TechConsult
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <FiX className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        {item.dropdown ? (
                          <>
                            <div className="px-4 py-3 text-sm font-medium text-gray-400 uppercase tracking-wider">
                              {item.name}
                            </div>
                            <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex flex-col px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group"
                                >
                                  <span className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600">
                                    {dropdownItem.name}
                                  </span>
                                  <span className="text-xs text-gray-500 mt-0.5">
                                    {dropdownItem.description}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                              pathname === item.href
                                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-semibold'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="mt-8 px-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span>Start Free Consultation</span>
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Mobile Footer */}
                  <div className="mt-8 px-4">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                      <Link href="/privacy" className="hover:text-indigo-600 transition-colors">
                        Privacy
                      </Link>
                      <span>•</span>
                      <Link href="/terms" className="hover:text-indigo-600 transition-colors">
                        Terms
                      </Link>
                      <span>•</span>
                      <Link href="/careers" className="hover:text-indigo-600 transition-colors">
                        Careers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar