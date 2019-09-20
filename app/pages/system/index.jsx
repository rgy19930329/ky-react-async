/**
 * @desc 页面 - System
 * @author rgy
 * @date 2019-08-09 14:55:20
 */

import "./index.less";
import React from "react";

export default class System extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-system-wrapper">
        我是按需加载的路由页面 System
      </div>
    )
  }
}
