const theme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '36': '9rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '90': '22.5rem', //360px
        '92': '23rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem', //480px
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '150': '37.5rem', //600px
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',
        '164': '41rem',
        '168': '42rem',
        '170': '42.5rem', //680px
        '172': '43rem',
        '176': '44rem',
        '180': '45rem',
        '184': '46rem',
        '188': '47rem',
        '190': '48rem',
        '194': '49rem',
        '200': '50rem', //800px
      },
      
      margin: {
        'flood': 'calc(50% - 50vw)'
      },
      
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      
      maxWidth: (theme) => ({
        ...theme('spacing'),
        '7xl': '80rem',
        '8xl': '90rem',
        '9xl': '100rem',
      }),
    }
  }
};
