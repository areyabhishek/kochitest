import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Trip } from '@/types';
import { Calendar, Users, MapPin, Star } from 'lucide-react';
import { Badge } from './ui/badge';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const getStyleBadgeColor = (style: string) => {
    switch (style) {
      case 'family':
        return 'bg-green-500';
      case 'bachelor':
      case 'bachelorette':
        return 'bg-purple-500';
      case 'couples':
        return 'bg-pink-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.images[0]}
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          From ${trip.price}
        </div>
        {trip.featured && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
            FEATURED
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{trip.title}</CardTitle>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm ml-1">{trip.rating}</span>
          </div>
        </div>
        <CardDescription>{trip.summary}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          {trip.destination}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {trip.duration} days
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-2" />
          {trip.groupSize.min}-{trip.groupSize.max} people
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {trip.style.map((style) => (
            <Badge key={style} variant="secondary" className={getStyleBadgeColor(style)}>
              {style}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/trip/${trip.slug}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
