import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameRef.value;
    const age = this.ageRef.value;
    const person = { id: nanoid(), name, age };
    this.props.addPerson(person);
    this.nameRef.value = "";
    this.ageRef.value = "";
  };

  render() {
    return (
      <div>
        <h1>我是Person组件, Count组件求和为{this.props.counts}</h1>
        <input
          ref={(e) => (this.nameRef = e)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(e) => (this.ageRef = e)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((item) => {
            return (
              <li key={item.id}>
                {item.name}--{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, counts: state.counts }), //映射状态
  { addPerson: createAddPersonAction } //映射操作状态的方法
)(Person);
