import React, { Component } from "react";
import './index.css';

export default class Demo extends Component {
  listRef = React.createRef();

  state = { newsArr: [] };

  componentDidMount() {
    setInterval(() => {
      //获取原状态
      const { newsArr } = this.state;
      //模拟一条新闻
      const news = "新闻" + (newsArr.length + 1);
      //更新状态
      this.setState({ newsArr: [news, ...newsArr] });
    }, 1000);
  }

  getSnapshotBeforeUpdate() {
    return this.listRef.current.scrollHeight;
  }

  componentDidUpdate(preProps, preState, height) {
    this.listRef.current.scrollTop += this.listRef.current.scrollHeight - height;
  }

  render() {
    return (
      <div className="list" ref={this.listRef}>
        {this.state.newsArr.map((n, index) => {
          return (
            <div key={index} className="news">
              {n}
            </div>
          );
        })}
      </div>
    );
  }
}
