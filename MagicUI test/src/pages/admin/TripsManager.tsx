import { useState, useEffect } from 'react';
import { getAllTrips, deleteTrip } from '@/lib/storage';
import { Trip } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2 } from 'lucide-react';
import TripForm from './TripForm';

export default function TripsManager() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [editingTrip, setEditingTrip] = useState<Trip | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const loadTrips = () => {
    setTrips(getAllTrips());
  };

  useEffect(() => {
    loadTrips();
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this trip?')) {
      deleteTrip(id);
      loadTrips();
    }
  };

  const handleEdit = (trip: Trip) => {
    setEditingTrip(trip);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingTrip(null);
    setIsCreating(true);
  };

  const handleClose = () => {
    setEditingTrip(null);
    setIsCreating(false);
    loadTrips();
  };

  if (editingTrip || isCreating) {
    return (
      <TripForm
        trip={editingTrip}
        onClose={handleClose}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Manage Trips</h2>
          <p className="text-muted-foreground">Create, edit, and delete trips</p>
        </div>
        <Button onClick={handleCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Trip
        </Button>
      </div>

      <div className="grid gap-4">
        {trips.map((trip) => (
          <Card key={trip.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>{trip.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {trip.category} • {trip.duration} • ${trip.price.toLocaleString()}
                  </CardDescription>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {trip.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(trip)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(trip.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {trip.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {trips.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No trips found. Create your first trip!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
