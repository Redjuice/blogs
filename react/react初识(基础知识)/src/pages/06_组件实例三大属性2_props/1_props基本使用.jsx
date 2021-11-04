import React, { Component } from "react";

export default class Person extends Component{
  state = {}
  render() {
    console.log(this);
    const { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    );
  }
}