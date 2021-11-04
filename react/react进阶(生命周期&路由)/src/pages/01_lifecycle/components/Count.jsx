import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Count extends Component {
  // 1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
  //   1.	constructor()
  //   2.	getDerivedStateFromProps()
  //   3.	render()
  //   4.	componentDidMount() =====> 常用, 一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
  // 2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
  //   1.	getDerivedStateFromProps()
  //   2.	shouldComponentUpdate()
  //   3.	render()
  //   4.	getSnapshotBeforeUpdate()
  //   5.	componentDidUpdate()
  // 3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
  //   1.	componentWillUnmount()  =====> 常用, 一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
  constructor(props) {
    console.log("Count---constructor");
    super(props);
    //初始化状态
    this.state = { count: 0 };
  }
  componentDidCatch = (error, info) => {
    console.log("Count---componentDidCatch", error, info);
  };

  // 按钮的回调
  add = () => {
    //获取原状态
    const { count } = this.state;
    // 更新状态
    this.setState({ count: count + 1 });
  };

  // 卸载组件按钮的回调
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  // 强制更新按钮的回调
  force = () => {
    this.forceUpdate();
  };

  // 若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  // getDerivedStateFromProps(props, state) {
  //   console.log("Count---getDerivedStateFromProps", props, state);
  // }
  static getDerivedStateFromProps(props, state) {
    console.log("Count---getDerivedStateFromProps", props, state);
    return null;
  }

  // 在更新之前获取快照
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("Count---getSnapshotBeforeUpdate", preProps, preState);
    return "快照的值";
  }

  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log("Count---componentDidMount");
  }

  // 组件将要卸载的钩子
  componentWillUnmount() {
    console.log("Count---componentWillUnmount");
  }

  // 控制组件更新的“阀门”
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Count---shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  // 组件更新完毕的钩子
  componentDidUpdate(preProps, preState, snapshotValue) {
    console.log(
      "Count---componentDidUpdate",
      preProps,
      preState,
      snapshotValue
    );
  }

  render() {
    console.log("Count---render");
    const { count } = this.state;
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}>卸载组件</button>
        <button onClick={this.force}>
          不更改任何状态中的数据，强制更新一下
        </button>
      </div>
    );
  }
}
