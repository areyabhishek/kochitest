import Image from "next/image";
import Link from "next/link";

export default function AsiaCruiseDetailPage({ params }: { params: { id: string } }) {
  const cruise = {
    id: params.id,
    title: "10-Night Japan & Korea Discovery",
    route: "Yokohama to Busan",
    duration: "10 nights",
    ports: ["Yokohama", "Shimizu", "Osaka", "Fukuoka", "Busan", "Jeju"],
    style: "Mixed",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1470214304380-aadaedcfff84?w=1920"
  };

  const itinerary = [
    { day: 1, port: "Yokohama", description: "Embarkation and welcome sushi showcase" },
    { day: 2, port: "Shimizu", description: "Mount Fuji viewing and tea ceremony" },
    { day: 3, port: "At Sea", description: "Onboard wellness workshops and cooking demo" },
    { day: 4, port: "Osaka", description: "Street food tour and nightlife add-ons" },
    { day: 5, port: "Fukuoka", description: "Cultural immersion and ramen tastings" },
    { day: 6, port: "Busan", description: "Temple visits and beach clubs" },
    { day: 7, port: "Jeju", description: "Volcanic island exploration" },
    { day: 8, port: "At Sea", description: "Spa day and mixology classes" },
    { day: 9, port: "Tokyo (via Yokohama)", description: "Optional overland Tokyo experiences" },
    { day: 10, port: "Disembark", description: "Private transfers or post-cruise extensions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
          <p className="uppercase tracking-wide text-sm text-primary-100">Asia Cruises</p>
          <h1 className="text-4xl font-bold mb-2">{cruise.title}</h1>
          <p className="text-xl">{cruise.route} • {cruise.duration}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Route Map</h2>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center text-gray-600">
                Interactive map with ports of call (coming soon)
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2 text-gray-900">Ports of Call</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {cruise.ports.map((port) => (
                    <li key={port}>{port}</li>
                  ))}
                </ul>
              </div>
            </div>

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

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ship & Cabin Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Cabin Types</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Studio interior cabins</li>
                    <li>Ocean-view staterooms</li>
                    <li>Balcony spa suites</li>
                    <li>VIP group villas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900">Amenities</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>International dining halls</li>
                    <li>Onboard kids club & teen lounge</li>
                    <li>Night market inspired rooftop bar</li>
                    <li>Adults-only infinity pool</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Inclusions & Exclusions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Included</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Accommodation & daily housekeeping</li>
                    <li>Daily meals plus speciality tastings</li>
                    <li>Onboard entertainment & classes</li>
                    <li>Port charges and taxes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Not Included</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>International flights</li>
                    <li>Premium shore excursions</li>
                    <li>Travel visas & insurance</li>
                    <li>Gratuities & speciality dining</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <div className="mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {cruise.style}
                </span>
              </div>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-600 mb-2">From {cruise.price}</p>
                <p className="text-sm text-gray-600">per person, double occupancy</p>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>September 2024</option>
                    <option>October 2024</option>
                    <option>November 2024</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cabin Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Studio Interior</option>
                    <option>Ocean View</option>
                    <option>Balcony Suite</option>
                    <option>VIP Group Villa</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors mb-4">
                Book Now
              </button>
              <button className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition-colors mb-4">
                Check Availability
              </button>
              <Link href="/contact" className="block text-center text-sm text-primary-600 hover:text-primary-700 font-semibold">
                Need help? Chat with a cruise specialist →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


