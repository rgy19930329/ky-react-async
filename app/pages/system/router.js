import HOCAsync from "@components/HOCAsync";

export default {
  path: "/system",
  name: "系统配置",
  component: HOCAsync(() => import("./index")),
}