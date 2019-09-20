import HOCAsync from "@components/HOCAsync";

export default {
  path: "/list/detail",
  name: "系统配置-详情",
  component: HOCAsync(() => import("./index")),
}