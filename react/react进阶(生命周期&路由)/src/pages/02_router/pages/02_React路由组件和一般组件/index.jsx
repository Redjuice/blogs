import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import DemoPage from "./Demo";
import DemoComponent from "../../components/Demo";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>React路由组件和一般组件</h2>
        {/* 编写路由链接 */}
        <Link to="/02_demo">demo</Link>
        {/* 注册路由 */}
        <Route path="/02_demo" component={DemoPage} />
        <DemoComponent id="1" />
      </div>
    );
  }
}
