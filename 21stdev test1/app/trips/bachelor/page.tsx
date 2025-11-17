const bachelorExperiences = [
  {
    title: "Lisbon & Ibiza Party Week",
    description: "5 nights split between Lisbon rooftops and Ibiza beach clubs with private boat charter and VIP table service.",
    highlights: ["Nightlife hosts", "Private villa upgrade", "Adventure add-ons"]
  },
  {
    title: "Phuket & Koh Samui Island Hop",
    description: "8-night Asia escape with luxury catamaran day, beach club access and wellness recovery mornings.",
    highlights: ["VIP transfers", "Private mixology class", "Spa credits"]
  },
  {
    title: "Mediterranean Celebration Cruise",
    description: "Adult-friendly sections, themed onboard parties, shore excursions built around gastronomy and nightlife.",
    highlights: ["Group cabanas", "Priority embarkation", "Dedicated host"]
  }
];

export default function BachelorTripsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="bg-[url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1920')] bg-cover bg-center">
        <div className="bg-black/70">
          <div className="max-w-5xl mx-auto px-4 py-24 text-center">
            <p className="uppercase tracking-widest text-sm text-primary-200">Trip Styles</p>
            <h1 className="text-4xl font-bold mb-4">Bachelor & Bachelorette Getaways</h1>
            <p className="text-lg text-gray-200">
              Celebrate, explore and make memories—bespoke trips for bachelor and bachelorette groups across Europe and Asia.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bachelorExperiences.map((experience) => (
            <div key={experience.title} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-200 mb-4 flex-1">{experience.description}</p>
              <ul className="text-sm text-gray-200 space-y-1 mb-6">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <button className="w-full bg-white text-primary-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Browse details
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">How we build the ultimate celebration trip</h2>
              <p className="text-gray-200 mb-4">
                From private yachts to curated nightlife crawls, we combine iconic destinations with exclusive access.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>• Dedicated on-trip host or chat concierge</li>
                <li>• VIP airport & nightlife transfers</li>
                <li>• Adult-only cruise sections or villas</li>
                <li>• Adventure add-ons: ATVs, surf lessons, party boats</li>
              </ul>
            </div>
            <div className="bg-black/40 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Popular combos</h3>
              <p className="text-gray-300 mb-4">Mix and match city breaks, island escapes and cruises:</p>
              <div className="space-y-3 text-sm text-gray-200">
                <div>
                  <p className="font-semibold text-white">Europe circuit</p>
                  <p>Barcelona tapas crawl → Ibiza yacht day → Mykonos sunset cruise</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Asia islander</p>
                  <p>Koh Samui pool villas → Phuket nightlife → Bali recovery spa</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Cruise & city</p>
                  <p>Mediterranean cruise with VIP cabanas + Rome or Lisbon add-on</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                  Browse bachelor(ette) trips
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


