import React, { Component } from "react";

export default class Demo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this;
    alert(
      `你输入的用户名是：${username.value},你输入的密码是：${password.value}`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名: <input name="username" ref={(e) => (this.username = e)} />
        密码:{" "}
        <input
          type="password"
          name="password"
          ref={(e) => (this.password = e)}
        />
        <button>登录</button>
      </form>
    );
  }
}
