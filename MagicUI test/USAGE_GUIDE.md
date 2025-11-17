# VoyageVista Tours - Usage Guide

## Quick Start

The development server is already running at [http://localhost:5173](http://localhost:5173)

Visit the site in your browser to explore all features!

## Navigation

### Main Navigation
- **Home** - Landing page with hero, search, and featured trips
- **Cruises** - Dropdown with Europe and Asia cruise options
- **Trip Styles** - Dropdown with Family and Bachelor/Bachelorette options
- **About Us** - Company information
- **Contact** - Contact form and information
- **Search Trips** - Button to access the search page

### Theme Switcher
Located in the header next to "Search Trips" button:
- Click the dropdown to select from 6 different themes
- Your selection is automatically saved to browser storage
- Try: Ocean Breeze, Sunset Vibes, Forest Green, Royal Purple, or Dark Mode

## Key Features to Explore

### 1. Homepage (`/`)
**Search Bar:**
- Enter destination, select tour/cruise type, duration, and group size
- Use quick filter buttons for common searches
- Click "Search Trips" to see filtered results

**Featured Trips:**
- View 6 handpicked tours and cruises
- Click any trip card to see full details

**Category Cards:**
- Quick access to Family, Bachelor/Bachelorette, Europe, and Asia trips

**Newsletter:**
- Sign up form at the bottom (simulated submission)

### 2. Search Page (`/search`)
**Filters (Left Sidebar):**
- **Search** - Text search across titles and destinations
- **Type** - Filter by Tour or Cruise
- **Region** - Filter by Europe or Asia
- **Trip Style** - Multiple checkboxes (family, bachelor, couples, solo)
- **Price Range** - Min/max price inputs
- **Duration** - Min/max days inputs

**Sorting:**
- Popularity (default)
- Price: Low to High
- Price: High to Low
- Duration: Shortest
- Duration: Longest
- Highest Rated

**Results:**
- Real-time filtering as you adjust filters
- Clear filters button to reset all
- Shows count of matching trips

### 3. Trip Details (`/trip/[slug]`)
Click any trip to see:
- **Image Gallery** - Click thumbnails to change main image
- **Booking Panel** - Price, rating, key info, date selector
- **Full Description** - Complete trip details
- **Inclusions/Exclusions** - What's included and what's not
- **Day-by-Day Itinerary** - For tours (e.g., Thailand Beach & Culture)
- **Route & Ports** - For cruises (e.g., Mediterranean Magic)
- **Ship Information** - For cruises (cabin types, dining, entertainment)

### 4. Cruise Pages

**Europe Cruises (`/cruises/europe`):**
- Overview of European cruise offerings
- Featured European cruises
- Popular destinations (Mediterranean, Baltic, Norwegian Fjords)
- Why choose our cruises section

**Asia Cruises (`/cruises/asia`):**
- Overview of Asian cruise offerings
- Featured Asian cruises
- Popular destinations (Thai Islands, Japan & Korea, Southeast Asia)
- Travel tips for Asia

### 5. Trip Style Pages

**Family Trips (`/trips/family`):**
- Family-focused trip benefits
- Safety and age-appropriate activities
- Family testimonials
- All trips tagged with "family" style

**Bachelor/Bachelorette (`/trips/bachelor-bachelorette`):**
- Party-focused features
- VIP access and premium experiences
- Popular party destinations
- All trips tagged with "bachelor" or "bachelorette"

### 6. About Page (`/about`)
- Company story and history
- Core values (Excellence, Community, Sustainability, Authenticity)
- Statistics (travelers served, destinations, ratings)
- Why choose us section
- Certifications

### 7. Contact Page (`/contact`)
- Contact information cards (Phone, Email, Office, Hours)
- Contact form (name, email, phone, subject, message)
- FAQ section with common questions
- Form submission shows success message

## Testing the Features

### Test the Search Functionality
1. Go to homepage
2. Enter "Thailand" in destination
3. Select "Tour" as type
4. Click "Search Trips"
5. See filtered results on search page

### Test Filtering
1. Go to `/search`
2. Check "family" under Trip Style
3. Set price range: Min 1000, Max 2000
4. See results update in real-time

### Test Trip Details
1. Click on "Mediterranean Magic Cruise"
2. View the route with ports
3. Check ship information
4. Select a departure date
5. Click "Check Availability"

### Test Theme Switching
1. Click the theme dropdown in header
2. Select "Ocean Breeze"
3. Notice entire site changes to ocean theme
4. Try "Sunset Vibes" for warm colors
5. Try "Dark Mode" for dark theme
6. Refresh page - theme persists!

### Test Navigation
1. Use dropdown menus for Cruises and Trip Styles
2. Navigate to different pages
3. Use browser back/forward buttons
4. Notice URL updates with React Router

### Test Responsive Design
1. Resize browser window
2. Mobile menu appears below 768px width
3. Click hamburger menu to open mobile navigation
4. All layouts adapt to screen size

## Data Customization

### Modify Trips
Edit `src/data/trips.json`:
- 8 sample trips included (tours and cruises)
- Add new trips following the same structure
- Update prices, durations, destinations
- Add more images (use Unsplash URLs)

### Modify Testimonials
Edit `src/data/testimonials.json`:
- 10 sample testimonials included
- Link testimonials to trips via `tripId`
- Change names, locations, ratings, comments

### Add More Themes
Edit `src/lib/theme-config.ts`:
- 6 themes pre-configured
- Add new themes with HSL color values
- Update theme names and colors
- Themes automatically appear in dropdown

## Available Mock Data

### Trips (8 total)
1. Mediterranean Magic Cruise (Europe, Cruise, Family/Couples)
2. Thailand Beach & Culture Tour (Asia, Tour, Family)
3. Baltic Capitals Cruise (Europe, Cruise, Couples/Solo)
4. Bachelor Party Lisbon & Ibiza (Europe, Tour, Bachelor)
5. Family Alps Adventure (Europe, Tour, Family)
6. Thai Islands Cruise (Asia, Cruise, Couples/Family)
7. Bali Bachelorette Escape (Asia, Tour, Bachelorette)
8. Japan & Korea Discovery Cruise (Asia, Cruise, Couples/Solo)

### Testimonials (10 total)
- Linked to specific trips
- Real-looking avatars via pravatar.cc
- Varied ratings and comments
- Mix of locations and traveler types

## Development Commands

```bash
# Start dev server (already running)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Type check
pnpm run type-check

# Lint code
pnpm run lint
```

## Browser DevTools

Open DevTools (F12) to:
- Inspect components
- Check responsive layouts
- View console for any logs
- Test localStorage (theme preference saved here)

## Tips & Tricks

1. **Theme Persistence:** Your theme choice saves to localStorage and persists across page reloads

2. **Direct URLs:** You can navigate directly to any trip:
   - `/trip/mediterranean-magic-cruise`
   - `/trip/thailand-beach-culture-tour`
   - etc.

3. **Search Parameters:** The search page uses URL query parameters:
   - `/search?type=cruise&region=europe`
   - `/search?style=family`
   - These are shareable links!

4. **Featured Badge:** Trips with `"featured": true` show a FEATURED badge

5. **Star Ratings:** All trips have ratings (4.6-5.0) shown as stars

6. **Price Display:** "From $X" pricing shown on cards and detail pages

7. **Responsive Images:** All images use Unsplash with auto-format and crop

## Enjoy Exploring!

The site is fully functional with:
✅ 8 complete pages
✅ Real filtering and search
✅ 8 sample trips with detailed itineraries
✅ 10 testimonials
✅ 6 theme options
✅ Fully responsive design
✅ Beautiful MagicUI animations
✅ Complete routing

Have fun exploring VoyageVista Tours! 🚢✈️🏖️
