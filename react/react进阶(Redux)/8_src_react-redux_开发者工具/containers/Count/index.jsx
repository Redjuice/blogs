import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../../redux/actions/count";

class Count extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    this.props.incrementAction(Number(value));
  };
  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrementAction(Number(value));
  };
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = this.props.counts;
    if (count % 2 !== 0) {
      this.props.incrementAction(Number(value));
    }
  };
  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsyncAction(Number(value), 500);
  };

  render() {
    return (
      <div>
        <h1>我是Count组件, person组件的人数为: {this.props.personLength}</h1>
        <h2>当前求和为：{this.props.counts}</h2>
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

export default connect(
  (state) => ({
    counts: state.counts,
    personLength: state.persons.length,
  }),
  {
    incrementAction,
    decrementAction,
    incrementAsyncAction,
  }
)(Count);
