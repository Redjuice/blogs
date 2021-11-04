import React, { Component } from "react";
import Count from './components/Count';
import Demo from './components/Demo';

export default class Lifecycle extends Component {
  render() {
    
    return (
      <div>
        <Count count="199" />
        <br />
        <Demo />
      </div>
    );
  }
}
