import "./styles.css";
import css from "./styles.module.css";

const styles = {
  color: "deepskyblue",
};

const hello = "Hello";
const text = "React";
const formatText = (text) => {
  return hello + " " + text;
};

const A = () => {
  return hello;
};
const B = () => {
  return text;
};
const C = (props) => {
	const show = props.show;
  if (show) return <A />;
  return <B />;
};
const D = (props) => {
	const show = props.show;
  if (!show) return null;
  return <C />;
};


const arrData = [
  <li key="1">Angular</li>,
  <li key="2">React</li>,
  <li key="3">Vue</li>,
];
const data = ["Angular", "React", "Vue"];

const Jsx = () => (
  <div>
    <h3>注释</h3>
    {/* 这里是注释 */}
    <hr />

    <h3>样式</h3>
    <p style={{ color: "red" }}>行内样式</p>
    <p className="title">引入样式</p>
    <p className={css.title}>CSS Modules</p>
    <p style={styles}>声明样式</p>
    <hr />

    <h3>JavaScript 表达式</h3>
    <p>数学运算: {1 - 1}</p>
    <p>函数表达式: {formatText(text)}</p>
    <hr />

    <h3>条件渲染</h3>
    <p>三元运算: {true ? <A /> : <B />}</p>
    <p>且运算: {<A /> && <B />}</p>
    <p>
      <C show={true} />
    </p>
    <p>
      阻止组件渲染: <D show={false} />
    </p>
    <hr />

    <h3>数组</h3>
    <ul>{arrData}</ul>
    <hr />

    <h3>循环</h3>
    <ul>
      {data.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
    <hr />
  </div>
);

export default Jsx;
