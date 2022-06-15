/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'Comic Sans MS']
      },
      backgroundColor: {
        'lavender': "#ffd6ff",
        'ivory': "#f1faee",
        'lighterblue': "#90e0ef",
        'lightergreen': "#00f5d4",
        'lighterlavender': "#feeafa"
      },
      borderColor: {
        'lighterblue': "#90e0ef",
        'lavender': "#ffd6ff",
        'ivory': "#f1faee",
        'lighterlavender': "#feeafa",
        'lightergreen': "#00f5d4",


      }
    },
  },
  plugins: [
          require('@tailwindcss/forms')
  ],
}