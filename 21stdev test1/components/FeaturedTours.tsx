import Image from "next/image";
import Link from "next/link";

const featuredTours = [
  {
    id: 1,
    title: "Mediterranean Magic Cruise",
    tagline: "7 nights exploring the best of the Mediterranean",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    type: "Cruise",
    region: "Europe"
  },
  {
    id: 2,
    title: "Thailand Beach & Culture Tour",
    tagline: "10 days of beaches, temples, and authentic experiences",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    type: "Tour",
    region: "Asia"
  },
  {
    id: 3,
    title: "Family Alps Adventure",
    tagline: "Perfect family getaway in the Swiss and Austrian Alps",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    type: "Tour",
    region: "Europe"
  },
  {
    id: 4,
    title: "Bachelor Party Lisbon & Ibiza",
    tagline: "Unforgettable nights in Portugal and Spain",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    type: "Tour",
    region: "Europe"
  },
  {
    id: 5,
    title: "Baltic Capitals Cruise",
    tagline: "12 nights through Stockholm, Helsinki, and St. Petersburg",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    type: "Cruise",
    region: "Europe"
  },
  {
    id: 6,
    title: "Japan & Korea Discovery",
    tagline: "10 nights exploring Tokyo, Seoul, and coastal gems",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    type: "Cruise",
    region: "Asia"
  }
];

export default function FeaturedTours() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Tours & Cruises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.tagline}</p>
                <Link
                  href={`/tours/${tour.id}`}
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

