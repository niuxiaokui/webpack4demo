const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const utils = require("./utils")
const config = require("./config")

module.exports = merge.smart(baseConfig, {
  output: {
    filename: utils.assetsPath('js/[name].[hash].js'),
    publicPath: `http://${config.host}:${config.port}/`,
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          "postcss-loader"
        ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          "postcss-loader",
          'stylus-loader'
        ],
      },
      {
        enforce: 'pre',
        test: /\.(vue|js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASEURL': JSON.stringify(`http://${config.host}:${config.port}/`),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    host: config.host ? config.host : 'localhost',
    port: config.port ? config.port : 9999,
    compress: config.gzip,
    open: true,
    openPage: config.index ? config.index : 'index.html',
    hot: true,
    inline: true,
    proxy: config.proxy,
    stats: {
      children: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
    },
    before: config.before,
  },
})
