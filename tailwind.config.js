/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sp-orange': 'rgba(255, 141, 27, 1)',
        'sp-orange2': 'rgba(251, 146, 36, 1)',
        'sp-gray' : 'rgba(231, 231, 231, 1)',
        'sp-gray2' :'rgba(79, 79, 79, 1)',
        'sp-gray3' :'rgba(238, 238, 238, 1)',
      },
      boxShadow: {
        'co-input-1': '0px 2px 40px rgba(0, 0, 0, 0.1)',
        'sp-navbar': '0px 10px 10px rgba(0, 0, 0, 0.05',
        'sp-input': '0px 2px 40px rgba(0, 0, 0, 0.1)',
        'sp-navbar': '0px 10px 10px rgba(0, 0, 0, 0.05)',
      },
      fontSize: {
        spSize1: ['40px', {
          lineHeight: '51px',
        }],
        MainH1Size: ['50px', {
          lineHeight: '64px',
        }],
        contactSize: ['18px', {
          lineHeight: '23px',
        }],
        rentH1Size: ['35px', {
          lineHeight: '45px',
        }],
      }
    },
  },
  plugins: [],
}
