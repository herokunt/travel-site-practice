const path = require('path');

module.exports = {
  entry: './app/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true
}
