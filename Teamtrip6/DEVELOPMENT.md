# Development Guide - Teamtrip Website

## Quick Reference

### File Organization
```
Core Files:
├── index.html      (328 lines) - Structure & Content
├── styles.css      (701 lines) - Design & Layout
└── script.js       (365 lines) - Interactions & Animations

Documentation:
├── README.md           - Full project docs
├── QUICKSTART.md       - Quick start guide
├── CHECKLIST.md        - Launch checklist
├── PROJECT_SUMMARY.md  - Project overview
└── DEVELOPMENT.md      - This file

Configuration:
├── package.json    - NPM config
├── .gitignore      - Git ignore rules
├── sitemap.xml     - SEO sitemap
└── robots.txt      - Search engine rules
```

## Development Workflow

### 1. Local Setup
```bash
# Clone/download the project
cd Teamtrip6

# Option A: Simple file viewing
open index.html

# Option B: Local server (recommended)
python3 -m http.server 8000
# Visit http://localhost:8000

# Option C: Node.js server
npx serve .
# Visit http://localhost:3000
```

### 2. Making Changes

#### Editing Content
- **Location**: `index.html`
- **What to edit**: Text, headings, lists
- **Hot reload**: Save and refresh browser

#### Styling Changes
- **Location**: `styles.css`
- **What to edit**: Colors, spacing, layouts
- **CSS Variables**: Edit at top of file (`:root` section)

#### Adding Interactions
- **Location**: `script.js`
- **What to add**: New animations, events
- **Testing**: Check browser console (F12)

### 3. Testing Changes
```bash
# View in different browsers
open -a "Google Chrome" index.html
open -a "Firefox" index.html
open -a "Safari" index.html

# Mobile testing (Chrome DevTools)
# 1. Open Chrome DevTools (F12)
# 2. Click device toolbar icon
# 3. Select device to emulate
```

## Common Modifications

### Change Accent Color
```css
/* In styles.css, line ~8 */
:root {
    --color-accent: #FF4400; /* Change this hex code */
}
```

### Change Fonts
```html
<!-- In index.html, update Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```
```css
/* In styles.css */
:root {
    --font-heading: 'Your Font', serif;
    --font-body: 'Your Font', sans-serif;
}
```

### Add New Section
```html
<!-- In index.html, add before footer -->
<section class="your-section">
    <h2 class="section-title">Your Title</h2>
    <div class="your-content">
        <!-- Your content here -->
    </div>
</section>
```
```css
/* In styles.css, add styling */
.your-section {
    padding: var(--space-xxl) var(--margin-side);
    background-color: var(--color-white);
}
```

### Add Real Images
```html
<!-- Replace placeholder div with img -->
<div class="destination-image-wrapper">
    <img src="images/coorg.jpg"
         alt="Coffee plantations in Coorg"
         class="destination-image"
         loading="lazy">
</div>
```

## CSS Architecture

### Design System Variables
```css
:root {
    /* Colors */
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-accent: #FF4400;

    /* Typography */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;

    /* Spacing (8px base) */
    --space-xs: 0.5rem;    /* 8px */
    --space-sm: 1rem;      /* 16px */
    --space-md: 2rem;      /* 32px */
    --space-lg: 4rem;      /* 64px */
    --space-xl: 6rem;      /* 96px */
    --space-xxl: 8rem;     /* 128px */

    /* Layout */
    --max-width: 1400px;
    --margin-side: 5vw;

    /* Motion */
    --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --duration-slow: 1.2s;
    --duration-medium: 0.6s;
}
```

### Section Structure
```css
/* All sections follow this pattern */
section {
    padding: var(--space-xxl) var(--margin-side);
    position: relative;
}

/* Responsive adjustments */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small mobile */ }
```

## JavaScript Structure

### Main Functions
```javascript
// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();    // Scroll-triggered animations
    initSmoothScroll();        // Smooth anchor links
    initParallaxEffects();     // Parallax image effects
});

// Intersection Observer
const observerOptions = {
    threshold: 0.15,           // Trigger at 15% visible
    rootMargin: '0px 0px -100px 0px'
};
```

### Adding New Animations
```javascript
// 1. Select elements
const elements = document.querySelectorAll('.your-element');

// 2. Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 3. Observe elements
elements.forEach(el => observer.observe(el));
```

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* Base styles are mobile */

@media (min-width: 481px) {
    /* Small tablets and up */
}

@media (min-width: 769px) {
    /* Tablets and up */
}

@media (min-width: 1025px) {
    /* Desktop and up */
}

@media (min-width: 1441px) {
    /* Large desktop and up */
}
```

### Testing Responsive Design
```bash
# Chrome DevTools
1. Open DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select device or set custom dimensions

