import Image from "next/image";
import Link from "next/link";

const featuredCruises = [
  {
    id: 1,
    title: "7-Night Mediterranean Gems",
    route: "Barcelona to Rome",
    duration: "7 nights",
    summary: "Explore the stunning coastlines of Spain, France, and Italy. Visit iconic ports including Marseille, Nice, and Florence.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    price: "From $1,299",
    style: "Family Friendly"
  },
  {
    id: 2,
    title: "12-Night Baltic Capitals",
    route: "Stockholm to St. Petersburg",
    duration: "12 nights",
    summary: "Discover the historic capitals of Northern Europe. Experience the beauty of Stockholm, Helsinki, Tallinn, and St. Petersburg.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    price: "From $1,599",
    style: "Mixed"
  },
  {
    id: 3,
    title: "10-Night Greek Islands & Turkey",
    route: "Athens to Istanbul",
    duration: "10 nights",
    summary: "Island-hop through the Greek Isles and explore the Turkish coast. Perfect blend of ancient history and stunning beaches.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    price: "From $1,399",
    style: "Family Friendly"
  },
  {
    id: 4,
    title: "8-Night Norwegian Fjords",
    route: "Bergen to Tromsø",
    duration: "8 nights",
    summary: "Witness the breathtaking beauty of Norway&apos;s fjords. Experience the midnight sun and pristine Arctic landscapes.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    price: "From $1,499",
    style: "Mixed"
  }
];

export default function EuropeCruisesPage() {
  return (
    <div className="min-h-screen">
      {/* Intro Panel */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920')"
          }}
        ></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Europe Cruises</h1>
          <p className="text-xl text-gray-100">
            Explore Europe&apos;s iconic coastlines, rivers and islands aboard our cruises. 
            From the Mediterranean to the Baltic, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Featured Cruises */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Featured Europe Cruises</h2>
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
                      href={`/cruises/europe/${cruise.id}`}
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

      {/* Why Europe Cruises with Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Europe Cruises with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Top Ships & Amenities</h3>
              <p className="text-gray-600">
                We partner with the finest cruise lines offering state-of-the-art ships with world-class dining, 
                entertainment, and accommodations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Curated Shore Excursions</h3>
              <p className="text-gray-600">
                Our hand-picked shore excursions take you beyond the tourist trails to authentic local experiences 
                and hidden gems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Family & Kids Programs</h3>
              <p className="text-gray-600">
                Dedicated kids clubs, family-friendly cabins, and activities designed to keep children engaged 
                while parents relax.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Adult Nightlife Options</h3>
              <p className="text-gray-600">
                For bachelor/bachelorette groups, we offer adult-only sections, VIP experiences, and onboard 
                party options.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Trust & Safety:</strong> Licensed cruise operator with 24/7 customer support and flexible 
              cancellation policies. Your peace of mind is our priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

