import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    console.log("路由组件props", this.props);

    return (
      <div>
        我的Demo路由组件
      </div>
    )
  }
}
