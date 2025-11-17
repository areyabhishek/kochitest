'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is Teamtrip?',
      answer: 'Teamtrip specializes in planning unique offsite events, particularly for dynamic companies. We handle everything from venue selection to the dinner menu options.',
    },
    {
      question: 'How does Teamtrip work?',
      answer: 'We begin by understanding your event requirements, then provide a per-person cost estimate covering all aspects, and manage the entire planning process.',
    },
    {
      question: 'Is there a limit to the number of requests I can make?',
      answer: 'Nope, there\'s no limit to your requests! We\'ll tackle them one by one until everything is completed and approved. For A La Carte customers, we suggest keeping a few items on your TO DO list to keep our team busy.',
    },
    {
      question: 'What activities can Teamtrip arrange?',
      answer: 'We offer a variety of activities tailored to your team\'s interests, including team-building, outdoor adventures, and strategic sessions.',
    },
    {
      question: 'Is there any cost or fees for using Teamtrip?',
      answer: 'Costs vary based on the trip specifics. We provide a detailed per-person estimate, allowing for budget alignment while delivering quality.',
    },
    {
      question: 'Does Teamtrip handle flights?',
      answer: 'We can assist in finding flight options, though flights are not included in our estimates.',
    },
    {
      question: 'Can Teamtrip accommodate special requests or unique themes for events?',
      answer: 'Yes, we can manage a range of special requests and themes, from themed celebrations to hackathons.',
    },
    {
      question: 'What is the range of group sizes Teamtrip can accommodate?',
      answer: 'We cater to groups from as small as 10 to events in the thousands.',
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

