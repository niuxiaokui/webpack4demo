module.exports = {
  // 项目构建后存放的目录
  buildDire: "dist",
  // 资源目录
  assetsPath: "assets/",
  // 是否为统一模板 true：全部使用 src/index.html  false: 使用pages/*/index.html
  unifiedTemplate: false,
  // 是否开启gzip压缩
  gzip: true,

  // 开发环境
  host: "localhost",
  port: "8080",
  // 默认打开页
  index: 'index.html',
  // 代理
  proxy: {
    // '^/api/': {
    //   target: 'http://www.xxx.com/',
    //   pathRewrite: { '^/api': '' }
    // }
  },
  before(app) { // utils/http.js 中配置拦截器可以改变返回值
    app.post('/api/test', function (req, res) {
      if (req.headers.key === "test") {
        res.json({ success: true, code: 1, message: "请求成功" });
      } else {
        res.json({ success: false, code: 2, message: "缺少 key " });
      }
    });
  },

  // 生产环境
  publicPath: "https://niuxiaokui.github.io/webpack4demo/",
  // 是否开启分析
  analyzer: false,
};
