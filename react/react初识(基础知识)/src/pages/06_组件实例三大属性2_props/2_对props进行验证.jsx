import React, { Component } from "react";
import PropTypes from "prop-types";

class Person extends Component {
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

// 对属性进行验证
Person.propTypes = {
  name: PropTypes.string.isRequired, // 限制name必传，且为字符串
  sex: PropTypes.string, // 限制sex为字符串
  age: PropTypes.number, // 限制age为数值
  speak: PropTypes.func, // 限制speak为函数
};

// 指定默认属性值
Person.defaultProps = {
  sex: "男",
  age: 18,
};

export default Person;
