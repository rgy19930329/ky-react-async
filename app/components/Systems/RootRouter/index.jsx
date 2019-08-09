/**
 * 根路由组件
 * @author ranguangyu
 * @date 2019-01-31
 */

import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import HOCAsync from "@components/HOCAsync";
import NotFound from "@components/Systems/NotFound";

import Home from "@pages/home";

// tips: react-router v4 中取消了getComponent方法，现在用下面的方案实现组件的“按需加载”
const List = HOCAsync(() => import("@pages/list"));

@withRouter
class RootRouter extends React.Component {
  render() {
    const location = this.props.location;
    return (
      <Switch location={location}>
        <Route path="/list" component={List} />
        <Route path="/home" component={Home} />
        <Redirect from="/" exact={true} to="/home" />
        <Route path="*" component={NotFound} />
      </Switch>
    )
  }
}

export default RootRouter;