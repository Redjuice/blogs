import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    alert(
      `你输入的用户名是：${username},你输入的密码是：${password}`
    );
  };

  saveUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  savePassword = (e) => {
    this.setState({ password: e.target.value.replace(/\D/g, "") });
  };

  render() {
    const password = this.state.password;
    return (
      <form onSubmit={this.handleSubmit}>
        用户名: <input name="username" onChange={this.saveUsername} />
        密码:
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.savePassword}
        />
        <button>登录</button>
      </form>
    );
  }
}
