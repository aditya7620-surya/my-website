import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090C",
        surface: {
          DEFAULT: "#111318",
          subtle: "#161922",
          card: "#12141A",
          elevated: "#1A1D26",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 38, 56, 0.35)",
        },
        crimson: {
          DEFAULT: "#FF2638",
          dark: "#D61526",
          light: "#FF5262",
          glow: "rgba(255, 38, 56, 0.28)",
          subtle: "rgba(255, 38, 56, 0.12)",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        "crimson-glow": "0 0 35px -5px rgba(255, 38, 56, 0.35)",
        "crimson-glow-sm": "0 0 18px -3px rgba(255, 38, 56, 0.3)",
        "crimson-glow-lg": "0 0 60px -10px rgba(255, 38, 56, 0.4)",
        "card-subtle": "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-1.5deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
