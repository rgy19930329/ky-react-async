/**
 * @desc 页面 - List
 * @author rgy
 * @date 2019-07-25 11:21:40
 */

import React from "react";
import { Button } from "antd";
import { Section } from "nice-ui";
import { connect } from "react-redux";
import { updateListAction } from "@stores/list/action";
import { fetch } from "@utils";

const mapStateToProps = state => {
  return {
    list: state.list.list,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateList: (params) => {
      dispatch(updateListAction(params));
    },
  }
}

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class List extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  componentDidMount() {
    this.dataLoad();
  }

  dataLoad = async () => {
    let result = await fetch({
      url: "/example/mock",
    });
    if(result.success) {
			const { projects } = result.data;
      this.props.updateList({ list: projects });
		}
  }

  render() {
    const { list } = this.props;
    return (
      <div className="page-list-wrapper">
        我是按需加载的路由页面哟 List
        <Section title="测试 redux action 带参数">
          {list.map(item => {
            return (
              <div key={item.id}>{item.name}</div>
            )
          })}
        </Section>
      </div>
    )
  }
}
