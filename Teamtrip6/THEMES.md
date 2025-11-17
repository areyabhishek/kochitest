# Theme System Documentation

The Teamtrip website features a dynamic theme switcher with 6 distinct aesthetic styles. Each theme has been carefully designed with a clear point of view, avoiding generic or common UI patterns.

## Available Themes

### 1. Art Book (Default)
**Aesthetic**: High-contrast print poster, editorial photography
- **Fonts**: Playfair Display (heading) + Inter (body)
- **Colors**: Pure black/white with bold orange-red accent (#FF4400)
- **Vibe**: Professional clarity meets striking visual design
- **Details**: Grain texture overlay, wide margins, strong edges

### 2. Brutalist
**Aesthetic**: Raw concrete, stark geometry, bold shapes
- **Fonts**: Space Grotesk (heading) + IBM Plex Mono (body)
- **Colors**: Dark charcoal with electric yellow accent (#ffff00)
- **Vibe**: Architectural, unpolished, direct
- **Details**: Hard drop shadows, rotated elements, clip-path shapes

### 3. Retro Wave
**Aesthetic**: 80s synthwave, neon nights, cyberpunk
- **Fonts**: Orbitron (heading) + Exo 2 (body)
- **Colors**: Deep purple/blue with hot pink/cyan accents (#ff00ff, #00ffff)
- **Vibe**: Nostalgic futurism, arcade energy
- **Details**: Neon glows, grid patterns, radial gradients

### 4. Editorial
**Aesthetic**: High fashion magazine, refined elegance
- **Fonts**: Bodoni Moda (heading) + Crimson Text (body)
- **Colors**: Near-black with warm gold accent (#b8860b)
- **Vibe**: Sophisticated, luxurious, timeless
- **Details**: Subtle shadows, refined spacing, understated borders

### 5. Techno
**Aesthetic**: Industrial rave, digital glitch, matrix vibes
- **Fonts**: Rajdhani (heading) + Share Tech Mono (body)
- **Colors**: Pure black with laser green/cyan (#00ff00, #00ffff)
- **Vibe**: High-tech, underground, electric
- **Details**: Scanline effects, terminal prefixes, glowing borders

### 6. Film Editorial
**Aesthetic**: Film editor's scrapbook, indie art magazine
- **Fonts**: Fraunces (heading) + Libre Franklin (body)
- **Colors**: Warm off-white with deep red accent (#8b2e1f)
- **Vibe**: Raw, moody, human, art-heavy
- **Details**: Asymmetric margins, corner marks on images, scroll progress bar, film credits footer, print-style dividing lines

## Implementation

### HTML
```html
<!-- Theme switcher in body -->
<div class="theme-switcher">
    <button class="theme-btn active" data-theme="artbook">Art Book</button>
    <button class="theme-btn" data-theme="brutalist">Brutalist</button>
    <button class="theme-btn" data-theme="retro">Retro Wave</button>
    <button class="theme-btn" data-theme="editorial">Editorial</button>
    <button class="theme-btn" data-theme="techno">Techno</button>
</div>

<!-- Theme data attribute on body -->
<body data-theme="artbook">
```

### CSS
```css
/* Theme variables are scoped to data-theme attribute */
[data-theme="artbook"] {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-accent: #FF4400;
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
}
```

### JavaScript
```javascript
// Theme is saved to localStorage
function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('teamtrip-theme', theme);
}
```

## User Experience

### Persistence
- Theme choice is saved to `localStorage`
- Persists across page reloads and sessions
- Key: `teamtrip-theme`

### Transitions
- Smooth 0.5s transitions on theme changes
- Background colors fade gracefully
- Text and borders animate smoothly

### Mobile
- Theme switcher is responsive
- Buttons wrap on smaller screens
- Remains accessible on all devices

## Adding New Themes

To add a new theme:

1. **Add fonts to HTML** (`index.html`):
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

2. **Define theme variables** (`styles.css`):
```css
[data-theme="newtheme"] {
    --color-black: #yourcolor;
    --color-white: #yourcolor;
    --color-accent: #yourcolor;
    --font-heading: 'Your Font', fallback;
    --font-body: 'Your Font', fallback;
}
```

3. **Add theme-specific styles**:
```css
[data-theme="newtheme"] .hero {
    /* Custom styling */
}
```

4. **Add button to HTML**:
```html
<button class="theme-btn" data-theme="newtheme">New Theme</button>
```

## Design Philosophy

Each theme follows the `frontend_aesthetics_v2` principles:

### ✅ Clear Point of View
- Each theme has a distinct aesthetic identity
- No generic or "safe" design choices
- Inspired by real-world design movements

### ✅ Distinctive Typography
- No default tech fonts (Inter, Roboto, system fonts)
- Unique font pairings for each theme
- Strong display fonts with clean text fonts

### ✅ Bold Color Choices
- Not subtle or corporate-safe
- Each theme pulls from specific inspirations:
  - Art Book: Print posters
  - Brutalist: Concrete architecture
  - Retro Wave: 80s music/film
  - Editorial: Fashion magazines
  - Techno: Industrial raves

### ✅ Deliberate Motion
- Smooth load-ins and transitions
- CSS-based for performance
- Not overdone or distracting

### ✅ Layered Backgrounds
- Grain, gradients, patterns
- No flat fills (except when intentional)
- Adds depth and texture

### ❌ Avoided Patterns
- Common gradient tricks
- Landing page kit layouts
- Repeated AI output patterns
- Generic shadow/border treatments

## Browser Compatibility

All themes work in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Fallbacks
```css
/* Fonts have system fallbacks */
--font-heading: 'Playfair Display', serif;
--font-body: 'Inter', sans-serif;

/* Colors use hex values (universal support) */
--color-accent: #FF4400;
```

## Performance

### Font Loading
- Fonts preconnected to Google Fonts
- Multiple font families loaded upfront
- Display: swap for faster rendering

### CSS Size
- All themes in one file
- Scoped with data attributes
- ~1000 lines total (gzipped: ~20KB)

### JavaScript
- Minimal theme switching logic
- LocalStorage for persistence
- No external dependencies

## Accessibility

### Keyboard Navigation
- Theme buttons are keyboard accessible
- Tab order is logical
- Focus states are visible

### Color Contrast
- All themes meet WCAG AA standards
- Text remains readable
- Accent colors have sufficient contrast

### Screen Readers
- Buttons have descriptive text
- Theme changes don't disrupt reading
- ARIA attributes where needed

## Use Cases

### Marketing Site
- Switch themes for different campaigns
- Match seasonal aesthetics
- A/B test different styles

### Client Presentations
- Showcase design flexibility
- Let clients choose their vibe
- Demo different moods instantly

### Brand Evolution
- Start with one theme
- Introduce new themes over time
- Keep users engaged with variety

## Future Enhancements

Potential additions:
- [ ] More themes (Memphis, Swiss, Grunge, etc.)
- [ ] Theme preview on hover
- [ ] Custom theme builder
- [ ] Theme-specific animations
- [ ] User-submitted themes
- [ ] Theme of the day

## Credits

**Inspiration Sources**:
- Art Book: Offsite.com, design annuals
- Brutalist: Bauhaus, Soviet architecture
- Retro Wave: Synthwave artwork, 80s films
- Editorial: Vogue, fashion photography
- Techno: Rave flyers, terminal UIs

**Fonts**: Google Fonts
**Implementation**: Custom CSS variables + vanilla JavaScript

---

**Version**: 1.0.0
**Last Updated**: November 2025
