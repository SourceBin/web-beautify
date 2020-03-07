/* eslint-env node */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'eval',

  output: {
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    library: 'webBeautify',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.worker.js$/,
        loader: 'worker-loader',
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
};
