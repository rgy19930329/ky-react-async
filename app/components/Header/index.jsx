/**
 * 头部组件
 * @author ranguangyu
 * @date 2018-11-25
 */

import "./index.less";
import React from "react";
import { Menu, Affix} from "antd";
import { withRouter } from "react-router";

const req = require.context("@pages", true, /\.jsx$/);
let navs = req.keys();
navs = navs.filter(item => {
	return item.match(/\.\/[^/]+\/[^/]+\.jsx$/);
}).map(item => item.replace(/^\.\//, "").replace(/\/[^/]+\.jsx$/, ""));

@withRouter
export default class Header extends React.Component {

	state = {
		current: this.props.location.pathname.slice(1) || "home",
	};

	render() {
		return (
			<Affix>
				<div className="comp-header-wrapper">
					<Menu
						onClick={(e) => this.setState({ current: e.key })}
						selectedKeys={[this.state.current]}
						mode="horizontal"
					>
						{navs && navs.map(item => {
							return (
								<Menu.Item key={item}>
									<a href={`#/${item}`}>{item}</a>
								</Menu.Item>
							)
						})}
					</Menu>
				</div>
			</Affix>
		)
	}
}
