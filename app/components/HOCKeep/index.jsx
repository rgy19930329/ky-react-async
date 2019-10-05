/**
 * @desc 组件 - HOCKeep
 * @author rgy
 * @date 2019-10-05 15:51:34
 */

import React from "react";

export default WrappedComponent => class extends React.Component {

  constructor(props) {
    super(props);

    this._href = window.location.href;
  }

  shouldComponentUpdate() {
    console.log(this._href, window.location.href);
    return this._href === window.location.href;
  }

  render() {
    return (
      <WrappedComponent {...this.props} />
    )
  }
}
