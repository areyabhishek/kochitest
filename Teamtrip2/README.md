# TeamTrip - Corporate Offsite Planning Website

A modern, professional website for corporate offsite planning services, featuring content from TeamTrip with a sleek, contemporary design.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Dynamic forms, smooth scrolling, and engaging interactions
- **Content Sections**:
  - Hero section with key statistics
  - Benefits of corporate offsites
  - Destination showcases (Coorg, Wayanad, Pondicherry, Mussoorie)
  - Client testimonials and logos
  - Service offerings
  - Estimate calculator form
  - Culture-first organization information
  - FAQ section
  - Contact information

## File Structure

```
Teamtrip2/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

### Option 1: Open Directly in Browser

Simply open `index.html` in your web browser. No build process or server required.

### Option 2: Using a Local Server

For the best experience, use a local development server:

#### Using Python (if installed):
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

#### Using VS Code:
Install the "Live Server" extension and right-click on `index.html` to select "Open with Live Server".

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --secondary-color: #10b981;
    /* ... */
}
```

### Content
All content can be edited directly in `index.html`. The structure is semantic and easy to modify.

### Styling
All styles are in `styles.css`. The design uses modern CSS with:
- CSS Grid and Flexbox for layouts
- CSS Variables for theming
- Smooth transitions and animations
- Responsive breakpoints

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features in Detail

### Navigation
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Smooth scroll to sections

### Hero Section
- Eye-catching gradient background
- Key statistics display
- Call-to-action buttons

### Interactive Forms
- Estimate calculator with validation
- Checkbox groups for entertainment options
- Form submission handling

### Animations
- Scroll-triggered animations
- Hover effects on cards
- Smooth transitions

## Future Enhancements

Potential additions:
- Backend integration for form submissions
- Image galleries for destinations
- Blog section functionality
- User authentication for booking
- Payment integration
- Real-time chat support

## License

This project is created for TeamTrip corporate offsite planning services.

## Contact

For questions or support, please contact TeamTrip through the contact form on the website.

---

**Designed & Developed for TeamTrip** | Content sourced from [teamtrip.co.in](https://teamtrip.co.in/)

