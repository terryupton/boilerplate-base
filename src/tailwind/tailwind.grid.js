module.exports = {
  theme: {
    extend: {
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
      }
    }
  }
};
