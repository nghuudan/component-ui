const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    port: 3333,
  },

  entry: path.resolve('app'),

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
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  output: {
    filename: '[name].[chunkhash].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html'),
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
