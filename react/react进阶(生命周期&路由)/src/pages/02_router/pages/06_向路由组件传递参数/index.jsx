import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>向路由组件传递参数</h2>
        {/* 编写路由链接 */}
        <Link to="/06_home">home</Link> | <Link to="/06_about">about</Link>
        {/* 注册路由 */}
        <Route path="/06_home" component={Home} />
        <Route path="/06_about" render={() => <div>页面二</div>} />
      </div>
    );
  }
}
