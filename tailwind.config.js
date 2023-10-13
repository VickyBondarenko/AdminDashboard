/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#59B17A",
        mainText: "#1D1E21",
        lighterText: "#1D1E2166",
        whiteText: "#ffffff",
        borderLight: "#1D1E211A",
        mainBg: "#F7F8FA",
      },
    },
  },
  plugins: [],
};
