import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        "background-soft": "#0D0D10",
        panel: "#131316",
        foreground: "#F5F5F5",
        "muted-foreground": "#9A9AA2",
        "accent-1": "#A855F7",
        "accent-2": "#EC4899",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #A855F7, #EC4899)",
      },
      boxShadow: {
        glow: "0 8px 30px rgba(168,85,247,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
