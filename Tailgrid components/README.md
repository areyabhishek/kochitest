# Four Landing Pages Project with TailGrids PRO

This project contains four separate landing pages built using TailGrids PRO Tailwind CSS UI components.

**Now includes 600+ premium components** including AI, Dashboard, and E-commerce sections!

## Project Structure

```
.
├── src/
│   ├── pages/
│   │   ├── page1.html
│   │   ├── page2.html
│   │   ├── page3.html
│   │   └── page4.html
│   ├── components/
│   │   ├── core-components/    # Core UI components (buttons, inputs, etc.)
│   │   ├── marketing/          # Marketing components (heroes, CTAs, testimonials, etc.)
│   │   └── application/        # Application components
│   ├── assets/                 # Images and other assets
│   └── tailwind.css           # Tailwind CSS source file
├── assets/
│   └── css/
│       └── tailwind.css       # Compiled Tailwind CSS
├── plugin.js                  # TailGrids plugin
├── tailwind.config.js         # Tailwind configuration
└── package.json              # Project dependencies

```

## Available Components (TailGrids PRO)

### Marketing Components (src/components/marketing/)
- **heros/** - Hero sections for landing pages
- **call-to-actions/** - CTA buttons and sections
- **testimonials/** - Customer testimonial sections
- **pricings/** - Pricing tables
- **faqs/** - FAQ sections
- **teams/** - Team member displays
- **services/** - Service feature sections
- **stats/** - Statistics displays
- **portfolios/** - Portfolio showcases
- **brands/** - Brand logo displays
- **newsletters/** - Newsletter signup forms
- **abouts/** - About sections
- **videos/** - Video display components

### Core Components (src/components/core-components/)
- **buttons/** - Various button styles
- **inputs/** - Form input fields
- **alerts/** - Alert messages
- **badges/** - Badge components
- **breadcrumbs/** - Navigation breadcrumbs
- **dropdowns/** - Dropdown menus
- **tabs/** - Tab components
- **tooltips/** - Tooltip components
- **avatars/** - User avatar displays
- **cards/** - Card components
- **modals/** - Modal dialogs
- **paginations/** - Pagination controls
- **date-picker/** - Date picker components
- **time-picker/** - Time picker components
- **file-uploads/** - File upload components
- **galleries/** - Image galleries
- **mega-menu/** - Mega menu navigation
- **otp/** - OTP input fields
- **ratings/** - Star ratings
- **skeletons/** - Loading skeletons
- **spinners/** - Loading spinners
- **sticky-bars/** - Sticky notification bars
- **switches/** - Toggle switches
- **toasts/** - Toast notifications
- And many more...

### AI Components (src/components/ai-components/) ⭐ NEW
- **code-generators/** - AI code generation interfaces
- **heros/** - AI-focused hero sections
- **image-generators/** - AI image generation UIs
- **prompt-to-texts/** - Text generation interfaces
- **video-generators/** - Video generation UIs
- **navbars/** - AI tool navigation bars

### Dashboard Components (src/components/dashboard/) ⭐ PRO
- **calendar/** - Calendar views (4 variations)
- **charts/** - Data visualization charts (10+ variations)
- **chat-box/** - Chat interfaces (4 variations)
- **chat-list/** - Chat list views (multiple variations)
- **data-tables/** - Advanced data tables
- **email/** - Email client interfaces
- **file-manager/** - File management UIs
- **forms/** - Complex form layouts
- **inbox/** - Inbox views
- **invoice/** - Invoice templates
- **kanban/** - Kanban board layouts
- **profile/** - User profile pages
- **settings/** - Settings panels
- **tables/** - Data table components
- **user-list/** - User management lists
- And many more dashboard components...

### E-commerce Components (src/components/ecommerce/) ⭐ PRO
- **category/** - Category pages (5 variations)
- **checkout/** - Checkout flows (5 variations)
- **cookies/** - Cookie consent banners (4 variations)
- **featured-products/** - Product showcases (5+ variations)
- **filters/** - Product filtering interfaces
- **order-confirmation/** - Order success pages
- **order-history/** - Order tracking views
- **product-cards/** - Product card layouts (40+ variations)
- **product-details/** - Product detail pages (15+ variations)
- **product-grid/** - Product grid layouts
- **product-list/** - Product list views
- **shopping-cart/** - Cart interfaces (10+ variations)
- **wishlist/** - Wishlist pages
- And many more e-commerce components...

### Application Components (src/components/application/)
- **auth/** - Authentication pages
- **404/** - Error pages
- **coming-soon/** - Coming soon pages
- **maintenance/** - Maintenance mode pages
- Application-specific UI components

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Building CSS

The Tailwind CSS file has been built. To rebuild:

```bash
npm run build-css
```

This will watch for changes and rebuild automatically.

### Using Components

1. Browse the components in `src/components/`
2. Each component is an HTML file you can copy and paste
3. Add the component HTML to your page in `src/pages/`
4. The compiled CSS is already linked in each page

### Example: Adding a Hero Component

1. Open `src/components/marketing/heros/` and choose a hero component
2. Copy the HTML code
3. Paste it into your desired page file (e.g., `src/pages/page1.html`)
4. Open the HTML file in your browser to view

### Viewing Your Pages

Simply open any page file in your browser:
- `src/pages/page1.html`
- `src/pages/page2.html`
- `src/pages/page3.html`
- `src/pages/page4.html`

Or use a local development server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js http-server (install with: npm install -g http-server)
http-server
```

Then navigate to `http://localhost:8000/src/pages/page1.html`

## Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- And more...

### Custom Styles

Add custom styles in `src/tailwind.css` and rebuild with `npm run build-css`

## Resources

- TailGrids Repository: https://github.com/TailGrids/tailwind-ui-components
- TailGrids Website: https://tailgrids.com/
- Tailwind CSS Docs: https://tailwindcss.com/docs

## License

This project uses TailGrids components which are under MIT License.
