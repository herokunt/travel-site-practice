const path = require('path');
const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
];

module.exports = {
  entry: './app/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: { plugins: postCSSPlugins }}]
    }]
  }
}
