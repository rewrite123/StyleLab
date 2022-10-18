const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV||'development',
  entry: {
    'style-lab': './src/StyleLab.ts',
    'style-lab': './src/index.scss',
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
      //   type: 'asset/resource',
      // },
    ]
  },
  devtool: process.env.NODE_ENV=='production' ? undefined : 'source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    process.env.NODE_ENV=='production'?
      ()=>{} // Do nothing if this is prod
      : new CopyPlugin({ // Go ahead and include the index.html file cause you are prob testing
        patterns: [
          { from: 'public' }
        ]
      }),
    // new FixStyleOnlyEntriesPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};