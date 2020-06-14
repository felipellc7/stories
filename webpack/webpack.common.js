const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpack = new HtmlWebpackPlugin({
  template: './assets/index.template.html',
  filename: './index.html'
})

module.exports = {
  entry: './assets/javascript/entry.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname , '..'),
    filename: 'dist/javascript/bundle.js'
  },
  plugins: [htmlWebpack],
  module: {
    rules: [
      
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      },
    ]
  }
}