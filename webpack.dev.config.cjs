/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { name } = require('./package.json').name;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: name,
      template: 'src/index.hbs',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|tmx|tsx|json)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 8081,
    watchFiles: ['src/**/*.js', 'src/**/*.hbs', 'src/**/*.html'],
  },
};
