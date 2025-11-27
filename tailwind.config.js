/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/globals.css"
  ],

  // 🔥 REQUIRED — fixes your missing glow/sparkle animations
  safelist: [
    "animate-card",
    "animate-pulse-slow",
    "animate-sparkle",
    "animate-sparkle-delayed"
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f4c81",
          light: "#3f76aa",
          dark: "#083253",
        },
        accent: "#00b894",
      },
    },
  },

  plugins: [],
};