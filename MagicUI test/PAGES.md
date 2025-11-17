# VoyageVista Tours - Complete Page List

## All Pages & Routes

### 1. Homepage
**Route:** `/`
**File:** `src/pages/HomePage.tsx`

**Sections:**
- Hero with background image and animated text
- Search bar with filters and quick links
- Value proposition cards (4)
- Featured tours & cruises grid
- Why choose us section with stats
- Browse by category (4 cards)
- Testimonials (3 reviews)
- Newsletter signup

**MagicUI Components Used:**
- BlurFade (animations)
- AnimatedGradientText (hero badge)

---

### 2. Search/Browse Page
**Route:** `/search`
**File:** `src/pages/SearchPage.tsx`

**Features:**
- Advanced filter sidebar (text, type, region, style, price, duration)
- Sort dropdown (6 options)
- Real-time filtering
- Results grid with trip cards
- Mobile-responsive filter toggle
- Clear all filters button
- Results count display

**URL Parameters Supported:**
- `?destination=` - Pre-fill destination
- `?type=` - Pre-filter by type
- `?region=` - Pre-filter by region
- `?style=` - Pre-filter by style

---

### 3. Trip Details Page
**Route:** `/trip/:slug`
**File:** `src/pages/TripDetailsPage.tsx`

**Dynamic Routes (8 trips):**
- `/trip/mediterranean-magic-cruise`
- `/trip/thailand-beach-culture-tour`
- `/trip/baltic-capitals-cruise`
- `/trip/bachelor-party-lisbon-ibiza`
- `/trip/family-alps-adventure`
- `/trip/thai-islands-cruise`
- `/trip/bali-bachelorette-escape`
- `/trip/japan-korea-discovery-cruise`

**Sections:**
- Image gallery with thumbnails
- Booking sidebar (price, rating, info, dates)
- Trip description and badges
- Inclusions/Exclusions cards
- Amenities (for cruises)
- Day-by-day itinerary (for tours)
- Route map with ports (for cruises)
- Ship information (for cruises)
- CTA section

---

### 4. Europe Cruises Page
**Route:** `/cruises/europe`
**File:** `src/pages/EuropeCruisesPage.tsx`

**Sections:**
- Hero with background
- Intro text about European cruises
- Why choose our cruises (4 benefit cards)
- Featured cruises grid
- Popular destinations (3 cards):
  - Mediterranean
  - Baltic Sea
  - Norwegian Fjords
- CTA section

---

### 5. Asia Cruises Page
**Route:** `/cruises/asia`
**File:** `src/pages/AsiaCruisesPage.tsx`

**Sections:**
- Hero with background
- Intro text about Asian cruises
- Why choose our cruises (4 benefit cards)
- Featured cruises grid
- Popular destinations (3 cards):
  - Thai Islands
  - Japan & Korea
  - Southeast Asia
- Travel tips (4 cards):
  - Best time to visit
  - Visa requirements
  - What to pack
  - Health & safety
- CTA section

---

### 6. Family Trips Page
**Route:** `/trips/family`
**File:** `src/pages/FamilyTripsPage.tsx`

**Sections:**
- Hero with background
- Why choose family trips intro
- Benefits (4 cards):
  - Safety first
  - All ages welcome
  - Fun & educational
  - Flexible pacing
- Featured family trips grid
- What makes trips special (4 detailed cards):
  - Family-friendly accommodations
  - Age-appropriate activities
  - Experienced family guides
  - Peace of mind for parents
- Family testimonials (3)
- CTA section

---

### 7. Bachelor/Bachelorette Trips Page
**Route:** `/trips/bachelor-bachelorette`
**File:** `src/pages/BachelorTripsPage.tsx`

**Sections:**
- Hero with background
- Ultimate celebration intro
- Benefits (4 cards):
  - Epic parties
  - Premium experiences
  - Amazing locations
  - Group friendly
- Featured party trips grid
- Top party destinations (3 cards):
  - Ibiza, Spain
  - Bali, Indonesia
  - Barcelona, Spain
- What's included (4 detailed cards):
  - Accommodation
  - VIP access
  - Activities & experiences
  - Hassle-free organization
- Party group testimonials (3)
- CTA section

---

