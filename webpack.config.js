const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  disable: process.env.NODE_ENV === 'development',
  filename: '[name].[hash].css',
});

module.exports = {
  devServer: {
    port: 3333,
  },

  entry: {
    docs: path.join(__dirname, 'src', 'app'),
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.scss$/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
            },
          }],
        }),
      },
    ],
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('docs'),
  },

  plugins: [
    extractSass,
    new CleanWebpackPlugin(['docs']),
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
