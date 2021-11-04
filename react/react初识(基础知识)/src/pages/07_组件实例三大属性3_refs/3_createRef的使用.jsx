import React, { Component } from "react";

export default class Demo extends Component {
  myRef = React.createRef();

  // 展示左侧输入框的数据
  showData = () => {
    console.log(this);
    alert(this.myRef.current.value);
  };

  // 通过event.target得到发生事件的DOM元素对象
  showData2 = (event) => {
    console.log(event.target);
  };

  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>
        &nbsp;
        <input
          onBlur={this.showData2}
          type="text"
          placeholder="失去焦点提示数据"
        />
      </div>
    );
  }
}
