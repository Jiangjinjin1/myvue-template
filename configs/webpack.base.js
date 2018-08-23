const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const config = require('./config')

module.exports = {
  entry: {
    client: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json','.scss'],
    alias: {
      '~': path.join(__dirname, '../src'),
      '~components': path.join(__dirname, '../src/components')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        use: [{loader: 'eslint-loader', options: {
            formatter: require('eslint-friendly-formatter')
          }}],
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: [{loader:'file-loader', options: {
          //9kb以内的图片处理成base64字符串
          limit:8192,
          //指定拷贝文件的输出目录
          outputPath: 'images/'
        }}]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.png'),
      filename: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}
