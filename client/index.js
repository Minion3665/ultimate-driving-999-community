import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let buildNumber = 0.25;

console.log(
  "Welcome to the chromebot website. This is client build B." +
    buildNumber +
    "."
);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            render={() => {
              changeFavicon('/images/udc.png');
              return (
                <iframe is="x-frame-bypass" src="https://ud999.bubbleapps.io/" />
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
