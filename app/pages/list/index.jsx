/**
 * @desc 页面 - List
 * @author rgy
 * @date 2019-07-25 11:21:40
 */

import React from "react";
import { Button } from "antd";

export default class List extends React.Component {

  state = {
		count: 0,
	};

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page-list-wrapper">
        我是按需加载的路由页面哟 List {this.state.count}
        <div>
					<Button onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}>plus</Button>
				</div>
      </div>
    )
  }
}
