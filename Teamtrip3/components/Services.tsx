export default function Services() {
  const services = [
    {
      title: 'Offsite Planning',
      description: 'Specializing in unique and engaging offsites, we tailor every detail to fit your team\'s needs.',
      features: ['Seamless', 'Tailored', 'Efficient', 'Engaging'],
    },
    {
      title: 'Corporate Events',
      description: 'Elevate your corporate events with our professional touch.',
      features: ['Professional', 'Innovative', 'Memorable', 'Impactful'],
    },
    {
      title: 'Conferences',
      description: 'Hosting conferences made effortless.',
      features: ['Organized', 'Informative', 'Dynamic', 'Collaborative'],
    },
    {
      title: 'Workshops & Training Programs',
      description: 'Boost skills and teamwork with expertly crafted, engaging sessions tailored to your needs.',
      features: ['Hands-on', 'Insightful', 'Focused', 'Transformative'],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering teams to collaborate better.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
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

