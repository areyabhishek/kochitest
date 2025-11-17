import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Star, Clock, Check, X, Ship, Plane } from 'lucide-react';
import tripsData from '@/data/trips.json';
import { Trip } from '@/types';
import BlurFade from '@/components/magicui/blur-fade';

const trips: Trip[] = tripsData as Trip[];

export default function TripDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const trip = trips.find(t => t.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');

  if (!trip) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Trip Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">The trip you're looking for doesn't exist.</p>
        <Link to="/search">
          <Button>Browse All Trips</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Gallery */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src={trip.images[selectedImage]}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {trip.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {trip.images.slice(0, 4).map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-24 rounded-lg overflow-hidden cursor-pointer ${
                        selectedImage === index ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image} alt={`${trip.title} ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <BlurFade delay={0.2}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-primary">From ${trip.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-5 w-5 fill-current" />
                        <span className="text-lg ml-1 font-semibold">{trip.rating}</span>
                        <span className="text-sm text-muted-foreground ml-1">({trip.reviewCount})</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{trip.destination}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{trip.duration} days</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>{trip.groupSize.min}-{trip.groupSize.max} people</span>
                      </div>
                      <div className="flex items-center text-sm">
                        {trip.type === 'cruise' ? (
                          <Ship className="h-4 w-4 mr-2 text-primary" />
                        ) : (
                          <Plane className="h-4 w-4 mr-2 text-primary" />
                        )}
                        <span className="capitalize">{trip.type}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <label className="text-sm font-medium mb-2 block">Select Departure Date</label>
                      <select
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      >
                        <option value="">Choose a date</option>
                        {trip.availableDates.map(date => (
                          <option key={date} value={date}>
                            {new Date(date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button className="w-full" size="lg">
                      <Calendar className="h-4 w-4 mr-2" />
                      Check Availability
                    </Button>

                    <Button variant="outline" className="w-full" size="lg">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{trip.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {trip.style.map(style => (
                <Badge key={style} variant="secondary" className="capitalize">
                  {style}
                </Badge>
              ))}
              <Badge variant="outline" className="capitalize">{trip.region}</Badge>
              <Badge variant="outline" className="capitalize">{trip.type}</Badge>
            </div>

            <p className="text-lg text-muted-foreground mb-8">{trip.description}</p>

            {/* Inclusions/Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Check className="h-5 w-5 mr-2" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {trip.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <X className="h-5 w-5 mr-2" />
                    What's Not Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {trip.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X className="h-4 w-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Amenities for cruises */}
            {trip.amenities && trip.amenities.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Amenities & Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {trip.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline">{amenity}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Itinerary or Route */}
      {trip.itinerary && trip.itinerary.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {trip.itinerary.map((day, index) => (
                  <BlurFade key={index} delay={0.1 * index} inView>
                    <Card>
                      <CardHeader>
                        <div className="flex items-start">
                          <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                            {day.day}
                          </div>
                          <div>
                            <CardTitle>{day.title}</CardTitle>
                            {day.accommodation && (
                              <p className="text-sm text-muted-foreground mt-1">
                                Accommodation: {day.accommodation}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pl-20">
                        <p className="text-muted-foreground mb-4">{day.description}</p>
                        {day.activities && day.activities.length > 0 && (
                          <div className="mb-3">
                            <h4 className="font-semibold text-sm mb-2">Activities:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {day.activities.map((activity, i) => (
                                <li key={i} className="text-sm text-muted-foreground">{activity}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {day.meals && day.meals.length > 0 && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-semibold">Meals:</span>
                            <span className="text-muted-foreground">{day.meals.join(', ')}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Route for cruises */}
      {trip.route && trip.route.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Cruise Route</h2>
              <div className="space-y-4">
                {trip.route.map((port, index) => (
                  <BlurFade key={index} delay={0.1 * index} inView>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold">{port.location}</h3>
                            <p className="text-muted-foreground">{port.country}</p>
                          </div>
                          <div className="text-right text-sm">
                            {port.arrivalTime && (
                              <div>Arrival: <span className="font-semibold">{port.arrivalTime}</span></div>
                            )}
                            {port.departureTime && (
                              <div>Departure: <span className="font-semibold">{port.departureTime}</span></div>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {port.highlights.map((highlight, i) => (
                              <Badge key={i} variant="secondary">{highlight}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ship Info for cruises */}
      {trip.shipInfo && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-8">Ship Information</h2>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{trip.shipInfo.name}</h3>
                  <p className="text-muted-foreground mb-6">Class: {trip.shipInfo.class}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Cabin Types</h4>
                      <ul className="space-y-1">
                        {trip.shipInfo.cabinTypes.map((cabin, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-600" />
                            {cabin}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Dining Options</h4>
                      <ul className="space-y-1">
                        {trip.shipInfo.dining.map((option, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-600" />
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Entertainment</h4>
                      <ul className="space-y-1">
                        {trip.shipInfo.entertainment.map((item, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Special Features</h4>
                      <div className="space-y-2">
                        {trip.shipInfo.kidsClub && (
                          <Badge variant="secondary">Kids Club Available</Badge>
                        )}
                        {trip.shipInfo.adultOnly && (
                          <Badge variant="secondary">Adult-Only Sections</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book This Trip?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today to reserve your spot or get more information</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
