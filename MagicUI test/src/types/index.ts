export type TripStyle = 'family' | 'bachelor' | 'bachelorette' | 'couples' | 'solo' | 'mixed';
export type TripType = 'tour' | 'cruise';
export type Region = 'europe' | 'asia';

export interface Trip {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  summary?: string;
  type?: TripType;
  category?: string;
  region?: Region;
  style?: TripStyle[];
  duration: string; // e.g., "7 Days, 6 Nights"
  price: number;
  image?: string; // Single image for admin
  images?: string[];
  destination?: string;
  countries?: string[];
  featured: boolean;
  groupSize?: {
    min: number;
    max: number;
  };
  amenities?: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: DayItinerary[];
  route?: { from: string; to: string } | RoutePoint[];
  ship?: { name: string; capacity: number };
  shipInfo?: ShipInfo;
  availableDates?: string[];
  rating?: number;
  reviewCount?: number;
  tags: string[];
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities?: string[];
  meals?: string[];
  accommodation?: string;
}

export interface RoutePoint {
  location: string;
  country: string;
  arrivalTime?: string;
  departureTime?: string;
  highlights: string[];
}

export interface ShipInfo {
  name: string;
  class: string;
  cabinTypes: string[];
  dining: string[];
  entertainment: string[];
  kidsClub?: boolean;
  adultOnly?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string; // Main testimonial text
  comment?: string; // Alternative field
  tripName: string; // Name of the trip
  tripId?: string;
  image: string;
  date?: string;
}

export interface SearchFilters {
  destination?: string;
  type?: TripType;
  style?: TripStyle;
  duration?: {
    min: number;
    max: number;
  };
  price?: {
    min: number;
    max: number;
  };
  date?: string;
  groupSize?: number;
  region?: Region;
}
