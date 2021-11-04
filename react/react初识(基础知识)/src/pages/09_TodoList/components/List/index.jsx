import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import emitter from "../../Evt.js"
import './index.css'

export default class List extends Component {
  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  // 在组件挂载完成后声明一个自定义事件
  componentDidMount() {
    emitter.addListener("addTodo", (data) => {
			console.log(data);
		});
  }

  // 组件销毁前移除事件监听
  componentWillUnmount() {
    emitter.removeListener("addTodo", (data) => {
			console.log(data);
		});
  }
  // 订阅者

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}