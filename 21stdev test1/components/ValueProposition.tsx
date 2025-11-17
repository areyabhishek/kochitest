export default function ValueProposition() {
  const features = [
    {
      icon: "🌍",
      title: "Hand-picked tours in Europe & Asia",
      description: "Curated selection of the best destinations and experiences"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family friendly & group trips",
      description: "Perfect for families, friends, and special celebrations"
    },
    {
      icon: "💬",
      title: "Dedicated support 24/7",
      description: "Round-the-clock assistance whenever you need it"
    },
    {
      icon: "💰",
      title: "Best price guarantee + easy bookings",
      description: "Competitive prices with flexible payment options"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

