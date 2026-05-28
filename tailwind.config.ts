import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "next-bg":        "#F8F7F4",
        "next-bg-alt":    "#EEECEA",
        "next-bg-logo":   "#F0EEE9",
        "next-black":     "#0A0A0A",
        "next-border":    "#D0CEC8",
        "next-border-md": "#C8C6C0",
        "next-border-dk": "#2A2A2A",
        "next-border-xdk":"#1E1E1E",
        "next-text-1":    "#0A0A0A",
        "next-text-2":    "#555555",
        "next-text-3":    "#666666",
        "next-text-4":    "#888888",
        "next-text-5":    "#AAAAAA",
        "next-text-on-dk":"#F8F7F4",
        "next-text-dk-2": "#2A2A2A",
        "next-text-dk-3": "#444444",
        "next-gold":      "#C9A227",
        "next-blue":      "#2563EB",
        "next-dark-1":    "#111111",
        "next-dark-2":    "#161616",
        "next-dark-3":    "#1A1A1A",
        "next-dark-4":    "#0D0D0D",
        "next-dark-bar":  "#0A0A0A",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        "widest-2": "0.25em",
        "widest-3": "0.2em",
        "widest-4": "0.15em",
        "widest-5": "0.12em",
        "widest-6": "0.1em",
        "tight-1":  "-0.02em",
        "tight-2":  "-0.03em",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;