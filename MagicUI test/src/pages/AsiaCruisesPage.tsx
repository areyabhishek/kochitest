import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TripCard from '@/components/TripCard';
import BlurFade from '@/components/magicui/blur-fade';
import { Ship, Shield, Users, Award } from 'lucide-react';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types';

const trips: Trip[] = tripsData as Trip[];
const asiaCruises = trips.filter(trip => trip.type === 'cruise' && trip.region === 'asia');

export default function AsiaCruisesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Asia Cruises
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover exotic coastlines, island-hopping adventures and vibrant cultures aboard our Asia cruise itineraries
              — from Southeast Asia to the Indian Ocean.
            </p>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <Link to="/search?type=cruise&region=asia">
              <Button size="lg" className="text-lg px-8">
                View All Asia Cruises
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Experience Asia from the Water</h2>
            <p className="text-lg text-muted-foreground">
              Embark on an unforgettable journey through Asia's most stunning destinations. From the tropical
              islands of Thailand to the cultural riches of Japan and Korea, our Asian cruises offer the perfect
              blend of adventure, relaxation, and cultural discovery. Experience pristine beaches, ancient temples,
              bustling markets, and world-class cuisine.
            </p>
          </div>

          {/* Why Choose Our Asia Cruises */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <BlurFade delay={0.1} inView>
              <Card className="text-center p-6">
                <Ship className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Modern Vessels</h3>
                <p className="text-sm text-muted-foreground">
                  Well-appointed ships designed for tropical cruising
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Cultural Experiences</h3>
                <p className="text-sm text-muted-foreground">
                  Authentic local encounters and cultural workshops
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="text-center p-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Adventure Activities</h3>
                <p className="text-sm text-muted-foreground">
                  Snorkeling, diving, and exciting shore excursions
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Experienced crews with local knowledge and expertise
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Cruises */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Asia Cruises</h2>
            <p className="text-xl text-muted-foreground">
              Explore our handpicked selection of Asian cruise itineraries
            </p>
          </div>

          {asiaCruises.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {asiaCruises.map((cruise, index) => (
                <BlurFade key={cruise.id} delay={0.1 * index} inView>
                  <TripCard trip={cruise} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No Asia cruises available at the moment. Check back soon!
              </p>
            </Card>
          )}

          <div className="text-center mt-12">
            <Link to="/search?type=cruise&region=asia">
              <Button size="lg">Browse All Asia Cruises</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Popular Asian Cruise Destinations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&auto=format&fit=crop"
                    alt="Thailand"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Thai Islands</h3>
                    <p className="text-sm">Phuket, Koh Samui, Phi Phi</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Paradise islands with crystal-clear waters, white sand beaches, and vibrant nightlife.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format&fit=crop"
                    alt="Japan Korea"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Japan & Korea</h3>
                    <p className="text-sm">Tokyo, Kyoto, Seoul, Busan</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Immerse in rich culture, cutting-edge cities, and timeless traditions of East Asia.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop"
                    alt="Southeast Asia"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Southeast Asia</h3>
                    <p className="text-sm">Vietnam, Singapore, Indonesia</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Exotic cultures, delicious cuisine, and stunning tropical landscapes await.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Asia Cruise Travel Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground">
                    October to April is ideal for most Asian cruises, avoiding monsoon season and offering
                    pleasant weather. December to February is peak season with higher prices but excellent conditions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Visa Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    Check visa requirements for each country on your itinerary. Some countries offer visa-on-arrival
                    for cruise passengers, while others require advance application.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What to Pack</h3>
                  <p className="text-sm text-muted-foreground">
                    Light, breathable clothing, sunscreen, insect repellent, comfortable walking shoes, and modest
                    attire for temple visits. Don't forget swimwear and snorkel gear!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Health & Safety</h3>
                  <p className="text-sm text-muted-foreground">
                    Consult your doctor about recommended vaccinations. Bring prescription medications and a basic
                    first aid kit. Stay hydrated and use sun protection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Asian Adventure?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your Asian cruise today and discover the wonders of the East
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search?type=cruise&region=asia">
              <Button size="lg" variant="secondary">
                View All Cruises
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
