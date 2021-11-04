import React, { Component } from "react";

export default class Demo extends Component {
  // 展示左侧输入框的数据
  showData = () => {
    const { input1 } = this;
    alert(input1.value);
  };

  saveInput = (e) => {
    console.log("@", e);
    this.input2 = e;
  };

  // 展示右侧输入框的数据
  showData2 = () => {
    alert(this.input2.value);
  };

  render() {
    return (
      <div>
        <input
          ref={(e) => (this.input1 = e)}
          type="text"
          placeholder="点击按钮提示数据"
        />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>
        &nbsp;
        <input
          ref={this.saveInput}
          onBlur={this.showData2}
          type="text"
          placeholder="失去焦点提示数据"
        />
      </div>
    );
  }
}
