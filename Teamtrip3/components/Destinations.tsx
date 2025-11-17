'use client'

import { useState } from 'react'

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const destinations = [
    // Indian destinations
    { name: 'Goa, India', status: 'Available' },
    { name: 'Mumbai, Maharashtra', status: 'Available' },
    { name: 'Bangalore, Karnataka', status: 'Available' },
    { name: 'Delhi, India', status: 'Available' },
    { name: 'Jaipur, Rajasthan', status: 'Available' },
    { name: 'Kerala, India', status: 'Available' },
    { name: 'Himachal Pradesh, India', status: 'Available' },
    { name: 'Udaipur, Rajasthan', status: 'Available' },
    { name: 'Pondicherry, India', status: 'Available' },
    { name: 'Rishikesh, Uttarakhand', status: 'Available' },
    // International destinations
    { name: 'Dubai, UAE', status: 'Coming soon' },
    { name: 'Singapore', status: 'Coming soon' },
    { name: 'Bangkok, Thailand', status: 'Coming soon' },
    { name: 'Bali, Indonesia', status: 'Coming soon' },
    { name: 'Maldives', status: 'Coming soon' },
    { name: 'London, UK', status: 'Coming soon' },
    { name: 'Paris, France', status: 'Coming soon' },
    { name: 'Tokyo, Japan', status: 'Coming soon' },
    { name: 'Sydney, Australia', status: 'Coming soon' },
    { name: 'New York, USA', status: 'Coming soon' },
  ]

  const destinationsPerPage = 8
  const totalPages = Math.ceil(destinations.length / destinationsPerPage)
  const currentDestinations = destinations.slice(
    currentIndex * destinationsPerPage,
    (currentIndex + 1) * destinationsPerPage
  )

  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering teams to collaborate better.
          </h2>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
              aria-label="Previous destinations"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-gray-600">See all</span>
            <button
              onClick={() => setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors"
              aria-label="Next destinations"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDestinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  destination.status === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {destination.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

