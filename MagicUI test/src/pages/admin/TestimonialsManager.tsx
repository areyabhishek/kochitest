import { useState, useEffect } from 'react';
import { getAllTestimonials, deleteTestimonial } from '@/lib/storage';
import { Testimonial } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import TestimonialForm from './TestimonialForm';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const loadTestimonials = () => {
    setTestimonials(getAllTestimonials());
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      deleteTestimonial(id);
      loadTestimonials();
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingTestimonial(null);
    setIsCreating(true);
  };

  const handleClose = () => {
    setEditingTestimonial(null);
    setIsCreating(false);
    loadTestimonials();
  };

  if (editingTestimonial || isCreating) {
    return (
      <TestimonialForm
        testimonial={editingTestimonial}
        onClose={handleClose}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Manage Testimonials</h2>
          <p className="text-muted-foreground">Create, edit, and delete customer testimonials</p>
        </div>
        <Button onClick={handleCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Testimonial
        </Button>
      </div>

      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {testimonial.location} • {testimonial.tripName}
                  </CardDescription>
                  <div className="mt-2 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(testimonial)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(testimonial.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "{testimonial.content}"
              </p>
              {testimonial.image && (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mt-4 h-16 w-16 rounded-full object-cover"
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {testimonials.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No testimonials found. Create your first testimonial!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
