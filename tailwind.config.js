const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1400px',
    },
    
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
    
    extend: {
      colors: {
        social: {
          'twitter': '#00ACED',
          'facebook': '#3B5998',
          'instagram': '#C13584',
          'linkedin': '#007BB6',
          'youtube': '#BB0000',
          'email': '#a0aec0'
        },
        
        file: {
          'doc': '#295595',
          'xls': '#207245',
          'ppt': '#ca4935',
          'pdf': '#FB3449',
        },
      },
      
      margin: {
        'flood': 'calc(50% - 50vw)'
      },
      
      minWidth: theme => ({
        ...theme('spacing'),
      }),
      
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
        '9xl': '100rem',
      },
      
      opacity: {
        '10': '0.10',
        '15': '0.15',
        '20': '0.20',
        '30': '0.30',
        '40': '0.40',
        '50': '0.50',
        '60': '0.60',
        '70': '0.70',
        '85': '0.85',
        '90': '0.90',
        '95': '0.95'
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
      },
      
      gridTemplateColumns: {
        'auto-fit-130': 'repeat(auto-fit, minmax(130px, 1fr))',
        'auto-fit-150': 'repeat(auto-fit, minmax(150px, 1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-400': 'repeat(auto-fit, minmax(400px, 1fr))',
        'auto-fit-600': 'repeat(auto-fit, minmax(600px, 1fr))',
      },
      
      gridColumnEnd: {
        '-1': '-1',
      },
      
      gridRowEnd: {
        '-1': '-1',
      },
    }
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/ui'),
  ]
};
