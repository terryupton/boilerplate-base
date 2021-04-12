module.exports = {
  presets: [
    require('tailwindcss/defaultConfig'),
    // require('./src/tailwind/tailwind.brand.js'),
    // require('./src/tailwind/tailwind.project.js'),
    require('./src/tailwind/tailwind.colors.js'),
    require('./src/tailwind/tailwind.spacing.js'),
    require('./src/tailwind/tailwind.opacity.js'),
    require('./src/tailwind/tailwind.zindex.js'),
    require('./src/tailwind/tailwind.grid.js')
  ],
  purge: {
    mode: 'all',
    content: [
      './templates/**/*.html',
      './templates/**/*.php',
      './src/**/*.js'
    ],
    
    options: {
      safelist: [/lazyload/, /grayscale-up/, /blur-up/],
    }
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  variants: {
    extend: {
      // display: ['group-hover']
      // translate: ['group-hover']
    }
  },
  corePlugins: {},
  plugins: []
};
