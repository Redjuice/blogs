import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Demo01 from './pages/01_路由的基本使用';
import Demo02 from './pages/02_React路由组件和一般组件';
import Demo03 from './pages/03_NavLike的使用';
import Demo04 from './pages/04_Swith的使用';
import Demo05 from './pages/05_嵌套路由的使用';
import Demo06 from './pages/06_向路由组件传递参数';
import Demo07 from './pages/07_编程式路由导航';
import Demo08 from './pages/08_withRouter的使用';
import Demo09 from './pages/09_useHistory的使用';

export default class Index extends Component {
  render() {
    return (
      // 最外侧使用<BrowserRouter>或<HashRouter>标签包裹
      <Router>
        <Demo01 />
        <Demo02 />
        <Demo03 />
        <Demo04 />
        <Demo05 />
        <Demo06 />
        <Demo07 />
        <Demo08 />
        <Demo09 />
      </Router>
    );
  }
}
