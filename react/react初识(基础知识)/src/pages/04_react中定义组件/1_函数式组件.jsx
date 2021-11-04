export default function MyComponent() {
  console.log("函数中的this:", this); // 此处的this是undefined，因为babel编译后开启了严格模式
  return <h3>我是用函数定义的组件(适用于【简单组件】的定义)</h3>;
}

/* 
函数组件解析步骤:
    1.React解析组件标签，找到了MyComponent组件。
    2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/
