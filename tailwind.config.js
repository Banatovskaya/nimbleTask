/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: '1rem', 
        screens: {
          sm: '100%', 
          md: '100%', 
          lg: '100%', 
          xl: '1280px', 
        },
      },
    },
    colors: {
      'custom-gray-light': 'rgba(237, 237, 237, 1)',
      'custom-gray-dark': 'rgba(166, 166, 166, 1)',
    },
  },
  plugins: [],
}

