"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

const mockResults = [
  {
    id: 1,
    title: "Mediterranean Magic Cruise",
    summary: "7 nights | Barcelona to Rome | Family Friendly",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    type: "Cruise",
    region: "Europe",
    tags: ["Family Friendly", "Luxury"],
    durationDays: 7
  },
  {
    id: 2,
    title: "Thailand Beach & Culture Tour",
    summary: "10 days | Bangkok to Phuket | Group Friendly",
    price: "From $899",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    type: "Tour",
    region: "Asia",
    tags: ["Bachelor/Bachelorette", "Adventure"],
    durationDays: 10
  },
  {
    id: 3,
    title: "Family Alps Adventure",
    summary: "8 days | Swiss & Austrian Alps | Family Friendly",
    price: "From $1,199",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    type: "Tour",
    region: "Europe",
    tags: ["Family Friendly"],
    durationDays: 8
  },
  {
    id: 4,
    title: "Bachelor Party Lisbon & Ibiza",
    summary: "5 days | Portugal & Spain | Party Group",
    price: "From $699",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    type: "Tour",
    region: "Europe",
    tags: ["Bachelor/Bachelorette", "Nightlife"],
    durationDays: 5
  },
  {
    id: 5,
    title: "Baltic Capitals Cruise",
    summary: "12 nights | Stockholm to St. Petersburg | Mixed",
    price: "From $1,599",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    type: "Cruise",
    region: "Europe",
    tags: ["Luxury"],
    durationDays: 12
  },
  {
    id: 6,
    title: "Japan & Korea Discovery",
    summary: "10 nights | Yokohama to Busan | Family Friendly",
    price: "From $1,399",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    type: "Cruise",
    region: "Asia",
    tags: ["Family Friendly", "Cultural"],
    durationDays: 10
  }
];

const amenitiesOptions = [
  "Kids Club",
  "Family Cabins",
  "Adult Only Deck",
  "Onboard Wi-Fi",
 "Spa & Wellness",
  "Nightlife"
];

const initialFilters = {
  destination: "",
  travelType: "",
  tripStyle: "",
  duration: "",
  departureDate: "",
  priceRange: "",
  groupSize: "",
  amenities: [] as string[]
};

type QuickFilter = {
  label: string;
  value: string;
  updates: Partial<typeof initialFilters>;
};

const quickFilters: QuickFilter[] = [
  { label: "Family Friendly", value: "family", updates: { tripStyle: "family" } },
  { label: "Bachelor / Bachelorette", value: "bachelor", updates: { tripStyle: "bachelor" } },
  { label: "Europe Cruises", value: "europe-cruise", updates: { destination: "europe", travelType: "cruise" } },
  { label: "Asia Cruises", value: "asia-cruise", updates: { destination: "asia", travelType: "cruise" } }
];

const parsePrice = (value: string) => {
  const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
  return Number.isNaN(numeric) ? 0 : numeric;
};

const tagMatchesStyle = (tags: string[], style: string) => {
  const normalized = style.toLowerCase();
  if (!normalized) return true;
  const lowerTags = tags.map((tag) => tag.toLowerCase());
  if (normalized === "family") return lowerTags.some((tag) => tag.includes("family"));
  if (normalized === "bachelor") return lowerTags.some((tag) => tag.includes("bachelor"));
  if (normalized === "couples") return lowerTags.some((tag) => tag.includes("romance"));
  if (normalized === "solo") return lowerTags.some((tag) => tag.includes("solo"));
  return true;
};

