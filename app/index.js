import React from "react";
import ReactDOM from "react-dom";
import { Nav, Top, New, User, Post } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./context/Theme";
import "./index.css";

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
      }));
    },
  };

  render() {
    console.log("this.state", this.state);
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={`container ${this.state.theme}`}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Top} />
              <Route exact path="/new" component={New} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/user" component={User} />
              <Route render={() => <h1>404 not found!!!</h1>} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
