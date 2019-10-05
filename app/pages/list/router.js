// tips: react-router v4 中取消了getComponent方法，现在用下面的方案实现组件的“按需加载”
import HOCAsync from "@components/HOCAsync";

export default {
  path: "/list",
  name: "列表页",
  component: HOCAsync(() => import("./index"))
}