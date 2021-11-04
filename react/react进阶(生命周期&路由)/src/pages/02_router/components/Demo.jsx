import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    console.log("一般组件props", this.props);

    return (
      <div>
        我的Demo一般组件
      </div>
    )
  }
}
