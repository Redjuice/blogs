import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>嵌套路由的使用</h2>
        {/* 编写路由链接 */}
        <Link to="/05_home">home</Link> | <Link to="/05_about">about</Link>
        {/* 注册路由 */}
        <Route path="/05_home" component={Home} />
        <Route path="/05_about" render={() => <div>页面二</div>} />
      </div>
    );
  }
}
