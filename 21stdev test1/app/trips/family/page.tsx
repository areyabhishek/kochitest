const familyHighlights = [
  {
    title: "European Theme-Park Circuit",
    description: "10-day coach & rail trip covering Disneyland Paris, Europa-Park and LEGOLAND Deutschland with rest days in charming old towns.",
    perks: ["Stroller-friendly transfers", "Family suites", "Private guides"]
  },
  {
    title: "Thailand Beach & Culture Combo",
    description: "12 days in Bangkok, Chiang Mai and Krabi with cooking classes, elephant sanctuary visit and all-inclusive beach resort finale.",
    perks: ["Child-friendly menus", "Babysitting network", "Short travel legs"]
  },
  {
    title: "Mediterranean Family Cruise",
    description: "7-night cruise with kids club, splash zones, supervised shore excursions and curated teen nightlife in safe environments.",
    perks: ["Connecting cabins", "Dedicated kids club", "Onboard pediatric nurse"]
  }
];

export default function FamilyTripsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-primary-900 to-primary-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="uppercase tracking-wide text-sm text-primary-100">Trip Styles</p>
          <h1 className="text-4xl font-bold mb-4">Family-Friendly Adventures</h1>
          <p className="text-lg text-primary-100">
            Travelling with kids? We design trips with you in mind—safe, fun and flexible itineraries so every generation has their moment.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What makes our family trips different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Built for comfort</h3>
              <p className="text-gray-600">Short travel legs, private transfers, stroller-friendly hotels and resorts with enclosed play spaces.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Kid-approved fun</h3>
              <p className="text-gray-600">Shore excursions tailored to little adventurers, flexible start times and kids clubs staffed by certified teams.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Peace of mind</h3>
              <p className="text-gray-600">24/7 concierge, vetted babysitting partners, medical support onboard cruises and in-destination safety briefings.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {familyHighlights.map((trip) => (
            <div key={trip.title} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{trip.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{trip.description}</p>
              <ul className="text-sm text-gray-700 space-y-1 mb-4">
                {trip.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                View itinerary
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Amenities you can expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">On land</h3>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Family suites with separate sleeping areas</li>
                <li>Child-friendly menus and allergy-aware kitchens</li>
                <li>Babysitting & kids club access</li>
                <li>Guides trained for family travel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">At sea</h3>
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Kids splash zones and teen lounges</li>
                <li>Family cabanas and private movie nights</li>
                <li>Flexible dining with early seatings</li>
                <li>Onboard pediatric nurse and babysitting</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors">
              View all family trips
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


