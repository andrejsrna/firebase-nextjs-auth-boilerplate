// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Directory
    './components/**/*.{js,ts,jsx,tsx}', // Components Directory
    './pages/**/*.{js,ts,jsx,tsx}', // Pages Directory
    './lib/**/*.{js,ts,jsx,tsx}', // Library Directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
