"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { themes } from "@/config/themes";
import type { ThemeName } from "@/contexts/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeSwitcher, setShowThemeSwitcher] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentTheme = themes[theme];

  const themeOptions: { value: ThemeName; icon: string }[] = [
    { value: "modern", icon: "🌊" },
    { value: "classic", icon: "🏛️" },
    { value: "minimal", icon: "⚪" },
    { value: "bold", icon: "🔥" },
  ];

  return (
    <nav
      className="shadow-sm sticky top-0 z-50 border-b"
      style={{
        backgroundColor: currentTheme.colors.navBg,
        color: currentTheme.colors.navText,
        borderColor: theme === "minimal" ? currentTheme.colors.text : "rgba(0,0,0,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: currentTheme.colors.primary }}
              >
                <span className="font-bold text-xl" style={{ color: theme === "bold" ? currentTheme.colors.text : "white" }}>
                  V
                </span>
              </div>
              <span
                className={`text-xl font-bold ${currentTheme.fonts.heading}`}
                style={{ color: theme === "classic" || theme === "bold" ? currentTheme.colors.navText : currentTheme.colors.primary }}
              >
                VoyageVista Tours
              </span>
            </Link>
          </div>

          {/* Desktop Menu with Theme Switcher */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center space-x-1">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: currentTheme.colors.navText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === "bold" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Home
              </Link>
              <Link
                href="/search"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: currentTheme.colors.navText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === "bold" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Search Tours
              </Link>
              <Link
                href="/cruises/europe"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: currentTheme.colors.navText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === "bold" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Europe Cruises
              </Link>
              <Link
                href="/cruises/asia"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: currentTheme.colors.navText }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme === "bold" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Asia Cruises
              </Link>
            </div>

            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  backgroundColor: currentTheme.colors.primary,
                  color: theme === "bold" ? currentTheme.colors.text : "white",
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                Theme: {currentTheme.name}
              </button>

              {showThemeSwitcher && (
                <div
                  className="absolute right-0 mt-2 w-64 rounded-lg shadow-2xl border overflow-hidden"
                  style={{
                    backgroundColor: currentTheme.colors.navBg,
                    borderColor: "rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="p-2">
                    <p className="text-xs font-semibold uppercase tracking-wide px-3 py-2 opacity-60">Select Theme</p>
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value);
                          setShowThemeSwitcher(false);
                        }}
                        className="w-full text-left px-3 py-3 rounded-md transition-all flex items-center gap-3"
                        style={{
                          backgroundColor: theme === option.value ? currentTheme.colors.primary : "transparent",
                          color: theme === option.value ? (theme === "bold" ? currentTheme.colors.text : "white") : currentTheme.colors.navText,
                        }}
                        onMouseEnter={(e) => {
                          if (theme !== option.value) {
                            e.currentTarget.style.backgroundColor = theme === "bold" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (theme !== option.value) {
                            e.currentTarget.style.backgroundColor = "transparent";
                          }
                        }}
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <div className="font-semibold">{themes[option.value].name}</div>
                          <div className="text-xs opacity-70 capitalize">{option.value} layout</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Theme Switcher */}
            <button
              onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
              className="p-2 rounded-lg"
              style={{ color: currentTheme.colors.navText }}
              aria-label="Change theme"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              style={{ color: currentTheme.colors.navText }}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Theme Switcher Dropdown */}
      {showThemeSwitcher && (
        <div className="lg:hidden border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          <div className="px-4 py-3 space-y-2">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setShowThemeSwitcher(false);
                }}
                className="w-full text-left px-4 py-3 rounded-md transition-all flex items-center gap-3"
                style={{
                  backgroundColor: theme === option.value ? currentTheme.colors.primary : "rgba(0,0,0,0.05)",
                  color: theme === option.value ? (theme === "bold" ? currentTheme.colors.text : "white") : currentTheme.colors.navText,
                }}
              >
                <span className="text-2xl">{option.icon}</span>
                <div>
                  <div className="font-semibold">{themes[option.value].name}</div>
                  <div className="text-xs opacity-70">{themes[option.value].layout} layout</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 rounded-md font-medium transition-colors"
              style={{ color: currentTheme.colors.navText }}
            >
              Home
            </Link>
            <Link
              href="/search"
              className="block px-4 py-3 rounded-md font-medium transition-colors"
              style={{ color: currentTheme.colors.navText }}
            >
              Search Tours
            </Link>
            <Link
              href="/cruises/europe"
              className="block px-4 py-3 rounded-md font-medium transition-colors"
              style={{ color: currentTheme.colors.navText }}
            >
              Europe Cruises
            </Link>
            <Link
              href="/cruises/asia"
              className="block px-4 py-3 rounded-md font-medium transition-colors"
              style={{ color: currentTheme.colors.navText }}
            >
              Asia Cruises
            </Link>
            <Link
              href="/trips/family"
              className="block px-4 py-3 rounded-md font-medium transition-colors"
              style={{ color: currentTheme.colors.navText }}
            >
              Family Trips
            </Link>
            <Link
              href="/trips/bachelor"
              className="block px-4 py-3 rounded-md font-medium transition-colors"
              style={{ color: currentTheme.colors.navText }}
            >
              Bachelor/Bachelorette
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
