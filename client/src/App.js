import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Result from "./pages/result/Result";
import Detail from "./pages/detail/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/result">
        <Result/>
      </Route>
      <Route path="/detail">
        <Detail/>
      </Route>
    </Switch>
  </Router>)
}

export default App;
