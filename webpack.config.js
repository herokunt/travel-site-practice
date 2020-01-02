const currentTask = process.env.npm_lifecycle_event;

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
  require('autoprefixer')
];

class RunAfterCompile{
  apply(compiler){
    compiler.hooks.done.tap('Copy images', function(){
      fse.copySync('./app/assets/images', './dist/assets/images');
    });
  }
};

let CSSConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false', { loader: 'postcss-loader', options: { plugins: postCSSPlugins }}]
};

let pages = fse.readdirSync('./app')
  .filter(file => file.endsWith('.html'))
  .map(page => new HTMLWebpackPlugin({ filename: page, template: `./app/${page}` }));

let config = {
  entry: './app/scripts/app.js',
  plugins: pages,
  module: {
    rules: [
      CSSConfig
    ]
  }
};

if(currentTask == 'dev'){
  config.mode = 'development';

  CSSConfig.use.unshift('style-loader');

  config.output = {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  };

  config.devServer = {
    before: function(app, server){
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    // host: '0.0.0.0'
  };

}

if(currentTask == 'build'){
  config.mode = 'production';

  config.entry = ['babel-polyfill', './app/scripts/app.js'];

  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  });

  CSSConfig.use.unshift(MiniCSSExtractPlugin.loader);
  postCSSPlugins.push(require('cssnano'));

  config.output = {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  };

  config.optimization = {
    splitChunks: { chunks: 'all' }
  };
  config.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({ filename: 'styles.[chunkhash].css' }),
    new RunAfterCompile()
  );
}

module.exports = config;