# Common test sizes:
- 320px  (iPhone SE)
- 375px  (iPhone 12/13)
- 768px  (iPad)
- 1024px (iPad Pro)
- 1440px (Laptop)
- 1920px (Desktop)
```

## Performance Optimization

### Image Optimization
```bash
# Recommended tools:
- Squoosh.app (web)
- ImageOptim (Mac)
- TinyPNG (web)

# Target sizes:
- Full-width images: < 200KB
- Card images: < 100KB
- Icons: < 20KB

# Formats:
- Primary: WebP
- Fallback: JPG (90% quality)
```

### CSS Optimization
```bash
# Minify CSS for production
npx clean-css-cli -o styles.min.css styles.css

# Update HTML to use minified version
<link rel="stylesheet" href="styles.min.css">
```

### JavaScript Optimization
```bash
# Minify JS for production
npx terser script.js -o script.min.js -c -m

# Update HTML
<script src="script.min.js"></script>
```

## Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: Teamtrip website"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Daily Workflow
```bash
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "Update: brief description"

# Push to remote
git push origin main
```

### Branching Strategy
```bash
# Create feature branch
git checkout -b feature/new-section

# Work on changes
# ... make edits ...

# Commit changes
git add .
git commit -m "Add: new section"

# Merge back to main
git checkout main
git merge feature/new-section
git push origin main
```

## Debugging

### Browser Console
```javascript
// Open console (F12) and check for:
// - Errors (red)
// - Warnings (yellow)
// - Network issues (Network tab)
```

### Common Issues

**Animations not working?**
```javascript
// Check if JavaScript is loaded
console.log('Script loaded');

// Check if elements exist
console.log(document.querySelectorAll('.destination-card'));
```

**Styles not applying?**
```css
/* Check CSS specificity */
/* More specific selector wins */
.section .card { } /* Less specific */
.destinations-section .destination-card { } /* More specific */
```

**Mobile layout broken?**
```html
<!-- Check viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Browser DevTools

### Essential Tools
1. **Elements Panel**: Inspect HTML/CSS
2. **Console**: JavaScript errors/logs
3. **Network**: Check file loading
4. **Performance**: Analyze page speed
5. **Lighthouse**: SEO and accessibility audit

### Keyboard Shortcuts
```
Ctrl/Cmd + Shift + C  - Inspect element
Ctrl/Cmd + Shift + M  - Toggle device toolbar
Ctrl/Cmd + Shift + R  - Hard refresh (clear cache)
F12                   - Open/close DevTools
```

## Code Style Guide

### HTML
```html
<!-- Use semantic tags -->
<section class="destinations-section">
    <article class="destination-card">
        <!-- content -->
    </article>
</section>

<!-- Proper indentation (4 spaces) -->
<div class="parent">
    <div class="child">
        <p>Content</p>
    </div>
</div>
```

### CSS
```css
/* Group related rules */
.element {
    /* Display & Box Model */
    display: flex;
    padding: 1rem;
    margin: 2rem 0;

    /* Typography */
    font-size: 1rem;
    line-height: 1.5;

    /* Visual */
    background: white;
    border: 1px solid black;

    /* Animation */
    transition: all 0.3s ease;
}
```

### JavaScript
```javascript
// Use clear function names
function initScrollAnimations() {
    // Implementation
}

// Use const/let instead of var
const elements = document.querySelectorAll('.element');
let counter = 0;

// Comment complex logic
// Calculate offset based on viewport height
const offset = window.innerHeight * 0.3;
```

## Deployment Process

### Pre-deployment
```bash
# 1. Test thoroughly
# 2. Optimize images
# 3. Minify CSS/JS (optional)
# 4. Update meta tags
# 5. Test on multiple devices
```

### Netlify Deployment
```bash
# Option 1: Drag and drop
# Visit netlify.com, drag folder

# Option 2: CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Traditional Hosting
```bash
# Upload via FTP
# 1. Connect to server
# 2. Upload all files to public_html/
# 3. Verify permissions (755 for folders, 644 for files)
# 4. Test live site
```

## Maintenance Tasks

### Weekly
- Check analytics
- Monitor performance
- Review error logs

### Monthly
- Update content
- Optimize images
- Check broken links
- Review SEO rankings

### Quarterly
- Security audit
- Performance review
- Design refresh
- Feature updates

## Support Resources

### Documentation
- MDN Web Docs: https://developer.mozilla.org
- CSS-Tricks: https://css-tricks.com
- Can I Use: https://caniuse.com

### Tools
- Lighthouse: Chrome DevTools
- WAVE: https://wave.webaim.org
- GTmetrix: https://gtmetrix.com
- PageSpeed: https://pagespeed.web.dev

### Community
- Stack Overflow
- GitHub Issues
- Web Dev Subreddit

---

**Questions?** Check the other documentation files or contact the development team.

**Version:** 1.0.0
**Last Updated:** November 2025
