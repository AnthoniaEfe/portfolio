// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        Vesta: {
          100: "7239A1",
          200: "#642598",
          300: "#550F8E",
          
          700: "#36025F",
          800: "#1F0738",
          900: "#170A25",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
