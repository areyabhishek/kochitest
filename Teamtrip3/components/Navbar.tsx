'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              Teamtrip
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Services
              </a>
              <a href="#destinations" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Destinations
              </a>
              <a href="#why-teamtrip" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Why Teamtrip
              </a>
              <a href="#offsite-types" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Offsite Types
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                FAQ
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Free Proposal
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#services" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Services
            </a>
            <a href="#destinations" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Destinations
            </a>
            <a href="#why-teamtrip" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Why Teamtrip
            </a>
            <a href="#offsite-types" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Offsite Types
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              FAQ
            </a>
            <a
              href="#contact"
              className="bg-primary-600 text-white block px-3 py-2 rounded-lg text-base font-medium text-center"
            >
              Free Proposal
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