### 8. About Us Page
**Route:** `/about`
**File:** `src/pages/AboutPage.tsx`

**Sections:**
- Hero with gradient background
- Our story (3 paragraphs)
- Our values (4 cards):
  - Excellence
  - Community
  - Sustainability
  - Authenticity
- By the numbers (4 stats)
- Why choose us (4 detailed cards):
  - Local expertise
  - Personalized service
  - Best price guarantee
  - Safety & security
- Certifications & partnerships

---

### 9. Contact Page
**Route:** `/contact`
**File:** `src/pages/ContactPage.tsx`

**Sections:**
- Hero with gradient background
- Contact information sidebar (4 cards):
  - Phone
  - Email
  - Office address
  - Business hours
- Contact form with validation:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Subject (required)
  - Message (required)
  - Submit with success state
- FAQ section (5 questions):
  - How to book
  - Payment methods
  - Cancellation policy
  - Travel insurance
  - Custom trips
- Live chat CTA

---

## Shared Components

### Header
**File:** `src/components/layout/Header.tsx`

**Features:**
- Logo and brand
- Desktop navigation with dropdowns
- Theme switcher
- Search trips CTA button
- Mobile hamburger menu
- Responsive design

**Navigation Structure:**
- Home
- Cruises (dropdown)
  - Europe Cruises
  - Asia Cruises
- Trip Styles (dropdown)
  - Family Trips
  - Bachelor/Bachelorette
- About Us
- Contact

---

### Footer
**File:** `src/components/layout/Footer.tsx`

**Sections:**
- Company info with social media links
- Quick links column
- Destinations column
- Contact info column
- Copyright and legal links

---

### Reusable Components

1. **Newsletter** (`src/components/Newsletter.tsx`)
   - Email signup form
   - Success state
   - Used on homepage

2. **TripCard** (`src/components/TripCard.tsx`)
   - Trip image with hover effect
   - Price badge
   - Featured badge
   - Rating display
   - Trip info (destination, duration, group size)
   - Style badges
   - View details button
   - Used on: Homepage, Search, Cruise pages, Trip style pages

3. **ThemeSwitcher** (`src/components/ThemeSwitcher.tsx`)
   - Dropdown with 6 theme options
   - Saves to localStorage
   - Used in header

---

## MagicUI Components Used

1. **BlurFade** - Fade in with blur effect
   - Used throughout for section animations
   - Staggered delays for sequential animations

2. **AnimatedGradientText** - Gradient animated text
   - Used on homepage hero

3. **ShineBorder** - Shimmer border effect
   - Available but not currently used
   - Can be added to featured cards

---

## Page Summary

| Page | Route | Component | Purpose |
|------|-------|-----------|---------|
| Home | `/` | HomePage | Landing page with search and featured trips |
| Search | `/search` | SearchPage | Browse and filter all trips |
| Trip Details | `/trip/:slug` | TripDetailsPage | Full trip information and booking |
| Europe Cruises | `/cruises/europe` | EuropeCruisesPage | European cruise offerings |
| Asia Cruises | `/cruises/asia` | AsiaCruisesPage | Asian cruise offerings |
| Family Trips | `/trips/family` | FamilyTripsPage | Family-friendly travel options |
| Bachelor Trips | `/trips/bachelor-bachelorette` | BachelorTripsPage | Party group travel options |
| About | `/about` | AboutPage | Company information |
| Contact | `/contact` | ContactPage | Contact form and FAQs |

**Total Pages:** 9 unique pages
**Total Routes:** 17+ (including 8 dynamic trip detail routes)

---

## Navigation Flow

```
Homepage
├── Search → Search Page
├── Featured Trips → Trip Details
├── Category Cards → Specific Category Pages
└── Newsletter Signup

Header Navigation
├── Home → Homepage
├── Cruises
│   ├── Europe → Europe Cruises Page
│   └── Asia → Asia Cruises Page
├── Trip Styles
│   ├── Family → Family Trips Page
│   └── Bachelor/Bachelorette → Bachelor Trips Page
├── About Us → About Page
├── Contact → Contact Page
└── Search Trips → Search Page

Any Trip Card → Trip Details Page
```

---

All pages are fully functional, responsive, and include MagicUI animations! 🎉
