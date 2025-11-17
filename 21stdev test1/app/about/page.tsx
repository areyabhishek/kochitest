const partners = ["CLIA", "Virtuoso", "IATA", "ASTA"];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="uppercase text-sm tracking-[0.2em] text-primary-600 font-semibold mb-4">About VoyageVista Tours</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Local experts crafting authentic journeys</h1>
          <p className="text-lg text-gray-600">
            Founded in 2013, VoyageVista Tours started with a mission: make group travel feel personal. Today, our team of
            40 travel curators across Europe and Asia designs itineraries for families, friends, and bachelor/bachelorette groups.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Mission & Values</h2>
          <p className="text-gray-600 mb-4">
            We believe in responsible tourism, authentic encounters, and making complex trip planning feel effortless.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>• Responsible travel that supports local communities</li>
            <li>• Transparent pricing with best-price guarantee</li>
            <li>• 24/7 dedicated support teams in every time zone</li>
            <li>• Flexibility—customize every itinerary, from cruises to villa stays</li>
          </ul>
        </div>
        <div className="bg-primary-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Why partners choose us</h2>
          <p className="text-primary-100 mb-6">
            Our network of trusted cruise lines, boutique hotels and local guides stretches across 18 countries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner) => (
              <div key={partner} className="bg-white/10 rounded-lg px-4 py-6 text-center text-lg font-semibold">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <p className="text-4xl font-bold text-primary-600 mb-2">10+</p>
              <p className="font-semibold text-gray-900">Years designing trips</p>
              <p className="text-gray-500">Awarded “Best Boutique Group Travel Specialist” (Travel Weekly)</p>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="text-4xl font-bold text-primary-600 mb-2">50K+</p>
              <p className="font-semibold text-gray-900">Travelers hosted</p>
              <p className="text-gray-500">Average review score 4.9/5 across Trustpilot & Google</p>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="text-4xl font-bold text-primary-600 mb-2">500+</p>
              <p className="font-semibold text-gray-900">Itineraries</p>
              <p className="text-gray-500">From Mediterranean yacht weeks to Japanese alpine treks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet the team</h2>
              <p className="text-gray-600 mb-4">
                Our travel designers are former expedition leaders, cruise directors and hospitality pros. We speak 12+ languages
                and keep close relationships with partners to secure perks for our travellers.
              </p>
              <a href="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                Chat with a planner
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-500">
              Team photo placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


