import React, { Component } from 'react'
import FunComponent from './1_函数式组件'
import ClassComponent from "./2_类式组件";

export default class Components extends Component {
  render() {
    return (
      <div>
        <FunComponent />
        <ClassComponent />
      </div>
    );
  }
}

