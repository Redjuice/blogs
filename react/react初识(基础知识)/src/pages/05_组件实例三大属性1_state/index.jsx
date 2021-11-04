import React, { Component } from 'react'

import State1 from './1_state'
import State2 from "./2_state的简写方式";

export default class Home extends Component {

	render() {
		return (
      <div>
        <State1 />
        <State2 />
      </div>
    );
	}
}
