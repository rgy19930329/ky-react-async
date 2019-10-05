/**
 * @desc 页面 - Test
 * @author rgy
 * @date 2019-10-05 16:18:26
 */

import "./index.less";
import React from "react";

export default class Test extends React.Component {

  constructor(props) {
    super(props);

    this.name = "Test";
  }

  componentDidMount() {

  }
  
  handleClick1 = () => {
    alert(this.name);
  }

  render() {
    return (
      <div className="page-test-wrapper">
        <button onClick={this.handleClick1}>click 1</button>
      </div>
    )
  }
}
