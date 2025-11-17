import { useState } from 'react';
import { Testimonial } from '@/types';
import { createTestimonial, updateTestimonial } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Save } from 'lucide-react';

interface TestimonialFormProps {
  testimonial: Testimonial | null;
  onClose: () => void;
}

export default function TestimonialForm({ testimonial, onClose }: TestimonialFormProps) {
  const [formData, setFormData] = useState<Testimonial>(
    testimonial || {
      id: crypto.randomUUID(),
      name: '',
      location: '',
      content: '',
      rating: 5,
      tripName: '',
      image: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (testimonial) {
      updateTestimonial(testimonial.id, formData);
    } else {
      createTestimonial(formData);
    }
    onClose();
  };

  const handleChange = (field: keyof Testimonial, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            {testimonial ? 'Edit Testimonial' : 'Create New Testimonial'}
          </h2>
          <p className="text-muted-foreground">Fill in the testimonial details below</p>
        </div>
        <Button type="button" variant="ghost" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Customer Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="New York, USA"
              required
            />
          </div>

          <div>
            <Label htmlFor="image">Customer Image URL</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleChange('image', e.target.value)}
              placeholder="https://..."
            />
          </div>

          <div>
            <Label htmlFor="tripName">Trip Name *</Label>
            <Input
              id="tripName"
              value={formData.tripName}
              onChange={(e) => handleChange('tripName', e.target.value)}
              placeholder="Mediterranean Odyssey"
              required
            />
          </div>

          <div>
            <Label htmlFor="rating">Rating *</Label>
            <Select
              value={formData.rating.toString()}
              onValueChange={(value) => handleChange('rating', parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Star</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="content">Testimonial Content *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleChange('content', e.target.value)}
              rows={6}
              placeholder="Share your experience..."
              required
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          <Save className="h-4 w-4 mr-2" />
          {testimonial ? 'Update Testimonial' : 'Create Testimonial'}
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
