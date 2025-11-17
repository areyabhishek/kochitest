# VoyageVista Tours - Travel Website

A modern, fully-featured tour and cruise booking website built with React, TypeScript, Vite, and MagicUI components.

## Features

### Pages
- **Homepage** - Hero section, search bar, featured trips, testimonials, and newsletter signup
- **Search/Browse** - Advanced filtering system for finding trips
- **Trip Details** - Complete trip information with itineraries, routes, and booking options
- **Europe Cruises** - Dedicated page for European cruise offerings
- **Asia Cruises** - Dedicated page for Asian cruise offerings
- **Family Trips** - Family-friendly travel options
- **Bachelor/Bachelorette Trips** - Party-focused group travel
- **About Us** - Company information and values
- **Contact** - Contact form and FAQs

### Key Features
✅ **Fully Responsive** - Works beautifully on all devices
✅ **Advanced Search & Filters** - Find the perfect trip with multiple filter options
✅ **Interactive Components** - Smooth animations with Framer Motion
✅ **Theme Switcher** - 6 pre-configured themes with one-click switching
✅ **Type-Safe** - Built with TypeScript for robust code
✅ **Performance Optimized** - Fast loading with Vite
✅ **Modern UI** - MagicUI components with beautiful animations

### Theme Options
Change the entire site's appearance with one click:
- **Default Blue** - Professional and trustworthy
- **Ocean Breeze** - Fresh and coastal
- **Sunset Vibes** - Warm and inviting
- **Forest Green** - Natural and calming
- **Royal Purple** - Luxurious and elegant
- **Dark Mode** - Easy on the eyes

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **MagicUI** - Animated UI components
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Getting Started

### Prerequisites
- Node.js 18+ and pnpm

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm run dev
```

3. Open your browser to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
pnpm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
pnpm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/         # Header, Footer
│   ├── ui/             # Base UI components
│   ├── magicui/        # Animated MagicUI components
│   ├── Newsletter.tsx  # Newsletter signup
│   ├── TripCard.tsx    # Trip display card
│   └── ThemeSwitcher.tsx
├── pages/              # All page components
│   ├── HomePage.tsx
│   ├── SearchPage.tsx
│   ├── TripDetailsPage.tsx
│   ├── EuropeCruisesPage.tsx
│   ├── AsiaCruisesPage.tsx
│   ├── FamilyTripsPage.tsx
│   ├── BachelorTripsPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── data/               # Mock data (JSON)
│   ├── trips.json
│   └── testimonials.json
├── types/              # TypeScript type definitions
│   └── index.ts
├── lib/                # Utilities
│   ├── utils.ts
│   └── theme-config.ts
├── App.tsx             # Main app with routing
├── main.tsx            # App entry point
└── index.css           # Global styles & theme variables
```

## Customization

### Change Themes
Themes can be switched using the theme selector in the header, or programmatically:

```typescript
import { applyTheme } from '@/lib/theme-config';

// Apply a theme
applyTheme('ocean');
```

### Add New Themes
Edit `src/lib/theme-config.ts` and add a new theme configuration:

```typescript
export const themes = {
  // ...existing themes
  myTheme: {
    name: 'My Custom Theme',
    colors: {
      '--primary': '180 100% 50%',
      // ...other CSS variables
    }
  }
};
```

### Modify Data
Edit the JSON files in `src/data/`:
- `trips.json` - Tour and cruise data
- `testimonials.json` - Customer reviews

### Add New Pages
1. Create a new component in `src/pages/`
2. Add a route in `src/App.tsx`
3. Add navigation links in `src/components/layout/Header.tsx`

## Features in Detail

### Search & Filtering
The search page includes:
- Text search across titles and destinations
- Filter by type (tour/cruise)
- Filter by region (Europe/Asia)
- Filter by trip style (family, bachelor, etc.)
- Price range filtering
- Duration filtering
- Multiple sort options

### Trip Details
Each trip page shows:
- Image gallery
- Full trip information
- Pricing and availability
- Day-by-day itinerary (for tours)
- Route and ports (for cruises)
- Ship information (for cruises)
- Inclusions/exclusions
- Amenities

### Responsive Design
- Mobile-first approach
- Collapsible mobile navigation
- Optimized images for different screen sizes
- Touch-friendly UI elements

## Performance

- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Components load on demand
- **Optimized Images** - Using modern image formats
- **Minimal Bundle** - Tree-shaking removes unused code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features to add:
- User authentication
- Real booking system integration
- Payment processing
- User reviews and ratings
- Wishlist/favorites
- Multi-language support
- Blog section
- Admin dashboard
- Email notifications
- Social media integration

## License

This project is for demonstration purposes.

## Contact

For questions or support, visit the Contact page or email info@voyagevista.com

---

Built with ❤️ using React, TypeScript, and MagicUI
