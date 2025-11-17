// Theme configurations for dramatically different visual styles
// Each theme transforms the entire site appearance

export const themes = {
  minimal: {
    name: 'Modern Minimal',
    style: 'minimal',
    colors: {
      // Colors - Monochromatic with subtle accent
      '--background': '0 0% 100%',
      '--foreground': '240 10% 3.9%',
      '--primary': '240 5.9% 10%',
      '--primary-foreground': '0 0% 98%',
      '--secondary': '240 4.8% 95.9%',
      '--secondary-foreground': '240 5.9% 10%',
      '--muted': '240 4.8% 95.9%',
      '--muted-foreground': '240 3.8% 46.1%',
      '--accent': '240 4.8% 95.9%',
      '--accent-foreground': '240 5.9% 10%',
      '--destructive': '0 72.2% 50.6%',
      '--destructive-foreground': '0 0% 98%',
      '--border': '240 5.9% 90%',
      '--input': '240 5.9% 90%',
      '--ring': '240 5.9% 10%',

      // Shape - Very rounded
      '--radius': '1.5rem',

      // Spacing - Extra spacious
      '--card-padding': '2rem',
      '--section-padding-y': '5rem',
      '--header-height': '5rem',
      '--gap-sm': '1rem',
      '--gap-md': '2rem',
      '--gap-lg': '3rem',

      // Shadows - Soft and minimal
      '--shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      '--shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      '--shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',

      // Borders - None
      '--border-width': '0px',

      // Typography - Light and large
      '--heading-weight': '600',
      '--body-weight': '400',
      '--font-size-scale': '1.1',

      // Transitions - Slow and smooth
      '--transition-speed': '400ms',

      // Card style - Filled
      '--card-bg-opacity': '1',
      '--card-backdrop-blur': '0px',
    }
  },

  brutalist: {
    name: 'Bold Brutalist',
    style: 'brutalist',
    colors: {
      // Colors - High contrast
      '--background': '0 0% 100%',
      '--foreground': '0 0% 0%',
      '--primary': '0 0% 0%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '0 0% 95%',
      '--secondary-foreground': '0 0% 0%',
      '--muted': '0 0% 95%',
      '--muted-foreground': '0 0% 40%',
      '--accent': '47 100% 50%',
      '--accent-foreground': '0 0% 0%',
      '--destructive': '0 100% 50%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '0 0% 0%',
      '--input': '0 0% 90%',
      '--ring': '0 0% 0%',

      // Shape - Sharp corners
      '--radius': '0rem',

      // Spacing - Compact
      '--card-padding': '1rem',
      '--section-padding-y': '2rem',
      '--header-height': '3.5rem',
      '--gap-sm': '0.5rem',
      '--gap-md': '1rem',
      '--gap-lg': '1.5rem',

      // Shadows - Hard or none
      '--shadow-sm': 'none',
      '--shadow-md': '4px 4px 0px rgba(0, 0, 0, 1)',
      '--shadow-lg': '8px 8px 0px rgba(0, 0, 0, 1)',

      // Borders - Thick
      '--border-width': '3px',

      // Typography - Bold and tight
      '--heading-weight': '800',
      '--body-weight': '500',
      '--font-size-scale': '1',

      // Transitions - Fast and snappy
      '--transition-speed': '100ms',

      // Card style - Outlined
      '--card-bg-opacity': '1',
      '--card-backdrop-blur': '0px',
    }
  },

  glass: {
    name: 'Soft Glass',
    style: 'glass',
    colors: {
      // Colors - Soft with gradients
      '--background': '220 20% 97%',
      '--foreground': '220 10% 10%',
      '--primary': '220 90% 56%',
      '--primary-foreground': '0 0% 100%',
      '--secondary': '220 15% 91%',
      '--secondary-foreground': '220 10% 10%',
      '--muted': '220 15% 91%',
      '--muted-foreground': '220 10% 45%',
      '--accent': '280 80% 60%',
      '--accent-foreground': '0 0% 100%',
      '--destructive': '0 85% 60%',
      '--destructive-foreground': '0 0% 100%',
      '--border': '220 15% 85%',
      '--input': '220 15% 90%',
      '--ring': '220 90% 56%',

      // Shape - Medium rounded
      '--radius': '1rem',

      // Spacing - Generous
      '--card-padding': '1.5rem',
      '--section-padding-y': '4rem',
      '--header-height': '4rem',
      '--gap-sm': '0.75rem',
      '--gap-md': '1.5rem',
      '--gap-lg': '2.5rem',

      // Shadows - Large and colorful
      '--shadow-sm': '0 2px 8px 0 rgb(99 102 241 / 0.05)',
      '--shadow-md': '0 8px 16px -4px rgb(99 102 241 / 0.1), 0 4px 8px -2px rgb(99 102 241 / 0.05)',
      '--shadow-lg': '0 20px 25px -5px rgb(99 102 241 / 0.15), 0 8px 10px -6px rgb(99 102 241 / 0.1)',

      // Borders - Thin
      '--border-width': '1px',

      // Typography - Medium
      '--heading-weight': '700',
      '--body-weight': '400',
      '--font-size-scale': '1.05',

      // Transitions - Medium smooth
      '--transition-speed': '250ms',

      // Card style - Glass morphism
      '--card-bg-opacity': '0.7',
      '--card-backdrop-blur': '12px',
    }
  }
};

export type ThemeName = keyof typeof themes;
export type ThemeStyle = 'minimal' | 'brutalist' | 'glass';

export function applyTheme(themeName: ThemeName) {
  const theme = themes[themeName];
  const root = document.documentElement;

  // Apply all CSS variables
  Object.entries(theme.colors).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });

  // Set data attribute for conditional styling
  root.setAttribute('data-theme-style', theme.style);

  // Save theme preference
  localStorage.setItem('voyage-vista-theme', themeName);
}

export function getInitialTheme(): ThemeName {
  const savedTheme = localStorage.getItem('voyage-vista-theme') as ThemeName;
  return savedTheme && themes[savedTheme] ? savedTheme : 'minimal';
}

export function getCurrentThemeStyle(): ThemeStyle {
  const themeName = getInitialTheme();
  return themes[themeName].style;
}
