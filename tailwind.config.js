/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'min-logo': "url('/assets/images/min-logo.png')",
        'logo': "url('/assets/images/logo.png')",
        'banner': "url('/assets/images/banner.png')",
        'banner-aux': "url('/assets/images/banner-aux.png')",
        'description-image-01': "url('/assets/images/description-image-01.png')",
        'description-image-02': "url('/assets/images/description-image-02.png')",
      },
    },
    colors: {
      primary: "#25D046",
      white: "#FFFFFF",
      black: "#455A64",
      grey: "#E9E9E9",
      green: "#23C552",
      red: "#F84F31",
      yellow: "#f8b231",
    }
  },
  plugins: [],
}

