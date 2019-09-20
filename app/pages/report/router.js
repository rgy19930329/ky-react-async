import HOCAsync from "@components/HOCAsync";

export default {
  path: "/report",
  name: "报表",
  component: HOCAsync(() => import("./index")),
}