export default function SearchPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("popularity");
  const [showMap, setShowMap] = useState(false);
  const [results] = useState(mockResults);
  const [activeQuickFilter, setActiveQuickFilter] = useState("");

  const filteredResults = useMemo(() => {
    const filtered = results.filter((result) => {
      if (filters.destination && result.region.toLowerCase() !== filters.destination.toLowerCase()) {
        return false;
      }
      if (filters.travelType && result.type.toLowerCase() !== filters.travelType.toLowerCase()) {
        return false;
      }
      if (filters.tripStyle && !tagMatchesStyle(result.tags, filters.tripStyle)) {
        return false;
      }
      if (filters.duration) {
        if (filters.duration === "3-7" && !(result.durationDays >= 3 && result.durationDays <= 7)) {
          return false;
        }
        if (filters.duration === "8-14" && !(result.durationDays >= 8 && result.durationDays <= 14)) {
          return false;
        }
        if (filters.duration === "15+" && result.durationDays < 15) {
          return false;
        }
      }
      if (filters.priceRange) {
        const price = parsePrice(result.price);
        if (filters.priceRange === "0-1000" && price > 1000) return false;
        if (filters.priceRange === "1000-1500" && (price < 1000 || price > 1500)) return false;
        if (filters.priceRange === "1500+" && price < 1500) return false;
      }
      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price-low") return parsePrice(a.price) - parsePrice(b.price);
      if (sortBy === "price-high") return parsePrice(b.price) - parsePrice(a.price);
      if (sortBy === "duration") return a.durationDays - b.durationDays;
      return 0;
    });

    return sorted;
  }, [results, filters, sortBy]);

  const toggleAmenity = (amenity: string) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Search & Browse</p>
            <h1 className="text-3xl font-bold text-gray-900">Find tours, cruises & custom itineraries</h1>
            <p className="text-gray-600">Use filters to refine by destination, date, style and onboard amenities.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {quickFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => {
                  setFilters((prev) => ({ ...prev, ...filter.updates }));
                  setActiveQuickFilter(filter.value);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  activeQuickFilter === filter.value
                    ? "bg-primary-600 text-white border-primary-600"
                    : "border-gray-300 text-gray-700 hover:border-primary-400"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Filters</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <select
                    value={filters.destination}
                    onChange={(e) => setFilters({...filters, destination: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Destinations</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travel Type</label>
                  <select
                    value={filters.travelType}
                    onChange={(e) => setFilters({...filters, travelType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Types</option>
                    <option value="tour">Tour</option>
                    <option value="cruise">Cruise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trip Style</label>
                  <select
                    value={filters.tripStyle}
                    onChange={(e) => setFilters({...filters, tripStyle: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Styles</option>
                    <option value="family">Family</option>
                    <option value="bachelor">Bachelor/Bachelorette</option>
                    <option value="couples">Couples</option>
                    <option value="solo">Solo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters({...filters, duration: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Any Duration</option>
                    <option value="3-7">3-7 days</option>
                    <option value="8-14">8-14 days</option>
                    <option value="15+">15+ days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                  <input
                    type="date"
                    value={filters.departureDate}
                    onChange={(e) => setFilters({...filters, departureDate: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Any Price</option>
                    <option value="0-1000">Under $1,000</option>
                    <option value="1000-1500">$1,000 - $1,500</option>
                    <option value="1500+">$1,500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                  <input
                    type="number"
                    placeholder="Number of travelers"
                    value={filters.groupSize}
                    onChange={(e) => setFilters({...filters, groupSize: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div className="grid grid-cols-2 gap-2">
                    {amenitiesOptions.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="text-primary-600 focus:ring-primary-500 rounded"
                        />
                        {amenity}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <p className="text-gray-600">{filteredResults.length} trips found</p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowMap(!showMap)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold ${
                    showMap
                      ? "bg-primary-600 text-white"
                      : "border border-gray-300 text-gray-700 hover:border-primary-400"
                  }`}
                >
                  {showMap ? "Hide Map" : "Show Map"}
                </button>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Duration</option>
                    <option value="newest">Newest</option>
                    <option value="date">Departure Date</option>
                  </select>
                </div>
              </div>
            </div>

            {showMap && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-sm uppercase text-gray-500 mb-2">Map view</p>
                <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-600">
                  Interactive map showing trip start/end points (coming soon)
                </div>
              </div>
            )}

            <div className="space-y-6">
              {filteredResults.map((result) => (
                <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-48 md:h-full md:min-h-[240px]">
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 25vw, 100vw"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-semibold mr-2">
                            {result.type}
                          </span>
                          <span className="text-sm text-gray-600">{result.region}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary-600">{result.price}</div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{result.title}</h3>
                      <p className="text-gray-600 mb-4">{result.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/tours/${result.id}`}
                        className="inline-block bg-primary-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Previous</button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

