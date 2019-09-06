/**
 * @desc 页面 - System
 * @author rgy
 * @date 2019-08-09 14:55:20
 */

import "./index.less";
import React from "react";
import { Switch } from "antd";
import { connect } from "react-redux";
import { toggleAction } from "@stores/system/action";

const mapStateToProps = state => {
  return {
    isOpen: state.system.isOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => {
      dispatch(toggleAction)
    },
  }
}

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class System extends React.Component {

  constructor(props) {
    super(props);

    console.log(props)
  }

  componentDidMount() {

  }

  render() {
    const { isOpen } = this.props;
    return (
      <div className="page-system-wrapper">
        我是按需加载的路由页面 System
        <div>
          isOpen: {isOpen.toString()}
        </div>
        <div>
          <Switch
            checked={isOpen}
            checkedChildren="开"
            unCheckedChildren="关"
            onChange={(checked) => {
              this.props.onToggle();
            }}
          />
        </div>
      </div>
    )
  }
}
