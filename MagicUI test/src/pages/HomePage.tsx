import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Newsletter from '@/components/Newsletter';
import TripCard from '@/components/TripCard';
import BlurFade from '@/components/magicui/blur-fade';
import AnimatedGradientText from '@/components/magicui/animated-gradient-text';
import { Search, Ship, Users, HeadphonesIcon, Award, Star } from 'lucide-react';
import tripsData from '@/data/trips.json';
import testimonialsData from '@/data/testimonials.json';
import { Trip, Testimonial } from '@/types';

const trips: Trip[] = tripsData as Trip[];
const testimonials: Testimonial[] = testimonialsData as Testimonial[];

export default function HomePage() {
  const [searchDestination, setSearchDestination] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchDuration, setSearchDuration] = useState('');
  const [searchGroupSize, setSearchGroupSize] = useState('');

  const featuredTrips = trips.filter(trip => trip.featured);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchDestination) params.append('destination', searchDestination);
    if (searchType) params.append('type', searchType);
    if (searchDuration) params.append('duration', searchDuration);
    if (searchGroupSize) params.append('groupSize', searchGroupSize);

    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <BlurFade delay={0.2} inView>
            <AnimatedGradientText className="mb-6">
              <span className="text-sm">✨ Discover Your Next Adventure</span>
            </AnimatedGradientText>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Explore the world.<br />One trip at a time.
            </h1>
          </BlurFade>

          <BlurFade delay={0.6} inView>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Browse tours, cruises and tailor-made trips for families, friends and bachelor/bachelorette groups.
            </p>
          </BlurFade>

          <BlurFade delay={0.8} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/search">
                <Button size="lg" className="text-lg px-8">
                  Search Tours
                </Button>
              </Link>
              <Link to="/cruises/europe">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  View Cruises
                </Button>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto shadow-lg">
            <div style={{ padding: 'var(--card-padding)' }}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <Input
                  placeholder="Destination"
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                />
                <Select value={searchType} onValueChange={setSearchType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tour / Cruise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tour">Tour</SelectItem>
                    <SelectItem value="cruise">Cruise</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={searchDuration} onValueChange={setSearchDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-7">3-7 days</SelectItem>
                    <SelectItem value="8-14">8-14 days</SelectItem>
                    <SelectItem value="15+">15+ days</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Group Size"
                  type="number"
                  value={searchGroupSize}
                  onChange={(e) => setSearchGroupSize(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Link to="/search?style=family">
                  <Button variant="outline" size="sm">Family friendly</Button>
                </Link>
                <Link to="/search?style=bachelor">
                  <Button variant="outline" size="sm">Bachelor/Bachelorette</Button>
                </Link>
                <Link to="/cruises/europe">
                  <Button variant="outline" size="sm">Europe cruises</Button>
                </Link>
                <Link to="/cruises/asia">
                  <Button variant="outline" size="sm">Asia cruises</Button>
                </Link>
              </div>

              <Button onClick={handleSearch} className="w-full" size="lg">
                <Search className="mr-2 h-5 w-5" />
                Search Trips
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BlurFade delay={0.1} inView>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Ship className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Hand-picked Tours</h3>
                <p className="text-muted-foreground">Curated experiences in Europe & Asia</p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Group Trips</h3>
                <p className="text-muted-foreground">Family friendly & group adventures</p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <HeadphonesIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Dedicated support anytime, anywhere</p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Best Price</h3>
                <p className="text-muted-foreground">Price guarantee & easy bookings</p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Tours & Cruises */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Tours & Cruises</h2>
            <p className="text-xl text-muted-foreground">Discover our handpicked selection of unforgettable experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrips.map((trip, index) => (
              <BlurFade key={trip.id} delay={0.1 * index} inView>
                <TripCard trip={trip} />
              </BlurFade>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/search">
              <Button size="lg">View All Trips</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose VoyageVista Tours?</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-8">
                Since 2010, VoyageVista Tours has been creating unforgettable travel experiences for thousands of happy travelers.
                We're not just another travel company – we're passionate explorers who believe in authentic experiences, local expertise,
                and creating memories that last a lifetime.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of travel experts handpicks every destination, partners with the best local guides, and ensures every detail
                is perfect. From family adventures to bachelor parties, from Mediterranean cruises to Asian beach escapes – we've got you covered.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-muted-foreground">Happy Travelers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Destinations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Browse by Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/trips/family" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop"
                    alt="Family Trips"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Family Trips</h3>
                    <p className="text-sm">Safe, fun, and unforgettable</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/trips/bachelor-bachelorette" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop"
                    alt="Bachelor/Bachelorette"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Bachelor/Bachelorette</h3>
                    <p className="text-sm">Epic celebrations</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/cruises/europe" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1545628865-68b8f5c65a04?w=600&auto=format&fit=crop"
                    alt="Europe Cruises"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Europe Cruises</h3>
                    <p className="text-sm">Iconic coastlines & cities</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/cruises/asia" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&auto=format&fit=crop"
                    alt="Asia Cruises"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">Asia Cruises</h3>
                    <p className="text-sm">Exotic islands & cultures</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <BlurFade key={testimonial.id} delay={0.1 * index} inView>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
