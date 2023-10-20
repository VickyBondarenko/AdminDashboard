/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      height: {
        screenMinusHeader: "calc(100vh - 93px)",
      },
      width: {
        screenMinusScroll: "calc(100vw - 18px)",
      },
      backgroundImage: {
        authPage_mob: "url('/src/assets/image/login-s-bg.png')",
        authPage_tab: "url('/src/assets/image/login-m-bg.png')",
        authPage_desc: "url('/src/assets/AuthPage/auth_back_desktop.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      colors: {
        accent: "#59B17A",
        mainText: "#1D1E21",
        lighterText: "#1D1E2166",
        whiteText: "#ffffff",
        borderLight: "#1D1E211A",
        mainBg: "#F7F8FA",
        iconGrey: "#DCDDDF",
        greenLight: "#E7F1ED",
        customOrange: "#F79042",
        lightOrange: "#F790421A",
        customRed: "#E85050",
        lightRed: "#E850501A",
        customGreen: "#59B17A",
        lightGreen: "#59B17A1A",
        customBlue: "#70A6E8",
        lightBlue: "#70A6E81A",
        customPurpule: "#8059E4",
        lightPurpule: "#8059E41A",
      },
      fontSize: {
        customXxs: ["12px", "14px"],
        customXs: ["12px", "18px"],
        customS: ["14px", "18px"],
        customMd: ["16px", "20px"],
        customMiddle: ["16px", "18px"],
        customLg: ["18px", "24px"],
        customXl: ["20px", "24px"],
        customXxl: ["24px", "28px"],
      },
    },
  },
  plugins: [],
};
