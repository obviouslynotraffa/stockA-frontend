/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "flag-color": "#009933"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'card': "url('assets/images/utils/thumbnail-background.svg')",
        'hero': "url('assets/images/utils/HeroImg.png')",
        'hamburger-menu': "url('assets/icons/utils/hamburger-menu.svg')",
        'close-menu': "url('assets/icons/utils/close-menu.svg')",
        'black-logo': "url('assets/icons/branding/black-logo-company.png')",
        'white-logo': "url('assets/icons/branding/white-logo-company.png')",
        'star': "url('assets/icons/utils/star.svg')",
        'truck-fast': "url('assets/icons/utils/truck-fast.svg')",
        'support': "url('assets/icons/utils/support-icon.svg')",
        'shield': "url('assets/icons/utils/shield-tick.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}