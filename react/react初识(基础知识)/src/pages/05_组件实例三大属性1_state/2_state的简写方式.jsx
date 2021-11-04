import React, { Component } from "react";

export default class Weather extends Component {
  // 初始化状态
  state = {
    isHot: false,
    wind: "微风",
  };

  render() {
    const { isHot, wind } = this.state;
    return (
      <h2 onClick={this.changeWeather}>
        今天天气很{isHot ? "炎热" : "凉爽"}, {wind}
      </h2>
    );
  }

  changeWeather = () => {
    const isHot = this.state.isHot;
    this.setState({ isHot: !isHot });
  }
}
