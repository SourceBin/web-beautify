/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = (_, argv) => {
  const prod = argv.mode === 'production';

  return {
    entry: './src/index',
    mode: 'development',
    devtool: prod ? false : 'eval',

    output: {
      filename: '[name].js',
      chunkFilename: '[name].[contenthash].js',

      library: 'webBeautify',
      libraryTarget: 'umd',
      globalObject: 'this',

      publicPath: prod ? '' : '../dist/',
      path: path.resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.js'],
    },

    externals: [
      '@microsoft/typescript-etw', // hide warning about missing optional dependency
    ],
  };
};
