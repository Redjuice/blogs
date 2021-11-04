import React, { Component } from "react";
import MyNavLink from "../../../../components/MyNavLink";
import { Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import Message from "./Message";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>我是Home的内容</div>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/06_home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/06_home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/06_home/news" component={News} />
            <Route path="/06_home/message" component={Message} />
            <Redirect to="/06_home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
