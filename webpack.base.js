const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: 'bundle.css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './src/statics'),
        to: path.resolve(__dirname, './public'),
      },
    ]),
  ],
};
