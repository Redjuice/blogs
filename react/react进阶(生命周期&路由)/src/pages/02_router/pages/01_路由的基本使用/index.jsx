import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>路由的基本使用</h2>
        {/* 编写路由链接 */}
        <Link to="/01_home">home</Link> | <Link to="/01_about">about</Link>
        {/* 注册路由 */}
        <Route path="/01_home" component={Home} />
        <Route path="/01_about" component={About} />
      </div>
    );
  }
}
