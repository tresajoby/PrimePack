import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A66",
          dark: "#081D4A",
          light: "#1A3D7C",
        },
        gold: {
          DEFAULT: "#C9A15A",
          light: "#D4B06E",
          dark: "#B8903E",
        },
        "gray-light": "#F8F9FB",
      },
      fontFamily: {
        heading: ["Manrope", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
