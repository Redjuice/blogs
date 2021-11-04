import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <h2>Swith的使用</h2>
        {/* 编写路由链接 */}
        <Link to="/04_home">home</Link> | <Link to="/04_about">about</Link>
        {/* 注册路由 */}
        <Switch>
          <Route path="/04_home" render={() => <div>页面一</div>} />
          <Route path="/04_home" render={() => <div>页面二</div>} />
          <Route path="/04_about" render={() => <div>页面三</div>} />
        </Switch>
      </div>
    );
  }
}
