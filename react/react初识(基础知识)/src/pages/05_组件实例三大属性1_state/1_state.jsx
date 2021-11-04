import React, { Component } from 'react';

export default class Weather extends Component {
  // 构造器调用几次？
  constructor(props) {
    console.log("constructor");
    super(props);
    // 初始化状态
    this.state = {
      isHot: false,
      wind: "微风",
    };
    // 解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this);
  }

  // render调用几次？
  render() {
    console.log("render");
    // 读取状态
    const { isHot, wind } = this.state;
    return (
      <h2 onClick={this.changeWeather}>
        今天天气很{isHot ? "炎热" : "凉爽"}, {wind}
      </h2>
    );
  }

  // hangeWeather调用几次？
  changeWeather() {
    // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined
    console.log(this);
    console.log("changeWeather");
    //获取原来的isHot值
    const isHot = this.state.isHot;
    // 状态(state)不可直接更改
    // this.state.isHot = !isHot;
    // 状态必须通过setState进行更新
    this.setState({ isHot: !isHot });
  }
}