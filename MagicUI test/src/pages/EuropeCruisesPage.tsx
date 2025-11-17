import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TripCard from '@/components/TripCard';
import BlurFade from '@/components/magicui/blur-fade';
import { Ship, Shield, Users, Award } from 'lucide-react';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types';

const trips: Trip[] = tripsData as Trip[];
const europeCruises = trips.filter(trip => trip.type === 'cruise' && trip.region === 'europe');

export default function EuropeCruisesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1545628865-68b8f5c65a04?w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Europe Cruises
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore Europe's iconic coastlines, rivers and islands aboard our luxury cruises.
              From the Mediterranean to the Baltic, we've got you covered.
            </p>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <Link to="/search?type=cruise&region=europe">
              <Button size="lg" className="text-lg px-8">
                View All Europe Cruises
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Discover Europe by Sea</h2>
            <p className="text-lg text-muted-foreground">
              Experience the magic of Europe from a unique perspective. Our carefully curated cruise itineraries
              take you to historic ports, stunning coastlines, and vibrant cities across the Mediterranean, Baltic,
              and Atlantic. Whether you're seeking cultural immersion, family fun, or romantic getaways, our European
              cruises offer something for everyone.
            </p>
          </div>

          {/* Why Choose Our Europe Cruises */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <BlurFade delay={0.1} inView>
              <Card className="text-center p-6">
                <Ship className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Premium Ships</h3>
                <p className="text-sm text-muted-foreground">
                  Modern, well-equipped vessels with excellent amenities
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Family Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Kids clubs, family cabins, and age-appropriate activities
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="text-center p-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Curated Excursions</h3>
                <p className="text-sm text-muted-foreground">
                  Expert-guided shore excursions at every port
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Licensed & Safe</h3>
                <p className="text-sm text-muted-foreground">
                  Fully licensed operator with flexible cancellation
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
            <h2 className="text-4xl font-bold mb-4">Featured Europe Cruises</h2>
            <p className="text-xl text-muted-foreground">
              Explore our handpicked selection of European cruise itineraries
            </p>
          </div>

          {europeCruises.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {europeCruises.map((cruise, index) => (
                <BlurFade key={cruise.id} delay={0.1 * index} inView>
                  <TripCard trip={cruise} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No Europe cruises available at the moment. Check back soon!
              </p>
            </Card>
          )}

          <div className="text-center mt-12">
            <Link to="/search?type=cruise&region=europe">
              <Button size="lg">Browse All Europe Cruises</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Popular European Cruise Destinations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&auto=format&fit=crop"
                    alt="Mediterranean"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Mediterranean</h3>
                    <p className="text-sm">Spain, France, Italy, Greece</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Discover ancient ruins, stunning beaches, and vibrant cities along the Mediterranean coast.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&auto=format&fit=crop"
                    alt="Baltic"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Baltic Sea</h3>
                    <p className="text-sm">Scandinavia, Russia, Germany</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Explore Northern Europe's magnificent capitals and medieval towns on a Baltic cruise.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop"
                    alt="Norwegian Fjords"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Norwegian Fjords</h3>
                    <p className="text-sm">Norway's Dramatic Coastline</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Witness breathtaking fjords, cascading waterfalls, and pristine Nordic landscapes.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Set Sail?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your European cruise adventure today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search?type=cruise&region=europe">
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
