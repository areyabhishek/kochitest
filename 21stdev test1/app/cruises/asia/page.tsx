import Image from "next/image";
import Link from "next/link";

const featuredCruises = [
  {
    id: 1,
    title: "5-Night Thai Islands Cruise",
    route: "Bangkok to Phuket",
    duration: "5 nights",
    summary: "Island-hop through the Gulf of Thailand with stops in Koh Samui, Koh Phangan and Phuket.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    price: "From $1,049",
    style: "Family Friendly"
  },
  {
    id: 2,
    title: "10-Night Japan & Korea Discovery",
    route: "Yokohama to Busan",
    duration: "10 nights",
    summary: "Sail between Japan and South Korea with immersive cultural excursions in Tokyo, Kyoto and Busan.",
    image: "https://images.unsplash.com/photo-1470214304380-aadaedcfff84?w=800",
    price: "From $1,499",
    style: "Mixed"
  },
  {
    id: 3,
    title: "8-Night Indian Ocean Escape",
    route: "Singapore to Sri Lanka",
    duration: "8 nights",
    summary: "Experience the best of Southeast Asia with tropical beaches, street food tours and UNESCO sites.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    price: "From $1,299",
    style: "Bachelor/Bachelorette"
  },
  {
    id: 4,
    title: "7-Night Vietnam Coastal Voyage",
    route: "Ho Chi Minh City to Ha Long Bay",
    duration: "7 nights",
    summary: "Sail north along Vietnam’s coastline with overnight Ha Long Bay cruising and Mekong Delta excursions.",
    image: "https://images.unsplash.com/photo-1494475673543-6a6a27143b13?w=800",
    price: "From $1,199",
    style: "Family Friendly"
  }
];

export default function AsiaCruisesPage() {
  return (
    <div className="min-h-screen">
      {/* Intro Panel */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920')"
          }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Asia Cruises</h1>
          <p className="text-xl text-gray-100">
            Discover exotic coastlines, island-hopping adventures and vibrant cultures aboard our Asia cruise itineraries.
          </p>
        </div>
      </section>

      {/* Featured Cruises */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Asia Cruises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCruises.map((cruise) => (
              <div key={cruise.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={cruise.image}
                    alt={cruise.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {cruise.style}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{cruise.title}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{cruise.route} • {cruise.duration}</p>
                  <p className="text-gray-600 mb-4">{cruise.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">{cruise.price}</span>
                    <Link
                      href={`/cruises/asia/${cruise.id}`}
                      className="bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Asia Cruises */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Asia Cruises with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cultural Immersion</h3>
              <p className="text-gray-600">
                Guided shore excursions that spotlight street food tours, temple visits and local artisans across Southeast Asia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Adventure & Relaxation</h3>
              <p className="text-gray-600">
                From snorkelling coral reefs to spa days onboard, we balance adrenaline and calm for every travel style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Family & Group Perks</h3>
              <p className="text-gray-600">
                Dedicated kids clubs, interconnecting cabins and private lounge access for bachelor/bachelorette celebrations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Safety & Support</h3>
              <p className="text-gray-600">
                Visa guidance, monsoon-season monitoring and 24/7 travel concierges keep every sailing smooth and safe.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Trusted Partners:</strong> Licensed Asia cruise operators, flexible cancellation windows and local guides in every port.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


