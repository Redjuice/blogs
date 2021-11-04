import React, { Component } from "react";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameRef.value;
    const age = this.ageRef.value;
    this.props.addPersonAction({ id: +new Date(), name, age });
    this.nameRef.value = "";
    this.ageRef.value = "";
  };
  render() {
    const { persons } = this.props;
    return (
      <div>
        <h1>我是Person组件, Count组件的值为: {this.props.count}</h1>
        <input ref={(e) => (this.nameRef = e)} placeholder="输入姓名" /> &nbsp;
        <input ref={(e) => (this.ageRef = e)} placeholder="输入年龄" /> &nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {persons.map((item) => {
            return (
              <li key={item.id}>
                {item.name}-{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({ count: state.count, persons: state.persons }),
  { addPersonAction }
)(Person);
