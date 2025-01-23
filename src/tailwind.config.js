module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0056b3', // Existing blue color
          yellow: '#FFC400', // New yellow color
          red: '#FF0000', // New red color
        },
      },
    },
  },
  plugins: [],
}
