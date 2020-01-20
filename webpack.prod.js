const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer'),
  require('cssnano')
];

class RunAfterCompile{
  apply(compiler){
    compiler.hooks.done.tap('Copy images', function(){
      fse.copySync('./app/assets/images', './docs/assets/images');
    });
  }
};

const HTMLPages = fse.readdirSync('./app')
  .filter(file => file.endsWith('.html'))
  .map(page => new HTMLWebpackPlugin({ filename: page, template: `./app/${page}` }));

module.exports = {
  mode: 'production',
  entry: ['babel-polyfill', './app/scripts/app.js'],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    ...HTMLPages,
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({ filename: 'styles.[chunkhash].css' }),
    new RunAfterCompile()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader?url=false', { loader: 'postcss-loader', options: { plugins: postCSSPlugins }}]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  }
};
