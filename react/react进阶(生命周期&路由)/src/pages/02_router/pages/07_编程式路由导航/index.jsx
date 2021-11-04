import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>编程式路由导航</h2>
        {/* 编写路由链接 */}
        <Link to="/07_home">home</Link> | <Link to="/07_about">about</Link>
        {/* 注册路由 */}
        <Route path="/07_home" component={Home} />
        <Route path="/07_about" render={() => <div>页面二</div>} />
      </div>
    );
  }
}
