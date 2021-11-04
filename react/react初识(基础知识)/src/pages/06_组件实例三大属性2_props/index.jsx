import React, { Component } from 'react'

import Props1 from './1_props基本使用'
import Props2 from './2_对props进行验证'
import Props3 from './3_props的简写方式'
import Props4 from './4_函数组件使用props'

const p = { name: "老王", age: 18, sex: "男" };

export default class Home extends Component {

	render() {
		return (
      <div>
        <h3>props基本使用</h3>
        <Props1 name="jerry" age={19} sex="男" />
        <Props1 name="tom" age={18} sex="女" />
        <Props1 {...p} />
        <hr />

        <h3>对props进行验证</h3>
        <Props2 name="老张" />
        <hr />

        <h3>props的简写方式</h3>
        <Props3 name="老李" />
        <hr />

        <h3>函数组件使用props</h3>
        <Props4 name="老赵" />
        <hr />
      </div>
    );
	}
}
