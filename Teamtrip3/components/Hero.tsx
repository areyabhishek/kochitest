export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Unforgettable Offsites
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Unite Your Team, Ignite Success
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
        >
          Free Proposal
        </a>
      </div>

      {/* Trusted by companies section */}
      <div className="max-w-7xl mx-auto mt-20">
        <p className="text-center text-gray-500 text-sm mb-8">Company</p>
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Trusted by companies</h2>
        
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Experience</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Plan your next offsite or event with ease!<br />
            Let Teamtrip handle everything – from location scouting to activity planning, we have got you covered.<br />
            We save you time and money, while your guests enjoy a seamless experience.
          </p>
        </div>
      </div>
    </section>
  )
}

