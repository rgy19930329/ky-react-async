# 组件 - HOCAsync

## 功能描述

> 根据环境类型，判断 组件按需加载还是同步加载

## 参数说明

## 组件使用

```javascript
import HOCAsyncAuto from "@components/HOCAsyncAuto";
import { Route } from "react-router-dom";

const AsyncPage = HOCAsync(() => import("@pages/async-page"));

<Route path="/async-page" component={AsyncPage} />
```