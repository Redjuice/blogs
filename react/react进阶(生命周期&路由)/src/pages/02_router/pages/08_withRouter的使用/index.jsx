import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";

class Header extends Component {
  handleClick = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div>
        <h2>withRouter的使用</h2>
        {/* 编写路由链接 */}
        <Link to="/home">home</Link> | <Link to="/about">about</Link>
        {/* 注册路由 */}
        <Route path="/home" render={() => <div>home</div>} />
        <Route path="/about" render={() => <div>about</div>} />
        <br />
        <button onClick={this.handleClick}>Go Home</button>
      </div>
    );
  }
}

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
export default withRouter(Header);
