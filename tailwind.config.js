module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC400",
        secondary: "#4567B7",
        accent: "#FF9900",
        background: "#F2F2F2",
        text: "#666666",
        black: "#000000",
        gray: {
          100: "#F7F7F7",
          200: "#E5E5E5",
          300: "#D3D3D3",
          400: "#B1B1B1",
          500: "#808080",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#1A1A1A",
        },
        blue: {
          100: "#ADD8E6",
          200: "#87CEEB",
          300: "#4682B4",
          400: "#4169E1",
          500: "#3498DB",
          600: "#2F4F7F",
          700: "#1A1D23",
          800: "#0A0D14",
          900: "#030303",
        },
      },
      opacity: {
        0: "0",
        100: "1",
      },
    },
  },
  plugins: [],
};