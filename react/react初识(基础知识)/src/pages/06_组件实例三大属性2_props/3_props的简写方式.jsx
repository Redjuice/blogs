import React, { Component } from "react";
import PropTypes from "prop-types";

class Person extends Component {
  // 对属性进行验证
  static propTypes = {
    name: PropTypes.string.isRequired, // 限制name必传，且为字符串
    sex: PropTypes.string, // 限制sex为字符串
    age: PropTypes.number, // 限制age为数值
  };
  // 指定默认属性值
  static defaultProps = {
    sex: "男",
    age: 18,
  };
  
  render() {
    const { name, age, sex } = this.props;
    // props是只读的
    // this.props.name = 'jack'
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    );
  }
}

export default Person;
