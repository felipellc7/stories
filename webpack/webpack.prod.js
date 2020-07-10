const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: 'dist/css/[name].[hash].css'
})

module.exports = merge(common, {
  output: {
    publicPath: '.'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          // 'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          {loader: 'html-loader', options: {minimize: true}}
        ]
      }
    ]
  },
  plugins: [extractSass]
})