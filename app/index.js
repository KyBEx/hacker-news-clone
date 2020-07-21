import React from "react";
import ReactDOM from "react-dom";
import { Nav, Top, New } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/new" component={New} />
          <Route render={() => <h1>404 not found!!!</h1>} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
