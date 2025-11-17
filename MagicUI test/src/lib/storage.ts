// Simple storage layer using localStorage as a database
// In production, replace with API calls to a real backend

import { Trip, Testimonial } from '@/types';
import tripsDataJson from '@/data/trips.json';
import testimonialsDataJson from '@/data/testimonials.json';

const TRIPS_KEY = 'voyagevista-trips';
const TESTIMONIALS_KEY = 'voyagevista-testimonials';

// Initialize from JSON files on first load
export function initializeStorage() {
  if (!localStorage.getItem(TRIPS_KEY)) {
    localStorage.setItem(TRIPS_KEY, JSON.stringify(tripsDataJson));
  }
  if (!localStorage.getItem(TESTIMONIALS_KEY)) {
    localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonialsDataJson));
  }
}

// Trips
export function getAllTrips(): Trip[] {
  const data = localStorage.getItem(TRIPS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getTripById(id: string): Trip | undefined {
  const trips = getAllTrips();
  return trips.find(t => t.id === id);
}

export function getTripBySlug(slug: string): Trip | undefined {
  const trips = getAllTrips();
  return trips.find(t => t.slug === slug);
}

export function createTrip(trip: Trip): Trip {
  const trips = getAllTrips();
  trips.push(trip);
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
  return trip;
}

export function updateTrip(id: string, updates: Partial<Trip>): Trip | null {
  const trips = getAllTrips();
  const index = trips.findIndex(t => t.id === id);
  if (index === -1) return null;

  trips[index] = { ...trips[index], ...updates };
  localStorage.setItem(TRIPS_KEY, JSON.stringify(trips));
  return trips[index];
}

export function deleteTrip(id: string): boolean {
  const trips = getAllTrips();
  const filtered = trips.filter(t => t.id !== id);
  if (filtered.length === trips.length) return false;

  localStorage.setItem(TRIPS_KEY, JSON.stringify(filtered));
  return true;
}

// Testimonials
export function getAllTestimonials(): Testimonial[] {
  const data = localStorage.getItem(TESTIMONIALS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getTestimonialById(id: string): Testimonial | undefined {
  const testimonials = getAllTestimonials();
  return testimonials.find(t => t.id === id);
}

export function createTestimonial(testimonial: Testimonial): Testimonial {
  const testimonials = getAllTestimonials();
  testimonials.push(testimonial);
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonials));
  return testimonial;
}

export function updateTestimonial(id: string, updates: Partial<Testimonial>): Testimonial | null {
  const testimonials = getAllTestimonials();
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) return null;

  testimonials[index] = { ...testimonials[index], ...updates };
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonials));
  return testimonials[index];
}

export function deleteTestimonial(id: string): boolean {
  const testimonials = getAllTestimonials();
  const filtered = testimonials.filter(t => t.id !== id);
  if (filtered.length === testimonials.length) return false;

  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(filtered));
  return true;
}

// Export/Import functionality
export function exportData() {
  return {
    trips: getAllTrips(),
    testimonials: getAllTestimonials(),
    exportedAt: new Date().toISOString()
  };
}

export function importData(data: { trips: Trip[], testimonials: Testimonial[] }) {
  localStorage.setItem(TRIPS_KEY, JSON.stringify(data.trips));
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(data.testimonials));
}

export function resetToDefault() {
  localStorage.setItem(TRIPS_KEY, JSON.stringify(tripsDataJson));
  localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(testimonialsDataJson));
}
