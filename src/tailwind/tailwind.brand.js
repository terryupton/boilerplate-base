// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Brand Config for TailwindCSS
// Use this file to establish brand specific config, this typically extends to the colours and fonts.
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

const colors = require('tailwindcss/colors');

module.exports = {
  presets: [],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: [''],
      brand: [],
    },
    
    extend: {
      colors: {
        // Extends one of new TailwindCSS colour schemes
        // lightblue: colors.lightBlue,
        
        // Example of a brand specific colour
        // 'pink': {
        //   50: '#fff5f9',
        //   100: '#FCE1ED',
        //   200: '#F9B6D2',
        //   300: '#F58BB8',
        //   400: '#F2619E',
        //   500: '#ee3684',
        //   600: '#D83379',
        //   700: '#C1306D',
        //   800: '#631832',
        //   900: '#962857',
        // },
      },
    }
  }
};
