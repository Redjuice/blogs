import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";

import HelloReact from "./pages/01_hello-react";
import VDOM from "./pages/02_虚拟DOM的两种创建方式";
import JSX from "./pages/03_jsx语法规则";
import Components from "./pages/04_react中定义组件";
import State from "./pages/05_组件实例三大属性1_state";
import Props from "./pages/06_组件实例三大属性2_props";
import Refs from "./pages/07_组件实例三大属性3_refs";
import Form from "./pages/08_react中收集表单数据";
import TodoList from "./pages/09_TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <MyNavLink to="/hello">HelloReact</MyNavLink>
              <MyNavLink to="/v-dom">VDOM</MyNavLink>
              <MyNavLink to="/jsx">JSX</MyNavLink>
              <MyNavLink to="/components">Components</MyNavLink>
              <MyNavLink to="/state">State</MyNavLink>
              <MyNavLink to="/props">Props</MyNavLink>
              <MyNavLink to="/refs">Refs</MyNavLink>
              <MyNavLink to="/form">Form</MyNavLink>
              <MyNavLink to="/todo-list">TodoList</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/hello" component={HelloReact} />
                  <Route path="/v-dom" component={VDOM} />
                  <Route path="/jsx" component={JSX} />
                  <Route path="/components" component={Components} />
                  <Route path="/state" component={State} />
                  <Route path="/props" component={Props} />
                  <Route path="/refs" component={Refs} />
                  <Route path="/form" component={Form} />
                  <Route path="/todo-list" component={TodoList} />
                  <Redirect to="/hello" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
