export default function Features() {
  const features = [
    {
      title: 'Full-Service Planning',
      description: 'We handle every aspect of your offsite, from initial planning to execution.',
    },
    {
      title: 'Economical Planning Advantage',
      description: 'Get the best value with our cost-effective planning solutions.',
    },
    {
      title: 'Upfront Simple Price Per Person',
      description: 'Transparent pricing with no hidden fees. Know exactly what you\'re paying.',
    },
    {
      title: 'Advanced Event Planning Tools',
      description: 'Leverage our cutting-edge tools for seamless event management.',
    },
    {
      title: 'Support On-Site',
      description: 'Our team is with you every step of the way, including on-site support.',
    },
  ]

  return (
    <section id="why-teamtrip" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unleash your potential with our unique advantages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Free Proposal
          </a>
        </div>
      </div>
    </section>
  )
}

