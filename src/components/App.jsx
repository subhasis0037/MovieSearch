import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../routes";
import Navigation from "./Navigation";
import { WishlistDataContextProvider} from "../context/WishlistDataContext";

const App = () => {
  return (
    <WishlistDataContextProvider>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </WishlistDataContextProvider>
  );
};
export default App;
