/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#4968a1',
        light: '#e0e9f2',
        scrollBehavior: ['responsive'],
      }
    },
  },
  plugins: [],
}

