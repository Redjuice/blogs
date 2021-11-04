import React, { Component } from 'react'

import Form1 from "./1_非受控组件";
import Form2 from "./2_受控组件";

export default class Home extends Component {

	render() {
		return (
      <div>
        <h3>非受控组件</h3>
        <Form1 />
        <hr />

        <h3>受控组件</h3>
        <Form2 />
        <hr />
      </div>
    );
	}
}
