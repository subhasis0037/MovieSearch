import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../routes";
import Navigation from "./Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initializer");
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Routes />
      </Router>
    );
  }
}
export default App;
