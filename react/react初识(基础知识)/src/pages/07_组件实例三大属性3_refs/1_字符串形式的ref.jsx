import React, { Component } from "react";

export default class Demo extends Component {
  // 展示左侧输入框的数据
  showData = () => {
    console.log(this);
    const { input1 } = this.refs;
    alert(input1.value);
  };

  // 展示右侧输入框的数据
  showData2 = () => {
    console.log(this);
    const { input2 } = this.refs;
    alert(input2.value);
  };

  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据" />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>
        &nbsp;
        <input
          ref="input2"
          onBlur={this.showData2}
          type="text"
          placeholder="失去焦点提示数据"
        />
      </div>
    );
  }
}
