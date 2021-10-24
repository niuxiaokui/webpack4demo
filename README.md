# 基于 Webpack4 和 Vue 的多页 + 单页混合应用脚手架

效果预览[webpack4demo](http://blog.niuxiaokui.top/webpack4demo/)

## 命令

1. 开发环境
```
npm run dev
```

2. 生产环境打包
```
npm run build
```

3. 生产环境打包并分析打包结果

webpack 参数配置文件`build/config.js` analyzer 属性设置为 true ，然后打包
```
npm run build
```

1. 打包后服务器环境预览
```
npm run server
```

## 项目结构

```
├── .gitignore
├── .babelrc
├── .eslintrc.js
├── .browserslistrc
├── README.md
├── LICENSE
├── package.json
├── postcss.config.js
├── webpack.config.js
├── build                           # webpack 配置文件
│   ├── config.js                   # 主要的配置参数在这里
│   ├── utils.js
│   ├── webpack.base.js
│   ├── webpack.development.js
│   └── webpack.production.js
├── src                             # 项目源代码
│   ├── favicon.ico                 # ico图标
│   ├── index.html                  # 多页统一模板
│   ├── assets                      # 通用字体图标、图片、媒体、样式
│   │   ├── iconfont
│   │   │   ├── iconfont.eot
│   │   │   ├── iconfont.svg
│   │   │   ├── iconfont.ttf
│   │   │   ├── iconfont.woff
│   │   │   └── iconfont.woff2
│   │   ├── images
│   │   │   ├── cat.jpg
│   │   │   └── logo.png
│   │   ├── media
│   │   └── style
│   │       ├── base.styl
│   │       ├── iconfont.styl
│   │       ├── index.styl
│   │       ├── mixins.styl
│   │       ├── resat.styl
│   │       └── varibles.styl
│   ├── components                  # 通用组件
│   │   └── template
│   │       └── template.vue
│   ├── pages                       # 多页目录
│   │   ├── home                    # 每个目录为一个页面，页面名与目录名一致，每个目录都可做单页应用
│   │   │   ├── index.html          # 非统一下的模板
│   │   │   ├── index.js            # 入口文件
│   │   │   ├── App.vue
│   │   │   ├── homeIndex
│   │   │   │   ├── HomeIndex.vue
│   │   │   │   └── index.styl
│   │   │   ├── homePage1
│   │   │   │   └── HomePage1.vue
│   │   │   ├── homePage2
│   │   │   │   └── HomePage2.vue
│   │   │   └── router.js
│   │   └── index
│   │       ├── App.vue
│   │       ├── index.html
│   │       ├── index.js
│   │       └── index.styl
│   └── utils                       # 通用方法 API 常量 字典项
│       └── http.js                 
└── static                          # 其他静态资源，直接复制
    └── LICENSE
```

## 其他说明
之前一直对 webpack 没能深入了解，趁着刚离职这几天有时间把它搞清楚。 demo 里基本的优化都有，但是没有使用 DllPlugin ，以后有时间再实践吧。常用的东西也都加上了，有些不伦不类，但是学习的目的达到了。
造的轮子不一定有用，但造轮子的学习效率是真的高。除了查询官网文档，更多的是研习大佬们的博客文章，感谢
