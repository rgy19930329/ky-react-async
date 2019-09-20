/**
 * @desc 页面 - Detail
 * @author rgy
 * @date 2019-08-09 16:21:02
 */

import "./index.less";
import React from "react";

export default class Detail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-detail-wrapper">
        我是按需加载的路由页面 Detail
      </div>
    )
  }
}
