import React, { Component } from "react";
// 引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

// 定义UI组件
class Count extends Component {
  state = { carName: "奔驰c63" };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(Number(value));
  };
  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.dencrement(Number(value));
  };
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(Number(value));
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(Number(value), 500);
  };

  render() {
    // console.log('UI组件接收到的props是',this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  (state) => ({ count: state }),

  // mapDispatchToProps的一般写法
  /* dispatch => ({
		increment:number => dispatch(createIncrementAction(number)),
		dencrement:number => dispatch(createDecrementAction(number)),
		incrementAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}) */

  //mapDispatchToProps的简写
  {
    increment: createIncrementAction,
    dencrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(Count);
