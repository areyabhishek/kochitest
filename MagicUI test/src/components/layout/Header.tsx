import { Link } from 'react-router-dom';
import { Menu, X, Ship, Plane } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import ThemeSwitcher from '../ThemeSwitcher';
import { getCurrentThemeStyle } from '@/lib/theme-config';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeStyle, setThemeStyle] = useState(getCurrentThemeStyle());

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const style = document.documentElement.getAttribute('data-theme-style');
      if (style) {
        setThemeStyle(style as any);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme-style']
    });

    return () => observer.disconnect();
  }, []);

  // Render different header based on theme style
  if (themeStyle === 'minimal') {
    return <MinimalHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />;
  } else if (themeStyle === 'brutalist') {
    return <BrutalistHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />;
  } else {
    return <GlassHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />;
  }
}

// MINIMAL HEADER: Transparent glass with centered logo
function MinimalHeader({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b-0" style={{ height: 'var(--header-height)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Logo - Centered visually by spacing */}
          <Link to="/" className="flex items-center space-x-3">
            <Ship className="h-5 w-5 text-foreground" />
            <span className="text-base font-medium tracking-wide">VoyageVista</span>
          </Link>

          {/* Desktop Navigation - Clean text only */}
          <nav className="hidden lg:flex items-center" style={{ gap: 'var(--gap-lg)' }}>
            <Link to="/" className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Home
            </Link>

            <Link to="/cruises/europe" className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Europe
            </Link>

            <Link to="/cruises/asia" className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Asia
            </Link>

            <Link to="/trips/family" className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Family
            </Link>

            <Link to="/about" className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              About
            </Link>

            <Link to="/contact" className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Contact
            </Link>
          </nav>

          {/* Right side - Theme switcher and CTA */}
          <div className="hidden lg:flex items-center" style={{ gap: 'var(--gap-md)' }}>
            <ThemeSwitcher />
            <Link to="/search">
              <Button size="lg" className="rounded-full px-6">Search Trips</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4">
            <Link to="/" className="block text-sm font-normal text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/cruises/europe" className="block text-sm font-normal text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Europe Cruises</Link>
            <Link to="/cruises/asia" className="block text-sm font-normal text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Asia Cruises</Link>
            <Link to="/trips/family" className="block text-sm font-normal text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Family Trips</Link>
            <Link to="/about" className="block text-sm font-normal text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-sm font-normal text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <ThemeSwitcher />
            <Link to="/search" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full rounded-full">Search Trips</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

// BRUTALIST HEADER: Dense, left-aligned with thick border
function BrutalistHeader({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-[var(--border-width)] border-foreground" style={{ height: 'var(--header-height)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Logo - Compact, left-aligned */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-foreground text-background p-1">
              <Ship className="h-4 w-4" />
            </div>
            <span className="text-sm font-black uppercase tracking-wider">VoyageVista</span>
          </Link>

          {/* Desktop Navigation - All caps with underlines */}
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Home
            </Link>

            <Link to="/cruises/europe" className="text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Europe
            </Link>

            <Link to="/cruises/asia" className="text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Asia
            </Link>

            <Link to="/trips/family" className="text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Family
            </Link>

            <Link to="/about" className="text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all" style={{ transitionDuration: 'var(--transition-speed)' }}>
              About
            </Link>

            <Link to="/contact" className="text-xs font-black uppercase tracking-wide hover:underline decoration-2 underline-offset-4 transition-all" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitcher />
            <Link to="/search">
              <Button variant="outline" size="sm" className="font-black uppercase text-xs">Search</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 border-[var(--border-width)] border-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t-[var(--border-width)] border-foreground mt-2 pt-2">
            <Link to="/" className="block text-xs font-black uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/cruises/europe" className="block text-xs font-black uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Europe</Link>
            <Link to="/cruises/asia" className="block text-xs font-black uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Asia</Link>
            <Link to="/trips/family" className="block text-xs font-black uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Family</Link>
            <Link to="/about" className="block text-xs font-black uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-xs font-black uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <div className="pt-2">
              <ThemeSwitcher />
            </div>
            <Link to="/search" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full font-black uppercase text-xs">Search</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

// GLASS HEADER: Frosted glass with icons
function GlassHeader({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50" style={{
      height: 'var(--header-height)',
      backgroundColor: 'hsl(var(--background) / var(--card-bg-opacity))',
      backdropFilter: `blur(var(--card-backdrop-blur))`
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-lg">
              <Ship className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-base font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VoyageVista
            </span>
          </Link>

          {/* Desktop Navigation - Icons with labels */}
          <nav className="hidden lg:flex items-center" style={{ gap: 'var(--gap-md)' }}>
            <Link to="/" className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Home
            </Link>

            <Link to="/cruises/europe" className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              <Ship className="h-4 w-4" />
              Europe
            </Link>

            <Link to="/cruises/asia" className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              <Ship className="h-4 w-4" />
              Asia
            </Link>

            <Link to="/trips/family" className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              <Plane className="h-4 w-4" />
              Family
            </Link>

            <Link to="/about" className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              About
            </Link>

            <Link to="/contact" className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" style={{ transitionDuration: 'var(--transition-speed)' }}>
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center" style={{ gap: 'var(--gap-md)' }}>
            <ThemeSwitcher />
            <Link to="/search">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Search Trips
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            <Link to="/" className="block text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/cruises/europe" className="block text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Europe Cruises</Link>
            <Link to="/cruises/asia" className="block text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Asia Cruises</Link>
            <Link to="/trips/family" className="block text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Family Trips</Link>
            <Link to="/about" className="block text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <ThemeSwitcher />
            <Link to="/search" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-accent">Search Trips</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
