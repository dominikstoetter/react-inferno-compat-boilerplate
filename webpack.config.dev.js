'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = () => ({
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: ['./index.js'],
  resolve: {
    alias: {
      react: 'inferno-compat-context',
      'react-dom': 'inferno-compat-context',
      'react-redux': 'inferno-redux',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.test\.jsx?$/],
        use: ['cache-loader', 'babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|png|gif|svg)$/,
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
})
