import React, { Component } from "react";

export default class MyComponent extends React.Component {
  render() {
    // render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
    // render中的this是谁？—— MyComponent组件实例对象。
    console.log("render中的this:", this);
    return <h3>我是用类定义的组件(适用于【复杂组件】的定义)</h3>;
  }
  /* 
    类组件解析步骤:
        1.React解析组件标签，找到了MyComponent组件。
        2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
        3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
  */
}
