import { ThemeName } from "@/contexts/ThemeContext";

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    navBg: string;
    navText: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  layout: "stacked" | "sidebar" | "grid" | "asymmetric";
}

export const themes: Record<ThemeName, Theme> = {
  // Theme 1: Modern - Blue gradient, clean lines, stacked layout
  modern: {
    name: "Modern Ocean",
    colors: {
      primary: "rgb(14, 165, 233)", // sky-500
      secondary: "rgb(99, 102, 241)", // indigo-500
      accent: "rgb(236, 72, 153)", // pink-500
      bg: "rgb(248, 250, 252)", // slate-50
      text: "rgb(15, 23, 42)", // slate-900
      navBg: "rgb(255, 255, 255)",
      navText: "rgb(71, 85, 105)",
    },
    fonts: {
      heading: "font-sans",
      body: "font-sans",
    },
    layout: "stacked",
  },

  // Theme 2: Classic - Elegant serif, warm colors, sidebar layout
  classic: {
    name: "Classic Elegance",
    colors: {
      primary: "rgb(124, 58, 237)", // violet-600
      secondary: "rgb(168, 85, 247)", // purple-500
      accent: "rgb(251, 146, 60)", // orange-400
      bg: "rgb(254, 252, 232)", // yellow-50
      text: "rgb(71, 41, 22)", // stone-900
      navBg: "rgb(120, 53, 15)", // amber-900
      navText: "rgb(254, 252, 232)",
    },
    fonts: {
      heading: "font-serif",
      body: "font-serif",
    },
    layout: "sidebar",
  },

  // Theme 3: Minimal - Monochrome, lots of white space, grid layout
  minimal: {
    name: "Minimal Zen",
    colors: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(64, 64, 64)",
      accent: "rgb(156, 163, 175)", // gray-400
      bg: "rgb(255, 255, 255)",
      text: "rgb(0, 0, 0)",
      navBg: "rgb(255, 255, 255)",
      navText: "rgb(0, 0, 0)",
    },
    fonts: {
      heading: "font-mono",
      body: "font-sans",
    },
    layout: "grid",
  },

  // Theme 4: Bold - Vibrant colors, large text, asymmetric layout
  bold: {
    name: "Bold Adventure",
    colors: {
      primary: "rgb(220, 38, 38)", // red-600
      secondary: "rgb(234, 179, 8)", // yellow-500
      accent: "rgb(34, 197, 94)", // green-500
      bg: "rgb(17, 24, 39)", // gray-900
      text: "rgb(255, 255, 255)",
      navBg: "rgb(220, 38, 38)",
      navText: "rgb(255, 255, 255)",
    },
    fonts: {
      heading: "font-black",
      body: "font-bold",
    },
    layout: "asymmetric",
  },
};
