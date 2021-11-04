import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>NavLike的使用</h2>
        {/* 编写路由链接 */}
        <NavLink activeClassName="activated" to="/03_home">
          home
        </NavLink>
        |
        <NavLink
          activeStyle={{ background: "red", color: "#fff" }}
          to="/03_about"
        >
          about
        </NavLink>
        {/* 注册路由 */}
        <Route path="/03_home" component={Home} />
        <Route path="/03_about" component={About} />
      </div>
    );
  }
}
