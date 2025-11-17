import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import TripCard from '@/components/TripCard';
import { Trip, TripType, TripStyle, Region } from '@/types';
import tripsData from '@/data/trips.json';
import { SlidersHorizontal } from 'lucide-react';

const trips: Trip[] = tripsData as Trip[];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>(trips);
  const [showFilters, setShowFilters] = useState(true);

  // Filter states
  const [searchText, setSearchText] = useState(searchParams.get('destination') || '');
  const [selectedType, setSelectedType] = useState<TripType | ''>((searchParams.get('type') as TripType) || '');
  const [selectedRegion, setSelectedRegion] = useState<Region | ''>((searchParams.get('region') as Region) || '');
  const [selectedStyles, setSelectedStyles] = useState<TripStyle[]>(
    searchParams.get('style') ? [searchParams.get('style') as TripStyle] : []
  );
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minDuration, setMinDuration] = useState('');
  const [maxDuration, setMaxDuration] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  useEffect(() => {
    applyFilters();
  }, [searchText, selectedType, selectedRegion, selectedStyles, minPrice, maxPrice, minDuration, maxDuration, sortBy]);

  const applyFilters = () => {
    let results = [...trips];

    // Text search
    if (searchText) {
      results = results.filter(trip =>
        trip.title.toLowerCase().includes(searchText.toLowerCase()) ||
        trip.destination.toLowerCase().includes(searchText.toLowerCase()) ||
        trip.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Type filter
    if (selectedType) {
      results = results.filter(trip => trip.type === selectedType);
    }

    // Region filter
    if (selectedRegion) {
      results = results.filter(trip => trip.region === selectedRegion);
    }

    // Style filter
    if (selectedStyles.length > 0) {
      results = results.filter(trip =>
        selectedStyles.some(style => trip.style.includes(style))
      );
    }

    // Price filter
    if (minPrice) {
      results = results.filter(trip => trip.price >= Number(minPrice));
    }
    if (maxPrice) {
      results = results.filter(trip => trip.price <= Number(maxPrice));
    }

    // Duration filter
    if (minDuration) {
      results = results.filter(trip => trip.duration >= Number(minDuration));
    }
    if (maxDuration) {
      results = results.filter(trip => trip.duration <= Number(maxDuration));
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'duration-short':
        results.sort((a, b) => a.duration - b.duration);
        break;
      case 'duration-long':
        results.sort((a, b) => b.duration - a.duration);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // popularity - featured first, then by rating
        results.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }

    setFilteredTrips(results);
  };

  const toggleStyle = (style: TripStyle) => {
    setSelectedStyles(prev =>
      prev.includes(style)
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  const clearFilters = () => {
    setSearchText('');
    setSelectedType('');
    setSelectedRegion('');
    setSelectedStyles([]);
    setMinPrice('');
    setMaxPrice('');
    setMinDuration('');
    setMaxDuration('');
    setSortBy('popularity');
  };

  return (
    <div className="min-h-screen py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Search Tours & Cruises</h1>
          <p className="text-xl text-muted-foreground">
            Found {filteredTrips.length} {filteredTrips.length === 1 ? 'trip' : 'trips'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold flex items-center">
                    <SlidersHorizontal className="h-5 w-5 mr-2" />
                    Filters
                  </h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>

                {/* Search */}
                <div>
                  <Label className="mb-2 block">Search</Label>
                  <Input
                    placeholder="Destination, tour name..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>

                {/* Type */}
                <div>
                  <Label className="mb-2 block">Type</Label>
                  <Select value={selectedType} onValueChange={(value) => setSelectedType(value as TripType | '')}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">All Types</SelectItem>
                      <SelectItem value="tour">Tour</SelectItem>
                      <SelectItem value="cruise">Cruise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Region */}
                <div>
                  <Label className="mb-2 block">Region</Label>
                  <Select value={selectedRegion} onValueChange={(value) => setSelectedRegion(value as Region | '')}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">All Regions</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                      <SelectItem value="asia">Asia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Trip Style */}
                <div>
                  <Label className="mb-3 block">Trip Style</Label>
                  <div className="space-y-2">
                    {(['family', 'bachelor', 'bachelorette', 'couples', 'solo'] as TripStyle[]).map(style => (
                      <div key={style} className="flex items-center">
                        <Checkbox
                          id={style}
                          checked={selectedStyles.includes(style)}
                          onCheckedChange={() => toggleStyle(style)}
                        />
                        <Label htmlFor={style} className="ml-2 capitalize cursor-pointer">
                          {style}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <Label className="mb-2 block">Price Range ($)</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <Label className="mb-2 block">Duration (days)</Label>
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minDuration}
                      onChange={(e) => setMinDuration(e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxDuration}
                      onChange={(e) => setMaxDuration(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort and Toggle Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Label className="whitespace-nowrap">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="duration-short">Duration: Shortest</SelectItem>
                    <SelectItem value="duration-long">Duration: Longest</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredTrips.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-xl text-muted-foreground">
                  No trips found matching your criteria. Try adjusting your filters.
                </p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTrips.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
