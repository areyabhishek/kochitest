import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Families",
    description: "Safe, fun, and flexible trips designed for families",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    link: "/trips/family"
  },
  {
    title: "Bachelor / Bachelorette",
    description: "Celebrate and make memories with your group",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
    link: "/trips/bachelor"
  },
  {
    title: "Europe Cruises",
    description: "Explore iconic coastlines, rivers, and islands",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    link: "/cruises/europe"
  },
  {
    title: "Asia Cruises",
    description: "Discover exotic coastlines and vibrant cultures",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    link: "/cruises/asia"
  }
];

export default function TripCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Trip Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.link} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm mb-4">{category.description}</p>
                    <span className="inline-block bg-primary-600 px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                      View Trips →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

