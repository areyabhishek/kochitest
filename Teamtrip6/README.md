# Teamtrip Website Relaunch

A high-contrast art book aesthetic website for Teamtrip's corporate offsite planning services.

## Overview

This website combines the professional clarity of a B2B platform with a high-contrast art book vibe. The design is sharp, graphic, and feels like a print poster set on the web.

## Design Philosophy

### Core Aesthetic
- **Typography**: Bold serif (Playfair Display) for headings, light sans (Inter) for body text
- **Layout**: Large blocks with strong edges, wide margins, clear structure
- **Color**: Black and white base with bold orange-red accent (#FF4400)
- **Images**: Full-width with strong mood, inspired by Offsite.com but with art book treatment
- **Motion**: Slow fade-ins for images, simple rise-in for headings (trigger on first load only)
- **Backgrounds**: Grain texture, faint noise overlay

### Imagery Style
Following Offsite.com's approach:
- Focus on people—teams interacting, collaborating, celebrating
- Aspirational, high-quality corporate lifestyle photography
- Tight crops conveying genuine emotion and connection
- High-end, modern, unique venue showcases
- Applied with high-contrast, film-still aesthetic

## Project Structure

```
Teamtrip6/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with design system
├── script.js           # Interactive animations and effects
└── README.md           # This file
```

## Features

### Sections
1. **Hero/Header** - Bold value proposition with dark background
2. **Facts & Benefits** - Metrics and key benefits grid
3. **Destinations** - Four featured destinations (Coorg, Wayanad, Pondicherry, Mussoorie)
4. **Services** - Core and event services offered
5. **Culture-First** - Information about culture-first organizations
6. **Footer** - Navigation links and copyright

### Technical Features
- Responsive design (mobile-first approach)
- Scroll-triggered animations
- Parallax effects on images
- Grain texture overlay
- CSS custom properties (variables)
- Intersection Observer API for performance
- Keyboard navigation support
- Accessibility enhancements

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight vanilla JavaScript (no frameworks)
- CSS animations using GPU acceleration
- Intersection Observer for efficient scroll animations
- Lazy loading ready (add data-src attributes)

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-accent: #FF4400;
}
```

### Typography
Fonts are loaded from Google Fonts:
- Playfair Display (headings)
- Inter (body text)

To change fonts, update the Google Fonts link in `index.html` and the CSS variables.

### Content
All content is in `index.html` and can be edited directly. Follow the structure defined in the Comprehensive Design Brief.

## Development

### Local Development
Simply open `index.html` in a browser. No build process required.

### Live Server (Recommended)
Use any local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using VS Code Live Server extension
Right-click index.html → Open with Live Server
```

## Deployment

### Static Hosting
Deploy to any static hosting service:
- Netlify: Drag and drop the folder
- Vercel: Connect via Git or drag and drop
- GitHub Pages: Push to a repo and enable Pages
- AWS S3: Upload files to bucket with static hosting

### Performance Checklist
- [ ] Add actual images (replace placeholder gradients)
- [ ] Optimize images (use WebP format)
- [ ] Add meta tags for SEO
- [ ] Test on multiple devices
- [ ] Run Lighthouse audit
- [ ] Add favicon

## Image Guidelines

When adding real images:

1. **Format**: Use WebP with JPEG fallback
2. **Size**:
   - Full-width images: 2400px wide max
   - Destination cards: 1200px wide min
3. **Style**:
   - High contrast, film-still aesthetic
   - Focus on team interactions
   - Avoid stock photo smiles
   - Tight crops, strong composition
4. **Optimization**: Use tools like Squoosh or ImageOptim

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast ratios meet WCAG AA standards

## Future Enhancements

Potential additions:
- Contact form with validation
- Newsletter signup
- Blog integration
- Case studies/testimonials section
- Photo gallery with lightbox
- Booking system integration
- Multi-language support

## Credits

- Design: Based on Comprehensive Design Brief
- Fonts: Google Fonts (Playfair Display, Inter)
- Development: Custom HTML/CSS/JS
- Inspiration: Offsite.com aesthetic

## License

Proprietary - All rights reserved by Teamtrip

---

**Need help?** Contact the development team at KandraDigital
