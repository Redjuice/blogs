import React, { Component } from "react";

import Refs1 from "./1_字符串形式的ref";
import Refs2 from "./2_回调函数形式的ref";
import Refs3 from "./3_createRef的使用";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>字符串形式的ref</h3>
        <Refs1 />
        <hr />

        <h3>回调函数形式的ref</h3>
        <Refs2 />
        <hr />

        <h3>createRef的使用</h3>
        <Refs3 />
        <hr />
      </div>
    );
  }
}
