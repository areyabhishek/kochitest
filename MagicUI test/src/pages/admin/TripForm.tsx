import { useState } from 'react';
import { Trip } from '@/types';
import { createTrip, updateTrip } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Plus, Save } from 'lucide-react';

interface TripFormProps {
  trip: Trip | null;
  onClose: () => void;
}

export default function TripForm({ trip, onClose }: TripFormProps) {
  const [formData, setFormData] = useState<Trip>(
    trip || {
      id: crypto.randomUUID(),
      title: '',
      slug: '',
      description: '',
      longDescription: '',
      category: 'cruise',
      duration: '',
      price: 0,
      image: '',
      tags: [],
      featured: false,
      itinerary: [],
      route: { from: '', to: '' },
      ship: { name: '', capacity: 0 },
      inclusions: [],
      exclusions: [],
    }
  );

  const [newTag, setNewTag] = useState('');
  const [newInclusion, setNewInclusion] = useState('');
  const [newExclusion, setNewExclusion] = useState('');
  const [newItineraryDay, setNewItineraryDay] = useState({ day: 1, title: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate slug from title if not set
    if (!formData.slug) {
      formData.slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    if (trip) {
      updateTrip(trip.id, formData);
    } else {
      createTrip(formData);
    }
    onClose();
  };

  const handleChange = (field: keyof Trip, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const addTag = () => {
    if (newTag.trim()) {
      handleChange('tags', [...formData.tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (index: number) => {
    handleChange('tags', formData.tags.filter((_, i) => i !== index));
  };

  const addInclusion = () => {
    if (newInclusion.trim()) {
      handleChange('inclusions', [...formData.inclusions, newInclusion.trim()]);
      setNewInclusion('');
    }
  };

  const removeInclusion = (index: number) => {
    handleChange('inclusions', formData.inclusions.filter((_, i) => i !== index));
  };

  const addExclusion = () => {
    if (newExclusion.trim()) {
      handleChange('exclusions', [...formData.exclusions, newExclusion.trim()]);
      setNewExclusion('');
    }
  };

  const removeExclusion = (index: number) => {
    handleChange('exclusions', formData.exclusions.filter((_, i) => i !== index));
  };

  const addItinerary = () => {
    if (newItineraryDay.title && newItineraryDay.description) {
      handleChange('itinerary', [...formData.itinerary, newItineraryDay]);
      setNewItineraryDay({ day: formData.itinerary.length + 2, title: '', description: '' });
    }
  };

  const removeItinerary = (index: number) => {
    handleChange('itinerary', formData.itinerary.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{trip ? 'Edit Trip' : 'Create New Trip'}</h2>
          <p className="text-muted-foreground">Fill in the trip details below</p>
        </div>
        <Button type="button" variant="ghost" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="slug">Slug (URL path)</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              placeholder="auto-generated-from-title"
            />
          </div>

          <div>
            <Label htmlFor="category">Category *</Label>
            <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cruise">Cruise</SelectItem>
                <SelectItem value="family">Family Trip</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="bachelor">Bachelor Trip</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="duration">Duration *</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
                placeholder="7 Days, 6 Nights"
                required
              />
            </div>

            <div>
              <Label htmlFor="price">Price (USD) *</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => handleChange('price', parseFloat(e.target.value))}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="image">Image URL *</Label>
            <Input
              id="image"
              value={formData.image}
              onChange={(e) => handleChange('image', e.target.value)}
              placeholder="https://..."
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Short Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="longDescription">Long Description</Label>
            <Textarea
              id="longDescription"
              value={formData.longDescription}
              onChange={(e) => handleChange('longDescription', e.target.value)}
              rows={6}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => handleChange('featured', e.target.checked)}
              className="h-4 w-4"
            />
            <Label htmlFor="featured">Featured Trip</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Route & Ship Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="routeFrom">Route From</Label>
              <Input
                id="routeFrom"
                value={formData.route.from}
                onChange={(e) => handleChange('route', { ...formData.route, from: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="routeTo">Route To</Label>
              <Input
                id="routeTo"
                value={formData.route.to}
                onChange={(e) => handleChange('route', { ...formData.route, to: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="shipName">Ship Name</Label>
              <Input
                id="shipName"
                value={formData.ship.name}
                onChange={(e) => handleChange('ship', { ...formData.ship, name: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="shipCapacity">Ship Capacity</Label>
              <Input
                id="shipCapacity"
                type="number"
                value={formData.ship.capacity}
                onChange={(e) => handleChange('ship', { ...formData.ship, capacity: parseInt(e.target.value) })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
          <CardDescription>Add tags to categorize this trip</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Enter a tag"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            />
            <Button type="button" onClick={addTag}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm"
              >
                {tag}
                <button type="button" onClick={() => removeTag(index)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Itinerary</CardTitle>
          <CardDescription>Add daily itinerary items</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-12 gap-2">
            <Input
              type="number"
              value={newItineraryDay.day}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, day: parseInt(e.target.value) })}
              placeholder="Day"
              className="col-span-2"
            />
            <Input
              value={newItineraryDay.title}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, title: e.target.value })}
              placeholder="Title"
              className="col-span-4"
            />
            <Input
              value={newItineraryDay.description}
              onChange={(e) => setNewItineraryDay({ ...newItineraryDay, description: e.target.value })}
              placeholder="Description"
              className="col-span-5"
            />
            <Button type="button" onClick={addItinerary} className="col-span-1">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {formData.itinerary.sort((a, b) => a.day - b.day).map((item, index) => (
              <div key={index} className="flex items-center gap-2 rounded-lg border p-2">
                <span className="font-semibold">Day {item.day}:</span>
                <span className="font-medium">{item.title}</span>
                <span className="flex-1 text-sm text-muted-foreground">- {item.description}</span>
                <button type="button" onClick={() => removeItinerary(index)}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inclusions</CardTitle>
          <CardDescription>What's included in this trip</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newInclusion}
              onChange={(e) => setNewInclusion(e.target.value)}
              placeholder="e.g., All meals included"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInclusion())}
            />
            <Button type="button" onClick={addInclusion}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <ul className="space-y-1">
            {formData.inclusions.map((item, index) => (
              <li key={index} className="flex items-center justify-between rounded border p-2">
                <span className="text-sm">{item}</span>
                <button type="button" onClick={() => removeInclusion(index)}>
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exclusions</CardTitle>
          <CardDescription>What's not included in this trip</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newExclusion}
              onChange={(e) => setNewExclusion(e.target.value)}
              placeholder="e.g., International flights"
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addExclusion())}
            />
            <Button type="button" onClick={addExclusion}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <ul className="space-y-1">
            {formData.exclusions.map((item, index) => (
              <li key={index} className="flex items-center justify-between rounded border p-2">
                <span className="text-sm">{item}</span>
                <button type="button" onClick={() => removeExclusion(index)}>
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          <Save className="h-4 w-4 mr-2" />
          {trip ? 'Update Trip' : 'Create Trip'}
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
