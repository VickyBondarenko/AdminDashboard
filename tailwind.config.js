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
      fontSize: {
        customXxs: ["12px", "14px"],
        customXs: ["12px", "18px"],
        // customSm: ["16px", "20px"],
        // customBase: ["24px", "24px"],
        // customBaseH1: ["24px", "28px"],
        // customLg: ["28px", "28px"],
        // customLgH1: ["28px", "30px"],
        // customXl: ["32px", "32px"],
        // customXxl: ["44px", "44px"],
      },
    },
  },
  plugins: [],
};
