import HOCAsync from "@components/HOCAsync";

export default {
  path: "/test",
  name: "测试",
  component: HOCAsync(() => import("./index")),
}