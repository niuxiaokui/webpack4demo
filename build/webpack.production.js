const webpack = require('webpack')
const merge = require("webpack-merge")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const baseConfig = require("./webpack.base")
const utils = require("./utils")
const config = require("./config")
const prodConfig = merge.smart(baseConfig, {
  output: {
    filename: utils.assetsPath('js/[name].[contenthash].js'),
    publicPath: config.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: config.publicPath }
          },
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: config.publicPath }
          },
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.BASEURL': JSON.stringify(config.publicPath),
    }),
    // 分离css
    new MiniCssExtractPlugin({
      filename: utils.assetsPath("css/[name].[contenthash:8].css")
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin(),
    // 显示进度条
    new ProgressBarPlugin({
      format: chalk.blue.bold('  进度 [:bar] :percent 耗时 :elapsed s')
    }),
  ],
  stats: {
    children: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
  },
})

config.analyzer && prodConfig.plugins.push(new BundleAnalyzerPlugin())
config.gzip && prodConfig.plugins.push(new CompressionWebpackPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: new RegExp('\\.(js|css)$'),
  threshold: 10240,
  minRatio: 0.8
}))

module.exports = prodConfig;
