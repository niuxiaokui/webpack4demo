const os = require("os")
const webpack = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const utils = require("./utils")
const config = require("./config");
const srcPath = utils.resolve("src")

module.exports = {
  entry: utils.getEntries(),
  output: {
    path: utils.resolve(config.buildDire),
  },
  resolve: {
    alias: {
      "@": srcPath
    },
    extensions: [".js", ".vue"],
  },
  externals: [
    { _: "lodash" },
    /^(jquery|\$)$/i
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: [srcPath],
        loader: "vue-loader"
      },
      {
        test: /\.js[x]?$/,
        include: [srcPath],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happybabel'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        include: [srcPath],
        options: {
          limit: 102400,
          name: "[name].[hash:8].[ext]",
          outputPath: utils.assetsPath("images")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        include: [srcPath],
        options: {
          limit: 10,
          name: "[name].[hash:8].[ext]",
          outputPath: utils.assetsPath("media")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10,
          name: "[name].[hash:8].[ext]",
          outputPath: utils.assetsPath("fonts")
        }
      }
    ],
  },
  plugins: [
    ...utils.getHtmlWebpackPluginArray(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({// 定义全局变量
      "lodash": "lodash",
      "jQuery": "jQuery",
      "$": "jQuery",
      "moment": "moment",
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // 忽略国际化代码
    new CopyWebpackPlugin([
      {
        from: "static",
        to: utils.assetsPath("static"),
        ignore: ['.*']
      }
    ]),
    new HappyPack({
      id: 'happybabel',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      cache: true,
      verbose: true
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: { // 详细介绍 https://imweb.io/topic/5b66dd601402769b60847149
        default: false,
        commons: {
          chunks: "initial",
          priority: 10,
          minChunks: 2,
          name: "commons",
        },
        styles: {
          name: "styles",
          test: /\.(css|styl)$/,
          enforce: true,
          priority: 20,
          minChunks: 2,
          chunks: "all",
        },
      },
    }
  },
}
