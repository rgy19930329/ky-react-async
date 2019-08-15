# ky-react-async

页面组件按需加载

## Project setup
```
npm install --verbose
```

## Development
```
npm run dev

http://127.0.0.1:9999/
```

## Build
```
npm run build

npm run build:prod

本地演示打包效果(在根目录下找到dist目录，进入并执行如下命令，前提保证已安装http-server)：
http-server -c-1 -o -P https://easy-mock.com/mock/5ad07a89909da41e79f4a8a3

或者直接在根目录下执行：(已在package.json中配置好快捷命令)
npm run http-server
```

## 干货 webpack-dev-server 热更新

> 问题描述：webpack-dev-server 如何实现 dev环境下 修改 js,jsx,less 时进行热更新（不刷新浏览器）

### 第一点

> 要点：修改 webpack 配置

#### 方法1

配置 plugins

```js
if(isDev) {
  webpackConfig.plugins.push(
    new webpack.NamedModulesPlugin(),
  );
}
```

修改package.json 中 webpack-dev-server 启动脚本，主要是添加 --hot

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --hot",
},
```

#### 方法2

配置 plugins

```js
if(isDev) {
  webpackConfig.plugins.push(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  );
}
```

用这种方法，就可以不用在启动 webpack-dev-server 时添加参数 --hot

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server",
},
```

### 第二点

> 要点：修改入口文件

在入口文件中添加如下代码：

```js
if (module.hot) {
  module.hot.accept();
}
```

demo

```js
import "./global.less";
import React from "react";
import { render } from "react-dom";
import App from "./pages/index";

render(<App /> , document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
```

### 第三点

> 要点：本地开发时停用 插件 ExtractTextPlugin (extract-text-webpack-plugin)

如果有使用到 webpack 插件 extract-text-webpack-plugin，需在开发模式下停用它

```js
plugins: [
  ...
  new ExtractTextPlugin({
    filename: '[name].css',
    disable: isDev ? true : false,
  }),
]
```

以上便是实现 webpack-dev-server 热更新的几个重点坑，填上之后就可以愉快的玩耍了。
