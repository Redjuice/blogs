import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import MyNavLink from "./components/MyNavLink";

import Lifecycle from "./pages/01_lifecycle";
import MyRouter from "./pages/02_router";

export default class App extends Component {
  render() {
    return (
      <div className="row" style={{ marginTop: "50px" }}>
        <Router>
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <MyNavLink to="/lifecycle">生命周期</MyNavLink>
              <MyNavLink to="/router">路由</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/lifecycle" component={Lifecycle} />
                  <Route path="/router" component={MyRouter} />

                  <Redirect to="/lifecycle" />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
