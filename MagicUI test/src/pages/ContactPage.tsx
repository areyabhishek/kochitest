import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import BlurFade from '@/components/magicui/blur-fade';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary/80">
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="text-xl md:text-2xl">
              We're here to help plan your perfect trip
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <BlurFade delay={0.1} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Call us during business hours</p>
                    <a href="tel:+442012345678" className="text-lg font-semibold hover:text-primary">
                      +44 20 1234 5678
                    </a>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                    <a href="mailto:info@voyagevista.com" className="text-lg font-semibold hover:text-primary break-all">
                      info@voyagevista.com
                    </a>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Visit us at</p>
                    <address className="text-lg font-semibold not-italic">
                      123 Travel Street<br />
                      London, UK<br />
                      W1A 1AA
                    </address>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-semibold">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-semibold">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <BlurFade delay={0.5} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
                        <div className="text-green-600 dark:text-green-400 text-4xl mb-4">✓</div>
                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-green-700 dark:text-green-300">
                          Thank you for contacting us. We'll respond to your inquiry shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 234 567 8900"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject *</Label>
                            <Input
                              id="subject"
                              name="subject"
                              required
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Trip Inquiry"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                            placeholder="Tell us about your travel plans..."
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <BlurFade delay={0.1} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I book a trip?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      You can browse our trips on the website, click "Check Availability" on any trip page,
                      or contact us directly. Our team will guide you through the booking process and answer
                      any questions you have.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We accept all major credit cards, debit cards, bank transfers, and PayPal. Flexible payment
                      plans are available for trips booked in advance.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What is your cancellation policy?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our cancellation policy varies by trip type and timing. Generally, cancellations made 60+ days
                      before departure receive a full refund minus a small admin fee. Contact us for specific terms.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer travel insurance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We strongly recommend travel insurance for all trips. We can connect you with trusted
                      insurance providers or you can arrange your own coverage.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>

              <BlurFade delay={0.5} inView>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can you create custom trips?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Absolutely! We specialize in creating tailor-made trips for individuals, families, and groups.
                      Contact us with your ideas and we'll craft the perfect itinerary for you.
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Right Away?</h2>
          <p className="text-xl mb-8 opacity-90">
            Chat with our travel experts in real-time
          </p>
          <Button size="lg" variant="secondary">
            <Mail className="h-4 w-4 mr-2" />
            Start Live Chat
          </Button>
        </div>
      </section>
    </div>
  );
}
