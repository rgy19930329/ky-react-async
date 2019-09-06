/**
 * @desc 页面 - Report
 * @author rgy
 * @date 2019-08-09 17:31:25
 */

import "./index.less";
import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { increaseAction, decreaseAction } from "@stores/report/action";

const mapStateToProps = state => {
  return {
    count: state.report.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrease: () => {
      dispatch(increaseAction)
    },
    onDecrease: () => {
      dispatch(decreaseAction)
    }
  }
}

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class Report extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { count, onIncrease, onDecrease } = this.props;
    return (
      <div className="page-report-wrapper">
        我是按需加载的路由页面 Report

        <div>
          <div>count: {count}</div>
          <Button style={{marginRight: 10}} onClick={onIncrease}>加</Button>
          <Button onClick={onDecrease}>减</Button>
        </div>
      </div>
    )
  }
}
