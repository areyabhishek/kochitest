// Theme Switcher for VoyageVista
// Manages theme selection and persistence across all pages

(function() {
  // Get current theme from localStorage or default
  function getCurrentTheme() {
    return localStorage.getItem('voyagevista-theme') || 'default';
  }

  // Set theme on page load
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('voyagevista-theme', theme);

    // Update active theme button if exists
    updateActiveThemeButton(theme);

    // Load appropriate fonts for the theme
    loadThemeFonts(theme);
  }

  // Update active theme button styling
  function updateActiveThemeButton(theme) {
    const themeButtons = document.querySelectorAll('[data-theme-btn]');
    themeButtons.forEach(btn => {
      const btnTheme = btn.getAttribute('data-theme-btn');
      if (btnTheme === theme) {
        btn.classList.add('active-theme');
      } else {
        btn.classList.remove('active-theme');
      }
    });
  }

  // Load fonts based on theme
  function loadThemeFonts(theme) {
    const fontMap = {
      'default': 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
      'zen': 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      'adventure': 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@300;400;600;700;800&display=swap',
      'luxury': 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600&display=swap',
      'tropical': 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@300;400;600;700;800&display=swap'
    };

    const fontUrl = fontMap[theme] || fontMap['default'];

    // Check if font link already exists
    const existingLink = document.querySelector('link[data-theme-font]');
    if (existingLink) {
      existingLink.href = fontUrl;
    } else {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fontUrl;
      link.setAttribute('data-theme-font', 'true');
      document.head.appendChild(link);
    }
  }

  // Initialize theme on page load
  document.addEventListener('DOMContentLoaded', function() {
    const currentTheme = getCurrentTheme();
    applyTheme(currentTheme);

    // Add click handlers to theme switcher buttons
    const themeButtons = document.querySelectorAll('[data-theme-btn]');
    themeButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const theme = this.getAttribute('data-theme-btn');
        applyTheme(theme);
      });
    });
  });

  // Export functions for manual theme switching
  window.VoyageVistaTheme = {
    setTheme: applyTheme,
    getTheme: getCurrentTheme
  };
})();
