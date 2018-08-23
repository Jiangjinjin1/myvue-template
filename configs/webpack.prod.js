const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.base')

base.output.filename = 'js/[name].[chunkhash:8].js'
base.stats = { children: false }
base.optimization = {
  minimize: true,
  splitChunks: {
    chunks: 'all',
    name: 'common'
  },
  runtimeChunk: {
    name: 'runtime'
  }
}

// Plugins Configuration
base.plugins.push(
  new ProgressBarPlugin(),
  new MiniCssExtractPlugin({
    allChunks: true,
    filename: 'css/styles.[chunkhash:8].css'
  })
)

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    extractCSS: true,
    preserveWhitespace: false
  }
})

base.module.rules.push({
  test: /\.css$/,
  use: [
    {
      loader: process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      options: {
        publicPath: process.env.NODE_ENV !== 'development'?'../':'./'
      }
    },
    'css-loader',
    'postcss-loader'
  ]
})

module.exports = base
