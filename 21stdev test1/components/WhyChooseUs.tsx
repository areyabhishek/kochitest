import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Our family cruise to the Mediterranean was absolutely perfect. The kids loved the onboard activities, and we enjoyed the shore excursions. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    location: "Los Angeles, USA",
    rating: 5,
    text: "The bachelor party trip to Lisbon and Ibiza exceeded all expectations. Everything was perfectly organized, and we had the time of our lives!",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emily Rodriguez",
    location: "Chicago, USA",
    rating: 5,
    text: "VoyageVista made our dream trip to Thailand a reality. The attention to detail and customer service was outstanding throughout our journey.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const partnerBadges = ["CLIA Certified", "Virtuoso Member", "ASTA Verified", "Trusted by 50K+ Travelers"];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Why Choose Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-4">
              At VoyageVista Tours, we&apos;ve been crafting unforgettable travel experiences for over a decade. 
              Our mission is to connect travelers with authentic, hand-picked adventures across Europe and Asia.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              What sets us apart? We&apos;re not just another travel agency. We&apos;re local experts who know every 
              hidden gem, every must-see destination, and every perfect moment waiting to be discovered. 
              Our trusted partnerships with top cruise lines and tour operators ensure you get the best 
              experiences at the best prices.
            </p>
            <p className="text-lg text-gray-700">
              We specialize in creating trips that matter - whether it&apos;s a family vacation that creates 
              lasting memories, a bachelor or bachelorette celebration, or a romantic getaway. Every 
              itinerary is carefully curated, every detail thoughtfully planned.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white p-6 rounded-lg shadow-md">
            <div>
              <p className="text-2xl font-bold text-primary-600">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-600">50K+</p>
              <p className="text-sm text-gray-600">Happy Travelers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-600">500+</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-600">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {partnerBadges.map((badge) => (
              <div key={badge} className="px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 bg-white">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

