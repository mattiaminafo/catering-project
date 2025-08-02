/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B85C38",
          dark: "#8C3B24", 
          light: "#E7A184",
        },
        accent: "#F7D060",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        chef: {
          "primary": "#B85C38",
          "secondary": "#F7D060", 
          "accent": "#84A59D",
          "neutral": "#3D405B",
          "base-100": "#FFFFFF",
          "base-200": "#F8F9FA",
          "base-300": "#E9ECEF",
        },
      },
    ],
  },
};