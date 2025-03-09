/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure correct paths
  theme: {
    extend: {
      colors: {
        primary: "#F57C00", // Custom orange color
        secondary: "#1E88E5", // Custom blue color
        customGray: {
          50: "#FAFAFA",
          100: "#F0F0F0",
          200: "#E0E0E0",
        },
        freshEggplant: {
          50: "#fff1fb",
          100: "#ffe2f9",
          200: "#ffc4f1",
          300: "#ff96e1",
          400: "#ff57d0",
          500: "#ff19c3",
          600: "#ff00d2",
          700: "#d600ae",
          800: "#ae008b",
          900: "#940273",
          950: "#62004d",
        },
      },
    },
  },
  plugins: [],
};
