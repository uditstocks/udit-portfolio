import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mapped to CSS variables defined in globals.css (theme-aware)
        bg: "var(--bg-color)",
        surface: "var(--surface-color)",
        text: "var(--text-color)",
        muted: "var(--text-muted)",
        soft: "var(--text-soft)",
        border: "var(--border-color)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.02em",
      },
      borderRadius: {
        pill: "100px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
