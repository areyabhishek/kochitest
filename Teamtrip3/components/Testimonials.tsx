'use client'

import { useState } from 'react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: 'Thank you Teamtrip for all your help with our Goa offsite. Everyone had a blast. Everything was seamless and that\'s all thanks to you guys. Can\'t wait to book our next trip!',
      author: 'Priya',
      role: 'Startup Event Manager',
    },
    {
      quote: 'Teamtrip helped plan our 3 day company offsite in Mumbai and helped from beginning to end and everything in between.',
      author: 'Rahul Sharma',
      role: 'Executive Assistant',
    },
    {
      quote: 'The offsite was terrific! The hotel was beautiful, the meeting space was perfect, the activities were exceptional, and the accommodations for dietary restrictions exceeded expectations.',
      author: 'Anjali',
      role: 'Operations Manager',
    },
    {
      quote: 'Teamtrip handled everything and made me look like a rockstar to my team. My colleagues kept complimenting me on how great it was. Thanks Teamtrip!',
      author: 'Vikram',
      role: 'Head of People',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What people say about us
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="text-center">
              <svg className="w-12 h-12 text-primary-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

