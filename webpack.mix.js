let settings = require("./settings.json");
let mix = require('laravel-mix');

//DO we need image and SVG minifcation?
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

// Do we need version control?
// require('laravel-mix-versionhash');

// Do we need Critical CSS?
// require('laravel-mix-criticalcss');


// Set the public path to resolve any potential issues with version.
mix.setPublicPath(settings.paths.build.base);
mix.postCss(settings.paths.src.css + 'style.pcss', settings.paths.build.css);

mix.js(settings.paths.src.js + 'index.js', settings.paths.build.js);
// mix.extract();

mix.browserSync({
  proxy: settings.urls.local,
  port: 8080,
  files: [
    settings.paths.tailwind.config,
    settings.paths.build.css + '{*,**/*}.css',
    settings.paths.build.js + '{*,**/*}.js',
    settings.paths.templates.base + '**/*.{html,php}',
  ]
});

//IMAGE and SVG MIN
// mix.webpackConfig({
//   plugins: [
//     new CopyWebpackPlugin({
//       patterns: [
//         {from: settings.paths.src.svg, to: settings.paths.build.svg},
//         {from: settings.paths.src.img, to: settings.paths.build.img}
//       ],
//     }),
//     new ImageminPlugin({
//       test: /\.(jpe?g|png|gif|svg)$/i,
//       svgo: {
//         plugins: [
//           {removeViewBox: false},
//           {removeDimensions: true},
//         ]
//       },
//       plugins:
//           [
//             imageminMozjpeg({
//               quality: 80,
//             })
//           ]
//     })
//   ]
// });

// CriticalCSS
// mix.criticalCss({
//   enabled: mix.inProduction(),
//   paths: {
//     base: settings.urls.criticalcss,
//     templates: settings.paths.templates.criticalcss
//   },
//   urls: [
//     {url: '', template: 'pages/home'},
//     {url: '/about', template: 'pages/about'},
//   ],
//   options: {
//     width: 1400,
//     height: 1200,
//     minify: true,
//     user: 'amasci',
//     pass: 'draft'
//   },
// });


// PRODUCTION BUILD
// if (mix.inProduction()) {
//   mix.versionHash();

//   // Clean Assets before rebuilding in production.
//   mix.webpackConfig({
//     plugins: [
//       new CleanWebpackPlugin({
//         cleanOnceBeforeBuildPatterns: settings.paths.build.clean,
//         dry: false,
//       })
//     ]
//   });
// }