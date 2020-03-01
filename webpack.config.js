/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = (_, argv) => ({
  entry: './src/index',
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[contenthash].js',
    publicPath: argv.mode === 'production' ? '' : '../dist/',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
});
