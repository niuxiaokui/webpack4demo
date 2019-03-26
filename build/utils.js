const fs = require("fs")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const config = require("./config");

// 返回绝对路径
const resolve = (p) => path.resolve(__dirname, "..", p);
const entryDir = resolve("src/pages");
const entryFiles = fs.readdirSync(entryDir);

// 静态资源存放路径
const assetsPath = function (_path) {
  return path.join(config.assetsPath, _path)
}

// 获取所有的入口文件
const getEntries = function () {
  const entry = {}
  entryFiles.map(file => {
    entry[file] = `${entryDir}/${file}/index.js`
  })
  return entry;
}

// 所有的页面
const getHtmlWebpackPluginArray = function () {
  return entryFiles.map(file => {
    return new HtmlWebpackPlugin({
      template: config.unifiedTemplate ? resolve('src/index.html') : resolve(`src/pages/${file}/index.html`),
      filename: `${file}.html`,
      favicon: 'src/favicon.ico',
      chunks: ['manifest', 'commons', 'styles', file],
      inject: 'body',
      minify: {
        removeComments: true,
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      }
    })
  })
}

module.exports = {
  resolve,
  assetsPath,
  getEntries,
  getHtmlWebpackPluginArray,
};
