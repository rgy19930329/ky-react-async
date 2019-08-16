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

### 步骤1

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

配置 devServer

```js
webpackConfig.devServer = {
  ...
  hot: true,
};
```

用这种方法，就可以不用在启动 webpack-dev-server 时添加参数 --hot

```json
"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server",
},
```

### 步骤2

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

### 步骤3

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


## 升级 使用 react-hot-loader 进行热加载

> 问题描述：使用了 webpack-dev-server 热更新之后，会发现页面的数据状态全部被重置了，有什么办法能够解决这个问题呢。答案便是引入 react-hot-loader 进行热加载。

### 步骤1

安装插件 react-hot-loader

```
npm install react-hot-loader --save-dev
```

### 步骤2

在 webpack.config.js 的 entry 值里加上 react-hot-loader/patch，一定要写在 entry 的最前面，如果有 babel-polyfill 就写在 babel-polyfill 的后面。

```js
entry: [
  'babel-polyfill',
  isDev && 'react-hot-loader/patch',
  path.resolve(__dirname, './app/app.js'),
],
```

### 步骤3

在 .babelrc 里添加 plugin

```json
"plugins": [
  ...
  "react-hot-loader/babel"
]
```

### 步骤4

修改入口文件

#### 方法1

```js
import "./global.less";
import React from "react";
import { render } from "react-dom";
import App from "./pages/index";

render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
```

#### 方法2

```js
import "./global.less";
import React from "react";
import { render } from "react-dom";
import App from "./pages/index";
import { AppContainer } from "react-hot-loader"; // 敲黑板

const toRender = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
  );
}

toRender(App);

if (module.hot) {
  module.hot.accept("./pages/index", () => {
    // 这里要用require方式引入，直接toRender(App) 不生效
    toRender(require("./pages/index").default);
  });
}
```

以上两种方案都能实现，当然第一种更简单

> 1.这里还有个坑，暂时还没解决，就是第一次改变的时候“数据状态”依然会被重置，后续修改就不会了。这个问题暂时还没找到解决方案。

> 2.还有个需要注意的地方，同步引入组件才可以局部热加载成功，异步加载的不行。
