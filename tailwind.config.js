/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      backgroundImage: {
        "feature2-img": "url('assets/feature-section-2BG.svg')",
        cardBgImg: "url('assets/instant-settlement-bg.svg')",
        cardBgImgHover: "url('assets/instant-settlement-bghover.svg')",
        coreFeatureImg: "url('assets/core-features-sectionBg.svg')",
        cta: "url('assets/CTABg.svg')",
      },
    },
  },
  plugins: [],
};
