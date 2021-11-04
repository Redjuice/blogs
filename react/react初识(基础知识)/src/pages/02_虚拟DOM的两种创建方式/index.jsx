import React from "react";

const VDom = () => {
  // 使用js创建虚拟DOM
  // const VDOM = React.createElement(
  //   "h1",
  //   { id: "title" },
  //   React.createElement("span", {}, "使用js创建虚拟DOM")
  // );

  // 使用jsx创建虚拟DOM
  const VDOM = (
    <h1 id="title">
      <span>使用jsx创建虚拟DOM</span>
    </h1>
  );

  // 虚拟DOM与真实DOM
  const TDOM = document.getElementById("root");
  console.log("真实DOM", TDOM);
  console.log("虚拟DOM", VDOM);
	// debugger;
  console.log("虚拟DOM的类型", typeof VDOM);
  console.log("虚拟DOM的类型是Object", VDOM instanceof Object);
  return VDOM;
};
export default VDom;
