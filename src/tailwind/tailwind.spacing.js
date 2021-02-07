const theme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      margin: {
        'flood': 'calc(50% - 50vw)'
      },
      
      minWidth: {
        ...theme('spacing'),
      },
      
      maxWidth: {
        ...theme('spacing'),
        '7xl': '80rem',
        '8xl': '90rem',
        '9xl': '100rem',
      },
    }
  }
};
