import { Link, Route, useHistory } from "react-router-dom";
function HomeButton() {
  const history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <div>
      <h2>useHistory的使用</h2>
      {/* 编写路由链接 */}
      <Link to="/home">home</Link> | <Link to="/about">about</Link>
      {/* 注册路由 */}
      <Route path="/home" render={() => <div>home</div>} />
      <Route path="/about" render={() => <div>about</div>} />
      <br />
      <button type="button" onClick={handleClick}>
        Go Home
      </button>
    </div>
  );
}

export default HomeButton;
