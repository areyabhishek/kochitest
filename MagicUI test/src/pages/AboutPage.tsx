import { Card, CardContent } from '@/components/ui/card';
import BlurFade from '@/components/magicui/blur-fade';
import { Award, Users, Globe, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About VoyageVista Tours</h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Creating unforgettable travel experiences since 2010
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="prose prose-lg mx-auto text-center mb-12">
                <p className="text-lg text-muted-foreground mb-6">
                  VoyageVista Tours was born from a simple belief: travel should be accessible, authentic, and
                  unforgettable. Founded in 2010 by a group of passionate travelers, we started with just a handful
                  of Mediterranean cruises and a dream to show people the world in a way that goes beyond typical tourism.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Over the years, we've grown from a small startup to a trusted name in tours and cruises across
                  Europe and Asia. We've helped over 15,000 travelers create memories that last a lifetime — from
                  families discovering the Swiss Alps to bachelor parties celebrating in Ibiza, from couples cruising
                  the Mediterranean to solo adventurers exploring Thailand.
                </p>
                <p className="text-lg text-muted-foreground">
                  But our core mission remains the same: to provide exceptional travel experiences with local expertise,
                  responsible tourism practices, and a personal touch that makes every journey special.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card className="text-center p-8 h-full">
                <Award className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We meticulously curate every detail to ensure world-class experiences
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Card className="text-center p-8 h-full">
                <Users className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Building connections between travelers and local communities
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <Card className="text-center p-8 h-full">
                <Globe className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to responsible tourism and protecting our planet
                </p>
              </Card>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Card className="text-center p-8 h-full">
                <HeartHandshake className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  Real experiences with local experts, not tourist traps
                </p>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">VoyageVista By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-muted-foreground">Happy Travelers</div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Destinations</div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">14</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">4.8★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose VoyageVista?</h2>
            <div className="space-y-6">
              <BlurFade delay={0.1} inView>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Our team includes local experts who know the destinations inside out. We partner with trusted
                      local guides, accommodations, and activity providers to ensure authentic experiences.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                    <p className="text-muted-foreground">
                      Every traveler is unique. Whether you're a family of five or a bachelor party of twelve, we
                      tailor our trips to your needs, preferences, and budget. Our 24/7 support team is always available.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
                    <p className="text-muted-foreground">
                      We work directly with our partners to offer competitive pricing without compromising quality.
                      Find a lower price elsewhere? We'll match it or beat it.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Safety & Security</h3>
                    <p className="text-muted-foreground">
                      Your safety is our top priority. All our tours and cruises meet stringent safety standards,
                      and we provide comprehensive travel insurance options and emergency support.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Certifications & Partnerships</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We're proud members of leading travel industry organizations and maintain partnerships with
            the world's best cruise lines, hotels, and tour operators.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="text-sm">IATA Certified</div>
            <div className="text-sm">CLIA Member</div>
            <div className="text-sm">Sustainable Travel Certified</div>
            <div className="text-sm">TripAdvisor Certificate of Excellence</div>
          </div>
        </div>
      </section>
    </div>
  );
}
