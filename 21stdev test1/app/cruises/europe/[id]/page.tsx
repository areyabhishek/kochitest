import Image from "next/image";

export default function CruiseDetailPage({ params }: { params: { id: string } }) {
  // In a real app, fetch cruise data based on params.id
  const cruise = {
    id: params.id,
    title: "7-Night Mediterranean Gems",
    route: "Barcelona to Rome",
    duration: "7 nights",
    ports: ["Barcelona", "Marseille", "Nice", "Florence", "Rome"],
    style: "Family Friendly",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920"
  };

  const itinerary = [
    { day: 1, port: "Barcelona", description: "Embarkation and welcome dinner" },
    { day: 2, port: "At Sea", description: "Relax and enjoy onboard amenities" },
    { day: 3, port: "Marseille", description: "Explore the historic port city" },
    { day: 4, port: "Nice", description: "French Riviera beaches and culture" },
    { day: 5, port: "Florence", description: "Renaissance art and architecture" },
    { day: 6, port: "At Sea", description: "Onboard activities and entertainment" },
    { day: 7, port: "Rome", description: "Disembarkation and optional city tour" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96">
        <Image
          src={cruise.image}
          alt={cruise.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{cruise.title}</h1>
          <p className="text-xl">{cruise.route} • {cruise.duration}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Route Map */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Route Map</h2>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Interactive map showing ports of call</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2 text-gray-900">Ports of Call:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {cruise.ports.map((port, index) => (
                    <li key={index}>{port}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((item) => (
                  <div key={item.day} className="border-l-4 border-primary-600 pl-4">
                    <h3 className="font-semibold text-gray-900">Day {item.day}: {item.port}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ship Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ship Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cabin Types</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Interior Staterooms</li>
                    <li>Ocean View Staterooms</li>
                    <li>Balcony Staterooms</li>
                    <li>Suite Accommodations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Amenities</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Multiple dining venues</li>
                    <li>Swimming pools and spa</li>
                    <li>Entertainment venues</li>
                    <li>Kids club (family-friendly cruises)</li>
                    <li>Fitness center</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">✓ Included</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Accommodation</li>
                    <li>All meals onboard</li>
                    <li>Entertainment and activities</li>
                    <li>Port taxes and fees</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">✗ Not Included</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Flights</li>
                    <li>Shore excursions</li>
                    <li>Gratuities</li>
                    <li>Travel insurance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {cruise.style}
                </span>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-600 mb-2">From {cruise.price}</p>
                <p className="text-sm text-gray-600">per person, based on double occupancy</p>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>June 2024</option>
                    <option>July 2024</option>
                    <option>August 2024</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cabin Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Interior Stateroom</option>
                    <option>Ocean View</option>
                    <option>Balcony</option>
                    <option>Suite</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors mb-4">
                Book Now
              </button>
              <button className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

