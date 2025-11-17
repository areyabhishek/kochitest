"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { themes } from "@/config/themes";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function ThemedHome() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  // Render different layouts based on theme
  switch (currentTheme.layout) {
    case "stacked":
      return <ModernStackedLayout />;
    case "sidebar":
      return <ClassicSidebarLayout />;
    case "grid":
      return <MinimalGridLayout />;
    case "asymmetric":
      return <BoldAsymmetricLayout />;
    default:
      return <ModernStackedLayout />;
  }
}

// Theme 1: Modern Ocean - Stacked vertical layout with gradients
function ModernStackedLayout() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.colors.bg }}>
      {/* Hero Section */}
      <section
        className="relative h-[700px] flex items-center justify-center text-white"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primary} 0%, ${currentTheme.colors.secondary} 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div
            className="inline-block mb-6 px-4 py-2 backdrop-blur-sm rounded-full border"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)" }}
          >
            <span className="text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Curated tours & cruises
            </span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${currentTheme.fonts.heading}`}>
            Explore the world.<br />One trip at a time.
          </h1>
          <p className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto">
            Browse tours, cruises and tailor-made trips for families, friends, and bachelor or bachelorette groups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#search"
              className="px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "white", color: currentTheme.colors.primary }}
            >
              Start Exploring →
            </a>
            <a
              href="/cruises/europe"
              className="px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 border-2"
              style={{ borderColor: "white", color: "white", backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              View Cruises
            </a>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section id="search" className="-mt-32 relative z-30 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar />
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: "white" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Personalized Trips", desc: "Tailored experiences just for you" },
              { icon: "✈️", title: "Global Destinations", desc: "Explore over 100 countries" },
              { icon: "⭐", title: "5-Star Service", desc: "Award-winning customer support" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 rounded-2xl transition-transform hover:scale-105" style={{ backgroundColor: currentTheme.colors.bg }}>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${currentTheme.fonts.heading}`} style={{ color: currentTheme.colors.text }}>
                  {feature.title}
                </h3>
                <p style={{ color: currentTheme.colors.secondary }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Theme 2: Classic Elegance - Sidebar layout with content next to sidebar
function ClassicSidebarLayout() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.colors.bg, color: currentTheme.colors.text }}>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="lg:w-1/3 xl:w-1/4 p-8 lg:sticky lg:top-20 lg:h-screen" style={{ backgroundColor: currentTheme.colors.secondary + "10" }}>
          <div className="space-y-8">
            <div>
              <h2 className={`text-4xl font-bold mb-4 ${currentTheme.fonts.heading}`} style={{ color: currentTheme.colors.primary }}>
                Discover Your Next Adventure
              </h2>
              <p className={`text-lg leading-relaxed ${currentTheme.fonts.body}`} style={{ color: currentTheme.colors.text }}>
                Embark on extraordinary journeys curated by travel experts. From Mediterranean cruises to Alpine adventures.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.accent }}>
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <div className={`font-bold ${currentTheme.fonts.heading}`}>50+ Destinations</div>
                  <div className="text-sm opacity-75">Worldwide locations</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: currentTheme.colors.accent }}>
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <div className={`font-bold ${currentTheme.fonts.heading}`}>10,000+ Travelers</div>
                  <div className="text-sm opacity-75">Happy customers</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-12">
          <div id="search">
            <SearchBar />
          </div>

          {/* Featured Destinations */}
          <div>
            <h3 className={`text-3xl font-bold mb-8 ${currentTheme.fonts.heading}`} style={{ color: currentTheme.colors.primary }}>
              Featured Destinations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {["Mediterranean Cruise", "Swiss Alps Tour", "Greek Islands", "Norwegian Fjords"].map((dest, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg border-2 hover:shadow-xl transition-all cursor-pointer"
                  style={{ borderColor: currentTheme.colors.accent, backgroundColor: "white" }}
                >
                  <div className={`text-xl font-bold mb-2 ${currentTheme.fonts.heading}`} style={{ color: currentTheme.colors.primary }}>
                    {dest}
                  </div>
                  <p className="text-sm opacity-75">From $1,299 per person</p>
                  <button
                    className="mt-4 px-6 py-2 rounded-md font-semibold"
                    style={{ backgroundColor: currentTheme.colors.primary, color: currentTheme.colors.bg }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Theme 3: Minimal Zen - Clean grid layout with lots of white space
function MinimalGridLayout() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.colors.bg, color: currentTheme.colors.text }}>
      {/* Minimal Hero */}
      <section className="py-32 px-8 border-b" style={{ borderColor: currentTheme.colors.accent }}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className={`text-6xl md:text-8xl ${currentTheme.fonts.heading} tracking-tight`}>
            VOYAGEVISTA
          </h1>
          <p className="text-xl md:text-2xl tracking-wide" style={{ color: currentTheme.colors.secondary }}>
            CURATED TRAVEL EXPERIENCES
          </p>
          <div className="pt-8">
            <Link
              href="#search"
              className={`inline-block px-12 py-4 border-2 transition-all hover:bg-black hover:text-white ${currentTheme.fonts.body}`}
              style={{ borderColor: currentTheme.colors.text, color: currentTheme.colors.text }}
            >
              BEGIN YOUR JOURNEY
            </Link>
          </div>
        </div>
      </section>

      {/* Search */}
      <section id="search" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-20 px-8 border-t" style={{ borderColor: currentTheme.colors.accent }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-px" style={{ backgroundColor: currentTheme.colors.accent }}>
            {[
              { num: "01", title: "TOURS", desc: "Guided experiences" },
              { num: "02", title: "CRUISES", desc: "Ocean adventures" },
              { num: "03", title: "FAMILIES", desc: "Group travel" },
              { num: "04", title: "EVENTS", desc: "Special occasions" },
            ].map((item) => (
              <div key={item.num} className="p-12 space-y-4" style={{ backgroundColor: currentTheme.colors.bg }}>
                <div className={`text-6xl ${currentTheme.fonts.heading} opacity-30`}>{item.num}</div>
                <h3 className={`text-2xl ${currentTheme.fonts.heading} tracking-wider`}>{item.title}</h3>
                <p className="text-sm" style={{ color: currentTheme.colors.secondary }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Theme 4: Bold Adventure - Asymmetric, energetic layout
function BoldAsymmetricLayout() {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div style={{ backgroundColor: currentTheme.colors.bg, color: currentTheme.colors.text }}>
      {/* Asymmetric Hero */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left side - Text */}
          <div
            className="lg:w-2/3 p-12 lg:p-20 flex items-center"
            style={{ backgroundColor: currentTheme.colors.primary }}
          >
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 rounded-lg" style={{ backgroundColor: currentTheme.colors.secondary }}>
                <span className={`${currentTheme.fonts.body} text-xl`} style={{ color: currentTheme.colors.text }}>
                  ⚡ ADVENTURE AWAITS
                </span>
              </div>
              <h1 className={`text-5xl lg:text-7xl ${currentTheme.fonts.heading} leading-tight`}>
                EXPLORE<br />
                DREAM<br />
                DISCOVER
              </h1>
              <p className="text-xl lg:text-2xl max-w-2xl">
                The world is yours to explore. Start your next adventure today with VoyageVista Tours.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className={`px-8 py-4 text-xl ${currentTheme.fonts.body} transition-transform hover:scale-105`}
                  style={{ backgroundColor: currentTheme.colors.secondary, color: currentTheme.colors.text }}
                >
                  BOOK NOW →
                </button>
                <button
                  className={`px-8 py-4 text-xl border-4 ${currentTheme.fonts.body} transition-transform hover:scale-105`}
                  style={{ borderColor: currentTheme.colors.text, color: currentTheme.colors.text }}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Accent */}
          <div
            className="lg:w-1/3 min-h-[300px] lg:min-h-0 flex items-center justify-center p-12"
            style={{ backgroundColor: currentTheme.colors.accent }}
          >
            <div className="text-center space-y-6">
              <div className={`text-8xl ${currentTheme.fonts.heading}`}>🌍</div>
              <div className={`text-3xl ${currentTheme.fonts.heading}`} style={{ color: currentTheme.colors.bg }}>
                50+<br />COUNTRIES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar - Offset */}
      <section id="search" className="relative -mt-16 z-30 pb-20 px-4">
        <div className="max-w-6xl mx-auto transform lg:-rotate-1">
          <SearchBar />
        </div>
      </section>

      {/* Features - Diagonal Sections */}
      <section className="py-20 space-y-0">
        {[
          { bg: currentTheme.colors.secondary, icon: "🚀", title: "FAST BOOKING", desc: "Book in minutes" },
          { bg: currentTheme.colors.accent, icon: "💎", title: "PREMIUM SERVICE", desc: "5-star experiences" },
          { bg: currentTheme.colors.primary, icon: "🎉", title: "UNFORGETTABLE", desc: "Memories for life" },
        ].map((feature, i) => (
          <div
            key={i}
            className="py-16 px-8 transform lg:skew-y-2 hover:skew-y-0 transition-transform"
            style={{ backgroundColor: feature.bg }}
          >
            <div className="max-w-7xl mx-auto flex items-center gap-8 lg:skew-y-0">
              <div className="text-7xl">{feature.icon}</div>
              <div>
                <h3 className={`text-4xl ${currentTheme.fonts.heading} mb-2`} style={{ color: currentTheme.colors.text }}>
                  {feature.title}
                </h3>
                <p className="text-xl" style={{ color: currentTheme.colors.text }}>{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
