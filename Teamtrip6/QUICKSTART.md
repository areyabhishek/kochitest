# Quick Start Guide - Teamtrip Website

## Getting Started in 3 Steps

### 1. View the Website Locally

**Option A: Open directly in browser**
```bash
# Just double-click index.html
# Or from terminal:
open index.html
```

**Option B: Use a local server (recommended)**
```bash
# If you have Python installed:
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

**Option C: VS Code Live Server**
- Install "Live Server" extension in VS Code
- Right-click `index.html`
- Select "Open with Live Server"

### 2. Customize Content

All content is in `index.html`. Simply open it and edit:

**Change the hero text:**
```html
<h1 class="hero-title">HIRE US AND RELAX</h1>
```

**Update destinations:**
Find the destination sections and modify the text.

**Change colors:**
Edit `styles.css` at the top:
```css
:root {
    --color-accent: #FF4400; /* Change this to your brand color */
}
```

### 3. Deploy

**Netlify (easiest):**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire folder
3. Done! You'll get a live URL

**Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Import from Git or drag and drop
3. Deploy!

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repo settings
```

## Key Features

✅ **Fully Responsive** - Works on all devices
✅ **Fast Loading** - Vanilla JS, no frameworks
✅ **SEO Ready** - Semantic HTML structure
✅ **Accessible** - WCAG AA compliant
✅ **Animated** - Smooth scroll animations

## Common Customizations

### Adding Real Images

Replace the placeholder backgrounds in `styles.css`:

```css
/* Find these classes and update */
.placeholder-coorg {
    background: url('images/coorg.jpg') center/cover;
}
```

Or update HTML:
```html
<div class="destination-image-wrapper">
    <img src="images/coorg.jpg" alt="Coorg landscape" class="destination-image">
</div>
```

### Changing Fonts

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the font link in `index.html`
4. Update CSS variables in `styles.css`:

```css
:root {
    --font-heading: 'Your Heading Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### Adding a Contact Form

Add this in `index.html` before the footer:

```html
<section class="contact-section">
    <h2 class="section-title">Get In Touch</h2>
    <form class="contact-form">
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
    </form>
</section>
```

## Need Help?

- Check the full [README.md](README.md) for detailed documentation
- Review the design brief for style guidelines
- Contact development team for support

## File Structure

```
Teamtrip6/
├── index.html          ← Main page
├── styles.css          ← All styling
├── script.js           ← Animations
├── README.md           ← Full documentation
├── QUICKSTART.md       ← This file
└── .gitignore          ← Git configuration
```

## Performance Tips

1. **Optimize images**: Use WebP format, compress to < 200KB
2. **Add lazy loading**: Change `src` to `data-src` for images
3. **Minify CSS/JS**: Before production, minify your files
4. **Use a CDN**: Host images on a CDN for faster loading

## Troubleshooting

**Animations not working?**
- Open browser console (F12) to check for errors
- Make sure JavaScript is enabled

**Styles look broken?**
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check that styles.css is loading

**Mobile layout issues?**
- Test in Chrome DevTools mobile view
- Check responsive breakpoints in CSS

---

**Ready to launch?** 🚀

Make sure to:
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Replace placeholder images
- [ ] Update meta tags in HTML
- [ ] Add analytics code (Google Analytics, etc.)
- [ ] Set up contact form backend
