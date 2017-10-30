var webpack = require("webpack")
var def = require('./webpack.config.js')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

def.plugins.push(
  new CleanWebpackPlugin(['dist', '*bundle*']),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    },
  }),
  new CopyWebpackPlugin([{
    from: './assets',
    to: './assets'
  }])
)

module.exports = def