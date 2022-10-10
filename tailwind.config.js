/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sp-orange": "rgba(255, 141, 27, 1)",
        "sp-orange2": "rgba(251, 146, 36, 1)",
        "sp-orange3": "rgba(254, 141, 27, 1)",
        "sp-gray": "rgba(231, 231, 231, 1)",
        "sp-gray2": "rgba(79, 79, 79, 1)",
        "sp-gray3": "rgba(238, 238, 238, 1)",
      },
      boxShadow: {
        "co-input-1": "0px 2px 40px rgba(0, 0, 0, 0.1)",
        "sp-navbar": "0px 10px 10px rgba(0, 0, 0, 0.05)",
        "sp-input": "0px 2px 40px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        spSize1: [
          "40px",
          {
            lineHeight: "51px",
          },
        ],
        spSize2: [
          "20px",
          {
            lineHeight: "25px",
          },
        ],
        MainH1Size: [
          "50px",
          {
            lineHeight: "64px",
          },
        ],
        contactSize: [
          "18px",
          {
            lineHeight: "23px",
          },
        ],
        rentH1Size: [
          "35px",
          {
            lineHeight: "45px",
          },
        ],
      },
      animation: {
        "navbar-anim": "nav 0.5s ease-in-out ",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        nav: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
