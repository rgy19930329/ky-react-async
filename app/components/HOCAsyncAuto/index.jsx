/**
 * @desc 组件 - HOCAsyncAuto
 * @author rgy
 * @date 2019-08-16 11:52:38
 */

import React from "react";
import HOCAsync from "@components/HOCAsync";

// export default path => HOCAsync(() => import(path));

export default function(path) {
  return HOCAsync(() => import(path));
}
