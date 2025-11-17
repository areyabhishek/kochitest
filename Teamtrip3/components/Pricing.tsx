export default function Pricing() {
  const pricingFeatures = [
    {
      title: 'Upfront Pricing with No Hidden Fees',
      description: 'Enjoy complete transparency in pricing. We believe in clear communication, ensuring the price quoted is the price you pay, with no unexpected costs.',
      tags: ['Transparent', 'Reliable', 'Straightforward'],
    },
    {
      title: 'Unbeatable group rates',
      description: 'Leverage our IATA certification and global partner network. We secure highly competitive group rates, providing cost-effective solutions for every destination.',
      tags: ['Competitive', 'Cost-Effective', 'Advantageous'],
    },
    {
      title: 'Flexible payment plans',
      description: 'We understand financial planning is crucial. That\'s why we offer customizable payment plans to accommodate your company\'s budgeting process.',
      tags: ['Adaptable', 'Convenient', 'Budget-Friendly'],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Each Teamtrip is unique
          </h2>
        </div>

        <div className="space-y-12 mb-16">
          {pricingFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Our pricing plans make getting started a breeze.
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for a customized quote based on your team size, destination, and requirements.
            We provide transparent, upfront pricing with no hidden fees.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get Your Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}

