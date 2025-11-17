import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TripCard from '@/components/TripCard';
import BlurFade from '@/components/magicui/blur-fade';
import { Heart, Shield, Baby, Smile } from 'lucide-react';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types';

const trips: Trip[] = tripsData as Trip[];
const familyTrips = trips.filter(trip => trip.style.includes('family'));

export default function FamilyTripsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Family-Friendly Trips
            </h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Travelling with kids? We design trips with you in mind — safe, fun, flexible, and full of memories
              that will last a lifetime.
            </p>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <Link to="/search?style=family">
              <Button size="lg" className="text-lg px-8">
                View All Family Trips
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Why Choose Our Family Trips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Creating Magical Family Memories</h2>
            <p className="text-lg text-muted-foreground">
              We understand that family travel is special. Our family-friendly trips are carefully designed with
              children of all ages in mind, ensuring parents can relax while kids have the adventure of a lifetime.
              From educational cultural experiences to exciting outdoor activities, we've thought of everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <BlurFade delay={0.1} inView>
              <Card className="text-center p-6">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Vetted accommodations, experienced guides, and safe activities
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="text-center p-6">
                <Baby className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">All Ages Welcome</h3>
                <p className="text-sm text-muted-foreground">
                  Activities suitable for toddlers to teenagers
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="text-center p-6">
                <Smile className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Fun & Educational</h3>
                <p className="text-sm text-muted-foreground">
                  Learning experiences disguised as adventures
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="text-center p-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Flexible Pacing</h3>
                <p className="text-sm text-muted-foreground">
                  Shorter travel days with plenty of breaks
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Family Trips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Family Adventures</h2>
            <p className="text-xl text-muted-foreground">
              Handpicked trips perfect for families
            </p>
          </div>

          {familyTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familyTrips.map((trip, index) => (
                <BlurFade key={trip.id} delay={0.1 * index} inView>
                  <TripCard trip={trip} />
                </BlurFade>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No family trips available at the moment. Check back soon!
              </p>
            </Card>
          )}

          <div className="text-center mt-12">
            <Link to="/search?style=family">
              <Button size="lg">Browse All Family Trips</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Makes Our Family Trips Special</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlurFade delay={0.1} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Family-Friendly Accommodations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Family rooms and connecting rooms available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Hotels with pools and play areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Child-friendly meal options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Safe, enclosed properties</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Age-Appropriate Activities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Interactive cultural experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Adventure activities for all skill levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Educational workshops and classes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Wildlife and nature experiences</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Experienced Family Guides</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Guides trained in working with children</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Storytelling and interactive learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Flexible schedules for nap times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Patient, friendly, and engaging</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Peace of Mind for Parents</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>24/7 emergency support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Medical facilities information provided</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Babysitting services available (selected locations)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Travel insurance recommendations</span>
                    </li>
                  </ul>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Families Are Saying</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=9"
                    alt="Lisa Anderson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Lisa Anderson</div>
                    <div className="text-sm text-muted-foreground">Toronto, Canada</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Our family had an incredible time in the Swiss Alps! Everything was perfectly tailored for kids.
                  Our kids still talk about the cable cars and the chocolate making workshop!"
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-muted-foreground">San Francisco, USA</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Thailand was a dream come true! The tour was well-organized, guides were amazing with the kids,
                  and we got to experience both culture and beaches. Best family vacation ever!"
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">London, UK</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The Mediterranean cruise was perfect for our family. Kids club kept our children entertained
                  while we relaxed, and family excursions were educational and fun!"
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Family Adventure?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Create memories that will last a lifetime with our family-friendly tours and cruises
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/search?style=family">
              <Button size="lg" variant="secondary">
                View All Family Trips
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Talk to a Family Travel Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
