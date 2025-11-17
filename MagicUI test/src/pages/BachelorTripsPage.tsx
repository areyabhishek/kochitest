import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TripCard from '@/components/TripCard';
import BlurFade from '@/components/magicui/blur-fade';
import { PartyPopper, Wine, Palmtree, Users } from 'lucide-react';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types';

const trips: Trip[] = tripsData as Trip[];
const bachelorTrips = trips.filter(trip =>
  trip.style.includes('bachelor') || trip.style.includes('bachelorette')
);

export default function BachelorTripsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor & Bachelorette Trips
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Celebrate, explore and make memories — epic trips made for bachelor and bachelorette groups.
              The ultimate party experiences before the big day!
            </p>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <Link to="/search?style=bachelor">
              <Button size="lg" className="text-lg px-8">
                View All Party Trips
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Why Choose Our Bachelor/Bachelorette Trips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Ultimate Pre-Wedding Celebration</h2>
            <p className="text-lg text-muted-foreground">
              We specialize in creating unforgettable bachelor and bachelorette experiences. From VIP club access
              and private villas to adventure activities and beach clubs, we handle all the details so you can
              focus on celebrating with your crew. Whether you want wild nights in Ibiza or laid-back beach vibes
              in Bali, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <BlurFade delay={0.1} inView>
              <Card className="text-center p-6">
                <PartyPopper className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Epic Parties</h3>
                <p className="text-sm text-muted-foreground">
                  VIP club access, beach clubs, and exclusive venues
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="text-center p-6">
                <Wine className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Premium Experiences</h3>
                <p className="text-sm text-muted-foreground">
                  Private villas, boat parties, and VIP treatment
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="text-center p-6">
                <Palmtree className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Amazing Locations</h3>
                <p className="text-sm text-muted-foreground">
                  Top party destinations across Europe and Asia
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Group Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Designed for groups of 6-20, all organized for you
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Party Trips</h2>
            <p className="text-xl text-muted-foreground">
              Our most popular bachelor and bachelorette getaways
            </p>
          </div>

          {bachelorTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bachelorTrips.map((trip, index) => (
                <BlurFade key={trip.id} delay={0.1 * index} inView>
                  <TripCard trip={trip} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No bachelor/bachelorette trips available at the moment. Check back soon!
              </p>
            </Card>
          )}

          <div className="text-center mt-12">
            <Link to="/search?style=bachelor">
              <Button size="lg">Browse All Party Trips</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Top Party Destinations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&auto=format&fit=crop"
                    alt="Ibiza"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Ibiza, Spain</h3>
                    <p className="text-sm">The World's Party Capital</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Legendary clubs, beach parties, and sunset sessions. The ultimate destination for epic celebrations.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop"
                    alt="Bali"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Bali, Indonesia</h3>
                    <p className="text-sm">Tropical Party Paradise</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Luxury villas, beach clubs, and island vibes. Perfect mix of relaxation and celebration.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=600&auto=format&fit=crop"
                    alt="Barcelona"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">Barcelona, Spain</h3>
                    <p className="text-sm">Culture Meets Nightlife</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    Rooftop bars, beach clubs, and Gothic Quarter bar crawls. City and beach combined.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included in Our Party Packages</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlurFade delay={0.1} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Accommodation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Private villas or party-friendly hotels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Central locations near nightlife</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Pools and entertainment areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Group-friendly layouts</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">VIP Access</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Skip-the-line club entry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Reserved tables at top venues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Beach club day passes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Priority service and special perks</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Activities & Experiences</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Boat parties and cruises</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Adventure activities (paintball, go-karting)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Group dinners and bar crawls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Photo packages to capture memories</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Hassle-Free Organization</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>All transfers arranged</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Local party coordinator/guide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Flexible itinerary options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>24/7 emergency support</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Epic Reviews from Epic Groups</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=15"
                    alt="David Martinez"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">David Martinez</div>
                    <div className="text-sm text-muted-foreground">Madrid, Spain</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Epic bachelor party! Lisbon and Ibiza were the perfect combo. VIP club access, amazing villa,
                  and the boat party was legendary. Best week of our lives!"
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=10"
                    alt="Rachel Thompson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Rachel Thompson</div>
                    <div className="text-sm text-muted-foreground">New York, USA</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "BEST bachelorette party ever! Bali was magical - stunning villa, amazing beach clubs,
                  and perfect organization. The bride loved every minute!"
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=13"
                    alt="James Wilson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">James Wilson</div>
                    <div className="text-sm text-muted-foreground">London, UK</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "VoyageVista made planning our bachelor trip so easy. Everything was sorted - clubs, boats,
                  activities. We just showed up and had the time of our lives!"
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan the Ultimate Party?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us handle the details while you focus on celebrating. Get a custom quote for your group today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search?style=bachelor">
              <Button size="lg" variant="secondary">
                View All Party Trips
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
