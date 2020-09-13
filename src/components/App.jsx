import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../routes";
import Navigation from "./Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes />
    </Router>
  );
};
export default App;
